---
title: Integrations Settings
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: settings, integrations
---

<script setup>
import { companyConfig } from '../../../../config/companyConfig.js'
</script>

<ClientOnly>

# {{ $frontmatter.title }}

> Integrate with various tools throughout the software development life cycle for enhanced security and reliability.

## Integration Tools

<div style="display: flex;">

<div style="flex: 1; text-align: center; padding-right: 10px;">

<span>

<img src="/images/Settings/Settings-9.png" alt="invite member">

<br>

<div style="font-size:16px;"><b>Issues Follow Up</b></div><br>

<div style="border: 1px solid grey; padding: 5px;">

Track and manage the progress of reported vulnerability issues.

Issue tracking tools can facilitate this progress:

- [Jira](Jira.md)

- Chat Notify (Coming Soon !)

</div>

</span>

</div>

<div style="flex: 1; text-align: center; padding-right: 10px;">

<span>

<img src="/images/Settings/Settings-10.png" alt="issues follow up">

<br>

<div style="font-size:16px;"><b>CI/CD Pipeline</b></div><br>

<div style="border: 1px solid grey; padding: 5px;">

Automate the entire software development lifecycle, from building, testing, and deployment to production.

<b>CI/CD tools: </b>

- <a href="../../Plugins-and-Integrations/Build-based-Scan-CICD-Pipeline/Bamboo-CI-Integration">Bamboo</a>

- <a href="../../Plugins-and-Integrations/Build-based-Scan-CICD-Pipeline/CircleCI-Integration">Circle Ci</a>

- <a href="../../Plugins-and-Integrations/Build-based-Scan-CICD-Pipeline/Jenkins-CI-Integration">Jenkins</a>

- <a href="../../Plugins-and-Integrations/Build-based-Scan-CICD-Pipeline/GitHub-Actions-Integration">Github Actions</a>

- <a href="../../Plugins-and-Integrations/Build-based-Scan-CICD-Pipeline/GitLab-CI-Integration">Gitlab</a>

- <a href="../../Plugins-and-Integrations/Build-based-Scan-CICD-Pipeline/Travis-CI-Integration">Travis</a>

</div>

</span>

</div>

<div style="flex: 1; text-align: center;">

<span>

<img src="/images/Settings/Settings-11.png" style="width: 100%" alt="cicd tools">

<br>

<div style="font-size:16px;"><b>Command Line Interface</b></div><br>

<div style="border: 1px solid grey; padding: 5px;">

Manage vulnerabilities by using textual commands typed into a terminal or console.

CLI are often preferred. by developers who are comfortable working with command-line tools, as they can be faster and more efficient than GUIs for certain tasks.

<b>Scan your project from the command line:</b>

- <a href="../../References/SCA-BOM-Detect-CLI-Commands-&-Parameters">SCA BOM Detect</a>

</div>

</span>

</div>

</div>

</ClientOnly>
