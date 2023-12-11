---
title: Settings
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: settings, customize
---

<script setup>
import { companyConfig } from '../../../../user-docs/config/companyConfig.js'
</script>

<ClientOnly>

<h1> {{ $frontmatter.title }} </h1>

<blockquote>
    <p>You can change the settings of your {{companyConfig.APP_NAME}} account.</p>
</blockquote>

<h2>Settings Options</h2>

<hr style="border:2px solid gray" />

{{companyConfig.APP_NAME}} provides multiple setting options to help you customize your experience and tailor it to your specific needs. To access these settings, click on the "Settings" tab located at the navigation bar.

<ul>
    <li><a href="./Organization">Organization Settings</a></li>
    <li><a href="./Members-and-Teams">Teams and Members</a></li>
    <li><a href="./Tags">Tags Settings</a></li>
    <li><a href="./Integrations-Settings/">Integrations Settings</a></li>
</ul>

</ClientOnly>
