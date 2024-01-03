---
title: CircleCI Integration
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: ci, circleci, continuous integration
description: This document explains how to integrate with CircleCI
---

<script setup>
import { companyConfig } from '../../../../config/companyConfig.js'
</script>
<style scoped>
    ol>li {
        font-weight: 800;
    }
</style>

<ClientOnly>

# {{ $frontmatter.title }}

> Discover {{companyConfig.APP_NAME}}'s capabilities with CircleCI integration

## CircleCI

CircleCI is a continuous integration and delivery platform for developers to integrate their code repositories with the platform and consistently run automated tests. CircleCI can be integrated with GitHub, GitHub Enterprise, Bitbucket, Docker, and AWS.

Integrating {{companyConfig.APP_NAME}} into the development lifecycle of CircleCI can help enforce security and licensing compliance within your CI/CD pipeline.

Follow these steps to integrate {{companyConfig.APP_NAME}} with CircleCI:

<ol>
<li>Create access token</li>

You will need to <a href="../Settings/Access-Tokens">create an access token</a> on {{companyConfig.APP_NAME}} to authenticate and authorize the integration.

<li>Setup Environmental Variable on CircleCI</li>

Navigate to your project's settings page on CircleCI and click on the `Environment Variables` tab.

<img src="/images/Build-based-Scan-CICD-Pipeline/circleci/step2.1.png" />

Add a new variable named `SCANTISTTOKEN` with the value of the access token you obtained in Step 1.
<img src="/images/Build-based-Scan-CICD-Pipeline/circleci/step2.2.png" />

:::tip
Note: If you are using a dedicated {{companyConfig.APP_NAME}} deployment, you might need to set the `SCANTIST_IMPORT_URL` environment variable similarly.
:::

<li>Modify config.yml on your repository</li>

To complete the integration, you need to modify your project's `config.yml` file. Below is an Maven project example.

```yaml
# Use the latest 2.1 version of CircleCI pipeline process engine.
# See: https://circleci.com/docs/2.0/configuration-reference
version: 2.1

# Define a job to be invoked later in a workflow.
# See: https://circleci.com/docs/2.0/configuration-reference/#jobs
jobs:
  # Below is the definition of your job to build and test your app, you can rename and customize it as you want.
  build-and-test:
    # These next lines define a Docker executor: https://circleci.com/docs/2.0/executor-types/
    # You can specify an image from Dockerhub or use one of our Convenience Images from CircleCI's Developer Hub.
    # Be sure to update the Docker image tag below to openjdk version of your application.
    # A list of available CircleCI Docker Convenience Images are available here: https://circleci.com/developer/images/image/cimg/openjdk
    docker:
      - image: cimg/openjdk:11.0
    # Add steps to the job
    # See: https://circleci.com/docs/2.0/configuration-reference/#steps
    steps:
      # Checkout the code as the first step.
      - checkout
      # Use mvn clean and package as the standard maven build phase
      - run:
          name: Build
          command: mvn -B -DskipTests clean package
      # Then run your {{companyConfig.APP_NAME}} scan!
      - run:
          name: {{companyConfig.APP_NAME}}-scan
          command: bash <(curl -s https://scripts.scantist.com/ci-circle.sh)

# Invoke jobs via workflows
# See: https://circleci.com/docs/2.0/configuration-reference/#workflows
workflows:
  sample: # This is the name of the workflow, feel free to change it to better match your workflow.
    # Inside the workflow, you define the jobs you want to run.
    jobs:
      - build-and-test:
          # add organization context for global environment variables
          context:
            - scantist-access
```

This command will call the {{companyConfig.APP_NAME}} Circle script to receive your successfully built result from CircleCI. After the successful build, the third-party component information of your project will be pushed to {{companyConfig.APP_NAME}} SCA.

</ol>

### Here is how a successful integration will look like

<img src="/images/Build-based-Scan-CICD-Pipeline/circleci/success.png" />

## What's next?

You are now ready to perform scanning activities and set compliance policies for your CI/CD scans.

Schedule scan

Create compliance policies

</ClientOnly>
