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
    parameters {
        choice(name: 'DEPLOY_TO_PRODUCTION', choices: ['False', 'True'], description: 'Deploy to production docs.scantist.io')
        choice(name: 'COMPANY_ID', choices: ['False', 'scantist', 'mstl', 'osredm', 'tanxun', 'white-label'], description: 'Build onprem for company')
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

        stage('Download configuration') {
            steps {
                sh'''
                    gcloud auth activate-service-account v4-dev-cloudstorage@scantist-v4.iam.gserviceaccount.com --key-file=$SERVICE_ACCOUNT_KEY
                    gcloud config set project scantist-v4
                    gcloud storage cp -r gs://scantist-devops-resources/frontend-envs .
                '''
            }
        }

        stage('Build and upload to docs.scantist.io') {
            when {
              anyOf {
                expression { params.DEPLOY_TO_PRODUCTION == 'True' }
              }
            }
            environment {
                GCP_CREDENTIALS_ID ='scantist-v4'
                GCP_BUCKET = 'docs.scantist.io/'
                GCP_FILE_PATTERN = 'docs/.vitepress/dist/**/*'
                GCP_FILE_PATH_PREFIX = "docs/.vitepress/dist/"
            }
            steps {
                sh """
                    rm -rf node_modules
                    rm -rf .vitepress
                    npm install -g pnpm only-allow
                    pnpm install --no-frozen-lockfile
                    pnpm docs:build
                    bash scripts/update-version v4dev ${env.BRANCH_NAME}
                """
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

        stage('Build onprem and upload to GCP') {
            when {
              anyOf {
                // branch 'sprint-v4'
                expression { params.COMPANY_ID != 'False' }
              }
            }
            environment {
                GCP_CREDENTIALS_ID ='devop-playground'
                GCP_BUCKET = 'user-docs-onprem/'
                GCP_FILE_PATTERN = 'docs/.vitepress/dist/**/*'
                GCP_FILE_PATH_PREFIX = "docs/.vitepress/dist/"
            }
            steps {
                sh """
                    rm -rf node_modules
                    rm -rf .vitepress
                    cp -R frontend-envs/${COMPANY_ID}/images/* docs/public/images/.
                    cp -R frontend-envs/${COMPANY_ID}/config/* config/.
                    npm install -g pnpm only-allow
                    pnpm install --no-frozen-lockfile
                    pnpm docs:build
                    bash scripts/download-dependency-files
                """
                step([$class: 'ClassicUploadStep',
                    credentialsId: env.GCP_CREDENTIALS_ID,
                    bucket: "gs://${env.GCP_BUCKET}${COMPANY_ID}",
                    pattern: env.GCP_FILE_PATTERN,
                    pathPrefix: env.GCP_FILE_PATH_PREFIX,
                    showInline: true])
                pushHangoutsNotify("Upload ${env.BRANCH_NAME} to gs://${env.GCP_BUCKET}${COMPANY_ID}")
            }
        }        
    }
}
