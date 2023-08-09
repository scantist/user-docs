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

# {{ $frontmatter.title }}

> You can have multiple organization groups that allow multiple users to collaborate on scanning code repositories for vulnerabilities.

## Create an Organization

<hr class="thick" />

When you create a {{companyConfig.COMPANY_NAME}} account, you will have your own default organization group that you can use to manage your repositories. However, you can also create additional organization groups within your account and [add team members]() to these groups.

To create an organization group on {{companyConfig.COMPANY_NAME}}, follow these steps:

1.&nbsp;&nbsp;&nbsp;Navigate to the organization group tab on the top right corner and \
select `Create Organization` from the drop-down list

![select Create Organization](/images/Get-Started/Organization-Group-1.png)

2.&nbsp;&nbsp;&nbsp;Fill in the required information, including the name of the organization and description

![Fill in the information](/images/Get-Started/Organization-Group-2.png)

3.&nbsp;&nbsp;&nbsp;Once you have created an organization group, you can add team members and repositories from your SCM accounts to the organization group

## Switching between organization groups in {{companyConfig.COMPANY_NAME}}

<hr class="thick" />

If you are a developer assigned to an organization group on {{companyConfig.COMPANY_NAME}}, you can switch between groups and view other groups created in {{companyConfig.COMPANY_NAME}}. Follow these steps to switch between groups:

1.&nbsp;&nbsp;&nbsp;Navigate to the organization group tab on the top right corner

2.&nbsp;&nbsp;&nbsp;Click on the name of the organization you want to switch to

3.&nbsp;&nbsp;&nbsp;Once you have switched to the desired organization group, you can view its repositories and scan for vulnerabilities

## Scan on the correct organization group

<hr class="thick" />

It is important to make sure that you are scanning the correct organization group to avoid any confusion. You can view which organization group your repositories are being scanned.

![scanning the correct organization group](/images/Get-Started/Organization-Group-3.png)

::: tip
When you have multiple organization groups on {{companyConfig.COMPANY_NAME}}, it can be helpful to set a default organization. Learn more of [organization settings]()
:::

## What's next?

<hr class="thick" />

You can now add your repository and assign them to your developers

- [Create team]()

- [Invite your developers]()

- [Assign roles for your team members]()

</ClientOnly>
