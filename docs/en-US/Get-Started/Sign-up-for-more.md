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

<style scoped>
  ol>li {
    font-weight: 600;
  }
</style>

<ClientOnly>

# {{ $frontmatter.title}} for {{ companyConfig.APP_NAME }}

> To start using this app, you will need to have an account.

## Sign in with your SCM accounts

<hr class="thick" />

Linking your app account with your Source Code Management (SCM) accounts, such as GitHub, GitLab or Bitbucket, provides access to more features.

<div style="display: flex;">
  <div style="flex: 3;">
    <ol>
      <li>Go to <a :href="`${companyConfig.FRONTEND_URL}`">{{companyConfig.APP_NAME}}</a> login page</li>
      <li>Click on your preferred SCM icon</li>
      <li>Enter your SCM credentials to authorize {{companyConfig.APP_NAME}}</li>
      <li>You will be redirected to {{companyConfig.APP_NAME}} and logged in automatically</li>
    </ol>
  </div>
  <div style="flex: 1;">
    <img src="/images/Get-Started/Sign-up-for-more-1.png" />
  </div>
</div>

Once you have linked your SCM account with {{companyConfig.APP_NAME}}, you will be able to scan your open source projects directly from your SCM repositories and pipelines. This provides a more streamlined process for managing and securing your open source software.

## Create an account with an email login

<hr class="thick" />

If you do not have an SCM account, you can create a new account with {{companyConfig.APP_NAME}}.

<div style="display: flex;">
  <ol>
    <li>Go to <a :href="`${companyConfig.FRONTEND_URL}`">{{companyConfig.APP_NAME}}</a> login page</li>
    <li>Click on "Create Account"</li>
    <li>Enter your valid email address and a secure password</li>
    <li>You will receive an email to confirm your account. Click on the link provided in the email to activate your account</li>
  </ol>
</div>

Congratulations! You have successfully created your {{companyConfig.APP_NAME}} account using your email login. You can now sign in to your account and start scanning your open source projects for vulnerabilities and licensing risks.

## What's next?

<hr class="thick" />

You now set up {{companyConfig.APP_NAME}} SCA and are ready to start scanning your open source projects. {{companyConfig.APP_NAME}} is designed to integrate seamlessly with your existing software development workflows and tools.

<ul>
  <li><a href="../Trigger-Scan-via-UI/">Trigger a scan</a></li>
  <li><a href="../SCA/Components">Review third-party components</a></li>
  <li><a href="../SCA/Vulnerabilities/">Fix vulnerabilities</a></li>
  <li><a href="../Compliance-Policy-Rules/">Create compliance policies</a></li>
</ul>

</ClientOnly>
