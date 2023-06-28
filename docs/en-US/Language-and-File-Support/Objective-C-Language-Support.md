---
title: Objective-C Language Support
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: objective-c, cocoapods, podfile.lock
language: Objective-C
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
            <td width="30%">{{ $frontmatter.language }}</td>
            <td width="33.33%">CocoaPods</td>
            <td width="36.33%">Podfile.lock</td>
        </tr>
    </tbody>
</table>

## Scan your {{ $frontmatter.language }} project with Scantist

<hr class="thick" />

Scantist examines the third-party components by examining the `Podfile.lock` file in the source code.

<!--@include: ../../parts/maximize-results.md-->

</ClientOnly>
