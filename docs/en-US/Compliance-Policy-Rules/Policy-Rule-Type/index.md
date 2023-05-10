---
title: Policy Rule Type
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: scantist, policy, rules
---

<ClientOnly>

# {{ $frontmatter.title }}

> Explore the various rule types to ensure that your components, vulnerabilities, licenses and projects are scanned according to your specific criteria

## What are Policy Rule Types

<hr class="thick" />

- [Component Rule Type](#component-rule-type)
- [Vulnerability Rule Type](#vulnerability-rule-type)
- [License Rule Type](#license-rule-type)
- [Project Rule Type](#project-rule-type)

### Component Rule Type

<hr class="thick" />

Component rule type allows you to define policies for components used in your software projects. You can create rules based on the name of the component or its release date. 

For example, you may want to deny the use of a component that has a certain name, or approve only components that were released within a certain date range.

> **Info:** Learn more of the component rule attribute<br>
&nbsp;&nbsp;&nbsp;&nbsp;[Component Rule Attribute](Component-Rule-Attribute)

### Vulnerability Rule Type

<hr class="thick" />

Vulnerability rule type allows you to define policies for vulnerabilities detected in your software projects. You can create rules based on the vulnerability score, severity level, vulnerability ID, issue type or remediation status. 

For example, you may want to flag any vulnerabilities with a severity level of “High” or deny the use of any components that have known vulnerabilities. 

> **Info:** Learn more of the vulnerability rule attribute<br>
&nbsp;&nbsp;&nbsp;&nbsp;[Vulnerability Rule Attribute](Vulnerability-Rule-Attribute)

### License Rule Type

<hr class="thick" />

License rule type allows you to define policies for licenses used in your software projects. You can create rules based on the license name or attributes. 

For example, you may want to deny the use of any licenses that contain the “Disclose Source” attribute, or approve only licenses that have explicitly allowed by your organization. 

> **Info:** Learn more of the license rule attribute<br>
&nbsp;&nbsp;&nbsp;&nbsp;[License Rule Attribute](License-Rule-Attribute)

### Project Rule Type

<hr class="thick" />

Project tule type allows you to define policies for your entire software project. You can create rules based on the number of vulnerabilities, components, or licenses used in the project. 

For example, you may want to flag any projects that have more than 10 vulnerabilities or deny any projects that use more than 5 licenses. 

> **Info:** Learn more of the project rule attribute<br>
&nbsp;&nbsp;&nbsp;&nbsp;[Project Rule Attribute](Project-Rule-Attribute)


</ClientOnly>