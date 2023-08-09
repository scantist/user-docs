---
title: Scan Type
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: scan type, static, binary, build-based, docker, cli
---

<script setup>
import { companyConfig } from '../../../config/companyConfig.js'
</script>

<ClientOnly>

# {{ $frontmatter.title }}

> You can initiate scans for your projects under different environments

## Scan Types

<hr class="thick" />

{{companyConfig.COMPANY_NAME}} supports various types of scanning under different environments or scenarios. When it comes to uploading files directly or connecting to SCM repositories, each method has its benefits and drawbacks. Here are the main differences between these scan methods. It is recommended to use the **build-based scan** whenever it is feasible.

<table style="text-align:center; vertical-align:middle;">
    <thead>
        <th></th>
        <th>Project Type</th>
        <th>Scan Type</th>
        <th>Ease of Use</th>
        <th>Scan Results Accuracy</th>
        <th>Specific Needs</th>
    </thead>
    <tbody>
        <tr>
            <td>Static Scan</td>
            <td>Source Code</td>
            <td>Upload</td>
            <td>Medium</td>
            <td>Medium</td>
            <td>No build access</td>
        </tr>
        <tr>
            <td>Binary Scan</td>
            <td>Binary</td>
            <td>Upload</td>
            <td>High</td>
            <td>Low</td>
            <td>No source code access</td>
        </tr>
        <tr>
            <td>Build-based Scan</td>
            <td>Source Code</td>
            <td>CI/CD</td>
            <td>Low</td>
            <td>High</td>
            <td>At any time</td>
        </tr>
        <tr>
            <td>Docker Scan</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>CLI Scan</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

</ClientOnly>
