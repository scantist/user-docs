---
title: Scan history
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: scantist, scan, history
---

<script setup>
import { companyConfig } from '../../../config/companyConfig.js'
</script>
<ClientOnly>

# {{ $frontmatter.title }}

> Track your project’s scan history with {{companyConfig.COMPANY_NAME}}

## View Scan History

<hr class="thick" />

Viewing scan history for SCA and SAST scans can be a useful way to identify trends and track the progress of your application security efforts over time. Here are the steps to view previous scan results:

1. Click on “View Scan History” on SCA or SAST results page

<img src="/images/Scan-History/Scan-History-1.png" alt="view scan history"/>

2. In the pop-up window that appears, you can view all the scan history, including components, vulnerabilities, and compliance results detected in each scan

<img src="/images/Scan-History/Scan-History-2.png" alt="view all scan history"/>

3. To view the details of a particular scan history, click on “View Detail”

<img src="/images/Scan-History/Scan-History-3.png" alt="specific scan history"/>

4. You will be then directed to the project page where you can see the details of the previous results and you will be able to download reports for previous scans

## What's next

<hr class="thick" />

You can now review results from multiple scans for your open source projects and remediate any identified vulnerabilities

- [Export Reports on {{companyConfig.COMPANY_NAME}}](../SCA/Export-Reports-on-app.md)
- Fix vulnerabilities

</ClientOnly>
