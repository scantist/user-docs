---
title: Perl Language Support
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: perl, cpan, makefile.pl
language: Perl
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
            <td>{{ $frontmatter.language }}</td>
            <td width="33.33%">CPAN</td>
            <td width="100%">Makefile.PL</td>
        </tr>
    </tbody>
</table>

## Scan your {{ $frontmatter.language }} project with {{companyConfig.APP_NAME}}

<hr class="thick" />

{{companyConfig.APP_NAME}} scans the third-party components by examining `Makefile.PL` file in the source code.

<!--@include: ../../parts/maximize-results.md-->

</ClientOnly>
