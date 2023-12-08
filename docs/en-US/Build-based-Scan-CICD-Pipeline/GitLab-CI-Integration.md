---
title: GitLab CI Integration
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: ci, gitlab, continuous integration
description: This document explains how to integrate GitLab CI
---

<script setup>
import { companyConfig } from '../../../config/companyConfig.js'
</script>

<ClientOnly>

# {{ $frontmatter.title }}

> Discover {{companyConfig.APP_NAME}}'s capabilities with GitLab CI integration

## GitLab CI

GitLab CI is a continuous integration solution provided by GitLab that simplifies and automates the process of integrating code changes into a shared repository. With Gitlab CI, each code commit triggers an automated build process, provided that a pipeline is within your GitLab environment. It can be integrated with GitHub, GitHub Enterprise and Bitbucket.

Integrating {{companyConfig.APP_NAME}} into the development lifecycle of GitLab CI can help enforce security and licensing compliance within your CI/CD pipeline.

## Steps for Integration with Gitlab CI

Follow the following steps to integrate {{companyConfig.APP_NAME}} with your Gitlab CI.

### Step 1 - Create access token

You will need to <a href="../Settings/Access-Tokens">create an access token</a> on {{companyConfig.APP_NAME}} to authenticate and authorize the integration.

### Step 2 - Setup Environmental Variables on Gitlab CI

Once you have copied your access token, navigate back to Gitlab CI.

1. Select `Settings > CI/CD` from your left panel.

   ![Settings > CI/CD](/images/Build-based-Scan-CICD-Pipeline/gitlab/step2.1.png)

2. Scroll to the `Variables` section, then click on the `Expand` button.

   ![Variables > Expand](/images/Build-based-Scan-CICD-Pipeline/gitlab/step2.2.png)

3. Click on the `Add Variable` button. In the pop-up box,
    - Set the `Key` as `SCANTISTTOKEN`
    - Paste your access token under `Value`
    - Check the option `Mask variable`
    - Complete the process by clicking on the `Add Variable` button

   ![Add variable](/images/Build-based-Scan-CICD-Pipeline/gitlab/step2.3.png)

   Click on the `Add Variable` button again. In the pop-up box,
   - Set the `Key` as `SCANTIST_IMPORT_URL`
   - Set the `Value` as `https://api-v4staging.scantist.io/v2/scans/ci-scan/` (for V4 staging environment) or `https://gcc.scantist.io/v2/scans/ci-scan/` (for GCC environment)
   - Check the option `Mask variable`
   - Complete the process by clicking on the `Add Variable` button

### Step 3 - Add .gitlab-ci.yml on your repo

Assuming that your code is hosted on Gitlab, the final step you will need to do is to add or merge the last two lines of code at the bottom of your `.gitlab-ci.yml` file in your repository. This command will download and execute our BOM Detector to scan after the build.

```yaml
job:
  script:
    - curl -s https://download.scantist.io/sca-bom-detect-v4.5.jar --output sca-bom-detect-v4.5.jar
    - java -jar sca-bom-detect-v4.5.jar
```

Once the command has been added to your `.gitlab-ci.yml` file, Gitlab CI will trigger a new build automatically and push the 3rd party component information of your project to {{companyConfig.APP_NAME}} SCA after the successful build.

### An example of a `.gitlab-ci.yml` file

```yaml
stages:
  - build

build-job:
  stage: build
  script:
    - apt-get update && apt-get install -y nodejs npm default-jdk
    - cd api
    - npm install
    - curl -s https://download.scantist.io/sca-bom-detect-v4.5.jar --output sca-bom-detect-v4.5.jar
    - java -jar sca-bom-detect-v4.5.jar
```

<img src="" />

</ClientOnly>
