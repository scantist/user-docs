---
title: GitHub Actions Integration
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: ci, github, continuous integration, actions
description: This document explains how to integrate with GitHub Actions
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

> Discover {{companyConfig.APP_NAME}}'s capabilities with GitHub Actions integration

## GitHub Actions

GitHub Actions is a hosted continuous integration service provided by GitHub for developers to build, test and deploy software projects directly from their GitHub repositories. It is commonly used to automate the build and test processes whenever there are new changes to the source code.

Integrating {{companyConfig.APP_NAME}} into the GitHub Actions workflow can enforce security and licensing compliance within your CI/CD pipeline. **The integration works seamlessly for both GitHub and GitHub Enterprise environments.**

## Follow these steps to integrate {{companyConfig.APP_NAME}} with GitHub Actions

<ol>

<li>Create access token</li>

You will need to <a href="../Settings/Access-Tokens">create an access token</a> on {{companyConfig.APP_NAME}} to authenticate and authorize the integration.

<li>Setup Secrets for your GitHub repository</li>

Navigate to your project's settings page on GitHub and click on `Secrets`.

<img src="/images/Build-based-Scan-CICD-Pipeline/github/step2.1.png"/>

Add a new Secret named `SCANTISTTOKEN` with the value of the access token you obtained in Step 1.

<img src="/images/Build-based-Scan-CICD-Pipeline/github/step2.2.png"/>

:::tip
Note: If you are using a dedicated {{companyConfig.APP_NAME}} deployment, you might need to set the `SCANTIST_IMPORT_URL` environment variable similarly.
:::

<li>Edit .yml file on your repository</li>

To complete the integration, you need to add or merge the below command at the bottom of your `.yml` file.

```yaml
jobs:
  test:
    steps:
      - name: Download SCA-Bom-Detect
        run: curl -s https://download.scantist.io/sca-bom-detect.jar --output sca-bom-detect.jar

      - name: Upload to {{companyConfig.APP_NAME}}
        env: # Setting the Token
          SCANTISTTOKEN: ${{secrets.SCANTISTTOKEN }}
          #SCANTIST_IMPORT_URL : "https://192.xxx.xxx.xx:8237/ci-scan/" #add this line if you are setting up on a dedicated scantist server
        run: java -jar scantist-bom-detect.jar
```

This command will download and execute SCA BOM Detector to scan after the build. After the successful build, the third-party component information of your project will be pushed to {{companyConfig.APP_NAME}}.

</ol>

### Here is how a successful integration will look like

<br />

<img src="/images/Build-based-Scan-CICD-Pipeline/github/success.png" />

## What's next?

You are now ready to perform scanning activities and set compliance policies for your CI/CD scans.

- Schedule scan

- Create compliance policies

</ClientOnly>
