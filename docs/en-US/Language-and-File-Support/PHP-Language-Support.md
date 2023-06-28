---
title: PHP Language Support
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: php, composer, composer.lock, composer.json
language: Php
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
            <td width="33.33%">Composer</td>
            <td width="100%">composer.lock, composer.json</td>
        </tr>
    </tbody>
</table>

## Scan your {{ $frontmatter.language }} project with Scantist

<hr class="thick" />

Scantist scans the third-party components by examining `composer.lock` or `composer.json` files in the source code project.

<!--@include: ../../parts/maximize-results.md-->

</ClientOnly>
