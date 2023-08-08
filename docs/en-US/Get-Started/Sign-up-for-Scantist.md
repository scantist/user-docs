---
title: Sign up for
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: sign up, new account, get started
---

<script setup>
import { ref } from 'vue'

const count = ref(0)
import { loadEnv } from 'vitepress';
const env = loadEnv("", process.cwd());
console.log('env is', env);
const a = 123;
</script>

<ClientOnly>

# {{ $frontmatter.title}} {{ count }}

> To start using this app, you will need to have an account.

## Sign in with your SCM account

<hr class="thick" />

Linking your app account with your SCM accounts, such as GitHub, GitLab or Bitbucket, provides access to more features.

<div style="display: flex;">
<div style="flex: 3;">

**1. Go to [v4staging.scantist.io](https://v4staging.scantist.io) login page**

**2. Click on your preferred SCM icon**

**3. Enter your SCM credentials to authorize Scantist**

**4. You will be redirected to Scantist and logged in automatically**

</div><div style="flex: 1;">

![GitHub, GitLab, and Bitbucket Logo](/images/Get-Started/Sign-up-for-Scantist-1.png)

</div></div>

<br />

Once you have linked your SCM account with Scantist, you will be able to scan your open source projects directly from your SCM repositories and pipelines. This provides a more streamlined process for managing and securing your open source software.

## Create an account with an email login

<hr class="thick" />

If you do not have an SCM account, you can create a new account with Scantist.

**1.&nbsp;&nbsp;&nbsp;Go to [v4staging.scantist.io](https://v4staging.scantist.io) login page**

**2.&nbsp;&nbsp;&nbsp;Click on "Create Account"**

**3.&nbsp;&nbsp;&nbsp;Enter your valid email address and a secure password**

**4.&nbsp;&nbsp;&nbsp;You will receive an email to confirm your account. Click on the link provided in the email to activate your account**

<br />

Congratulations! You have successfully created your Scantist account using your email login. You can now sign in to your account and start scanning your open source projects for vulnerabilities and licensing risks.

## What's next?

<hr class="thick" />

You now set up Scantist SCA and are ready to start scanning your open source projects. Scantist is designed to integrate seamlessly with your existing software development workflows and tools.

- [Trigger a scan](../Trigger-Scan/)

- [Review third-party components](../SCA/SCA-Components-Results.md)

- [Fix vulnerabilities](../SCA/SCA-Vulnerabilities-Results.md)

- [Create compliance policies](../Compliance-Policy-Rules/)

</ClientOnly>
