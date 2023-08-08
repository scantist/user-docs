---
title: Components
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: SCA, OSS components, results
description: This document explains SCA Components Results
---

<ClientOnly>

# {{ $frontmatter.title }}

> Review the comprehensive results of SCA open source components to manage the security and compliance of your software

## OSS Components Details

<hr class = "thick" />

Scantist provides detailed information on each of the components. Here is a breakdown of the information typically provided for each component.

<table>
    <thead>
        <th>Results</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>Component</td>
            <td>The name of the component used in the software project</td>
        </tr>
        <tr>
            <td>Platform</td>
            <td>The name of the platform that contains the component (e.g. Maven, NPM, etc)</td>
        </tr>
        <tr>
            <td>Language</td>
            <td>The <a href="../Language-and-File-Support/">programming language</a> of the component</td>
        </tr>
        <tr>
            <td>Current Version</td>
            <td>The version of the component used in the software project</td>
        </tr>
        <tr>
            <td>Latest Version</td>
            <td>The latest version of the component available</td>
        </tr>
        <tr>
            <td>Vulnerabilities</td>
            <td>The <a href="./Vulnerabilities">vulnerabilities</a> associated with the components, categorized as critical, high, medium and low</td>
        </tr>
        <tr>
            <td>Scope</td>
            <td>The scope of component, whether it's a Dependencies or devDependencies</td>
        </tr>
        <tr>
            <td>Depth</td>
            <td>The level of the component's dependency in the software project</td>
        </tr>
        <tr>
            <td>File Path</td>
            <td>The path to the file containing the component</td>
        </tr>
        <tr>
            <td>License</td>
            <td>The OSS <a href="./Licenses">licenses</a> associated with the component</td>
        </tr>
    </tbody>
</table>

## Vulnerable components

<hr class="thick" />

To identify vulnerable components that require immediate attention and remediation, you can filter the vulnerabilities bar to critical and high.

<div style="display: flex;">
    <div style="flex: 1;">
        <img src="/images/SCA/SCA-Components-Results-2.png" />
    </div>
    <div style="flex: 2;margin-left: 15px;">
        <ol>
            <li>Navigate to the <b>"Vulnerabilities"</b> bar in the SCA results page</li>
            <li>Select the severity level of the vulnerabilities</li>
            <li>Once the filter is applied, the list displays only the components that have the selected severity level</li>
        </ol>
    </div>
</div>

:::tip
Learn more about <a href="./Vulnerabilities">vulnerability severity levels</a>
:::

## What's next?

<hr class="thick" />

You can now evaluate security vulnerabilities that have been detected in the open source components, and take appropriate actions by updating to patch versions or implementing workarounds.

<ul>
    <li><a href="./Vulnerabilities">SCA Vulnerabilities</a></li>
    <li><a href="./Remediation">SCA Remediation</a></li>
</ul>

</ClientOnly>
