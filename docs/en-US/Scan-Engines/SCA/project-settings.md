---
title: Project settings
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: SCA, licenses, types, permissive, neutral, restrictive, attributes
description: This document explains SCA Licenses
---

<ClientOnly>

# {{ $frontmatter.title }}

> SCA engine supports multiple file formats for SBOM (Software Bill Of Materials) and various settings to help detect possible loopholes in the code.

## Project Settings

Under project settings, the project can include a description, add or remove teams and different compliance policies can be chosen as shown below.

  <div style="flex: 1;">
    <img src="/images/SCA/project-settings1.png" />
  </div>

## Scan Settings

Under scan settings, scheduled scans and event driven scans can be created. Note that event driven scan is only available on projects that are integrated by a source code management (SCM), such as github/gitlab.

  <div style="flex: 1;">
    <img src="/images/SCA/sca-new-scan-settings.png" />
  </div>

## Upload New Version / SBOM File Upload

Depending on the project uploaded for scan, 'SBOM File Upload' is the setting present when a project is created from SBOM file. Otherwise, the setting will show 'File Upload'.

CycloneDX, SPDX, SWID are the formats supported for SBOM formats. It is required for the format to be set before executing a SCA scan.

<div style="display: flex;">
  <div style="flex: 1; margin-right: 10px;">
    <img src="/images/SCA/sca-sbom-format.png" />
  </div>
  <div style="flex: 1;">
    <img src="/images/SCA/sca-upload-new-version.png" />
  </div>
</div>


<hr class="thick" />


</ClientOnly>