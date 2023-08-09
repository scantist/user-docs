---
title: Project Rule Attribute
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: scantist, project, rules
---

<script setup>
import { companyConfig } from '../../../config/companyConfig.js'
</script>
<ClientOnly>

# {{ $frontmatter.title }}

> Define policies for projects in your {{companyConfig.COMPANY_NAME}} platform

## Project-level Policy Rules

<hr class="thick" />

Once the policies for components, vulnerabilities, and licenses are established, project-level policy rules can be applied based on various attributes such as the number of denied, flagged, and approved components, vulnerabilities, and licenses. These rules can be used to enforce compliance and ensure that projects meet the organization’s security and legal requirement.

<div style="display: flex; background-color: #FFEBE6;">

<div style="flex: 0.05; ">

&#10060;

</div>

<div style="flex: 1; ">

<div style="color: #BF2600; font-weight: bold;">

You may want to deny a project with a high number of denied or flagged vulnerabilities

</div>

<span style="color: #BF2600;">

Such project require additional attention or resources to address security issues

</span>

</div>

</div>

<div style="display: flex; background-color: #E3FCEF; margin-top: 10px">

<div style="flex: 0.05; ">

:white_check_mark:

</div>

<div style="flex: 1; ">

<div style="color: #006644; font-weight: bold;">

You may want to approve a project with a high number of approved components and licenses

</div>

<span style="color: #006644;">

Such project indicates that the project meets the organization’s security and legal standards and can proceed without further review

</span>

</div>

</div>

<table>
  <tr>
    <th class="header_bold">Policy Rule</th>
    <th class="header_bold">Description</th>
  </tr>
  <tr>
    <td>Denied Vulnerability Count</td>
    <td>Number of vulnerabilities that have been denied for the project</td>
  </tr>
  <tr>
    <td>Flagged Vulnerability Count</td>
    <td>Number of vulnerabilities that have been flagged for the project</td>
  </tr>
  <tr>
    <td>Approved Vulnerability Count</td>
    <td>Number of vulnerabilities that have been approved for the project</td>
  </tr>
  <tr>
    <td>Denied Component Count</td>
    <td>Number of components that have been denied for the project</td>
  </tr>
  <tr>
    <td>Flagged Component Count</td>
    <td>Number of components that have been flagged for the project</td>
  </tr>
  <tr>
    <td>Approved Component Count</td>
    <td>Number of components that have been approved for the project</td>
  </tr>
  <tr>
    <td>Denied License Count</td>
    <td>Number of licenses that have been denied for the project</td>
  </tr>
  <tr>
    <td>Flagged License Count</td>
    <td>Number of licenses that have been flagged for the project</td>
  </tr>
  <tr>
    <td>Approved License Count</td>
    <td>Number of licenses that have been approved for the project</td>
  </tr>
</table>

<div style="display: flex;">

<div style="flex: 0.05; ">

&#9888;

</div>

<div style="flex: 1; ">

<div>

For each of these policy rules, you can set up specific thresholds for what is considered acceptable or not acceptable. For example, you may decide that any project with more than 5 denied vulnerabilities or more than 10 denied licenses is not compliant and requires further review.

</div>

</div>

</div>

</ClientOnly>
