---
title: Categorize Projects
author: Shamala Mani Vannan, Jackie Tan, Jabir
page: true
lang: en-US
tags: scantist, project, project scan
---

<ClientOnly>

# {{ $frontmatter.title }}

> Identify projects that require immediate attention, prioritize remediation efforts, and better manage software dependencies by filtering your projects

## Let's filter

<hr class="thick" />

You will be able to apply various filters to your projects based on your specific requirement with the following steps:

1.&nbsp;&nbsp;&nbsp;Go to the **Projects** page

2.&nbsp;&nbsp;&nbsp;Click on the **"Filter"** icon located at the top of the projects list. This will open up filter options

3.&nbsp;&nbsp;&nbsp;Set the filter values based on your requirements. You can select one or multiple filters as per your requirements. See below for more information &lt;insert content&gt;

4.&nbsp;&nbsp;&nbsp;You can now view the filtered projects list and take action based on your requirements.

![project filter](/images/Projects-Overview/Projects-Overview-5.png)

### Categorize scan status

<hr class="thick" />

You can filter projects based on their scan status. The following scan status filters are available:

<div style="display: flex;">
    <div style="flex: 1; text-align: center;">
        <span style="color: #FF991F">
            Outdated<br />
            Helps you to ensure you are always up-to-date with the latest security patches<br />
        </span>
    </div>
    <div style="flex: 1; text-align: center;">
        <span style="color: #36B37E">
            Up-to-date<br />
            Provides you with the confidence that your software dependencies are secure<br />
        </span>
    </div>
    <div style="flex: 1; text-align: center;">
        <span style="color: #FF5630">
            Never Scanned<br />
            Helps you to take proactive steps to address vulnerabilities before they become risks<br />
        </span>
    </div>
</div>

### Categorize the severity of the project

<hr class="thick" />

You can filter projects based on the severity of their vulnerabilities. For example, if you want to prioritize projects that have severe vulnerabilities, you can apply a filter to show only projects with <span style="color: #BF2600">Critical</span> and <span style="color: #FF5630">High vulnerabilities</span>. The following severities are available:

<div style="display: flex;">
    <div style="flex: 1; text-align: center;">
        <span style="color: #BF2600">
            Critical<br />
        </span>
        <span style="color: #FF991F">
            Medium
        </span>
    </div>
    <div style="flex: 1; text-align: center;">
        <span style="color: #FF5630">
            High<br />
        </span>
        <span style="color: #FFC400">
            Low
        </span>
    </div>
</div>

### Categorize the source of the project

<hr class="thick" />

You can filter projects based on where they are hosted. This helps you streamline your software management process and save time when reviewing and remedying security issues. The following project sources are available:

<div style="display: flex;">
    <div style="flex: 1; text-align: center;">
        Github<br />
        Bitbucket
    </div>
    <div style="flex: 1; text-align: center;">
        GitLab<br />
        Upload
    </div>
</div>

### Categorize the last scan date of the project

<hr class="thick" />

You can filter projects based on their last scan date, including a range of dates or a specific date. This helps you to quickly find and manage projects based on your requirements in a timely manner. The following examples are available:

1.&nbsp;&nbsp;&nbsp;You may want to filter projects that have been scanned recently to prioritize those that need immediate attention. To do this, you can set the filter to show only projects that have been scanned within the last 7 days or other specific time frames.

2.&nbsp;&nbsp;&nbsp;You may want to filter projects that have not been scanned in the last 30 days. To do this, you can set the Last Scan Date filter to show only projects that have not been scanned since a specific date or within a date range of more than 30 days.

</ClientOnly>
