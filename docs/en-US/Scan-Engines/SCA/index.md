---
title: SCA
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: SCA, software composition analysis, components, vulnerabilities, compliance
description: This document explains what software composition analysis is
---

<script setup>
import { companyConfig } from '../../../../config/companyConfig.js'
</script>

<ClientOnly>

# {{ $frontmatter.title }}

> <img src="/images/SCA/SCA-logo.png" width=100 /> Discover {{companyConfig.APP_NAME}}'s capabilities with SCA

## Software Composition Analysis Testing Solution

<hr class="thick" />

Software Composition Analysis (SCA) scans your application's dependencies to identify any known vulnerabilities in the third-party libraries and frameworks. By leveraging SCA, you can ensure that your software meets security and compliance standards by addressing potential vulnerabilities in a timely manner.

<img src="/images/SCA/SCA-1.png" />

## Scanning Process

<hr class="thick" />

{{companyConfig.APP_NAME}} SCA follows a comprehensive scanning process to analyze your project's components, detect vulnerabilities, and assess associated licenses. The results involved in the scanning process are as follows:

### Components Identification

SCA scan identifies all the third-party components used in your application, including libraries, frameworks, and plugins. The tool can provide you with a comprehensive list of all the components and their versions, allowing you to understand the exact dependencies your application is relying on. This helps you to make informed decisions about upgrading or replacing components as needed.

- SCA Components Results

### Vulnerabilities Detection

SCA scan detects any known vulnerabilities in the third-party components used in your application. The tool uses multiple vulnerability databases to provide you with a comprehensive list of vulnerabilities, along with details such as the severity level and a description of the issue. This helps you to prioritize which vulnerabilities to address first and take appropriate actions to remediate them.

- SCA Vulnerabilities Results

### License Assessment

SCA scan performs license analysis on the third-party components used in your application. It helps you ensure compliance by identifying any licensing issues associated with the third-party libraries and frameworks used in your application.

- SCA Licenses Results

### Policy Rule

SCA allows you to define custom policies that align with your organization's specific requirements. These policies may cover areas such as security, code quality, vulnerability management, or any other relevant guidelines. The engine scans your application's components against these policies, highlighting any violation and generating comprehensive reports to assist with remediation.

- Create Compliance Policies
- SCA Compliance Results

### Remediation

When vulnerabilities are identified through the scanning process, SCA provides actionable information to facilitate remediation. This includes details such as the severity level and description of the vulnerabilities, as well as recommendations for applying a fix, which may involve upgrading to a patched version. This helps streamline the remediation process and ensure that vulnerabilities are addressed effectively.

- SCA Remediation

### SBOM Dependency Tree

The dependency graph is a visual representation of the relationships between the various components in your application. It illustrates how different libraries and frameworks depend on each other, providing a clear understanding of the software's overall structure.

- SCA SBOM Dependency Tree

</ClientOnly>
