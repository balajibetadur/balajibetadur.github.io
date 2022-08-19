import python from "../Assets/python.png";
import sklearn from "../Assets/sklearn.png";
import keras from "../Assets/keras.png";
import sql from "../Assets/sql.png";
import pandas from "../Assets/pandas.png";
import react from "../Assets/react.webp";
import node from "../Assets/node.png";
import mongodb from "../Assets/mongodb.png";
import javascript from "../Assets/javascript.png";
import bootstrap from "../Assets/bootstrap.png";
import firebase from "../Assets/firebase.png";
import pyttsx3 from "../Assets/pyttsx3.png";
import selenium from "../Assets/selenium.png";
import heroku from "../Assets/heroku.png";
import opencv from "../Assets/opencv.png";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import gcp from "../Assets/gcp.png";
import npm from "../Assets/npm.png";
import redux from "../Assets/redux.png";
import ec2 from "../Assets/ec2.png";
import colab from "../Assets/colab.png";
import rest from "../Assets/rest.png";
import flask from "../Assets/flask.png";
import aws from "../Assets/aws.png";
import fastai from "../Assets/fastai.png";
import lambda from "../Assets/lambda.png";
import mui from "../Assets/mui.png";
import reactrouter from "../Assets/reactrouter.png";
import netlify from "../Assets/netlify.png";

const projects = {
    landingInfo: {
        title: "Projects",
        subTitle: "Research, Industrial and Freelance projects",
        description: "",
    },
    projects: [
        {
            title: 'Auto Model Training',
            description: [
                "Designed a platform to train, re - train, use, and export machine learning models irrespective of the user's technical knowledge that helped 200+ students. The application also provides a hyperparameter tuning feature.",
                "Eliminated the barrier for non - tech students from accessing the advantages of machine learning."

            ],
            skills: {
                sklearn: sklearn,
                keras: keras,
                python: python,
                fastai: fastai,
                flask: flask,
            },
            github: 'https://github.com/balajibetadur/Auto-Model-Training'
        },
        {
            title: 'Covid-19 Infection Prediction',
            description: [
                "Deployed a Machine Learning application to predict the COVID - 19 infection probability using the user's symptoms, including fever, cough, body pain, and cold. Used by 1300+ people, including the residents in the community. ",
                "The module uses deep learning to predict lung infection with the user's x-ray images. Face-mask detection software was installed in 3 societies using OpenCV."
            ],
            skills: {
                python: python,
                sklearn: sklearn,
                pandas: pandas,
                javascript: javascript,
                flask: flask
            },
            github: 'https://github.com/balajibetadur/COVID-19-Infection-Predictor-Image-Classifier-and-Mask-Detector'
        },
        {
            title: 'Study Abroad Platform',
            description: [
                "The study Abroad platform provides a complete package for someone who wants to study abroad.It includes a GRE preparation module to learn new words with new features absent in well- known applications online. ",
                "The platform also provides IELTS and TOEFL preparation, University shortlisting, profile evaluation, university prediction, Networking, and Room finder. (in progress)"

            ],
            skills: {
                react: react,
                redux: redux,
                javascript: javascript,
                bootstrap: bootstrap,
                firebase: firebase,
            },
            github: 'https://github.com/balajibetadur/Study-Abroad-Preperation-Platform'
        },
        {
            title: 'Automation Project',
            description: [
                'Python scripts that automate simple daily-to-day life repetitive tasks. Selenium allows automating any web-browser-based tasks using chrome driver in a very short time.',
                'It saved me 8+ hours per week completing automated tasks in less than 1/10th of usual time.'
            ],
            skills: {
                selenium: selenium,
                python: python,
                restAPI: rest,
                pandas: pandas,
                heroku: heroku,

            },
            github: ''
        },
        {
            title: 'Moving Window Object Detection',
            description: [
                'An object detection algorithm designed using image classification technique with the moving window method.',
                'Won 2nd prize in National level AI Hackathon at a Techfest held by IIT-Bombay.'
            ],
            skills: {
                keras: keras,
                opencv: opencv,
                python: python,
                aws: aws,
                colab: colab,

            },
            github: 'https://github.com/balajibetadur/Traffic-sign-Recognition-2-methods'
        },
        {
            title: 'Desktop Voice Assistant',
            description: [
                'A voice-based desktop assistant implemented using python (pyttsx3)that perform every day tasks on the desktop.',
                'Simple tasks like search something on google, open any application, desktop hardware operations like open settings, increase brightness/volume, sleep, shudown and restart'
            ],
            skills: {
                python: python,
                pyttsx3: pyttsx3,
                flask: flask,
                heroku: heroku,


            },
            github: 'https://github.com/balajibetadur/Desktop-Voice-Assisstant'
        },
        {
            title: 'Master Portfolio',
            description: [
                "Designed a customizable portfolio website in react. It has a central data storage (json) from where website content can be easily modified. ",
                "Used react-router for routing and react-reveal for animations."

            ],
            skills: {
                react: react,
                reactrouter: reactrouter,
                netlify: netlify,
                bootstrap: bootstrap,
                npm: npm,
            },
            github: 'https://github.com/balajibetadur/Portfolio-ReactJS'
        },

    ]
}

export default projects;