---
title: Compliance Policy Rules
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: scantist, compliance, policy, rules
---

<script setup>
import { companyConfig } from '../../../../config/companyConfig.js'
</script>

<ClientOnly>

# {{ $frontmatter.title }}

> Learn how to ensure compliance with organizational and industry standards with policy rules now

## Why do you need a policy rule

<hr class="thick" />

Every organization needs a set of rules to define which open source software can be used and which cannot. The primary objectives for defining these rules are to ensure security and legal compliance, which immediately reduces the organization's risk. Additional objectives can include improving the organization's cyber-hygiene and supply chain management, ensuring long-term maintainability, and improving the ability to respond to threats.

If an organization fails to comply with the license terms and conditions, it can impact the organization. {{companyConfig.APP_NAME}} provides compliance functionality, enabling you to set a list of policy rules that your team would comply with.

### Customizing policy rules in {{companyConfig.APP_NAME}}

<hr class="thick" />

To customize policy rules in {{companyConfig.APP_NAME}}, follow these steps:

1.&nbsp;&nbsp;&nbsp;Click on the "Settings" page on the navigation bar

2.&nbsp;&nbsp;&nbsp;Click on the "Policies" tab

3.&nbsp;&nbsp;&nbsp;To create a new policy, type the name of your policy in the "New Policy Name" box and click on the "Create Policy" button next to the box

<img src="/images/Compliance-Policy-Rules/Compliance-Policy-Rules-1.png" alt="Create policy" width="300" height="200">

4.&nbsp;&nbsp;&nbsp;The newly created policy will be shown in the list

5.&nbsp;&nbsp;&nbsp;Click on the newly created policy to add your rules

6.&nbsp;&nbsp;&nbsp;To add a new rule, click on the "Add Rule" button

<img src="/images/Compliance-Policy-Rules/Compliance-Policy-Rules-2.png" alt="add rule">

7.&nbsp;&nbsp;&nbsp;Choose the action you want {{companyConfig.APP_NAME}} to take when the rule is triggered - Approved, Deny or Flag

<div style="display: flex; justify-content: center;">
<img src="/images/Compliance-Policy-Rules/Compliance-Policy-Rules-3.png" alt="action" width="300" height="200">
</div>

8.&nbsp;&nbsp;&nbsp;Choose the rule type - Component, Vulnerability, License or Project and Specify the conditions under which the rule should be triggered (e.g. severity level, library name, etc). Click <a href="">here</a> for more details

<div style="display: flex; justify-content: center;">
<img src="/images/Compliance-Policy-Rules/Compliance-Policy-Rules-4.png" alt="rule type" width="300" height="200">
</div>

9.&nbsp;&nbsp;&nbsp;You may wish to another cardinality to a single policy rule under the same rule type. For example, you may want to DENY a COMPONENT where the SEVERITY is CRITICAL AND HIGH

<div style="display: flex; justify-content: center;">
<img src="/images/Compliance-Policy-Rules/Compliance-Policy-Rules-5.png" alt="cardinality" width="200" height="100">
</div>

10.&nbsp;&nbsp;&nbsp;Click "create" to save your new policy rule and you may wish to create more rules to be detected across your projects

<img src="/images/Compliance-Policy-Rules/Compliance-Policy-Rules-6.png" alt="more rules" >

For more details on policy rule types, see here.

### Scanning your projects with customized policy rules

<hr class="thick" />

Once you have created your policy rules, you can assign them to specific projects or use them as global policies across all projects. To scan your project with those rules, follow these steps:

<div style="display: flex;">
<div style="flex: 1; ">
<img src="/images/Compliance-Policy-Rules/Compliance-Policy-Rules-7.png" alt="assign rules" >
</div>
<div style="flex: 1; margin: 10px;">
1.&nbsp;&nbsp;&nbsp;Navigate to the project you want to scan on the project list

2.&nbsp;&nbsp;&nbsp;Click on the "Scan" button

3.&nbsp;&nbsp;&nbsp;Select the compliance policy you want to apply to the scan

4.&nbsp;&nbsp;&nbsp;Click on the "Scan" button to start scanning

5.&nbsp;&nbsp;&nbsp;{{companyConfig.APP_NAME}} will start scanning your project with the selected policy rules.

</div>
</div>

### Compliance policy result

<hr class="thick" />

It is important to review your policy rules customized for components detected across your organizations. The policy rules are displayed in the "Policy Rule" tab when you click on a project.

<img src="/images/Compliance-Policy-Rules/Compliance-Policy-Rules-8.png" alt="policy rule" >

You can categorize the list according to "Approve", "Deny" and "Flag" status, as well as "License", "Library" and "Vulnerability" categories.

</ClientOnly>
