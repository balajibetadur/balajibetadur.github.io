class WorkerManagement:
    def __init__(self):
        """
        Initializes the WorkerManagement class with lists to store worker details, login/logout records,
        and pending promotions.
        """
        self.workers = []
        self.login_records = {}  # Dictionary to store login and logout records
        self.pending_promotions = {}  # Dictionary to store pending promotions

    def add_worker(self, name, role, compensation):
        """
        Adds a new worker to the workers list with their details.

        Parameters:
        name (str): The name of the worker.
        role (str): The role or job title of the worker.
        compensation (float): The compensation amount for the worker. It should be a non-negative number.

        Returns:
        str: 'success' if the worker is added successfully, 'invalid_request' if the worker already exists.
        """
        # Check if worker already exists
        if any(worker['name'] == name for worker in self.workers):
            return 'invalid_request'

        # Validate input types
        if not isinstance(name, str) or not isinstance(role, str):
            raise ValueError("Name and role must be strings.")
        if not isinstance(compensation, (int, float)) or compensation < 0:
            raise ValueError("Compensation must be a non-negative number.")

        # Create a dictionary to store worker details
        worker_details = {
            'name': name,
            'role': role,
            'compensation': compensation
        }

        # Add worker details to the list
        self.workers.append(worker_details)
        # Initialize login records for this worker
        self.login_records[name] = []

        return 'success'

    def register_worker(self, name, timestamp):
        """
        Registers a worker as logged in or out based on their current status.

        Parameters:
        name (str): The name of the worker.
        timestamp (int): The current timestamp for login or logout.

        Returns:
        str: 'success' if the registration is successful, 'invalid_request' if the worker does not exist.
        """
        # Check if the worker exists
        if not any(worker['name'] == name for worker in self.workers):
            return 'invalid_request'
        
        # Check the current status of the worker
        records = self.login_records[name]
        if records and records[-1]['logout'] is None:
            # If the worker is currently logged in, log them out
            records[-1]['logout'] = timestamp
            # Apply any pending promotions
            self._apply_pending_promotions(records[-1])
        else:
            # If the worker is not logged in, log them in
            records.append({'login': timestamp, 'logout': None, 'role': self._get_worker_role(name), 'compensation': self._get_worker_compensation(name)})

        return 'success'

    def _get_worker_role(self, name):
        """
        Retrieves the role of the worker by their name.

        Parameters:
        name (str): The name of the worker.

        Returns:
        str: The role of the worker.
        """
        for worker in self.workers:
            if worker['name'] == name:
                return worker['role']
        raise ValueError("Worker not found.")

    def _get_worker_compensation(self, name):
        """
        Retrieves the role of the worker by their name.

        Parameters:
        name (str): The name of the worker.

        Returns:
        str: The compensation of the worker.
        """
        for worker in self.workers:
            if worker['name'] == name:
                return worker['compensation']
        raise ValueError("Worker not found.")

    def get_top_n_workers_by_role(self, role, n):
        """
        Returns the top n workers in a specific role based on the number of hours they worked.
        Includes workers with 0 working hours.

        Parameters:
        role (str): The role of the workers to filter by.
        n (int): The number of top workers to return.

        Returns:
        list: A list of tuples containing the worker name and total hours worked, sorted in descending order.
        """
        # Calculate total hours worked for each worker in the specified role
        worker_hours = {}
        
        for worker in self.workers:
            if worker['role'] == role:
                total_hours = 0
                records = self.login_records.get(worker['name'], [])
                
                for record in records:
                    if record['login'] is not None and record['logout'] is not None:
                        total_hours += record['logout'] - record['login']
                
                # Include workers with 0 hours worked
                worker_hours[worker['name']] = total_hours
        
        # Sort workers by total hours worked in descending order
        sorted_workers = sorted(worker_hours.items(), key=lambda x: x[1], reverse=True)
        
        # Return top n workers, including those with 0 hours if they are in the specified role
        return sorted_workers[:n] if n <= len(sorted_workers) else sorted_workers

    def promote_worker(self, name, new_compensation, new_role, start_timestamp):
        """
        Promotes a worker to a new role with a new compensation if conditions are met.

        Parameters:
        name (str): The name of the worker.
        new_compensation (float): The new compensation amount for the worker.
        new_role (str): The new role or job title of the worker.
        start_timestamp (int): The timestamp from which the promotion can take effect.

        Returns:
        str: 'success' if the promotion is applied, 'invalid_request' if conditions are not met or another promotion is pending.
        """
        # Check if worker exists
        if not any(worker['name'] == name for worker in self.workers):
            return 'invalid_request'
        
        # Check if there is already a pending promotion for this worker
        if name in self.pending_promotions:
            return 'invalid_request'
        
        # Check if the worker is currently logged in
        records = self.login_records.get(name, [])
        if records and records[-1]['logout'] is None:
            return 'invalid_request'
        
        # Check if the worker's login and logout times are greater than the start timestamp
        last_login = max((record['login'] for record in records if record['login'] is not None), default=None)
        last_logout = max((record['logout'] for record in records if record['logout'] is not None), default=None)

        if last_login is None or last_logout is None or last_login <= start_timestamp or last_logout <= start_timestamp:
            # Save promotion request as pending
            self.pending_promotions[name] = {
                'new_role': new_role,
                'new_compensation': new_compensation,
                'start_timestamp': start_timestamp
            }
            return 'success'
        
        # Apply promotion immediately
        for worker in self.workers:
            if worker['name'] == name:
                worker['role'] = new_role
                worker['compensation'] = new_compensation
                break

        return 'success'

    def _apply_pending_promotions(self, record):
        """
        Applies pending promotions for workers if the conditions are met.

        Parameters:
        record (dict): The record containing login and logout timestamps.

        Returns:
        None
        """
        for name, promotion in list(self.pending_promotions.items()):
            if record['login'] >= promotion['start_timestamp'] and record['logout'] >= promotion['start_timestamp']:
                # Apply the promotion
                for worker in self.workers:
                    if worker['name'] == name:
                        worker['role'] = promotion['new_role']
                        worker['compensation'] = promotion['new_compensation']

                        # Update login records with new role
                        self.login_records[name][-1]['role'] = promotion['new_role']
                        self.login_records[name][-1]['compensation'] = promotion['new_compensation']
                        break
                # Remove the promotion from pending list
                del self.pending_promotions[name]

    def calculate_salary(self, name, timestamp1, timestamp2):
        """
        Calculates the salary of a worker based on the specified timestamp range.

        Parameters:
        name (str): The name of the worker.
        timestamp1 (int): The start timestamp of the period to calculate the salary.
        timestamp2 (int): The end timestamp of the period to calculate the salary.

        Returns:
        float: The total salary earned by the worker in the given period.
        """
        # Check if worker exists
        if not any(worker['name'] == name for worker in self.workers):
            raise ValueError("Worker not found.")
        
        # Retrieve the worker's login/logout records
        records = self.login_records.get(name, [])
        
        salary = 0
        
        for record in records:
            # Define the working time within the timestamp range
            login = max(record['login'], timestamp1) if record['login'] is not None else timestamp1
            logout = min(record['logout'], timestamp2) if record['logout'] is not None else timestamp2
            
            if login < logout:
                # Calculate salary for this period
                salary += (logout - login) * record['compensation']
                print(salary)

        return salary
