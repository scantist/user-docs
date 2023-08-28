---
title: Travis CI Integration
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: ci, travis, continuous integration
description: This document explains how to integrate with Travis CI
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

> Discover {{companyConfig.APP_NAME}}'s capabilities with Travis CI integration

## Travis CI

Travis is a continuous integration platform that automates code integration and testing to streamline development workflows and enhance code quality. It can be integrated with Github, Bitbucket, and Docker.

Integrating {{companyConfig.APP_NAME}} into the development lifecycle of Travis CI can help enforce security and licensing compliance within your CI/CD pipeline.

## Follow these steps to integrate {{companyConfig.APP_NAME}} with Travis CI

<ol>
<li>Create access token</li>
You will need to <a href="../Settings/Access-Tokens">create an access token</a> on {{companyConfig.APP_NAME}} to authenticate and authorize the integration.

<li>Setup Environmental Variables on Travis</li>

Navigate to your project's settings page on Travis and click on the `Environment Variables` tab. Add a new variable named `SCANTISTTOKEN` with the value of the access token you obtained in Step 1.

<img src="/images/Build-based-Scan-CICD-Pipeline/travis/step2.1.png" />

:::tip
Note: If you are using a dedicated {{companyConfig.APP_NAME}} deployment, you might need to set the `SCANTIST_IMPORT_URL` environment variable similarly.
:::

<li>Add .travis.yml on your repository</li>
To complete the integration, you need to add or merge the below command at the bottom of your .travis.yml file.

```yaml
after_success:
  - bash <(curl -s https://scripts.scantist.com/ci-travis.sh)
```

This command will call the {{companyConfig.APP_NAME}} Travis script to receive your successfully built result from Travis CI. After the successful build, the third-party component information of your project will be pushed to {{companyConfig.APP_NAME}} SCA.

</ol>

### Here is how a successful integration will look like

<img src="/images/Build-based-Scan-CICD-Pipeline/travis/successful.png" />

## What's next?

You are now ready to perform scanning activities and set compliance policies for your CI/CD scans.

- Schedule scan

- Create compliance policies

</ClientOnly>
