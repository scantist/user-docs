---
title: SCM Scan Settings
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: scan type, schedule scan, event driven scan
---

<script setup>
import { companyConfig } from '../../../config/companyConfig.js'
</script>

<ClientOnly>

# {{ $frontmatter.title }}

> Get the most out of your SCM scans with these configuration options

## Select your Scan Type

<hr class="thick" />

1.&nbsp;&nbsp;&nbsp;Click on the newly added project

2.&nbsp;&nbsp;&nbsp;Click on "Project Settings" in the top right corner

3.&nbsp;&nbsp;&nbsp;Under the "Scan Settings", select the testing solution you want to configure

![Testing Solution tabs](/images/Trigger-Scan/SCM-Scan-Settings-1.png)

## Schedule Scan

<hr class="thick" />

You can set your scan to be done on a scheduled basis for all scan types. The available options for the scheduled scans are as follows:

::: tip Daily
7:00 AM Singapore Timezone
:::

::: tip Weekly
every Monday at 7:00 AM Singapore Timezone
:::

::: tip Monthly
Starting from the date the scheduled scan is enabled. For example, if you enable the schedule scan settings on Janaury 1, the subsequent monthly scans will occur on the 1st of every month
:::

To schedule a scan in {{companyConfig.APP_NAME}}, you can follow these steps:

<div style="display: flex;">
<div style="flex: 1;margin-right:5px;">

![insert image](/images/Trigger-Scan/SCM-Scan-Settings-2.png)

</div>
<div style="flex: 1; margin-left:20px;">

1.&nbsp;&nbsp;&nbsp;Toggle the switch to enable scheduled scans

2.&nbsp;&nbsp;&nbsp;Choose whether your project is a source code or binary project

3.&nbsp;&nbsp;&nbsp;Select the branch of the project that you want to scan

4.&nbsp;&nbsp;&nbsp;Choose the frequency of the scheduled scan: daily, weekly or monthly

5.&nbsp;&nbsp;&nbsp;Click "Save" to save the scheduled scan settings

</div>
</div>

## Event Driven Scan

<hr class="thick" />

You can set your scan to be done on PR triggered event. The available events for the event driven scans are as follows:

::: tip Push Request
A scan will be triggered automatically for every commit on all the branches of the SCM
:::

::: tip Pull Request
A scan will be triggered automatically for every pull request created on the SCM
:::

::: tip Both
A scan will be triggered automatically for every push and pull requests
:::

To trigger a scan, you can follow these steps:

<div style="display: flex;">
<div style="flex: 1;margin-right:5px;">

![Event Driven Scan](/images/Trigger-Scan/SCM-Scan-Settings-3.png)

</div>
<div style="flex: 1; margin-left:20px;">

1.&nbsp;&nbsp;&nbsp;Toggle the switch to enable scheduled scans

2.&nbsp;&nbsp;&nbsp;Choose the event of the scan: push, pull or both

3.&nbsp;&nbsp;&nbsp;Select the branch of the project that you want to scan

4.&nbsp;&nbsp;&nbsp;Click "Save" to save the scheduled scan settings

</div>
</div>

</ClientOnly>
