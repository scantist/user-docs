---
title: SCM Integration
author: Shamala Mani Vannan, Jackie Tan, Jabir
page: true
lang: en-US
tags: scm, integration, github, gitlab, bitbucket
---

<script setup>
import { companyConfig } from '../../../../user-docs/config/companyConfig.js'
</script>
<ClientOnly>

<h1> {{ $frontmatter.title }} </h1>

<blockquote>
    <p>Do you have repositories in more than one Source Control Management (SCM) account? You can now connect to multiple SCM platforms.</p>
</blockquote>

## Supported SCM platforms

<hr class="thick" />

{{companyConfig.APP_NAME}} currently supports integration with the following SCM platforms:

<ul>
    <li><a href="https://github.com" target="_blank">GitHub</a></li>
    <li><a href="https://gitlab.com" target="_blank">GitLab</a></li>
    <li><a href="https://bitbucket.org" target="_blank">Bitbucket</a></li>
</ul>

::: warning Note:
To use the SCM integration with {{companyConfig.APP_NAME}}, you must have an active {{companyConfig.APP_NAME}} account and have access to your SCM platform
:::

## Connecting your SCM account

<hr class="thick" />

To connect your SCM account to {{companyConfig.APP_NAME}}, follow these steps:

1. Navigate to the profile tab and select "SCM Integration" from the drop-down list

   ![profile tab then SCM Integration](/images/Get-Started/SCM-Integration-1.png)

2. Select the SCM platform you want to integrate with and click "Connect"

   ![SCM platform then Connect](/images/Get-Started/SCM-Integration-2.png)

3. Follow the prompts to authorize {{companyConfig.APP_NAME}} to access your SCM account

   ![authorize the application to access SCM account](/images/Get-Started/SCM-Integration-3.png)

4. Once authorized, you will be able to view your repositories in {{companyConfig.APP_NAME}}

## Disconnecting your SCM account

<hr class="thick" />

To disconnect your SCM account from {{companyConfig.APP_NAME}}, follow these steps:

1. Navigate to the profile tab and select "SCM Integration" from the drop-down list

2. Find the SCM platform that you want to disconnect and click on the "Disconnect button"

3. Confirm that you want to disconnect the SCM account from {{companyConfig.APP_NAME}}

4. Once disconnected, {{companyConfig.APP_NAME}} will no longer be able to access your repositories on the SCM platform

</ClientOnly>
