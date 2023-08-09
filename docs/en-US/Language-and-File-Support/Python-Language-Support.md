---
title: Python Language Support
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: python, pip, setup.py, requirements.txt, pipfile.lock
language: Python
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
            <td width="33.33%">pip</td>
            <td width="100%">setup.py</td>
        </tr>
        <tr>
            <td>pip</td>
            <td>requirements.txt</td>
        </tr>
        <tr>
            <td>pip</td>
            <td>pipfile.lock</td>
        </tr>
    </tbody>
</table>

## Scan your {{ $frontmatter.language }} project with {{companyConfig.APP_NAME}}

<hr class="thick" />

{{companyConfig.APP_NAME}} scans the third-party components by examining `setup.py` file, which is the standard build file that lists the required packages and their versions.

{{companyConfig.APP_NAME}} also checks the `requirements.txt` file, which contains a list of the packages and their versions needed to run the project.

Additionally, {{companyConfig.APP_NAME}} scans the `pipfile.lock` file, which is used by the Pipenv package manager to secure the versions of all the required packages for the project.

By examining these files, {{companyConfig.APP_NAME}} can provide comprehensive security scanning to identify any potential vulnerabilities in your project's third-party dependencies.

<!--@include: ../../parts/maximize-results.md-->

</ClientOnly>
