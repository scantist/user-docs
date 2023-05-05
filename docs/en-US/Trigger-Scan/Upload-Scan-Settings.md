---
title: Upload Scan Settings
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: scan type, schedule scan, binary, build-based, docker, cli
---

<ClientOnly>

# {{ $frontmatter.title }}

>Get the most out of your upload scans with these configuration options

## Select your Scan Type

<hr style="border:2px solid gray" />

1. Click on the newly added project

2. Click on "Project Settings" in the top right corner

3. Under the "Scan Settings", select the testing solution you want to configure

![Testing Solution tabs](/images/Trigger-Scan/Upload-Scan-Settings-1.png)

## Schedule Scan

<hr style="border:2px solid gray" />

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



To schedule a scan in Scantist, you can follow these steps:

<div style="display: flex;">
<div style="flex: 1;">

1. Toggle the switch to enable scheduled scans

2. Choose whether your project is a source code or binary project 

3. Select the version of the project that you want to scan

4. Choose the frequency of the scheduled scan: daily, weekly or monthly

5. Click "Save" to save the scheduled scan settings

</div>
<div style="flex: 1;">

![insert image](/images/Trigger-Scan/Upload-Scan-Settings-2.png)

</div>
</div>

</ClientOnly>