---
title: Ruby Language Support
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: ruby, rubygems, gemfile.lock, gemfile
language: Ruby
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
            <td width="33.33%">RubyGems</td>
            <td width="100%">gemfile.lock, gemfile</td>
        </tr>
    </tbody>
</table>

## Scan your {{ $frontmatter.language }} project with Scantist

<hr class="thick" />

Scantist scans the third-party components by examining `gemfile.lock` or `gemfile` files in the source code.

<!--@include: ../../parts/maximize-results.md-->

</ClientOnly>
