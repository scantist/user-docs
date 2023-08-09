---
title: Projects Overview
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: scantist, project, project scan
---

<script setup>
import { companyConfig } from '../../../config/companyConfig.js';
</script>
<style scoped>
  .steps {
    display: block;
    margin: 10px 0;
  }
</style>

<ClientOnly>

# {{ $frontmatter.title }}

> Analyze software dependencies with {{companyConfig.COMPANY_NAME}} on the Project page

## Summary of Projects in {{companyConfig.COMPANY_NAME}}

<hr class="thick" />

The Project page provides a comprehensive view of all your projects, making managing and prioritizing them easier based on their security status. Let's find out what's on the project list, and how to scan directly and sort your projects.

### Project List

<hr class="thick" />

Projects that have been scanned most recently are at the top of the project list.

In addition, you will also see projects that have not been scanned in a while or have never been scanned, marked as OUTDATED SCANS and NEVER SCANNED respectively.

![project list](/images/Projects-Overview/Projects-Overview-1.png)

### Project Scan

<hr class="thick" />

Scan a project directly from the project list by clicking on the **“Scan”** icon next to the project in the project list. This will initiate a scan of the project, allowing you to quickly identify any vulnerabilities.

![project scan](/images/Projects-Overview/Projects-Overview-2.png)

Once the scan is complete, the results will be displayed for each application security testing solution on the **Project Page**. Click on the arrow next to the project you want to view the scan results for.

![project page](/images/Projects-Overview/Projects-Overview-3.png)

### Project Sort

<hr class="thick" />

Sorting the project list by **Last Scan Time**, **Project Name** and **Project Creation Time** can help you to better find and manage projects based on different parameters. To sort the project list, follow these steps:

<img src="/images/Projects-Overview/Projects-Overview-4.png"/>

<ol>
  <li>Click the bar for “sort by” located on top of the project list</li>
  <li>Select any of the three categories from the drop-down list</li>
  <li>Click on the arrow next to the drop-down list to sort the list in descending order
    <div class="steps">
      <b>Sorting projects by last scan time</b> can help you to identify which projects have been scanned most recently
    </div>
    <div class="steps">
      <b>Sorting projects by project name</b> can help you to identify projects in ascending order alphabetically
    </div>
    <div class="steps">
      <b>Sorting projects by project creation time</b> can be useful for identifying recently added projects
    </div>
  </li>
</ol>

### Further Categorizing Projects

<hr class="thick" />

Projects can be further categorized based on various criteria such as severity, scan source and customized scan date range. Learn how to filter your projects for better management and prioritization:

- [Categorize Projects](categorize-projects)

</ClientOnly>
