---
title: SCM Integration
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: scm, integration, github, gitlab, bitbucket
---

<script setup>
import { companyConfig } from '../../../config/companyConfig.js'
</script>
<ClientOnly>

# {{ $frontmatter.title }}

> Do you have repositories in more than one Source Control Management (SCM) account? You can now connect to multiple SCM platforms.

## Supported SCM platforms

<hr class="thick" />

{{companyConfig.COMPANY_NAME}} currently supports integration with the following SCM platforms:

- [GitHub](https://github.com)

- [GitLab](https://gitlab.com)

- [Bitbucket](https://bitbucket.org)

::: warning Note:
To use the SCM integration with {{companyConfig.COMPANY_NAME}}, you must have an active {{companyConfig.COMPANY_NAME}} account and have access to your SCM platform
:::

## Connecting your SCM account to {{companyConfig.COMPANY_NAME}}

<hr class="thick" />

To connect your SCM account to {{companyConfig.COMPANY_NAME}}, follow these steps:

1. Navigate to the profile tab and select "SCM Integration" from the drop-down list

   ![profile tab then SCM Integration](/images/Get-Started/SCM-Integration-1.png)

2. Select the SCM platform you want to integrate with and click "Connect"

   ![SCM platform then Connect](/images/Get-Started/SCM-Integration-2.png)

3. Follow the prompts to authorize {{companyConfig.COMPANY_NAME}} to access your SCM account

   ![authorize {{companyConfig.COMPANY_NAME}} to access SCM account](/images/Get-Started/SCM-Integration-3.png)

4. Once authorized, you will be able to view your repositories in {{companyConfig.COMPANY_NAME}}

## Disconnect SCM account from {{companyConfig.COMPANY_NAME}}

<hr class="thick" />

To disconnect your SCM account from {{companyConfig.COMPANY_NAME}}, follow these steps:

1. Navigate to the profile tab and select "SCM Integration" from the drop-down list

2. Find the SCM platform that you want to disconnect and click on the "Disconnect button"

3. Confirm that you want to disconnect the SCM account from {{companyConfig.COMPANY_NAME}}

4. Once disconnected, {{companyConfig.COMPANY_NAME}} will no longer be able to access your repositories on the SCM platform

</ClientOnly>
