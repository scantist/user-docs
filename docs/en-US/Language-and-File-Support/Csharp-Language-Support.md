---
title: C# Language Support
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: c#, nuget, .sln, project.asset.json, project.json, project.lock.json
language: Csharp
---

<script setup>
import { convertLang } from '../../.vitepress/helperFunctions'
import LanguageHeader from './components/LanguageHeader.vue'
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
            <td rowspan="3">{{ convertLang($frontmatter.language) }}</td>
            <td width="33.33%">Nuget 2</td>
            <td width="100%">.sln and packages.config</td>
        </tr>
        <tr>
            <td>Nuget 3</td>
            <td>.sln and (project.json or project.lock.json)</td>
        </tr>
        <tr>
            <td>Nuget 4</td>
            <td>.sln and (.csproj (SDK-style) or project.assets.json)</td>
        </tr>
    </tbody>
</table>

## Scan your {{ convertLang($frontmatter.language) }} project with Scantist

<hr class="thick" />

Scantist scans the third-party components managed by Nuget. It locates the `.sln`, `packages.config`, `project.json`, `project.lock.json`, `.csproj (SDK-style)` or `project.assets.json` files in the source code, which provides information about the direct dependencies and their corresponding versions.

**Please be aware that Nuget 4.9 project.lock.json is not supported yet.**

<!--@include: ../../parts/maximize-results.md-->

</ClientOnly>
