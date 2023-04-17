---
title: Go Language Support
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: go, go modules, go.mod
---
<ClientOnly>

# {{ $frontmatter.title }}

>![Go logo]() Discover Scantist's capabilities with Go programming language 

## Here's what we support 

<hr style="border:2px solid gray" />

|Languages |Package Manager|Manifest Files         |
|----------|---------------|-----------------------|
|Perl      |CPAN           |Makefile.PL            |

## Scan your Go project with Scantist 

<hr style="border:2px solid gray" />

Scantist scans the third-party components managed by Go Modules. It locates the `go.mod` file in the source code, which provides information about the dependencies and their corresponding versions. By leverage this information, Scantist scans your Go project for any potential security vulnerabilities that may exist in both direct and transitive dependencies. This enables you to identify and mitigate any potential security risk within your project’s dependency chain.  

<!--@include: ../../parts/maximize-results.md-->

</ClientOnly>