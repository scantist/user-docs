---
title: Scan Engines in Scantist
author: Shamala Mani Vannan, Jackie Tan, Jabir
page: true
lang: en-US 
tags: scan types, scan engines
---

<script setup>
    import { companyConfig } from "../../../config/companyConfig.js"
</script>

<ClientOnly>

# {{ $frontmatter.title }}

> {{companyConfig.APP_NAME}} supports a wide array of scans for your project, including SCA, SAST, IaC, fuzzing tests, and code snippets.

## [Software Composition Analysis](../Scan-Engines/SCA/index)

- SCA, or Software Composition Analysis, scans and assesses open-source libraries and source code dependencies used within a project to detect any security vulnerabilities or outdated components. It ensures a thorough examination of third-party code, aiding in the identification and mitigation of potential risks arising from integrated libraries, enhancing overall software security. 

- Supported languages: Java, JavaScript, Python, Ruby, PHP <a href="../Language-and-File-Support/index">etc</a>.

## [Static Application Security Tool](../Scan-Engines/SAST-and-IaC/index)

- SAST, or Static Application Security Testing, examines source code for potential vulnerabilities without executing the program. By analyzing code structure and patterns, it identifies security weaknesses early in the development cycle, enabling proactive remediation to fortify the software against potential threats

- Supported languages: Java, JavaScript, Python, C#, PHP <a href="../Language-and-File-Support/index">etc</a>.

## [Infrastructure As Code](../Scan-Engines/SAST-and-IaC/index)

- Infrastructure as Code (IaC) scans focus on inspecting configuration files and scripts to pinpoint security misconfigurations within cloud infrastructure setups. By analyzing templates and definitions in tools like Terraform or CloudFormation, IaC scanning identifies potential security gaps, ensuring robust and secure deployment practices in cloud environments. 

- Supported platforms/languages: Terraform, CloudFormation, Dockerfile <a href="../Scan-Engines/SAST-and-IaC/#_4-iac-language">etc</a>.

## [Fuzzing Test](../Scan-Engines/Fuzzing/index)

- Fuzz testing, also known as fuzzing, systematically bombards software with random data inputs to uncover vulnerabilities and weaknesses. By subjecting applications to unexpected or malformed inputs, fuzz testing aims to provoke crashes or unexpected behavior, allowing developers to identify and address potential security vulnerabilities.

- Currently only support <a href="../Language-and-File-Support/#binary-file-formats">binary file formats</a>.

## [Code Snippets](../Scan-Engines/Code-Snippet/index)

- Code snippet scanning evaluates small sections of source code, to identify security issues and vulnerabilities. This focused analysis helps pinpoint potential risks within specific code segments, enabling targeted remediation and ensuring the overall integrity of the software.


</ClientOnly>