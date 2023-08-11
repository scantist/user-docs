---
title: Export Reports on
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: SBOM, report, format, spdx, cyclonedx, swid, json, xml, csv, pdf, docx
description: This document explains how to export reports
---

<script setup>
import { companyConfig } from '../../../config/companyConfig.js'
</script>

<ClientOnly>

# {{ $frontmatter.title }} {{companyConfig.APP_NAME}}

> You can generate {{companyConfig.APP_NAME}} report and SBOM report to understand the components that are used in an application and to identify any potential vulnerabilities or compliance

## {{companyConfig.APP_NAME}} reports

<hr class="thick" />

{{companyConfig.APP_NAME}} provides the ability to export scan results in multiple file formats, allowing you to easily share the results with stakeholders. Supported formats include:

- **JSON**
- **XML**
- **CSV**
- **PDF**
- **DOCX**

## SBOM reports

{{companyConfig.APP_NAME}} provides the ability to generate Software Bill-of-Materials (SBOM) reports in multiple formats, allowing you to better understand the components used in your application as well as their associated metadata. Supported formats include:

- **SPDX**

- **CycloneDX**

- **SWID**

:::tip **Define SBOM Formats**

**SPDX (Software Package Data Exchange)**

- Standard format for sharing SBOM information between organizations

- Defines a common set of metadata for software components, such as licenses information, copyrights and security vulnerabilities

**CycloneDX**

- Open standard for representing SBOM information in a machine-readable format

- Defines a common set of metadata for software components, including software dependencies, licenses and vulnerabilities

**SWID (Software Identification)**

- Standard format for identifying software components and their metadata

- SWID tags are XML files that contain information about the software components, such as library name, version and vendor, as well as associated metadata, such as license information and security vulnerabilities

:::

## Follow these steps to generate and export reports

1. Click on the "Reports" button on the SCA results page

<img src="/images/Application-Security-Testing-Solution/SCA/Export-Reports-on-app-1.png" alt="Click on the Reports button" style="width:100%; display: block; margin: 0 auto">

2. In the pop-up window, select the files you want to export (you may select more than one)

<img src="/images/Application-Security-Testing-Solution/SCA/Export-Reports-on-app-2.png" alt="Select the files to export" style="width:380px; display: block; margin: 0 auto">

3. Click on the "Generate" button

<img src="/images/Application-Security-Testing-Solution/SCA/Export-Reports-on-app-3.png" alt="Click on the Generate button" style="width:100%; display: block; margin: 0 auto">

4. Once the report is generated, you will see a "tick" icon next to the report format to indicate that the file is available to download

<img src="/images/Application-Security-Testing-Solution/SCA/Export-Reports-on-app-4.png" alt="Once the report is generated" style="width:150px; display: block; margin: 0 auto">

5. Click on the "Export" button to export the reports

<img src="/images/Application-Security-Testing-Solution/SCA/Export-Reports-on-app-5.png" alt="Click on the Export button" style="width:100%; display: block; margin: 0 auto">

</ClientOnly>
