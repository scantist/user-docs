---
title: Component Rule Attribute
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: scantist, component, rules
---

<ClientOnly>

# {{ $frontmatter.title }}

> Define policies for components used in your software projects

## Name

<hr class="thick" />

The name of a software component, such as a library or framework, that is used in the software project 

<div style="display: flex; background-color: #FFEBE6;">

<div style="flex: 0.05; ">

&#10060;

</div>

<div style="flex: 1; ">

<div style="color: #BF2600; font-weight: bold;">

You may want to deny the use of a component with a known security vulnerability

</div>

<span style="color: #BF2600;">

Example:

Apache Struts: a popular web applicable framework that has had several high-profile security vulnerabilities in the past

OpenSSL: a cryptographic library that has had several security vulnerabilities, including the Heartbleed bug in 2014

jQuery: a JavaScript library that has had several security vulnerabilities in the past

</span>

</div> 

</div>



<div style="display: flex; background-color: #E3FCEF; margin-top: 10px">

<div style="flex: 0.05; ">

:white_check_mark:

</div>

<div style="flex: 1; ">

<div style="color: #006644; font-weight: bold;">

You may want to approve only components that meet certain criteria, such as being maintained by a reputable organization

</div>

<span style="color: #006644;">

Example: 

Spring Framework: a Java framework for building web applicable that is widely used and maintained by Pivotal Software

Bootstrap: a CSS framework for building responsive websites that has a permissive open source license and is widely used and supported by the web development community

</span>

</div> 

</div>


## Release Date

<hr class="thick" />

The date when a particular version of a software library or framework was first released

<div style="display: flex; background-color: #FFEBE6;">

<div style="flex: 0.05; ">

&#10060;

</div>

<div style="flex: 1; ">

<div style="color: #BF2600; font-weight: bold;">

You may want to deny the use of component that were released before 24 months to ensure that you are using up-to-date and secure components in your projects

</div>

</div> 

</div>



<div style="display: flex; background-color: #E3FCEF; margin-top: 10px">

<div style="flex: 0.05; ">

:white_check_mark:

</div>

<div style="flex: 1; ">

<div style="color: #006644; font-weight: bold;">

You may want to approve only components that have been released in the past year

</div>

</div> 

</div>


## Version

<hr class="thick" />

A specific release or iteration of a software library or framework.

<div style="display: flex; background-color: #FFEBE6;">

<div style="flex: 0.05; ">

&#10060;

</div>

<div style="flex: 1; ">

<div style="color: #BF2600; font-weight: bold;">

You may want to deny the use of component that are older than the latest version to ensure that you are using up-to-date and secure versions of components in your project

</div>

<span style="color: #BF2600;">

Example: 

If the latest version of a library is 1.5, you can deny the version that is less than the latest version. 

</span>

</div> 

</div>



<div style="display: flex; background-color: #E3FCEF; margin-top: 10px">

<div style="flex: 0.05; ">

:white_check_mark:

</div>

<div style="flex: 1; ">

<div style="color: #006644; font-weight: bold;">

You may want to approve only components that are on the latest version 

</div>

<span style="color: #006644;">

Example:

If the latest version of a library is 1.5, you can approve the version that is equals to the latest version. 

</span>

</div> 

</div>


## Scope

<hr class="thick" />

When the scope of a policy is set to “dependencies” or “devDependencies”, it means that the policy will only apply to the dependencies or development dependencies of a project, respectively. Dependencies are external libraries or packages that a project requires to function, while devDependencies are packages that are only required for development purposes.

<div style="display: flex; background-color: #FFFAE6;">

<div style="flex: 0.05; ">

&#9888;

</div>

<div style="flex: 1; ">

<div style="color: #FF991F; font-weight: bold;">

You may want to deny the use of component that are older than the latest version to ensure that you are using up-to-date and secure versions of components in your project

</div>

<span style="color: #FF991F;">

Example:

Create a policy with an additional combination that applies to the “dependencies” or “devDependencies” and select critical severity

</span>

</div> 

</div>


## Severity

<hr class="thick" />

The level of risk associated with a security vulnerability found in a component. The severity level is typically assigned by the Common Vulnerability Scoring System (CVSS), which rates vulnerabilities on a scale from 0 to 10, with 10 being the most severe. 

Examples of severity ratings in the CVSS include

&#x2022;0 - 3.9: Low 

&#x2022;4.0 - 6.9: Medium 

&#x2022;7.0 - 8.9: High

&#x2022;9.0 - 10.0: Critical 

<div style="display: flex; background-color: #FFEBE6;">

<div style="flex: 0.05; ">

&#10060;

</div>

<div style="flex: 1; ">

<div style="color: #BF2600; font-weight: bold;">

You may want to deny any component that contains vulnerabilities that are critical and high

</div>

</div> 

</div>



<div style="display: flex; background-color: #E3FCEF; margin-top: 10px">

<div style="flex: 0.05; ">

:white_check_mark:

</div>

<div style="flex: 1; ">

<div style="color: #006644; font-weight: bold;">

You may want to approve components with vulnerabilities that are low severity level

</div>

</div> 

</div>

</ClientOnly>