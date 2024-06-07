---
title: Crash Detections
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

> Similar to issue detections, crash detections additional information on issues that cause the program to crash.

<hr class="thick" />

## Crash Detections

Additional information is displayed, such as which open source vulnerability is detected, together with a summary of evidence what caused the issue. A proof of concept (POC) can be downloaded by clicking on the "Sample POC" on the right.

  <div style="flex: 1;">
    <img src="/images/Fuzzing/fuzzing2.png" />
  </div>

</ClientOnly>
