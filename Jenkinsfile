library 'jenkins-shared-lib@main'

pipeline {
    agent {
        docker {
            image 'swr.ap-southeast-3.myhuaweicloud.com/scantist-images/frontend-build:v1.1.1'
            registryUrl 'https://swr.ap-southeast-3.myhuaweicloud.com'
            registryCredentialsId 'hwc-swr-cred'
            args '-u root:root -v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    environment {
        GOOGLE_CHAT_TOKEN = credentials('google-chat-release-deployment-token')
        GITHUB_CREDS = credentials('scantist-jenkins-bot')
        SERVICE_ACCOUNT_KEY = credentials('scantist-v4-json')
    }
    stages {
        stage('Download element-plus') {
            steps {
                downloadElementPlus()
            }
        }
    }
}