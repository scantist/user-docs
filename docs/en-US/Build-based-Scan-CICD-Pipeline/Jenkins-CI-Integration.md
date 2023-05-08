---
title: Jenkins CI Integration
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: ci, jenkins, continuous integration
description: This document explains how to integrate Jenkins CI
---

<ClientOnly>

# {{ $frontmatter.title }}

>Discover Scantist's capabilities with Jenkins integration

## Jenkins CI

Jenkins is a popular choice of continuous integration and continuous delivery solution for developers to integrate with a variety of development, testing, and deployment tools. Jenkins is highly extensible and customizable, which makes it suitable for a wide range of projects - from small single-developer projects to large enterprise-level applications. 

Integrating Scantist into the development lifecycle of Jenkins CI can help enforce security and licensing compliance in the CI/CD pipeline. There are two ways to integrate Scantist with Jenkins CI: 

1. Using Jenkinsfile

2. Using Scantist CLI 

## Follow these steps to integrate Scantist with Jenkins CI using Jenkinsfile


This approach allows Jenkins users to scan their code for security vulnerabilities and licensing issues during the build process. 

**1. Create access token**

You will need to create an access token on Scantist to authenticate and authorize the integration between Scantist and other tools.

……..

Follow these steps to integrate Scantist with Jenkins CI using Scantist CLI
This approach involves running the Scantist CLI as part of your Jenkins build process  - can be more flexible than using the Jenkinsfile, but it required more configuration and setup

</ClientOnly>