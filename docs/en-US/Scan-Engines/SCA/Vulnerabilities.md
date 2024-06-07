---
title: Vulnerabilities
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: SCA, vulnerabilities, severity, issue type
description: This document explains SCA Vulnerabilities
---

<ClientOnly>

# {{ $frontmatter.title }}

> Review the comprehensive results of SCA open source vulnerabilities to remediate

## Vulnerabilities Details

<hr class="thick" />

Scantist provides detailed information on each vulnerability it detects. Here is a breakdown of the information typically provided for each vulnerability.

<table>
    <thead>
        <th>Results</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>Issue ID</td>
            <td>An unique identifier assigned to the vulnerability, allowing for easy reference and tracking</td>
        </tr>
        <tr>
            <td>Issue Type</td>
            <td>The type or category of the vulnerability, such as security vulnerability, license violation, or policy violation</td>
        </tr>
        <tr>
            <td>CWE ID</td>
            <td>Common Weakness Enumeration (CWE) ID associated with the vulnerability, providing a standardized identifier for common software weaknesses</td>
        </tr>
        <tr>
            <td>Related IDs</td>
            <td>Vulnerability IDs from other sources such as NVD for example.</td>
        </tr>
        <tr>
            <td>Severity & Score</td>
            <td>The score indicated the severity or criticality of the vulnerability. HIgher score generally indicate more severe vulnerabilities</td>
        </tr>
        <tr>
            <td>Publish Date</td>
            <td>The date when the vulnerability was initially disclosed or made publicly known, providing context on its age and potential exposure</td>
        </tr>
        <tr>
            <td>Component</td>
            <td>The specific component or library within your application that is affected by the vulnerability</td>
        </tr>
        <tr>
            <td>Scope</td>
            <td>The extent or reach of the vulnerability within the affected component, indicating the potential impact it may have on the security or functionality of your application</td>
        </tr>
        <tr>
            <td>Depth</td>
            <td>The level of the component's dependency in the software project</td>
        </tr>
        <tr>
            <td>Language</td>
            <td>The programming language in which the vulnerable component is written</td>
        </tr>
        <tr>
            <td>Version</td>
            <td>The version of the component that contains the vulnerability</td>
        </tr>
        <tr>
            <td>Fix Version</td>
            <td>The version of the component that addresses of fixes the vulnerability</td>
        </tr>
    </tbody>
</table>

## Severity

<hr class="thick" />

To identify vulnerabilities that require immediate attention and remediation, you can filter the severity bar to critical and high.

<div style="display: flex;">
    <div style="flex: 1;">
        <img src="/images/SCA/Vulnerabilities/Vulnerabilities-1.png" />
    </div>
    <div style="flex: 3;margin-left: 15px;">
        <ol>
            <li>Navigate to the <b>"Severity"</b> search bar</li>
            <li>Select the severity level of the vulnerabilities</li>
            <li>Once the filter is applied, the list displays only the vulnerabilities that have the selected severity level</li>
        </ol>
    </div>
</div>

<!-- :::tip
Learn more about <a href="./Vulnerabilities/Vulnerability-Severity-Level-&-Issue-Types">vulnerability severity levels</a>
::: -->

## Issue Type

<hr class="thick" />

To identify vulnerability issues that require immediate attention and remediation, you can filter the issue type jar accordingly.

<div style="display: flex;">
    <div style="flex: 1;">
        <img src="/images/SCA/Vulnerabilities/warning.png" />
    </div>
    <div style="flex: 3;margin-left: 15px;">
        <ol>
            <li>Navigate to the <b>"Issue Type"</b> search bar in the SCA results page</li>
            <li>Select the issue type</li>
            <li>Once the filter is applied, the list displays only the selected issue type</li>
        </ol>
    </div>
</div>

</ClientOnly>
