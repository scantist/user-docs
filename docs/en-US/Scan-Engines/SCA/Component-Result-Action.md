---
title: Component Result Action
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

> *This feature is only available for enterprise users only. 

> Users can manually confirm if a component in a project should appear in the report, or should be ignored for subsequent scans.

<hr class="thick" />

## Component Action

First choose a project that has a SCA scan completed. For enterprise users, there will be a checkbox next to the component. Upon clicking on the checkbox, a popup will appear at the bottom of the screen. 'Confirm' will leave the component inside the scan, while 'ignore' will hide the component for the current and subsequent scans.

  <div style="flex: 1;">
    <img src="/images/SCA/sca-component-result1.png" />
  </div>

</ClientOnly>
