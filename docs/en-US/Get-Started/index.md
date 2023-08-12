---
title: Get Started
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: started, get started, welcome
---

<script setup>
import { companyConfig } from '../../../config/companyConfig.js'
</script>

<ClientOnly>

# {{ $frontmatter.title }} with {{ companyConfig.APP_NAME }}

> Discover the ultimate tool for managing and securing the use of your open source software. With {{ companyConfig.APP_NAME }}, you can easily identify vulnerabilities and licensing risks in your open source projects and remediate them efficiently.

## Follow these five simple steps to get started

<hr class="thick">

### 1. Sign up for {{ companyConfig.APP_NAME }}

To start using {{ companyConfig.APP_NAME }}, <a href="./Sign-up-for-more">sign up for an account</a> by following the instructions in our documentation.

Once you have signed up, you will have access to our powerful open source management platform.

### 2. Create a project

To begin scanning your project for vulnerabilities, you'll need to create a project on {{companyConfig.APP_NAME}}. Follow our documentation to learn how to upload your source code projects.

<ul>
  <li><a href="../Create-and-Manage-Project/Upload-Files-Directly">Upload source code or binary file directly</a></li>
  <li><a href="../Create-and-Manage-Project/Add-SCM-Repositories">Add SCM repositories</a></li>
</ul>

### 3. Initiate a scan on your project

Use {{companyConfig.APP_NAME}} to scan your open source projects and identify vulnerabilities and licensing risks. Depending on your project type, you can trigger a scan by selecting from a range of options in our documentation.

<ul>
  <li><a href="../SCA/">Software Composition Analysis (SCA)</a></li>
  <li>Static Application Security Testing (SAST) (Coming soon)</li>
  <li>Infrastructure as Code (IaC) Scan (Coming soon)</li>
  <li>Fuzzing Test (Coming soon)</li>
  <li>Code Snippets (Coming soon)</li>
</ul>

### 4. Access your scan results

After scanning your projects, {{companyConfig.APP_NAME}} will provide a detailed report on any <a href="../SCA/Vulnerabilities/">vulnerabilities</a> or <a href="../SCA/Licenses">licensing risks</a> found.

### 5. Fix your vulnerabilities

It's time to fix the vulnerabilities detected in your scan. Use our remediation strategies to quickly and efficiently address these issues and improve the overall quality of your software.

## What's next?

<hr class="thick">

You are now ready to start scanning your open source projects. {{companyConfig.APP_NAME}} is designed to integrate seamlessly with your existing software development workflows and tools.

<ul>
  <li>Integrate {{companyConfig.APP_NAME}} with your preferred CI/CD pipeline tools</li>
  <li><a href="../Compliance-Policy-Rules/">Create compliance policies</a></li>
</ul>

With {{companyConfig.APP_NAME}}, managing and securing your open source software has never been easier. Sign up today and start using our powerful tool to improve the security of your software.

If you have any questions or need assistance, please don't hesitate to contact {{companyConfig.APP_NAME}} support at <a href="mailto:support@scantist.com">support@scantist.com</a>.

</ClientOnly>
