---
title: Jira
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: settings, jira, integration, issues
---

<script setup>
import { companyConfig } from '../../../../config/companyConfig.js'
</script>

<ClientOnly>

# {{ $frontmatter.title }}

> Integrate with Jira to create, assign and track issues through the software development lifecycle.

## Set up your Jira integration

<hr style="border:2px solid gray" />

{{companyConfig.APP_NAME}} support Jira Cloud integration for all premium and enterprise users to help them track and manage the progress of the reported vulnerability issue to ensure they are resolved effectively and efficiently.

To enable Jira integration, follow these steps:

<ol>
  <li>Click on the <b>Settings</b> button on the left sidebar</li><br />
  <img src="/images/Settings/Integrations-Settings/Jira-1.png" /><br />
  <li>Click on the <b>Integrations</b> tab</li>
  <li>Click on <b>JIRA</b> option to set up the connection</li>
  <li>Choose the Jira version that matches your Jira instance (either <b>Before version 8.22</b> or <b>Version 8.22 and newer</b>)</li>
  <li>Enter your full Jira URL in the <b>Server URL</b> textfield</li><br />
  <img src="/images/Settings/Integrations-Settings/Jira-2.png" />
  <li>Click <b>Next</b></li>
  <li>Follow the instructions shown on this page</li><br />
  <img src="/images/Settings/Integrations-Settings/Jira-3.png" /><br />
  <li>Jira should look like this after adding all the inputs</li><br />
  <img src="/images/Settings/Integrations-Settings/Jira-4.png" /><br />
  <li>Click <b>Save</b>, then go back to {{companyConfig.APP_NAME}} and click <b>Done</b></li>
  <li>Click <b>Allow</b> when this dialog pops up<br /></li><br />
  <img src="/images/Settings/Integrations-Settings/Jira-5.png" /><br />
  <li>Check the checkboxes to <b>Enable auto creation of JIRA tickets</b> and/or <b>Enable auto closure of open JIRA tickets</b>.
    <li>If they are enabled, select a <b>JIRA Project</b> to connect to the Jira board.</li>
  Click <b>Done</b> and the integration is done.</li>
  <img src="/images/Settings/Integrations-Settings/Jira-6.png" />
</ol>

## Create your Jira issues

<hr style="border:2px solid gray" />

With the Jira integration, {{companyConfig.APP_NAME}} can automatically create issues in Jira for any vulnerabilities or security issues identified during scans. This allows developers to quickly identify and address potential security risks and helps to ensure that software is developed and released securely. The integration also allows for easy tracking and management of the progress of reported issues to ensure they are resolved effectively and efficiently.

After setting up the Jira integration connection, open one of your project in the Web UI. Click on the <b>Vulnerabilities</b>, then click on the <b>circle with an arrow</b> under the <b>Info</b> column. A logo, which represents <b>Jira Software</b>, will appear next to the vulnerability CVE ID. This logo is a button that allows you to create a Jira issue.
<img src="/images/Settings/Integrations-Settings/Jira-7.png" /><br />
When you select the button, a creation form popup appears. Some of the fields, such as <b>Summary</b> and <b>Description</b>, will be automatically populated once the <b>Project Name</b> is selected by you. The rest of the fields will have options based on your configurations on Jira Project. Once you have completed, select <b>Create</b> to create the Jira issue.
<img src="/images/Settings/Integrations-Settings/Jira-8.png" /><br />
A popup will appear when the creation is successful. It will also display the link to that newly created Jira issue.
<img src="/images/Settings/Integrations-Settings/Jira-9.png" /><br />
<img src="/images/Settings/Integrations-Settings/Jira-10.png" />
</ClientOnly>
