import python from "../Assets/python.png";
import sklearn from "../Assets/sklearn.png";
import keras from "../Assets/keras.png";
import sql from "../Assets/sql.png";
import pandas from "../Assets/pandas.png";
import react from "../Assets/react.webp";
import node from "../Assets/node.png";
import mongodb from "../Assets/mongodb.png";
import javascript from "../Assets/javascript.png";
import firebase from "../Assets/firebase.png";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import gcp from "../Assets/gcp.png";
import npm from "../Assets/npm.png";
import redux from "../Assets/redux.png";
import ec2 from "../Assets/ec2.png";
import rest from "../Assets/rest.png";
import flask from "../Assets/flask.png";
import aws from "../Assets/aws.png";
import fastai from "../Assets/fastai.png";
import lambda from "../Assets/lambda.png";
import DataScienceAI from "../Assets/DataScience.svg";
import FrontEnd from "../Assets/Frontend.svg";
import Cloud from "../Assets/Cloud.svg";
import opencv from "../Assets/opencv.png";
import selenium from "../Assets/selenium.png";
import heroku from "../Assets/heroku.png";
import dynamodb from "../Assets/dynamodb.png";
import cdk from "../Assets/cdk.png";
import fargate from "../Assets/fargate.png";
import efs from "../Assets/efs.png";
import cloudformation from "../Assets/cloudformation.png";
import ecs from "../Assets/ecs.png";
import s3 from "../Assets/s3.png";
import filecache from "../Assets/filecache.png";
import airflow from "../Assets/airflow.png";
import kafka from "../Assets/kafka.png";
import prometheus from "../Assets/prometheus.png";
import snowflake from "../Assets/snowflake.png";
import tableau from "../Assets/tableau.png";
import glue from "../Assets/glue.png";
import go from "../Assets/golang.png";
import cpp from "../Assets/cpp.png";

const UserDomains = {
	"ML and DevOps": {
		description: [
			"⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
			"⚡ Experience of working with Computer Vision and NLP projects",
			"⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
		],
		image: DataScienceAI,
		skills: {
			python: python,
			sklearn: sklearn,
			keras: keras,
			fastai: fastai,
			opencv: opencv,
			pandas: pandas,
			sql: sql,
			tableau: tableau,
			selenium: selenium,
			airflow: airflow,
			snowflake: snowflake,
			kafka: kafka,
			prometheus: prometheus,
			glue: glue,
		},
	},
	"FullStack Development": {
		description: [
			"⚡ Building full stack applications using REST API to provide flexible and scalable inetegration",
			"⚡ Building resposive website front end using React-Redux",
			"⚡ Creating application backend in Node, Express & Flask",
		],
		image: FrontEnd,
		skills: {
			html: html,
			css: css,
			javascript: javascript,
			react: react,
			redux: redux,
			node: node,
			go: go,
			npm: npm,
			cpp: cpp,
			restAPI: rest,
			flask: flask,
			heroku: heroku
		},
	},
	"Cloud Technologies": {
		description: [
			"⚡ Hosting and maintaining applications on EC2 instances along with user profile and integration of databases",
			"⚡ Using aws services like Lambda (serverless computing), events etc for automation.",
			"⚡ Deploying deep learning models on cloud to use on mobile devices",
		],
		image: Cloud,
		skills: {
			aws: aws,
			firebase: firebase,
			gcp: gcp,
			dynamodb: dynamodb,
			ec2: ec2,
			mongodb: mongodb,
			ecs: ecs,
			filecache: filecache,
			cdk: cdk,
			lambda: lambda,
			s3: s3,
			fargate: fargate,
			efs: efs,
			cloudformation: cloudformation,
		},
	},
};

export default UserDomains;
