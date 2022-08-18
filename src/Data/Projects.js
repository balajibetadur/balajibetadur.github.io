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
                firebase: firebase,
                bootstrap: bootstrap
            },
            github: 'https://github.com/balajibetadur/Study-Abroad-Preperation-Platform'
        },
        {
            title: 'Automation Project',
            description: '',
            skills: {
                selenium: selenium,
                python: python,
                rest: rest,
                pandas: pandas,
                heroku: heroku,

            },
            github: ''
        },
        {
            title: 'Moving Window Object Detection',
            description: '',
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
            description: '',
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
                "Designed a platform to train, re - train, use, and export machine learning models irrespective of the user's technical knowledge that helped 200+ students. The application also provides a hyperparameter tuning feature.",
                "Eliminated the barrier for non - tech students from accessing the advantages of machine learning."

            ],
            skills: {
                react: react,
                reactrouter: reactrouter,
                netlify: netlify,
                bootstrap: bootstrap,
                mui: mui
            },
            github: 'https://github.com/balajibetadur/Portfolio-ReactJS'
        },

    ]
}

export default projects;