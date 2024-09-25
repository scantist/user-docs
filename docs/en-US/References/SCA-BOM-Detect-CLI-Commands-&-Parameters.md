---
title: SCA BOM Detect CLI Commands & Parameters
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: SCA bom detect, cli, commands, parameters
description: This document lists out all SCA BOM Detect's commands and parameters.
---

<script setup>
import { companyConfig } from '../../../config/companyConfig.js'
const baseUrl = window.location.origin;
const downloadLink = baseUrl.includes('scantist') ? "https://download.scantist.io/sca-bom-detect.jar" : `${baseUrl}/sca-bom-detect.jar`;
</script>

<ClientOnly>

# SCA BOM Detect

# CLI Commands & Parameters

[[toc]]

## Windows UTF-8 support

_Only for Windows Users_

Example of error

```shell
Error: Unable to get Charset 'cp65001' for property 'sun.stdout.encoding', using default windows latin and continuing
```

This solution shows how to switch the character encoding in Windows consoles (terminals) to (BOM-less) UTF-8 system-wide (code page 65001), so that shells such as cmd.exe and PowerShell properly encode and decode characters (text) when communicating with external (console) programs with full Unicode support, and in cmd.exe also for file I/O.

Solution steps:

1. Open run command - Windows Key + R

2. Run 'intl.cpl'
<div style="flex: 1;">
  <img src="/images/References/winr_command.png" />
</div>

3. Follow the instructions in the screen shot below.
<div style="flex: 1;">
  <img src="/images/References/winr_instruction1.png" />
</div>

<a href="https://stackoverflow.com/questions/57131654/using-utf-8-encoding-chcp-65001-in-command-prompt-windows-powershell-window" target="_blank">Reference Link</a>

## Download SCA BOM Detect

Click on the link below to download the SCA Bom Detect

<a :href="`${downloadLink}`" target="_blank">sca-bom-detect.jar</a>

## Basic Commands

<table>
    <thead>
        <th>Command</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td><code>java -jar sca-bom-detect.jar</code></td>
            <td>Triggers the detector (JAR file) using default parameters values.</td>
        </tr>
    </tbody>
</table>

## Basic Parameters

<table>
    <thead>
        <th>Parameters</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td><code>-h</code></td>
            <td>Displays help information and usage instructions.</td>
        </tr>
        <tr>
            <td><code>-v</code></td>
            <td>Displays the version of the SCA BOM Detect tool.</td>
        </tr>
    </tbody>
</table>

## Authentication Methods

SCA BOM Detect uses environment variables for user authentication. Currently, there's only one supported method:

- Authentication through <b>DEVSECOPS_TOKEN</b> and <b>DEVSECOPS_IMPORT_URL</b> environment variable

### Steps to authenticate

1. Login to Scantist: <a href="https://www.app.scantist.io" target="_blank">Scantist</a>

2. Click on "Organization" on the left-hand side menu.

3. Go to the "Access Tokens" tab.

4. Click "Create New Token," provide a name, and generate the token.

5. Copy the generated token. Note: You cannot view the token again after saving it.

  <div style="flex: 1;">
    <img src="/images/References/api-key2.png" />
  </div>

<b>Prerequisites:</b>

- Scantist BOM detect requires Java to be installed in your environment first before it can be executed.

<b>Authentication:</b>

1. Set the DEVSECOPS_TOKEN environment variable with the copied token from step 5 above.

