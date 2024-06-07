---
title: Code Traceability Analysis
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

> Under Code Snippets, Code Traceability Analysis is the first tab. Code Traceability Analysis shows the entire project in a tree structure, which provides an overview of which documents is affected by which scan.

<hr class="thick" />

## Code Traceability

Code Snippet will show an overview of Open-Source Security Components and the number of licenses and copyrights in the top panel. Under OSS Components, "Confirmed" counts refer to the number of components that the user is required to manually select each component from "Pending" to either "Confirm" or "Ignore" as shown below.

  <div style="flex: 1;">
    <img src="/images/Code-Snippet/code-snippet1.png" />
  </div>

Within the project tree structure, there are symbols next to each file, they represent the summary of number of components, licenses and copyrights respectively, as shown below.

  <div style="flex: 1;">
    <img src="/images/Code-Snippet/code-snippet2.png" />
  </div>

Under each file in the project, it is possible to view the Code Snippet/License/Copyright where code within the project is most similar to open source code found. Click on the "view" button and select which the option to view, and a popup will appear. Examples are shown below.

  <div style="flex: 1;">
    <img src="/images/Code-Snippet/code-snippet3.png" />
  </div>
  <br>
  <div style="flex: 1;">
    <img src="/images/Code-Snippet/code-snippet4.png" />
  </div>


</ClientOnly>
