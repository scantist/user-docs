---
title: Copyright Detection
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

> Copyright detection shows what copyrights are being used within the project.

<hr class="thick" />

## Copyright Detection

Under "No. of Files Matched" the number within each row can be clicked on, which will subsequently redirect the page back to traceability analysis for further information. "No. of Files Matched" refers to how many files within the current project has been detected utilizing that corresponding copyright component in that same row.

  <div style="flex: 1;">
    <img src="/images/Code-Snippet/code-snippet9.png" />
  </div>

</ClientOnly>
