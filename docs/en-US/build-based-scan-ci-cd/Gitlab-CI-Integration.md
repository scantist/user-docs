---
title: Gitlab CI Integration
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: ci, gitlab, continuous integration
description: This document explains how to integrate Gitlab CI
---

<ClientOnly>

# {{ $frontmatter.title }}

>Gitlab CI integrates with GitHub, GitHub Enterprise, and Bitbucket. Every time you commit code, Gitlab CI creates a build if there is a pipeline defined in your Gitlab environment. Integrating Scantist SCA as part of your development life cycle enforces security and licensing compliance in the CI/CD pipeline. 

## Steps for Integration with Gitlab CI

Follow the following steps to integrate Scantist SCA with your Gitlab CI.

### Step 1 - Get Access Token

Access token allows Gitlab CI to communicate with Scantist SCA. Click [here](#) to learn how to get your access token.

### Step 2 - Setup Environmental Variables on Gitlab CI

Once you have copied your access token, navigate back to Gitlab CI.

1. Select `Settings > CI/CD` from your left panel.

![Settings > CI/CD](/images/ci/gitlab/step2.1.png)

2. Scroll to the `Variables` section, then click on the `Expand` button. 

![Variables > Expand](/images/ci/gitlab/step2.2.png)

3. Click on the `Add Variable` button. In the pop-up box,
    - set the `Key` as `SCANTISTTOKEN`
    - paste your access token under `Value`
    - check the option `Mask variable`
    - complete the process by clicking on the `Add Variable` button

![Add variable](/images/ci/gitlab/step2.3.png)

In case you are using a dedicated Scantist deployment, you might need to set the `SCANTIST_IMPORT_URL` in a similar fashion.

### Step 3 - Add .gitlab-ci.yml on your repo
Assuming that your code is hosted on Gitlab, the final step you will need to do is to add or merge the last two lines of code at the bottom of your `.gitlab-ci.yml` file in your repository. This command will download and execute our BOM Detector to scan after the build.


```yaml
job:
    script: 
        - curl -s https://download.scantist.io/scantist-bom-detect.jar --output scantist-bom-detect.jar
        - java -jar scantist-bom-detect.jar
```

Once the command has been added to your `.gitlab-ci.yml` file, Gitlab CI will trigger a new build automatically and push the 3rd party component information of your project to Scantist SCA after the successful build.

This is an example of a `.gitlab-ci.yml` file for your reference:

```yaml
stages:
    - build

build-job:
    stage: build
    script:
      - apt-get update && apt-get install -y nodejs npm default-jdk
      - cd api
      - npm install
      - curl -s https://download.scantist.io/scantist-bom-detect.jar --output scantist-bom-detect.jar
      - java -jar scantist-bom-detect.jar
```

</ClientOnly>