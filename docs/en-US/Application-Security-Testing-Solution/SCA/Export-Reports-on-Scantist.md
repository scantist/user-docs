---
title: Export Reports on Scantist
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: SBOM, report, format, spdx, cyclonedx, swid, json, xml, csv, pdf, docx
description: This document explains how to export reports
---

<ClientOnly>

# {{ $frontmatter.title }}

>You can generate Scantist report and SBOM report to understand the components that are used in an application and to identify any potential vulnerabilities or compliance

## Scantist reports

<hr class="thick" />

Scantist provides the ability to export scan results in multiple file formats, allowing you to easily share the results with stakeholders. Supported formats include: 

- **JSON**
- **XML**
- **CSV**
- **PDF**
- **DOCX**

## SBOM reports

Scantist provides the ability to generate Software Bill-of-Materials (SBOM) reports in multiple formats, allowing you to better understand the components used in your application as well as their associated metadata. Supported formats include: 

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

![Click on the Reports button](/images/Application-Security-Testing-Solution/SCA/Export-Reports-on-Scantist-1.png)

2. In the pop-up window, select the files you want to export (you may select more than one)

![Select the files to export](/images/Application-Security-Testing-Solution/SCA/Export-Reports-on-Scantist-2.png)

3. Click on the "Generate" button

![Click on the Generate button](/images/Application-Security-Testing-Solution/SCA/Export-Reports-on-Scantist-3.png)

4. Once the report is generated, you will see a "tick" icon next to the report format to indicate that the file is available to download

![A tick icon next to the report format](/images/Application-Security-Testing-Solution/SCA/Export-Reports-on-Scantist-4.png)

5. Click on the "Export" button to export the reports

![Click on the Export button](/images/Application-Security-Testing-Solution/SCA/Export-Reports-on-Scantist-5.png)

</ClientOnly>