---
title: Jenkins CI Integration
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: ci, jenkins, continuous integration
description: This document explains how to integrate Jenkins CI
---

<script setup>
import { companyConfig } from '../../../config/companyConfig.js'
</script>
<style scoped>
    ol>li {
        font-weight: 800;
    }
</style>

<ClientOnly>

# {{ $frontmatter.title }}

> Discover {{companyConfig.APP_NAME}}'s capabilities with Jenkins integration

## Jenkins CI

Jenkins is a popular choice of continuous integration and continuous delivery solution for developers to integrate with a variety of development, testing, and deployment tools. Jenkins is highly extensible and customizable, which makes it suitable for a wide range of projects - from small single-developer projects to large enterprise-level applications.

Integrating {{companyConfig.APP_NAME}} into the development lifecycle of Jenkins CI can help enforce security and licensing compliance in the CI/CD pipeline. There are two ways to integrate {{companyConfig.APP_NAME}} with Jenkins CI:

1. Build Script on Jenkins CI

2. Using Jenkinsfile

## Follow these steps to integrate {{companyConfig.APP_NAME}} with Jenkins CI using Jenkinsfile

This approach allows Jenkins users to scan their code for security vulnerabilities and licensing issues during the build process.

<ol>
<li>Create access token</li>

You will need to create an access token on {{companyConfig.APP_NAME}} to authenticate and authorize the integration between {{companyConfig.APP_NAME}} and other tools.

<li>Have your build script ready</li>

Navigate to your project settings page on Jenkins and click on `Configure`.

Under the `Build` section, make sure you have a build script prepared for your project. This script will aid {{companyConfig.APP_NAME}} SCA in collecting both direct and transitive dependencies. If you don't have a build script, you can skill the steps.

<img src="/images/Build-based-Scan-CICD-Pipeline/jenkins/part1-step2.1.png" />

<li>Configure script for Jenkins</li>

If you are using Windows, add a new `Execute Windows Batch Command` step and include the below script

```shell
export SCANTIST_IMPORT_URL=$dedicated_deployment_scantist_url
export SCANTISTTOKEN=$your_copied_access_token
curl -s https://download.scantist.io/scantist-bom-detect.jar --output scantist-bom-detect.jar
java -jar scantist-bom-detect.jar
```

If you are using Linux, add a new `Execute Shell` and include the below script

```bash
export SCANTIST_IMPORT_URL=$dedicated_deployment_scantist_url
export SCANTISTTOKEN=$your_copied_access_token
curl -s https://download.scantist.io/scantist-bom-detect.jar --output scantist-bom-detect.jar
java -jar scantist-bom-detect.jar
```

<li>Build your project</li>

Click `Save` and `Build Now` to start building results from Jenkins. This will call the {{companyConfig.APP_NAME}} Jenkins script to receive your successful build result from Jenkins CI.

</ol>

## Follow these steps to integrate {{companyConfig.APP_NAME}} with Jenkins CI using Jenkins File

This approach involves running the Jenkinsfile as part of your Jenkins build process - can be more flexible than using the Jenkinsfile, but it required more configuration and setup.

<ol>
<li>Create access token</li>

You will need to create an access token on {{companyConfig.APP_NAME}} to authenticate and authorize the integration between {{companyConfig.APP_NAME}} and other tools.

<li>Setup Environmental Variables on Jenkins</li>

Navigate to `Configure System` in the Jenkins menu, scroll down to find `Global Properties` and click on it.

Click on the `Environment Variables` tab and add the below two variables.

<table>
    <thead>
        <th>Variable</th>
        <th>Value</th>
        <th>Options</th>
    </thead>
    <tbody>
        <tr>
            <td>SCANTISTTOKEN</td>
            <td>token_you_copied</td>
            <td>Mandatory</td>
        </tr>
        <tr>
            <td>SCANTIST_IMPORT_URL</td>
            <td>dedicated_deployment_scantist_url</td>
            <td>Optional</td>
        </tr>
    </tbody>
</table>

<img src="/images/Build-based-Scan-CICD-Pipeline/jenkins/part2-step2.1.png" />

<li>Add {{companyConfig.APP_NAME}} Agent to Jenkinsfile</li>
Navigate to your source code repository to open <b>Jenkinsfile</b> and add a new stage below your stage. You can name the new stage `{{companyConfig.APP_NAME}}` and the below command.

```Groovy
stage ('{{companyConfig.APP_NAME}}') {
            steps {
                sh '''
                    curl -s https://download.scantist.io/scantist-bom-detect.jar --output scantist-bom-detect.jar
                    java -jar scantist-bom-detect.jar
                '''
            }
        }
```

<li>Download the {{companyConfig.APP_NAME}} Agent if your source code is on-premise hosted</li>

On an internet-connected device, download the <b>SCANTIST AGENT</b> package suitable for your environment.

Transfer the downloaded agent package to your on-premises Jenkins environment by adding a new stage specifically for {{companyConfig.APP_NAME}} with the below command.

<li>Build your Project</li>

Navigate back to Jenkins and select `Build Now` for your project. This will call the {{companyConfig.APP_NAME}} Jenkins script to receive your successful build result from Jenkins CI.

</ol>

### Here is how a successful integration will look like

## What's next?

You are now ready to perform scanning activities and set compliance policies for your CI/CD scans.

- Schedule scan

- Create compliance policies

</ClientOnly>
