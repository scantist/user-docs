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

        stage('Configure to download version file') {
            steps {
                sh'''
                    gcloud auth activate-service-account v4-dev-cloudstorage@scantist-v4.iam.gserviceaccount.com --key-file=$SERVICE_ACCOUNT_KEY
                    gcloud config set project scantist-v4
                '''
            }
        }

        stage('Build and upload to docs.scantist.io') {
            environment {
                GCP_CREDENTIALS_ID ='scantist-v4'
                GCP_BUCKET = 'docs.scantist.io/'
                GCP_FILE_PATTERN = 'docs/.vitepress/dist/**/*'
                GCP_FILE_PATH_PREFIX = "docs/.vitepress/dist/"
            }
            steps {
                sh '''
                    rm -rf node_modules
                    rm -rf .vitepress
                    npm install -g pnpm only-allow
                    pnpm install --no-frozen-lockfile
                    pnpm docs:build
                    bash scripts/update-version docs ${env.TAG_NAME}
                '''
                step([$class: 'ClassicUploadStep',
                    credentialsId: env.GCP_CREDENTIALS_ID,
                    bucket: "gs://${env.GCP_BUCKET}",
                    pattern: env.GCP_FILE_PATTERN,
                    pathPrefix: env.GCP_FILE_PATH_PREFIX,
                    showInline: true])
                pushHangoutsNotify("Deployed ${env.BRANCH_NAME} to docs.scantist.io.")
                // Reset for next build
                sh '''
                    git config --global --add safe.directory $(pwd)
                    git reset --hard
                '''
            }
        }
    }
}