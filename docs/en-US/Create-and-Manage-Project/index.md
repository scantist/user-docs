---
title: Create and Manage Project
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: create project, manage project, connect scm, add scm, upload file directly
---

<script setup>
import { companyConfig } from '../../../config/companyConfig.js'
</script>
<ClientOnly>

# {{ $frontmatter.title }}

> Explore how to effortlessly create new projects by uploading or connecting to SCM account, and efficiently managing them for scanning.

## Create a New Project

<hr class="thick" />

<table>
    <thead>
        <th width="50%">Upload Files Directly</th>
        <th width="50%">Add SCM Repositories</th>
    </thead>
    <tbody>
        <tr>
            <td>
            If you are just starting to explore the open source management platform, you can upload your source code or binary files directly to scan your projects.
            <br />
            <a href="./Upload-Files-Directly">Upload Files Directly</a>
            </td>
            <td>
            For much greater accuracy in results, it is recommended to connect to your GitHub, Gitlab or Bitbucket account to scan SCM repositories with {{companyConfig.COMPANY_NAME}}.
            <br />
            <a href="./Add-SCM-Repositories">Add SCM Repositories</a>
            </td>
        </tr>
    </tbody>
</table>

## Settings

<hr class="thick" />

After you have created a project and it is added to the {{companyConfig.COMPANY_NAME}} dashboard, you can configure the project settings and manage your list of projects. This includes deleting a project if you no longer need it.

### Project Settings

<div style="display: flex;">
<div style="flex: 1;">

1. Click on the newly added project

2. Click on **"Project Settings"** in the top right corner

3. In the pop-up window, provide a project description, select the teams that you want to assign, and add relevant tags to the project

4. Click on the **"Delete"** icon if you wish to remove the project. Note that deleting a project will also delete all associated scan reports and findings.

</div>
<div style="flex: 1; margin: 15px;">

![Project Info](/images/Create-and-Manage-Project/Create-and-Manage-Project-1.png)

</div>
</div>

### Scan Settings

Scan settings for both upload and SCM scans help you tailor the scanning process to fit your specific needs and preferences.

- [Upload Scan Settings](../Trigger-Scan/Upload-Scan-Settings)

- [SCM Scan Settings](../Trigger-Scan/SCM-Scan-Settings)

</ClientOnly>
