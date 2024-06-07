---
title: License Conflict
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

> License Conflict tab shows which licenses are in conflict against each other. A conflict analysis is done on every identified license based on their respective attribute category.

<hr class="thick" />

## License Conflict

For example, "GPL-2.0-or-later" is in conflict with "BSL-1.0", under "Place Warranty" row, "GPL-2.0-or-later" is "Allowed", while "BSL-1.0" specifies "Restricted".

  <div style="flex: 1;">
    <img src="/images/Code-Snippet/code-snippet8.png" />
  </div>

</ClientOnly>