2. Set the SERVERURL environment variable with the Scantist API endpoint URL (https://api-app.scantist.io/).

- <b>Export your authentication token and server URL:</b>

```shell
export DEVSECOPS_TOKEN="YOUR_GENERATED_TOKEN"
export SERVERURL="https://api-app.scantist.io/"
```

- <b>Run the SCA BOM Detect JAR with authentication</b>

```shell
java -jar sca-bom-detect.jar --auth -serverUrl $SERVERURL -apiKey $DEVSECOPS_TOKEN
```

### Additional Commands

##### List projects

Display list of projects that have been scanned. Be sure to login to server first.

```shell
java -jar sca-bom-detect.jar --cliScan --list_projects
```

##### Create a new project

Create a project with given project name.

```shell
java -jar sca-bom-detect.jar --cliScan -project_name <project_name>
```

##### Create a new version and upload source code

Create a project with given project name, project version and file path to project.

```shell
java -jar sca-bom-detect.jar --cliScan -project_name <project_name> -project_version <version_name> -file <filePath>
```

##### Trigger Scan

Trigger a scan on an existing project name, version and file path. If it does not exist, it will be created.

```shell
java -jar sca-bom-detect.jar --cliScan -project_name <project_name> -project_version <version_name> -file <filePath>
```

##### Report

Include the parameters below to download the report post scan:

```shell
java -jar sca-bom-detect.jar -f <filePath> -report_format xml -checkCompliance
```

<b>Report Formats</b>

  <div style="flex: 1;">
    <img src="/images/References/export-report1.png" />
  </div>

##### Logout

Log out of the current account. Always log out first to log in to another account.

```shell
java -jar sca-bom-detect.jar --logout
```

</ClientOnly>

<!-- ### Option: Authentication through Username and Password

#### Synopsis of Parameters

<table>
    <thead>
        <th>Parameters</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td><code>--auth</code></td>
            <td>Authentication flag, requires <code>-serverUrl, -username,-password</code></td>
        </tr>
        <tr>
            <td><code>-serverUrl <i>&lt;server_url&gt;</i></code></td>
            <td>Connection to URL, to be used with <code>--auth</code> flag</td>
        </tr>
        <tr>
            <td><code>-username <i>&lt;username&gt;</i></code></td>
            <td>Username credential, needs to be used with <code>--auth</code> flag</td>
        </tr>
        <tr>
            <td><code>-password <i>&lt;password&gt;</i></code></td>
            <td>Password credential, needs to be used with <code>--auth</code> flag</td>
        </tr>
        <tr>
            <td><code>--cliScan </code></td>
            <td>Scan flag, can be used with <code>--list_projects, -project_name, -project_version, -file, -scanType</code></td>
        </tr>
        <tr>
            <td><code>--list_projects</code></td>
            <td>Shows project list, needs to be used with <code>--cliScan</code>flag</td>
        </tr>
        <tr>
            <td><code>-project_name <i>&lt;project_name&gt;</i></code></td>
            <td>Create a new project with <i>&lt;project_name&gt;</i>, needs to be used with <code>--cliScan</code>flag</td>
        </tr>
        <tr>
            <td><code>-project_version <i>&lt;project_version&gt;</i></code></td>
            <td>Create a project version with <i>&lt;project_version&gt;</i>, under <i>&lt;project_name&gt;</i>. Needs to be used with <code>--cliScan</code>flag, <code>-project_name</code></td>
        </tr>
        <tr>
            <td><code>-file <i>&lt;filePath&gt;</i></code></td>
            <td>Upload source code from <i>&lt;filePath&gt;</i>, to <i>&lt;project_name&gt;</i>, <i>&lt;project_version&gt;</i>. Needs to be used with <code>--cliScan</code>flag, <code>-project_name, -project_version</code></td>
        </tr>
        <tr>
            <td><code>-scanType <i>&lt;e.g. SCA&gt;</i></code></td>
            <td>Trigger a scan of type <i>&lt;scanType&gt;</i>, under <i>&lt;project_name&gt;</i>, <i>&lt;project_version&gt;</i>, <i>&lt;filePath&gt;</i>. Needs to be used with <code>--cliScan</code>flag, <code>-project_name, -project_version, -filePath</code></td>
        </tr>
        <tr>
            <td><code>--logout </code></td>
            <td>Logout</td>
        </tr>
    </tbody>
</table>

#### How To

<br />

##### Login

Log in to {{companyConfig.APP_NAME}}'s server.

(For V4 staging environment)
```shell
export USERNAME="your_username"
export PASSWORD="your_password"
export SERVERURL="https://api-v4staging.scantist.io/v2/scans/ci-scan/"
java -jar sca-bom-detect.jar --auth -serverUrl $SERVERURL -username $USERNAME -password $PASSWORD
```

(For GCC environment)
```shell
export USERNAME="your_username"
export PASSWORD="your_password"
export SERVERURL="https://gcc.scantist.io/v2/scans/ci-scan/"
java -jar sca-bom-detect.jar --auth -serverUrl $SERVERURL -username $USERNAME -password $PASSWORD
``` -->
