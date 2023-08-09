---
title: Settings
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: settings, customize
---

<script setup>
import { companyConfig } from '../../../config/companyConfig.js'
</script>

<ClientOnly>

# {{ $frontmatter.title }}

> You can change the settings of your {{companyConfig.COMPANY_NAME}} account.

## Settings Options

<hr style="border:2px solid gray" />

{{companyConfig.COMPANY_NAME}} provides multiple setting options to help you customize your experience and tailor it to your specific needs. To access these settings, click on the “Settings” tab located at the navigation bar.

- [Organization Settings](Organization.md)
- [Teams and Members](Members-and-Teams/)
- [Tags Settings](Tags.md)
- [Integrations Settings](Integrations-Settings/)

</ClientOnly>
