---
title: Trigger Scan
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: scan, sca, sast, fuzzing, iac, code snippet
---

<script setup>
import { companyConfig } from '../../../config/companyConfig.js'
</script>
<ClientOnly>

# {{ $frontmatter.title }}

> Explore what's next after creating a project in {{companyConfig.APP_NAME}}

## Initiate a scan for your project

<hr class="thick" />

Click on the **"Scan"** icon on the project list

![Scan from Project List](/images/Trigger-Scan/Trigger-Scan-1.png)

## Follow these steps to start scanning

<hr class="thick" />

### 1. Configure your project settings

To initiate scanning for your projects, you will need to configure the project settings based on the type of projects created

- [Upload Scan Settings](./Upload-Scan-Settings.md)

- [SCM Scan Settings](./SCM-Scan-Settings.md)

### 2. Select scan type

Click on the "Scan" icon next to the project name. This will open a dialog where you can select the type of scan you want to run - [**SCA**](../SCA/), **SAST**, **Fuzzing**, **IaC** or **Code Snippet** (you may select more than one).

You can further customise the scan setting before triggering the scan. Some of the options you can customize include scan type, select the branch or file version and [compliance policy](../Compliance-Policy-Rules/).

![insert image](/images/Trigger-Scan/Trigger-Scan-2.png)

### 3. Start scanning

Once you have configured the scan settings, you can start scanning by clicking on the "Scan" icon in the pop-up window. This will initiate the scan process and the results will be displayed once the scan is complete.

<br />

**:tada::tada: Congratulations - you have triggered your first scan! :confetti_ball::confetti_ball:**

## What's next?

<hr class="thick" />

You can now review your scan results for your open source projects and remediate any identified your vulnerabilities.

- [SCA Results](../SCA/SCA-Vulnerabilities-Results.md)

</ClientOnly>
