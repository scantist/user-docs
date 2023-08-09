---
title: Bamboo CI Integration
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: ci, bamboo, continuous integration
description: This document explains how to integrate with Bamboo CI
---

<script setup>
import { companyConfig } from '../../../config/companyConfig.js'
</script>
<style>
    li {
        font-weight: 800;
    }
</style>

<ClientOnly>

# {{ $frontmatter.title }}

> Discover {{companyConfig.COMPANY_NAME}}'s capabilities with Bamboo integration

## Bamboo CI

Bamboo is a Continuous Integration solution developed by Atlassian that helps the development teams to streamline their workflow and improve the quality of their code by automating the entire process of integrating code changes into a shared repository. Bamboo CI can be integrated with GitHub, Bitbucket and Docker.

Integrating {{companyConfig.COMPANY_NAME}} into the development lifecycle of Bamboo CI can help enforce security and licensing compliance within your CI/CD pipeline.

Follow these steps to integrate {{companyConfig.COMPANY_NAME}} with Bamboo CI:

<ol>
<li>Download {{companyConfig.COMPANY_NAME}} Bamboo Plugin</li>

Click on the link below to download the {{companyConfig.COMPANY_NAME}} Bamboo Plugin.

<a :href="`${companyConfig.BAMBOO_PLUGIN_LINK}`">{{companyConfig.BAMBOO_PLUGIN_LINK}}</a>

<li>Create access token</li>

You will need to create an access token on {{companyConfig.COMPANY_NAME}} to authenticate and authorize the integration between {{companyConfig.COMPANY_NAME}} and Bamboo.

<li>Add {{companyConfig.COMPANY_NAME}} Bamboo Plugin</li>

Log in to your Bamboo CI to add the {{companyConfig.COMPANY_NAME}} Bamboo Plugin once you have downloaded it.

Select "Manage apps" from the drop-down Administration list.
<img src="/images/Build-based-Scan-CICD-Pipeline/bamboo/step3.1.png"/>

Click on "Upload app" and browse for the <b>sbd.scan-1.0.0-SNAPSHOT.obr</b> file you have just downloaded in Step 1 and upload the {{companyConfig.COMPANY_NAME}} Bamboo Plugin.
<img src="/images/Build-based-Scan-CICD-Pipeline/bamboo/step3.2.png"/>

<li>Add {{companyConfig.COMPANY_NAME}} scan as a build task</li>

Create a new build task in your Bamboo CI to add <b>{{companyConfig.COMPANY_NAME}} scan</b>.
<img src="/images/Build-based-Scan-CICD-Pipeline/bamboo/step4.1.png"/>

In the "{{companyConfig.COMPANY_NAME}} Task Configuration" section fill in the following details:

<table>
    <thead>
        <th>Variable</th>
        <th>Value</th>
    </thead>
    <tbody>
        <tr>
            <td>Task Description</td>
            <td>{{companyConfig.COMPANY_NAME}} CI Scan</td>
        </tr>
        <tr>
            <td>{{companyConfig.COMPANY_NAME}} Import URL</td>
            <td>&lt;{{companyConfig.COMPANY_NAME}}_service_ip_addr&gt;/ci-scan/</td>
        </tr>
        <tr>
            <td>{{companyConfig.COMPANY_NAME}}TOKEN</td>
            <td>&lt;access_token_you_just_copied&gt;/ci-scan/</td>
        </tr>
    </tbody>
</table>

:::tip Note: Replace <{{companyConfig.COMPANY_NAME}}\_service_ip_addr> with the IP address for {{companyConfig.COMPANY_NAME}} for dedicated deployments, and replace with the access token you copied in Step 2.
:::

<li>Save the task and run your build to trigger the {{companyConfig.COMPANY_NAME}} scan task</li>
{{companyConfig.COMPANY_NAME}} will scan your code for vulnerabilities and licensing issues, and provide a report back to Bamboo CI.

</ol>

## What's next?

You are now ready to perform scanning activities and set compliance policies for your CI/CD scans.

Schedule scan

Create compliance policies

</ClientOnly>
