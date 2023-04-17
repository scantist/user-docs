---
title: Create and Manage Project
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: create project, manage project, connect scm, add scm, upload file directly
---
<ClientOnly>

# {{ $frontmatter.title }}

> Explore how to effortlessly create new projects by uploading or connecting to SCM, and efficiently manage them for scanning.

## Create a New Project

<hr style="border:2px solid gray" />

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
            For much greater accuracy in results, it is recommended to connect to your GitHub, Gitlab or Bitbucket account to scan SCM repositories with Scantist.
            <br />
            <a href="./Add-SCM-Repositories">Add SCM Repositories</a>
            </td>
        </tr>
    </tbody>
</table>

## Project Settings

<hr style="border:2px solid gray" />

After you have created a project and it is added to the Scantist dashboard, you can configure the project settings and manage your list of projects. This includes deleting a project if you no longer need it. 

### General Settings

<div style="display: flex;">
<div style="flex: 1;">

1. Click on the newly added project

2. Click on "Project Settings" in the top right corner

3. In the pop-up window, provide a project description, select the teams that you want to assign, and add relevant tags to the project

4. Click on the "Delete" icon if you wish to remove the project. Note that deleting a project will also delete all associated scan reports and findings. 

</div>
<div style="flex: 1;">

![photo]()

</div>
</div>

### Scan Settings

Scan settings for both upload and SCM scans help you tailor the scanning process to fit your specific needs and preferences. 

- [Upload Scan Settings](../Trigger-Scan/Upload-Scan-Settings)

- [SCM Scan Settings](../Trigger-Scan/SCM-Scan-Settings)

</ClientOnly>