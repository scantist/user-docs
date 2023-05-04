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
                sh'''
                    export GITHUB_OAUTH_TOKEN=$GITHUB_CREDS_PSW
                    bash scripts/download-element-plus
                '''
            }
        }

        stage('Build and upload to v4dev') {
            environment {
                GCP_CREDENTIALS_ID ='scantist-v4'
                GCP_BUCKET = 'docs.scantist.io/'
                GCP_FILE_PATTERN = 'docs/.vitepress/dist/**/*'
                GCP_FILE_PATH_PREFIX = "docs/.vitepress/dist/"
            }
            steps {
                sh '''
                    npm install
                    yarn docs:build
                '''
                step([$class: 'ClassicUploadStep',
                    credentialsId: env.GCP_CREDENTIALS_ID,
                    bucket: "gs://${env.GCP_BUCKET}",
                    pattern: env.GCP_FILE_PATTERN,
                    pathPrefix: env.GCP_FILE_PATH_PREFIX,
                    showInline: true])
                pushHangoutsNotify("Deployed ${env.BRANCH_NAME} to docs.scantist.io.")
            }
        }
    }
}