---
title: JavaScript Language Support
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: javascript, npm, pnpm, yarn, package.json
language: JavaScript
---

<script setup>
import LanguageHeader from './components/LanguageHeader.vue'
import { companyConfig } from '../../../config/companyConfig.js'
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
            <td rowspan="3">{{ $frontmatter.language }}</td>
            <td width="25.33%">NPM</td>
            <td width="100%">package.json, package-lock.json, npm-shrinkwrap.json</td>
        </tr>
        <tr>
            <td>PNPM</td>
            <td>package.json, package-lock.json, npm-shrinkwrap.json</td>
        </tr>
        <tr>
            <td>Yarn</td>
            <td>yarn.lock, package.json</td>
        </tr>
    </tbody>
</table>

## Scan your JavaScript project with {{companyConfig.COMPANY_NAME}}

<hr class="thick" />

{{companyConfig.COMPANY_NAME}} scans the third-party components by examining `package.json`, `package-lock.json`, `npm-shrinkwrap.json` or `yarn.lock` files in the source code.

<!--@include: ../../parts/maximize-results.md-->

</ClientOnly>
