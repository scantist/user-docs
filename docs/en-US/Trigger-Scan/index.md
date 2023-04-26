---
title: Trigger Scan
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: scan, sca, sast, fuzzing, iac
---
<ClientOnly>

# {{ $frontmatter.title }}

>Explore what's next after creating a project in Scantist

## Two methods for scanning in Scantist

<hr style="border:2px solid gray" />

There are two ways to initiate a scan for your project:

### Project List 

Click on the "Scan" icon on the project list 

![insert image]()

### Project Details Page

Click on the project name to open the project details page

Click on the "Scan" button on top right corner

![insert image]()


## Follow these steps to start scanning 

<hr style="border:2px solid gray" />

### 1.&nbsp;&nbsp;&nbsp;Configure your project settings
To initiate scanning for your projects, you will need to configure the project settings based on the type of projects created 

- Upload Scan Settings 

- SCM Scan Settings

### 2.&nbsp;&nbsp;&nbsp;Select scan type
Click on the "Scan" icon next to the project name. This will open a dialog where you can select the type of scan you want to run - [**SCA**](), [**SAST**](), [**Fuzzing**]() or [**IaC**]() (you may select more than one). 

You can further customise the scan setting before triggering the scan. Some of the options you can customize include [scan type](./Scan-Type), upload file version, [compliance policy](). 

![insert image]()

### 3.&nbsp;&nbsp;&nbsp;Start scanning
Once you have configured the scan settings, you can start scanning by clicking on the "Scan" icon in the pop-up window. This will initiate the scan process and the results will be displayed once the scan is complete.

<br />

**:tada::tada: Congratulations - you have triggered your first scan! :confetti_ball::confetti_ball:**

## What's next?

<hr style="border:2px solid gray" />

You can now review your scan results for your open source projects and remediate any identified your vulnerabilities. 

- [Results]()

- [Fix vulnerabilities]()

</ClientOnly>