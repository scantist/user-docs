---
title: Get Started
author: Shamala Mani Vannan, Jackie Tan, Jabir
page: true
lang: en-US
tags: started, get started, welcome
---

<script setup>
import { companyConfig } from '../../../config/companyConfig.js'
</script>

<ClientOnly>

<h1>{{ $frontmatter.title }} with {{ companyConfig.APP_NAME }}</h1>

<blockquote>
    <p>Discover the ultimate tool for managing and securing the use of your open source software. With {{ companyConfig.APP_NAME }}, you can easily identify vulnerabilities and licensing risks in your open source projects and remediate them efficiently.</p>
</blockquote>

## Follow these five simple steps to get started

<hr class="thick">

<ol>
  <h3><li>Sign up for {{ companyConfig.APP_NAME }}</li></h3>

  To start using {{ companyConfig.APP_NAME }}, <a href="./Sign-up-for-more">sign up for an account</a> by following the instructions in our documentation.

  Once you have signed up, you will have access to our powerful open source management platform.

  <h3><li>Create a project</li></h3>

  To begin scanning your project for vulnerabilities, you'll need to create a project on {{companyConfig.APP_NAME}}. Follow our documentation to learn how to upload your source code projects.

  <ul>
    <li><a href="Create-and-Manage-Project/Upload-Files-Directly">Upload source code or binary file directly</a></li>
    <li><a href="Create-and-Manage-Project/Add-SCM-Repositories">Add SCM repositories</a></li>
  </ul>

  <h3><li>Initiate a scan on your project</li></h3>

  Use {{companyConfig.APP_NAME}} to scan your open source projects and identify vulnerabilities and licensing risks. Depending on your project type, you can trigger a scan by selecting from a range of options in our documentation.

  <ul>
    <li><a href="../../en-US/Scan-Engines/SCA/index">Software Composition Analysis (SCA)</a></li>
    <li><a href="../../en-US/Scan-Engines/SAST-and-IaC/index">Static Application Security Testing (SAST)</a></li>
    <li><a href="../../en-US/Scan-Engines/SAST-and-IaC/index">Infrastructure as Code (IaC) Scan</a></li>
    <li><a href="../../en-US/Scan-Engines/Fuzzing/index">Fuzzing Test</a></li>
    <li><a href="../../en-US/Scan-Engines/Code-Snippet/index">Code Snippets</a></li>
  </ul>

  <h3><li>Access your scan results</li></h3>

  After scanning your projects, {{companyConfig.APP_NAME}} will provide a detailed report on any <a href="../Scan-Engines/SCA/Vulnerabilities/index">vulnerabilities</a> or <a href="../Scan-Engines/SCA/Licenses">licensing risks</a> found.

  <h3><li>Fix your vulnerabilities</li></h3>

  It's time to fix the vulnerabilities detected in your scan. Use our remediation strategies to quickly and efficiently address these issues and improve the overall quality of your software.

</ol>

<h2>What's next?</h2>

<hr class="thick">

You are now ready to start scanning your open source projects. {{companyConfig.APP_NAME}} is designed to integrate seamlessly with your existing software development workflows and tools.

<ul>
  <li><a href="../Management-and-Settings/Integrations-Settings/index">Integrate {{companyConfig.APP_NAME}} with your preferred CI/CD pipeline tools</a></li>
  <li><a href="../Management-and-Settings/Compliance-Policy-Rules/index">Create compliance policies</a></li>
</ul>

With {{companyConfig.APP_NAME}}, managing and securing your open source software has never been easier. Sign up today and start using our powerful tool to improve the security of your software.

If you have any questions or need assistance, please don't hesitate to contact {{companyConfig.APP_NAME}} support at <a :href="`mailto:${companyConfig.EMAIL_ADDRESS}`">{{companyConfig.EMAIL_ADDRESS}}</a>.

</ClientOnly>
