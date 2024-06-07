---
title: C / C++ Language Support
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: c#, nuget, .sln, project.asset.json, project.json, project.lock.json
language: Cpp
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

<table>
    <thead>
        <th>Languages</th>
        <th>Package Manager</th>
        <th>Manifest Files</th>
    </thead>
    <tbody>
        <tr>
            <td>{{ convertLang($frontmatter.language) }}</td>
            <td>-</td>
            <td>-</td>
        </tr>
    </tbody>
</table>

## Scan your {{ convertLang($frontmatter.language) }} project with {{companyConfig.APP_NAME}}

<hr class="thick" />

{{companyConfig.APP_NAME}} scans the third-party components in ?????. It locates the `<EXAMPLE FILES HERE>`, `.sln`, `packages.config`, `project.json`, `project.lock.json`, `.csproj (SDK-style)` or `project.assets.json` files in the source code, which provides information about the direct dependencies and their corresponding versions.

<!--@include: ../../parts/maximize-results.md-->

</ClientOnly>
