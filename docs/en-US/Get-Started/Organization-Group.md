---
title: Organization Group
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: organization, group, team, members
---

<script setup>
import { companyConfig } from '../../../config/companyConfig.js'
</script>

<ClientOnly>

<h1>{{ $frontmatter.title }}</h1>

<blockquote>
    <p>You can have multiple organization groups that allow multiple users to collaborate on scanning code repositories for vulnerabilities.</p>
</blockquote>

## Create an Organization

<hr class="thick" />

When you create a {{companyConfig.APP_NAME}} account, you will have your own default organization group that you can use to manage your repositories. However, you can also create additional organization groups within your account and <a href="../Settings/Members-and-Teams">add team members</a> to these groups.

To create an organization group on {{companyConfig.APP_NAME}}, follow these steps:

<ol>
    <li>Navigate to the organization group tab on the top right corner and select <code>Create Organization</code> from the drop-down list</li><br />
    <img src="/images/Get-Started/Organization-Group-1.png" alt="select Create Organization" />
    <br /><br />
    <li>Fill in the required information, including the name of the organization and description</li><br />
    <img src="/images/Get-Started/Organization-Group-2.png" alt="Fill in the information">
    <br /><br />
    <li>Once you have created an organization group, you can add team members and repositories from your SCM accounts to the organization group</li>
</ol>

## Switching between organization groups

<hr class="thick" />

If you are a developer assigned to an organization group on {{companyConfig.APP_NAME}}, you can switch between groups and view other groups created in {{companyConfig.APP_NAME}}. Follow these steps to switch between groups:

<ol>
    <li>Navigate to the organization group tab on the top right corner</li>
    <li>Click on the name of the organization you want to switch to</li>
    <li>Once you have switched to the desired organization group, you can view its repositories and scan for vulnerabilities</li>
</ol>

## Scan on the correct organization group

<hr class="thick" />

It is important to make sure that you are scanning the correct organization group to avoid any confusion. You can view which organization group your repositories are being scanned.

<img src="/images/Get-Started/Organization-Group-3.png" alt="scanning the correct organization group">

::: tip
When you have multiple organization groups on {{companyConfig.APP_NAME}}, it can be helpful to set a default organization. Learn more of <a href="../Settings/Organization-Details">organization settings</a>
:::

<h2>What's next?</h2>

<hr class="thick" />

<p>You can now add your repository and assign them to your developers</p>

<ul>
    <li><a href="../Settings/Members-and-Teams">Create team</a></li>
    <li><a href="../Settings/Members-and-Teams">Invite your developers</a></li>
    <li><a href="../Settings/Members-and-Teams">Assign roles for your team members</a></li>
</ul>

</ClientOnly>
