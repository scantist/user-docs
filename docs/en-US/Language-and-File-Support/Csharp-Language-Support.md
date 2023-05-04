---
title: C# Language Support
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: c#, nuget, .sln, project.asset.json, project.json, project.lock.json
language: C#
---
<ClientOnly>

# {{ $frontmatter.title }}

>![C# logo](/images/Language-and-File-Support/CSharp.png) Discover Scantist's capabilities with {{ $frontmatter.language }} programming language 

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
            <td width="33.33%">Nuget 2</td>
            <td width="100%">.sln and packages.config</td>
        </tr>
        <tr>
            <td>Nuget 3</td>
            <td>.sln and (project.json or project.lock.json)</td>
        </tr>
        <tr>
            <td>Nuget 4</td>
            <td>.sln and (.csproj (SDK-style) or project.assets.json)</td>
        </tr>
    </tbody>
</table>

## Scan your {{ $frontmatter.language }} project with Scantist 

<hr style="border:2px solid gray" />

Scantist scans the third-party components managed by Nuget. It locates the `.sln`, `packages.config`, `project.json`, `project.lock.json`, `.csproj (SDK-style)` or `project.assets.json` files in the source code, which provides information about the direct dependencies and their corresponding versions. 

**Please be aware that Nuget 4.9 project.lock.json is not supported yet.**

<!--@include: ../../parts/maximize-results.md-->

</ClientOnly>