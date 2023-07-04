---
title: Scantist BOM Detect CLI Commands & Parameters
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: scantist bom detect, cli, commands, parameters
description: This document lists out all Scantist BOM Detect's commands and parameters.
---

<ClientOnly>

# {{ $frontmatter.title }}

[[toc]]

## Authentication Methods
There are 2 different methods for Scantist-BOM-Detect to authenticate the User:
- Authentication through Username and Password
- Authentication through SCANTISTTOKEN environment variable

Both methods of authentication will result in slightly different usage of the CLI commands, described as below.

## Option: Authentication through Username and Password
<table>
    <thead>
        <th>Command</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td><code>java -jar sca-bom-detect-v4.jar</code></td>
            <td>Triggers the detector (JAR file) using default parameters.</td>
        </tr>
    </tbody>
</table>

### Synopsis of Parameters
<table>
    <thead>
        <th>Parameters</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td><code>-h</code></td>
            <td>Display help messages</td>
        </tr>
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

### How To

#### Display help
Display help messages, which shows all commands and their respective description

```shell
java -jar sca-bom-detect-v4.jar -h
```

#### Login to server
Login

```shell
java -jar sca-bom-detect-v4.jar --auth -serverUrl https://api-v4staging.scantist.io/v2/scans/ci-scan/ -username <username> -password <password>
```

#### List projects
Display list of projects that have been scanned. Be sure to login to server first.

```shell
java -jar sca-bom-detect-v4.jar --cliScan --list_projects
```

#### Create a new project
Create a project with given project name

```shell
java -jar sca-bom-detect-v4.jar --cliScan -project_name <project_name>
```

#### Create a new version and upload source code
Create a project with given project name, project version and file path to project.

```shell
java -jar sca-bom-detect-v4.jar --cliScan -project_name <project_name> -project_version <version_name> -file <filePath>
```

#### Trigger Scan
Trigger a scan on an existing project name, version and file path. If it does not exist, it will be created.

```shell
java -jar sca-bom-detect-v4.jar --cliScan -project_name <project_name> -project_version <version_name> -file <filePath>
```

#### Log out
Logout of account. Be sure to always logout in order to change accounts

```shell
java -jar sca-bom-detect-v4.jar --logout
```

## Option: Authentication through SCANTISTTOKEN
<table>
    <thead>
        <th>Commands</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td><code>java -jar sca-bom-detect-v4.jar</code></td>
            <td>Triggers the detector (JAR file) using default parameters.</td>
        </tr>
    </tbody>
</table>

### Synopsis of Parameters
<table>
    <thead>
        <th>Parameters</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td><code>-h</code></td>
            <td>Display help messages</td>
        </tr>
        <tr>
            <td><code>-project_name <i>&lt;project_name&gt;</i></code></td>
            <td>Create a new project with <i>&lt;project_name&gt;</i></td>
        </tr>
        <tr>
            <td><code>-project_version <i>&lt;project_version&gt;</i></code></td>
            <td>Create a project version with <i>&lt;project_version&gt;</i>, under <i>&lt;project_name&gt;</i>. Needs to be used with <code>-project_name</code></td>
        </tr>
        <tr>
            <td><code>-file <i>&lt;filePath&gt;</i></code></td>
            <td>Upload source code from <i>&lt;filePath&gt;</i>, to <i>&lt;project_name&gt;</i>, <i>&lt;project_version&gt;</i>. Needs to be used with <code>-project_name, -project_version</code></td>
        </tr>
        <tr>
            <td><code>-scanType <i>&lt;e.g. SCA&gt;</i></code></td>
            <td>Trigger a scan of type <i>&lt;scanType&gt;</i>, under <i>&lt;project_name&gt;</i>, <i>&lt;project_version&gt;</i>, <i>&lt;filePath&gt;</i>. Needs to be used with <code>-project_name, -project_version, -filePath</code></td>
        </tr>
        <tr>
            <td><code>--logout </code></td>
            <td>Logout</td>
        </tr>
    </tbody>
</table>

### How To

#### Display help
<table>
    <tbody>
        <tr>
            <td><code>-h</code></td>
            <td>Display help messages, which shows all commands and their respective description</td>
        </tr>
    </tbody>
</table>

```shell
java -jar sca-bom-detect-v4.jar -h
```

#### Create a new project
<table>
    <tbody>
        <tr>
            <td><code>-project_name <i>&lt;project_name&gt;</i></code></td>
            <td>Create a project with given project name</td>
        </tr>
    </tbody>
</table>

```shell
java -jar sca-bom-detect-v4.jar -project_name <project_name>
```

#### Create a new version and upload source code
<table>
    <tbody>
        <tr>
            <td>
                <code>-project_name <i>&lt;project_name&gt;</i>
                    -project_version <i>&lt;version_name&gt;</i>
                    -file <i>&lt;file_path&gt;</i>
                </code>
            </td>
            <td>Create a project with given project name, project version and file path to project.</td>
        </tr>
    </tbody>
</table>

```shell
java -jar sca-bom-detect-v4.jar -project_name <project_name> -project_version <version_name> -file <filePath>
```

#### Trigger Scan
<table>
    <tbody>
        <tr>
            <td>
                <code>-project_name <i>&lt;project_name&gt;</i>
                    -project_version <i>&lt;version_name&gt;</i>
                    -file <i>&lt;file_path&gt;</i>
                    -scanType <i>&lt;e.g. SCA&gt;</i>
                </code>
            </td>
            <td>Trigger a scan on an existing project name, version and file path. If it does not exist, it will be created.</td>
        </tr>
    </tbody>
</table>

```shell
java -jar sca-bom-detect-v4.jar -project_name <project_name> -project_version <version_name> -file <filePath>
```

#### Log out
<table>
    <tbody>
        <tr>
            <td>
                <code>--logout</code>
            </td>
            <td>Logout of account. Be sure to always logout in order to change accounts</td>
        </tr>
    </tbody>
</table>

```shell
java -jar sca-bom-detect-v4.jar --logout
```
</ClientOnly>