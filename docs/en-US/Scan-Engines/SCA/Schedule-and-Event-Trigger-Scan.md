---
title: Schedule and Event Trigger Scan
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

> Project scanning can be triggered based on a schedule, or when an event such as a change in the project happens.

<hr class="thick" />

## Trigger Scan

In a project, the settings button opens the choice for scan settings. Under scan settings, the options available are to schedule a scan. Only projects that are integrated from github/gitlab, or imported from SCM integration will have the option for event-driven scan.

  <div style="flex: 1;">
    <img src="/images/SCA/event-scan.png" />
  </div>

</ClientOnly>
