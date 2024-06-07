---
title: OSS Components Identification
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: SBOM, report, format, spdx, cyclonedx, swid, json, xml, csv, pdf, docx
description: This document explains how to export reports
---

<script setup>
import { companyConfig } from '../../../../config/companyConfig.js'
</script>

<ClientOnly>

# {{ $frontmatter.title }}

> OSS Components refer to open source security components, as a project uses parts of open source code, this scan will identify such files.

<hr class="thick" />

## OSS components

Under "No. of Files Matched" the number within each row can be clicked on, which will subsequently redirect the page back to traceability analysis for further information. "No. of Files Matched" refers to how many files within the current project has been detected utilizing that corresponding open source security component in that same row.

  <div style="flex: 1;">
    <img src="/images/Code-Snippet/code-snippet5.png" />
  </div>

The arrow down beside each row can be clicked on to show vulnerabilities details and license details which are associated to that specific open source security component.

  <div style="flex: 1;">
    <img src="/images/Code-Snippet/code-snippet10.png" />
  </div>

</ClientOnly>
