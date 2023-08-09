---
title: Get Started with
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: started, get started, welcome
---

<script setup>
import { companyConfig } from '../../../config/companyConfig.js'
</script>

<ClientOnly>

# {{ $frontmatter.title }} {{ companyConfig.COMPANY_NAME }}

> Discover the ultimate tool for managing and securing the use of your open source software. With {{ companyConfig.COMPANY_NAME }}, you can easily identify vulnerabilities and licensing risks in your open source projects and remediate them efficiently.

## Follow these five simple steps to get started

<hr class="thick">

### 1. Sign up for {{ companyConfig.COMPANY_NAME }}

To start using {{ companyConfig.COMPANY_NAME }}, [sign up for an account](./Sign-up-for-more) by following the instructions in our documentation.

Once you have signed up, you will have access to our powerful open source management platform.

### 2. Create a project

To begin scanning your project for vulnerabilities, you'll need to create a project on {{companyConfig.COMPANY_NAME}}. Follow our documentation to learn how to upload your source code projects.

- [Upload source code or binary file](../Create-and-Manage-Project/Upload-Files-Directly)
- [Upload SCM repositories](../Create-and-Manage-Project/Add-SCM-Repositories)

### 3. Initiate a scan on your project

Use {{companyConfig.COMPANY_NAME}} to scan your open source projects and identify vulnerabilities and licensing risks. Depending on your project type, you can trigger a scan by selecting from a range of options in our documentation.

- [Software Composition Analysis (SCA)](../SCA/)
- Static Application Security Testing (SAST) (Coming soon)
- Fuzzing (Coming soon)
- Infrastructure as Code (IaC) (Coming soon)
- Code Snippet (Coming soon)

### 4. Access your scan results

After scanning your projects, {{companyConfig.COMPANY_NAME}} will provide a detailed report on any [vulnerabilities](../SCA/SCA-Vulnerabilities-Results.md) or [licensing risks](../SCA/SCA-Licenses.md) found.

### 5. Fix your vulnerabilities

It's time to fix the vulnerabilities detected in your Scan. Use our remediation strategies to quickly and efficiently address these issues and improve the overall quality of your software.

## What's next?

<hr class="thick">

You are now ready to start scanning your open source projects. {{companyConfig.COMPANY_NAME}} is designed to integrate seamlessly with your existing software development workflows and tools.

- Integrate {{companyConfig.COMPANY_NAME}} with your preferred CI/CD pipeline tools
- [Create compliance policies](../Compliance-Policy-Rules/)
  <br /><br />

With {{companyConfig.COMPANY_NAME}}, managing and securing your open source software has never been easier. Sign up today and start using our powerful tool to improve the security of your software.

If you have any questions or need assistance, please don't hesitate to contact {{companyConfig.COMPANY_NAME}} support at [support@scantist.com](mailto:support@scantist.com).
</ClientOnly>
