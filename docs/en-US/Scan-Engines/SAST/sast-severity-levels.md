---
title: SAST Severity Levels
author: Shamala Mani Vannan, Jackie Tan, Jabir
page: true
lang: en-US
tags: SAST, static application security tool, sast severity levels
description: This document explains what static application security tool severity levels is
---

<script setup>
import { companyConfig } from '../../../../../user-docs/config/companyConfig.js'
</script>

<ClientOnly>

# {{ $frontmatter.title }}

> The criticality of vulnerabilities or issues identified by SAST helps the team prioritize and address them based on their potential impact on the application’s security. 

## Critical
<hr class="thick" />

<b>Impact:</b> Critical issues may pose a severe threat to the security of the application - including remote code execution or authentication bypass. 

<b>Action Required:</b> Immediate attention and resolution are crucial to prevent potential security breaches or critical system compromises.  


## High
<hr class="thick" />

<b>Impact:</b> High severity issues still pose a significant threat to the application security - including SQL injection vulnerabilities or sensitive data exposure.

<b>Action Required:</b> Urgent mitigation and resolution are recommended to prevent possible security vulnerabilities or system weaknesses. 


### Medium
<hr class="thick" />

<b>Impact:</b> Medium severity issues have a moderate impact on the security of the application, including issues like cross-site scripting (XSS) vulnerabilities or potential information leakage.

<b>Action Required:</b> Timely attention and resolution are advised to prevent these vulnerabilities from being exploited. 


### Low
<hr class="thick" />

<b>Impact:</b> Low severity issues have a minimal impact - such as informational findings or minor configuration problems. 

<b>Action Required:</b> Although less urgent, addressing these issues helps maintain a robust security stance and should be managed within a reasonable timeframe 

</ClientOnly>
