---
title: 开始使用思探明
editor: 陈俊为
page: true
lang: zh-CN
tags: 思探明, started, get started, welcome
---

<script setup>
import { companyConfig } from '../../../config/companyConfig.js'
</script>
<ClientOnly>

# {{ $frontmatter.title }}

> 思探明是您管理和保护开源软件使用的终极工具。使用思探明，您可以轻松识别开源项目中的漏洞和许可风险，并有效地补救它们。

## 按照以下五个简单步骤开始

<hr class="thick">

### 1.&nbsp;&nbsp;&nbsp;注册思探明

要开始使用思探明，请按照我们文档中的说明[注册一个帐户](Sign-up-for-{{companyConfig.COMPANY_NAME}})。

注册后，您将可以访问我们强大的开源管理平台。

### 2.&nbsp;&nbsp;&nbsp;创建一个项目

要开始扫描您的项目以寻找漏洞，您需要在思探明上创建一个项目。请按照我们的文档学习如何上传您的源代码项目。

- [上传源代码或二进制文件](../Create-and-Manage-Project/Upload-Files-Directly)
- [上传源代码管理（SCM）存储库](../Create-and-Manage-Project/Add-SCM-Repositories)

### 3.&nbsp;&nbsp;&nbsp;在您的项目上发起一次扫描

使用思探明扫描您的开源项目，识别漏洞和许可风险。根据您的项目类型，在我们的文档中选择一系列选项来触发扫描。

- [软件组成分析 (SCA)](#)
- [静态应用程序安全测试（SAST)](#)
- [模糊测试](#)
- [基础设施即代码（IaC)](#)

### 4.&nbsp;&nbsp;&nbsp;访问您的扫描结果

在扫描您的项目后，思探明将提供关于发现的[漏洞](#)或[许可风险](#)的详细报告.

### 5.&nbsp;&nbsp;&nbsp;修复您的漏洞

是时候修复您扫描中检测到的漏洞了。使用我们的修复策略，快速高效地解决这些问题，提高软件的整体质量。

## 接下来

<hr class="thick">

您已经设置好了思探明的软件组成分析（SCA），准备开始扫描您的开源项目。思探明旨在与您现有的软件开发工作流程和工具无缝集成。

- [将思探明与您首选的持续集成/持续交付（CI/CD）流水线工具进行集成](#)
- [创建合规策略](#)
  <br /><br />

使用思探明，管理和保护您的开源软件变得更加简单。立即注册并开始使用我们强大的工具来提升软件的安全性。

如果您有任何问题或需要帮助，请随时联系思探明的支持团队，联系方式为：[support@scantist.com](mailto:support@scantist.com).
</ClientOnly>
