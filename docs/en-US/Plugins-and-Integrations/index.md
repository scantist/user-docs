---
title: Scan Triggers
author: Shamala Mani Vannan, Jackie Tan, Jabir
page: true
lang: en-US
tags: trigger scans, main page
---

<script setup>
    import { companyConfig } from '../../../config/companyConfig.js'
</script>

<ClientOnly>

# {{ $frontmatter.title }} for {{ companyConfig.APP_NAME }} Toolchain

> CI/CD Integration and Triggering {{companyConfig.APP_NAME}} Scans

## Continuous Integration and Continuous Delivery

**Continuous Integration (CI)**: Automatically builds and tests code changes committed by developers multiple times per day to detect issues early.

**Continuous Delivery (CD)**: Automatically deploys code changes to testing or production environments when ready. Requires manual approval to deploy changes.

- <a href="../Plugins-and-Integrations/Build-based-Scan-CICD-Pipeline/index">Build-based Scan - CI/CD Pipeline</a>
- <a href="../Plugins-and-Integrations/Trigger-Scan-via-UI/index">Trigger Scan via Scantist UI</a>

</ClientOnly>