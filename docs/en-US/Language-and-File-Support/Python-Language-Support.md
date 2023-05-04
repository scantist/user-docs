---
title: Python Language Support
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: python, pip, setup.py, requirements.txt, pipfile.lock
language: Python
---
<ClientOnly>

# {{ $frontmatter.title }}

>![Python logo](/images/Language-and-File-Support/Python.png) Discover Scantist's capabilities with {{ $frontmatter.language }} programming language 

## Here's what we support 

<hr style="border:2px solid gray" />

<table>
    <thead>
        <th>Languages</th>
        <th>Package Manager</th>
        <th>Manifest Files</th>
    </thead>
    <tbody>
        <tr>
            <td rowspan="3">{{ $frontmatter.language }}</td>
            <td width="33.33%">pip</td>
            <td width="100%">setup.py</td>
        </tr>
        <tr>
            <td>pip</td>
            <td>requirements.txt</td>
        </tr>
        <tr>
            <td>pip</td>
            <td>pipfile.lock</td>
        </tr>
    </tbody>
</table>

## Scan your {{ $frontmatter.language }} project with Scantist 

<hr style="border:2px solid gray" />

Scantist scans the third-party components by examining `setup.py` file, which is the standard build file that lists the required packages and their versions. 

Scantist also checks the `requirements.txt` file, which contains a list of the packages and their versions needed to run the project. 

Additionally, Scantist scans the `pipfile.lock` file, which is used by the Pipenv package manager to secure the versions of all the required packages for the project. 

By examining these files, Scantist can provide comprehensive security scanning to identify any potential vulnerabilities in your project's third-party dependencies. 

<!--@include: ../../parts/maximize-results.md-->

</ClientOnly>