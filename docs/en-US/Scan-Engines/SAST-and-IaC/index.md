---
title: Static Application Security Tool (SAST) and Infrastructure as Code (IaC)
author: Shamala Mani Vannan, Jackie Tan, Jabir
page: true
lang: en-US
tags: IaC, infrastructure as code
description: This document explains what Infrastructure as Code tool is
---

<script setup>
import { companyConfig } from '../../../../config/companyConfig.js'
</script>

<ClientOnly>

# {{ $frontmatter.title }}

> <img src="/images/IaC/IaC-logo.png" width=100 /> Discover {{companyConfig.APP_NAME}}'s capabilities with IaC

## Static Application Security Tool (SAST) Solution

<hr class="thick" />

Static Application Security Testing (SAST) scans your application source code for potential security vulnerabilities and weaknesses. By employing SAST, you can proactively identify and mitigate security threats within your codebase, ensuring adherence to security best practices and fortifying your software against potential risks throughout the development lifecycle. 

## SAST Insights

<hr class="thick" />

{{companyConfig.APP_NAME}} SAST analyzes source code or binary code to find security vulnerabilities within the code itself. The results involved in the scanning process are as follows:

> <img src="/images/SAST/SAST-insights.png">

### Severity of Issue

The severity level indicates the extent of seriousness associated with a detected problem found within the codebase. It's important to note that an issue might be attributed to multiple severity levels if it affects more than one aspect of software quality. For example, an issue might significantly impact the security of your software <b style="color: red;">(High)</b> while having a relatively minor influence on its maintainability <b style="color: yellow;">(Low)</b>.  

<!-- - <a href="/en-US/Scan Engines/SAST/sast-severity-levels">SAST Severity Levels</a> -->

### Issue Type

The specific issue identified within the highlighted code segment depends on the characteristics of the code being examined. There exist four predefined types: 

<b>1. Vulnerability</b> is the weakness within the code that could be exploited by a malicious actor to compromise the security of the software. Vulnerabilities often include issues like input validation errors, insecure data storage, or insufficient authentication mechanisms.

<b>2. Bugs</b> can vary from logical errors to problems causing runtime failures that might result in unexpected behavior or software malfunctioning. 

<b>3. Code smell</b> doesn’t necessarily represent security vulnerabilities by indicating areas where the code can be improved for better maintainability, readability, or efficiency. This includes duplicated code, overly complex functions, or inconsistent naming conventions.

<b>4. Security Hotspot</b> is a part of the code with a higher likelihood of containing security vulnerabilities. It serves as a key point for further security analysis and review, even if a particular vulnerability may not be identified at that stage. 

### Common Weakness Enumeration (CWE)

<a href="https://cwe.mitre.org/">CWE</a> is a community-driven catalog detailing prevalent software security vulnerabilities. Managed by <a href="https://www.mitre.org/">The MITRE Corporation</a>, CWE serves as a universal system facilitating discussions and resolutions of issues and weaknesses across diverse programming languages. 

The primary objective of CWE is to establish a shared platform for discussing, identifying, and mitigating software security concerns. Every weakness listed in the CWE is assigned to a unique identifier and is supplemented by a comprehensive description, examples, and potential solutions. This standardized method aids developers, security experts, and organizations in managing vulnerabilities consistently.

### Programming Language

The column reflects the programming language that underwent the scan. It specifically pertains to one of the multiple programs languages compatible with Scantist. 

- <a href="/en-US/Language-and-File-Support/">SAST Language Support</a>

### Code Line

Scantist specifies the line number of code where a potential security vulnerability or weakness exists. Click on the issue to view the highlighted code that requires your attention and needs further examination or correction. 

> <img src="/images/SAST/SAST-code-line.png">

### Built-in Rule Tags

Tags serve as a classification method for rules and issues. Issues inherit the tags associated with the rules that detected them. While certain tags are specific programming languages, many apply universally across different languages. 

- <a href="https://docs.sonarsource.com/sonarqube/9.8/user-guide/rules/built-in-rule-tags/" target="_blank">List of built-in tags</a>

## Infrastructure as Code (IaC) Testing Solution

<hr class="thick" />

Infrastructure as Code (IaC) scanning, involves scrutinizing the code responsible for defining and managing IT infrastructure. The primary goal is to pinpoint security vulnerabilities, ensure compliance and identify other potential issues.

Comparatively, IaC scanning shares similarities with Static Application Security Testing (SAST) as it entails the analysis of code. However, in this case, the focus is on infrastructure code rather than the source code of applications. IaC scanning proves valuable in uncovering misconfigurations, insecure defaults and other concerns within infrastructure code before deployment. This proactive approach contributes to establishing secure and compliant infrastructure from the outset.

> <img src="/images/IaC/IaC-testing-solution.png">

<hr class="thick"/>

## Infrastructure as Code Insights

> <img src="/images/IaC/IaC-insights.png">

### 1. Issue Severity 

Issue severity in the context of highlighted code refers to the level of severity associated with the identified problem. This severity is assessed according to its impact on various software qualities. There are four predefined levels: <b>Critical, High, Medium</b> and <b>Low</b>. This is indicated by the cautionary sign and its shade.

> <img src="/images/IaC/IaC-issue-severity.png" width="300">

It's important to note that an issue may be assigned multiple severity levels if it affects more than one aspect of software quality. For instance, an issue might significantly impact the security of your software (High) while having a comparatively lower impact on its maintainability (Low).


### 2. CHECKOV IAC

{{companyConfig.APP_NAME}}'s Infrastructure as Code (IaC) framework is constructed upon the Checkov static code analysis tool designed for Infrastructure as Code (IaC). This framework is capable of scanning cloud infrastructure created through various tools. It also employs a graph-based scanning approach to identify security and compliance misconfigurations.

### 3. CHECKOV Identifier

This column serves as a reference within the Checkov policy index, specifying the entity and policy to which it pertains. It provides information about the associated entity and the corresponding policy within the Checkov framework.

### 4. IaC Language

This column indicates the IaC language that was scanned. It specifically pertains to one of the many  languages that our application can work with.

- Terraform
- Cloudformation
- AWS SAM (Serverless Application Model)
- Kubernetes
- Helm Charts
- Kustomize
- Dockerfile
- Serverless
- Bicep
- OpenAPI
- ARM

### 5. Code Line

When a line of code is highlighted, it typically indicates that there is a potential security vulnerability or issue identified in that specific line. The highlighting serves to draw attention to the part of the code that requires further examination or correction. 

It generally signifies areas where security concerns, such as code vulnerabilities or weaknesses, have been detected. Developers then need to review and address these highlighted lines to enhance the security of the code.

> <img src="/images/IaC/IaC-code-line.png" width="500">

### 6. Build-in cloud tag

Tags play a crucial role in categorizing cloud environment. While certain tags may be specific to particular cloud providers such as AWS, GCP, Azure, Alibaba Cloud, etc., many tags are relevant across diverse cloud environments. Below is a list of some of these default cloud tags.

- Amazon Web Services (AWS)
- Google Cloud Platform (GCP)
- Microsoft Azure
- Alibaba Cloud
- DigitalOcean
- OpenStack
- Kubernetes

</ClientOnly>
