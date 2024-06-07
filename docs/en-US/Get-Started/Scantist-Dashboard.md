---
title: Introducing Scantist Dashboard
author: Shamala Mani Vannan, Jackie Tan, Jabir
page: true
lang: en-US
tags: dashboard
---

<script setup>
import { companyConfig } from '../../../config/companyConfig.js'
</script>

<style scoped>
  ol>li {
    font-weight: 600;
  }
</style>

<ClientOnly>

# {{ $frontmatter.title}}

## Latest Vulnerability Alert Card

<hr class="thick" />

  <div style="flex: 1;">
    <img src="/images/Scantist-Dashboard/latest_vulnerability_alert2.png" />
  </div>

After Scantist updates the database to get the latest vulnerabilities, Latest Vulnerabilities Alert Card will show the new vulnerabilities that are affecting your current projects.

## Compliance Card

<hr class="thick" />

  <div style="flex: 1;">
    <img src="/images/Scantist-Dashboard/compliance.png" />
  </div>

The compliance card shows the total number of rules that match with the individual vulnerabilities of the scan results.

## SCA Card

<hr class="thick" />

  <div style="flex: 1;">
    <img src="/images/Scantist-Dashboard/sca.png" />
  </div>

The SCA (Source Code Analysis) card shows the summary of scans for all existing projects, providing total vulnerabilities, unique licenses used within the code, and top 5 highest risk projects.

## Fuzzing Card

<hr class="thick" />

  <div style="flex: 1;">
    <img src="/images/Scantist-Dashboard/fuzzing.png" />
  </div>

The Fuzzing card shows the total number of crashes in all your projects, and the top 5 highest risk projects.

## SAST Card

<hr class="thick" />

  <div style="flex: 1;">
    <img src="/images/Scantist-Dashboard/sast.png" />
  </div>

The Static application security testing (SAST) card shows the total number of vulnerabilities in all your projects, and the top 5 highest risk projects.

## IaC Card

<hr class="thick" />

  <div style="flex: 1;">
    <img src="/images/Scantist-Dashboard/iac.png" />
  </div>

The Infrastructure as Code (IaC) card shows the total number of vulnerabilities in all your projects, and the top 5 highest risk projects.

</ClientOnly>