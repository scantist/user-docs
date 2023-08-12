---
title: Sign up
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: sign up, new account, get started
---

<script setup>
import { companyConfig } from '../../../config/companyConfig.js'
</script>

<ClientOnly>

# {{ $frontmatter.title}} for {{ companyConfig.APP_NAME }}

> To start using this app, you will need to have an account.

## Sign in with your SCM account

<hr class="thick" />

Linking your app account with your SCM accounts, such as GitHub, GitLab or Bitbucket, provides access to more features.

<div style="display: flex;">
<div style="flex: 3;">

<b>1. Go to [{{companyConfig.FRONTEND_URL}}]({{companyConfig.FRONTEND_URL}}) login page</b>

<b>2. Click on your preferred SCM icon</b>

<b>3. Enter your SCM credentials to authorize {{companyConfig.APP_NAME}} </b>

<b>4. You will be redirected to {{companyConfig.APP_NAME}} and logged in automatically</b>

</div><div style="flex: 1;">

![GitHub, GitLab, and Bitbucket Logo](/images/Get-Started/Sign-up-for-more-1.png)

</div></div>

<br />

Once you have linked your SCM account with {{companyConfig.APP_NAME}} , you will be able to scan your open source projects directly from your SCM repositories and pipelines. This provides a more streamlined process for managing and securing your open source software.

## Create an account with an email login

<hr class="thick" />

If you do not have an SCM account, you can create a new account with {{companyConfig.APP_NAME}}.

<b>1. Go to [{{companyConfig.FRONTEND_URL}}]({{companyConfig.FRONTEND_URL}}) login page</b>

<b>2. Click on "Create Account"</b>

<b>3. Enter your valid email address and a secure password</b>

<b>4. You will receive an email to confirm your account. Click on the link provided in the email to activate your account</b>

<br />

Congratulations! You have successfully created your {{companyConfig.APP_NAME}} account using your email login. You can now sign in to your account and start scanning your open source projects for vulnerabilities and licensing risks.

## What's next?

<hr class="thick" />

You now set up {{companyConfig.APP_NAME}} SCA and are ready to start scanning your open source projects. {{companyConfig.APP_NAME}} is designed to integrate seamlessly with your existing software development workflows and tools.

- [Trigger a scan](../Trigger-Scan/)

- [Review third-party components](../SCA/Components)

- [Fix vulnerabilities](../SCA/Vulnerabilities/)

- [Create compliance policies](../Compliance-Policy-Rules/)

</ClientOnly>
