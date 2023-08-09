---
title: Jira
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: settings, jira
---

<script setup>
import { companyConfig } from '../../../../config/companyConfig.js'
</script>

<ClientOnly>

# {{ $frontmatter.title }}

> Integrate with Jira to create, assign and track issues through the software development lifecycle.

[JIRA Integration]()

## Jira Integration

<hr style="border:2px solid gray" />

{{companyConfig.APP_NAME}} support Jira Cloud integration for all premium and enterprise users to help them track and manage the progress of the reported vulnerability issue to ensure they are resolved effectively and efficiently.

To enable Jira integration, follow these steps:

1. Click on the “Settings” tab located at the navigation bar

2. Go to the “Integrations” group tab

3. Click on “Jira” option to set up the connection

4. Choose the Jira version that matches your Jira instance (either before version 8.22 or version 8.22and newer)

5. Enter your full Jira domain URL in the requested field

6. Click on “Next”

Click on the entered sever URL link which directs you to the Jira application link page

…. work together with Charles on this steps..

## Create Jira Issues

<hr style="border:2px solid gray" />

With the Jira integration, {{companyConfig.APP_NAME}} can automatically create issues in Jira for any vulnerabilities or security issues identified during scans. This allows developers to quickly identify and address potential security risks and helps to ensure that software is developed and released securely. The integration also allows for easy tracking and management of the progress of reported issues to ensure they are resolved effectively and efficiently.

… steps …

</ClientOnly>
