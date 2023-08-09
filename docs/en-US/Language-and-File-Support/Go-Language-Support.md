---
title: Go Language Support
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: go, go modules, go.mod
language: Go
---

<script setup>
import LanguageHeader from './components/LanguageHeader.vue'
import { companyConfig } from '../../../config/companyConfig.js'
import { convertLang } from '../../.vitepress/helperFunctions'
</script>

<ClientOnly>

# {{ $frontmatter.title }}

<LanguageHeader :language="$frontmatter.language"/>

## Here's what we support

<hr class="thick" />

| Languages | Package Manager | Manifest Files |
| --------- | --------------- | -------------- |
| Go        | Go Modules      | go.mod         |

## Scan your Go project with {{companyConfig.APP_NAME}}

<hr class="thick" />

{{companyConfig.APP_NAME}} scans the third-party components managed by Go Modules. It locates the `go.mod` file in the source code, which provides information about the dependencies and their corresponding versions. By leverage this information, {{companyConfig.APP_NAME}} scans your Go project for any potential security vulnerabilities that may exist in both direct and transitive dependencies. This enables you to identify and mitigate any potential security risk within your project’s dependency chain.

<!--@include: ../../parts/maximize-results.md-->

</ClientOnly>
