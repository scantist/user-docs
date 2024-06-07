---
title: Build-based Scan - CI/CD Pipeline
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: ci, continuous integration, cd, continuous deployment, bamboo, jenkins, circleci, gitlab, github actions, travis
description: This document explains how to integrate Gitlab CI
---

<script setup>
import { companyConfig } from '../../../../config/companyConfig.js'
</script>

<ClientOnly>

# {{ $frontmatter.title }}

> Explore the possibilities of automating the entire software development lifecycle, from building, testing, and, deployment to production.

<div style="display: flex;">
    <div style="flex: 1;">
        <h2>Continuous Integration (CI)</h2>
        <hr class="thick" />
        Merging code changes from multiple developers into a shared code repository multiple times a day, and then automatically building and testing the code to detect any issues early on. This approach helps teams catch errors before they become bigger problems and allows for quicker resolution. 
    </div>
    <div style="flex: 1;">
        <h2>Continuous Delivery (CD)</h2>
        <hr class="thick" />
        Automatically deploying code changes to production or testing environments, depending on the team's preferences and requirements. Although the approach is automatic, it requires human intervention to manually trigger the deployment of the changes.
    </div>
</div>

## {{companyConfig.APP_NAME}} CI/CD Integration

<hr class="thick" />

By integrating {{companyConfig.APP_NAME}} with your CI/CD system, you can automatically scan your open source components for vulnerabilities and compliance issues, as part of your build and testing processes. To learn more about the CI/CD system of choice, please refer to the table below and select the corresponding system.

::: warning **To integrate {{companyConfig.APP_NAME}} with your CI/CD system, you need to ensure the followings:**

1. Java is available in the build environment (minimum JDK1.8)
2. A manifest file is available in the source code project

:::

<table>
    <thead></thead>
    <tbody>
        <tr>
            <td><img class="ci_logo" src="/images/Build-based-Scan-CICD-Pipeline/bamboo.svg" /></td>
            <td><img class="ci_logo" src="/images/Build-based-Scan-CICD-Pipeline/circle-ci.svg" /></td>
            <td><img class="ci_logo" src="/images/Build-based-Scan-CICD-Pipeline/github.svg" /></td>
        </tr>
        <tr>
            <td>Bamboo</td>
            <td>CircleCI</td>
            <td>Github Actions</td>
        </tr>
        <tr>
            <td><img class="ci_logo" src="/images/Build-based-Scan-CICD-Pipeline/gitlab.svg" /></td>
            <td><img class="ci_logo" src="/images/Build-based-Scan-CICD-Pipeline/jenkins.svg" /></td>
            <td><img class="ci_logo" src="/images/Build-based-Scan-CICD-Pipeline/travis.svg" /></td>
        </tr>
        <tr>
            <td>Gitlab CI</td>
            <td>Jenkins</td>
            <td>Travis</td>
        </tr>
    </tbody>
</table>

### Other CI/CD Tool

{{companyConfig.APP_NAME}} can be integrated with any CI/CD tool that is not mentioned on the list. To integrate with other CI/CD tools, set environmental variables on your system and configure your build script.
</ClientOnly>
