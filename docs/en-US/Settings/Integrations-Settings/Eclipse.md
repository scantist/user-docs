---
title: Eclipse
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: settings, eclipse, integration
---

<script setup>
import { companyConfig } from '../../../../config/companyConfig.js'
</script>

<ClientOnly>

# {{ $frontmatter.title }}

> Integrate with Eclipse to trigger scanning via Eclipse UI

## Set up your Eclipse integration

<hr style="border:2px solid gray" />

To enable Eclipse integration, follow these steps:

<ol>
  <h3><li>Create access token</li></h3>

  You will need to <a href="../Access-Tokens">create an access token</a> on {{companyConfig.APP_NAME}} to authenticate and authorize the integration.

  <h3><li>Download SCA BOM Detect</li></h3>

  You can download the SCA BOM Detect JAR file <a href="https://download.scantist.io/sca-bom-detect-v4.5.jar">here</a>.

  <h3><li>Eclipse Configuration</li></h3>

  <ol>
    <li>On the top toolbar, click <b>Run</b> > <b>External Tools</b> > <b>External Tools Configurations...</b></li>
    <li>On the left pane, right click <b>Program</b>, then select <b>New Configuration</b>.</li>
    <li>On the right pane, under the <b>Name</b> field, enter a name for this program. E.g. <b>Launch Scantist Scan</b></li>
    <li>Under the <b>Main</b> tab,
      <ul>
        <li>In <b>Location</b> section, click <b>Browse File System...</b> and select the <b>java.exe</b> that resides in your installed JDK/JRE.</li>
        <li>In <b>Working Directory</b> section, click <b>Browse File System...</b> and select your <b>project directory</b>.</li>
        <li>In <b>Arguments</b> section, enter the following command: <br />
        <code>-jar &lt;path\to\the\sca-bom-detect-v4.5.jar&gt; -scanSource "Eclipse IDE"</code></li>
      </ul>
    </li>
    <li>Under the <b>Environment</b> tab, click <b>Add...</b> and enter the following <b>Name-Value</b> pairs accordingly:
      <ul>
        <li>SCANTIST_IMPORT_URL: <br /><code>https://api-v4staging.scantist.io/v2/scans/ci-scan/</code> (for V4 staging environment)
        <br /><code>https://gcc.scantist.io/v2/scans/ci-scan/</code> (for GCC environment)</li>
        <li>SCANTISTTOKEN: &lt;The token you copied in Step 1&gt;</li>
      </ul>
    </li>
    <li>Click <b>Apply</b>, then click <b>Run</b>.</li>
  </ol>
</ol>

</ClientOnly>
