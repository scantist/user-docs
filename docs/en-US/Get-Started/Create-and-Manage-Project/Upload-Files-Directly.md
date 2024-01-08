---
title: Upload Files Directly
author: Shamala Mani Vannan, Jackie Tan, Jabir
page: true
lang: en-US
tags: upload, projects, source code, binary file
---

<script setup>
import { companyConfig } from '../../../../config/companyConfig.js'
</script>

<ClientOnly>

# {{ $frontmatter.title }}

> Uploading a source code or binary file for scanning is a straightforward method of utilizing {{companyConfig.APP_NAME}}. However, it is important to note that this method has limitations, as the accuracy of results may be limited since {{companyConfig.APP_NAME}} is not scanning the build environment. Therefore, it is recommended to use this method only when there is no build access for {{companyConfig.APP_NAME}} or as a starting point.

## Create a new project with your source code or binary file

<hr class="thick" />

1.&nbsp;&nbsp;&nbsp;Click on the **"Projects"** page on the navigation bar

2.&nbsp;&nbsp;&nbsp;Select **"Create Project"**

3.&nbsp;&nbsp;&nbsp;In the pop-up window, select the option to upload the file directly

4.&nbsp;&nbsp;&nbsp;Choose the file you want to upload and provide any necessary information

![Create New Project](/images/Create-and-Manage-Project/Upload-Files-Directly-1.png)

5.&nbsp;&nbsp;&nbsp;Once you have uploaded your file, configure the scan settings according to your preferences

6.&nbsp;&nbsp;&nbsp;Finally, initiate the scan according to your preferred scan type. 

## How to provide information when creating a new project?

<hr class="thick" />

When creating a new project by uploading your file directly, it is important to provide the necessary information.

1.&nbsp;&nbsp;&nbsp;Provide a descriptive project name to help identify it

2.&nbsp;&nbsp;&nbsp;Select the [team](../../Settings/Members-and-Teams) that you want to assign the project to

3.&nbsp;&nbsp;&nbsp;Choose the compliance policy you want to apply. If you have not created a [compliance policy](../../Settings/Compliance-Policy-Rules/index) for the project, you can choose the default compliance

4.&nbsp;&nbsp;&nbsp;Add relevant tags to the project to make it easier to find later

5.&nbsp;&nbsp;&nbsp;Provide a project description to give an overview of the project

6.&nbsp;&nbsp;&nbsp;Provide the version number of the project to track its progress over time. You may wish to upload a new version in the same project.

## Upload new version

<hr class="thick" />

If you have made updates to your source code or binary file and wish to rescan it, you can upload a new version within the same project.

1.&nbsp;&nbsp;&nbsp;Navigate the project you want to upload a new version for

2.&nbsp;&nbsp;&nbsp;Click on the **"Project Settings"** in the top right corner

3.&nbsp;&nbsp;&nbsp;In the pop-up window, select the option to upload new version

4.&nbsp;&nbsp;&nbsp;Choose the file you want to upload and provide a new file version to the project

5.&nbsp;&nbsp;&nbsp;Once you have uploaded your file, initiate a scan according to your preferred scan type

<!--@include: ./whats-next.md-->

</ClientOnly>
