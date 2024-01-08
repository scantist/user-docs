---
title: Static Application Security Tool (SAST)
author: Shamala Mani Vannan, Jackie Tan, Jabir
page: true
lang: en-US
tags: SAST, static application security tool
description: This document explains what static application security tool is
---

<script setup>
import { companyConfig } from '../../../../config/companyConfig.js'
</script>

<ClientOnly>

# {{ $frontmatter.title }}

> <img src="/images/SAST/SAST-logo.png" width=100 /> Discover {{companyConfig.APP_NAME}}'s capabilities with SAST

## Static Application Security Tool (SAST) Solution

<hr class="thick" />

Static Application Security Testing (SAST) scans your application source code for potential security vulnerabilities and weaknesses. By employing SAST, you can proactively identify and mitigate security threats within your codebase, ensuring adherence to security best practices and fortifying your software against potential risks throughout the development lifecycle. 

## SAST Insights

<hr class="thick" />

{{companyConfig.APP_NAME}} SAST analyzes source code or binary code to find security vulnerabilities within the code itself. The results involved in the scanning process are as follows:

> <img src="/images/SAST/SAST-insights.png">

### Severity of Issue

The severity level indicates the extent of seriousness associated with a detected problem found within the codebase. It's important to note that an issue might be attributed to multiple severity levels if it affects more than one aspect of software quality. For example, an issue might significantly impact the security of your software <b style="color: red;">(High)</b> while having a relatively minor influence on its maintainability <b style="color: yellow;">(Low)</b>.  

- <a href="/en-US/Scan Engines/SAST/sast-severity-levels">SAST Severity Levels</a>

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




</ClientOnly>
