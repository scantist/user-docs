---
title: Infrastructure as Code (IaC)
author: Shamala Mani Vannan, Jackie Tan, Jabir
page: true
lang: en-US
tags: IaC, infrastructure as code
description: This document explains what Infrastructure as Code tool is
---

<script setup>
import { companyConfig } from '../../../../../user-docs/config/companyConfig.js'
</script>

<ClientOnly>

# {{ $frontmatter.title }}

> <img src="/images/IaC/IaC-logo.png" width=100 /> Discover {{companyConfig.APP_NAME}}'s capabilities with IaC

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
