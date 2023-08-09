---
title: SCA Components Results
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: SCA, OSS components, results
description: This document explains SCA Components Results
---

<script setup>
import { companyConfig } from '../../../config/companyConfig.js'
</script>

<ClientOnly>

# {{ $frontmatter.title }}

> Review the comprehensive results of SCA open source components to manage the security and compliance of your software

## OSS Components Details

<hr class = "thick" />

{{companyConfig.APP_NAME}} provides the component details in a table format. The table includes the following columns:

| Results          | Description                                                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Component        | The name of the component used in the software project                                                                         |
| Version          | The version of the component used in the software project                                                                      |
| Latest Version   | The latest version of the component available                                                                                  |
| Scope            | The scope of component, whether it’s a Dependencies or devDependencies                                                         |
| Root             | The root of the component, the initial dependency that pulled it into the project                                              |
| Depth            | The level of the component’s dependency in the software project                                                                |
| Language         | The [programming language](../Language-and-File-Support/) of the component                                                     |
| File Path        | The path to the file containing the component                                                                                  |
| Module           | The name of the module that contains the component                                                                             |
| Vulnerabilities  | The [vulnerabilities]() associated with the components, categorized as critical, high, medium and low                          |
| License          | The OSS licenses associated with the component                                                                                 |
| Detection Method | The method used to detect the component. There are `SIGNATURE`, `NAME_MATCH`, `HASH` and `BOM`. Scroll below for more details. |
| Match Rate       | The rate at which the tool matched the component with its database                                                             |

## Vulnerable components

<hr class="thick" />

To identify vulnerable components that require immediate attention and remediation, you can filter the vulnerabilities bar to critical and high.

<div style="display: flex;">
<div style="flex: 1;">

![Vulnerable components](/images/Application-Security-Testing-Solution/SCA/SCA-Components-Results-1.png)

</div>

<div style="flex: 2;margin-left: 15px;">

1.&nbsp;&nbsp;&nbsp;Navigate to the **"Vulnerabilities"** bar in the SCA results page

2.&nbsp;&nbsp;&nbsp;Select the severity level of the vulnerabilities

3.&nbsp;&nbsp;&nbsp;Once the filter is applied, the list displays only the components that have the selected severity level

</div>
</div>

:::tip
Learn more of vulnerabilities severity levels

insert link
:::

## Detection Method

<hr class="thick" />

{{companyConfig.APP_NAME}} use various detection methods to identify and verify the open source component used in a software project.

<div style="display: flex;">
<div style="flex: 2;margin-left: 15px;">

1.&nbsp;&nbsp;&nbsp;Navigate to the **"Detection Method"** bar in the SCA results page

2.&nbsp;&nbsp;&nbsp;Select the methods of detection

3.&nbsp;&nbsp;&nbsp;Once the filter is applied, the list displays only the components that have the selected detection method

</div>
<div style="flex: 1;">

![Detection Method](/images/Application-Security-Testing-Solution/SCA/SCA-Components-Results-2.png)

</div>
</div>

### Signature-based detection

This method involves searching for the unique signatures of known open source components in the software's source code or binary. Each component has a unique signature that is generated based on its source code or binary.

### Name matching

This method involves comparing the names of the software components used in the project against a database of known open source components. This method may not be reliable since different versions of a component may have slightly different names or aliases.

### Hash

This method involves comparing the hash value of a component's binary code with a database of known hash values. The hash value is a unique digital fingerprint of a component that is generated based on its binary code. This method is useful for identifying components that have been compiled or packaged.

### BOM

This method involves scanning a project's Bill-of-Materials (BOM) to identify the open source components used in the project. The BOM is a list of all the components and their versions used in a project. This method is the most accurate and reliable since it involves analyzing the entire list of components and dependencies.

## Match Rate

<hr class="thick" />

</ClientOnly>
