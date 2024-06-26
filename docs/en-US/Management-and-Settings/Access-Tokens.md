---
title: Access Tokens
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: settings, access tokens, api
---

<script setup>
import { companyConfig } from '../../../config/companyConfig.js'
</script>
<ClientOnly>

# {{ $frontmatter.title }}

> Learn how to generate access tokens for your build-based scans

## Create Tokens

<hr class="thick" />

1. Click on the **"Organisation"** tab located at the navigation bar

2. Go to the **"Access Tokens"** tab

3. Enter a name for your token in the designated field and select either **"Create Token"** located adjacent to the bar

<img src="/images/Settings/access-token1.png" />

4. Your access token will be generated for copying on a one-time basis. Be sure to store it securely, as it will be shown only once.

<img src="/images/Settings/Access-Tokens-2.png" />

5. This access token will be referred to as **{{companyConfig.SCANTIST_TOKEN}}** for future reference. With your access token, you're ready to continue and scan your projects for vulnerabilities using {{companyConfig.APP_NAME}} SCA

</ClientOnly>
