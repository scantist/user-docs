---
title: SCA
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: SCA, software composition analysis, components, vulnerabilities, compliance
description: This document explains what software composition analysis is
---
<script setup lang="ts">
    import HelloWorld from "/.vitepress/components/HelloWorld.vue"
</script>

<ClientOnly>

<HelloWorld />
# {{ $frontmatter.title }}

> <img src="/images/Application-Security-Testing-Solution/SCA/SCA-logo.png" width=100 /> Discover Scantist's capabilities with SCA

## Software Composition Analysis Testing Solution

<hr class="thick" />

Software Composition Analysis (SCA) scans your application's dependencies to identify any known vulnerabilities in the third-party libraries and frameworks. Once you have scanned your projects using SCA, Scantist will detect the components, vulnerabilities and compliance issues of the project. 

![SCA result](/images/Application-Security-Testing-Solution/SCA/SCA-1.png)

It is important to note that components can have vulnerabilities that can lead to compliance issues if they are not addressed properly. 

## Components

<hr class="thick" />

SCA scan can identify all the third-party components used in your application, including libraries, frameworks, and plugins. The tool can provide you with a comprehensive list of all the components and their versions, allowing you to understand the exact dependencies your application is relying on. This helps you to make informed decisions about upgrading or replacing components as needed. 

- [SCA Components Results]()

## Vulnerabilities

<hr class="thick" />

SCA scan can identify any known vulnerabilities in the third-party components used in your application. The tool uses multiple vulnerability databases to provide you with a comprehensive list of vulnerabilities, along with details such as the severity level and a description of the issue. This helps you to prioritize which vulnerabilities to address first and take appropriate actions to remediate them. 

- [SCA Vulnerabilities Results]()

- [Remediate Issues]()

## Compliance

<hr class="thick" />

SCA scan can identify any compliance issues related to the third-party components used in your application. The tool can check for license compliance, identify any components with incompatible licenses, and also check for policy violations. This can help you to ensure that your application is in compliance with any relevant regulations or guidelines. 

- [SCA Compliance Results]()

- [Create Compliance Policies]()

</ClientOnly>