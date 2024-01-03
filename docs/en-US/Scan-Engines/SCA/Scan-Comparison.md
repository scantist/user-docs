---
title: Scan Comparison
author: Jackie Tan
page: true
lang: en-US
tags: SCA, results, comparison
description: This document explains SCA Scan Comparison
---

<script setup>
import { companyConfig } from '../../../../config/companyConfig.js'
</script>

<ClientOnly>

<h1>{{ $frontmatter.title }}</h1>

<blockquote>
    <p>The Scan Comparison feature in {{companyConfig.APP_NAME}} provides an efficient way to identify changes in your software components and their associated vulnerabilities across different scans. By juxtaposing results, it highlights disparities, enabling you to swiftly pinpoint newly emerged risks and track fixed issues, ensuring continuous security and compliance over time.</p>
</blockquote>

<h2>How to Perform a Scan Comparison in {{companyConfig.APP_NAME}}</h2>

<ol>
    <li>Hover over the <b>History</b> button on the right-hand side to reveal the dropdown menu, and select <b>Scan History</b>.</li>
    <img src="/images/SCA/Scan-Comparison-Step1.png" />
    <br />
    <li>In the <b>SCA Scan History</b> view, choose the scans that you wish to compare. Feel free to select more than two for a broader comparison.</li>
    <li>Click the <b>Scan Comparison</b> button to initiate the comparison of the selected scans.</li>
    <img src="/images/SCA/Scan-Comparison-Step3.png" />
    <br />
    <li>After the comparison is generated, review the results which will display both a summary (with component and vulnerability counts by severity) and detailed information (including individual component versions and identified vulnerabilities).</li>
    <img src="/images/SCA/Scan-Comparison-Step4.png" />
</ol>

</ClientOnly>
