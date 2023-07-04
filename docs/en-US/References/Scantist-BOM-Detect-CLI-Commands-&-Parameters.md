---
title: Scantist BOM Detect CLI Commands & Parameters
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: scantist bom detect, cli, commands, parameters
description: This document lists out all Scantist BOM Detect's commands and parameters.
---

<ClientOnly>

# {{ $frontmatter.title }}

[[toc]]

## Commands

<table>
    <thead>
        <th>Commands</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td><code>java -jar sca-bom-detect-v4.jar</code></td>
            <td>Triggers the detector (JAR file) using default parameters.</td>
        </tr>
    </tbody>
</table>

## Parameters

<table>
    <!-- <thead>
        <th>Parameters</th>
        <th>Description</th>
        <th>Sample code</th>
    </thead> -->
    <tbody>
        <tr>
            <td><code>-projectName <i>&lt;project name&gt;</i></code></td>
            <td>Triggers the detector (JAR file) using default parameters.</td>
            <!-- <td>
                <div class="language-html">
                    <button title="Copy Code" class="copy"></button>
                    <span class="lang"></span>
                    <pre class="shiki material-theme-palenight">
                        <code>
                            <span class="line">-projectName sampleProject</span>
                        </code>
                    </pre>
                </div>
            </td> -->
        </tr>
    </tbody>
</table>

```shell
java -jar sca-bom-detect-v4.jar -projectName sampleProject
```

</ClientOnly>
