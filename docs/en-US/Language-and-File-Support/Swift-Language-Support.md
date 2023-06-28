---
title: Swift Language Support
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: swift, swift, package.swift
language: Swift
---

<script setup>
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
            <td>{{ $frontmatter.language }}</td>
            <td width="33.33%">Swift</td>
            <td width="100%">Package.swift</td>
        </tr>
    </tbody>
</table>

## Scan your {{ $frontmatter.language }} project with Scantist

<hr class="thick" />

Scantist scans the third-party components by examining the `Package.swift` file in the source code.

<!--@include: ../../parts/maximize-results.md-->

</ClientOnly>
