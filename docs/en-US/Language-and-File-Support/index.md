---
title: Language and File Support
page: true
lang: en-US
---

<script setup>
import { ref } from 'vue'
import { convertLang } from '../../.vitepress/helperFunctions'

const count = ref(0)
const languages = ref(["Java", "JavaScript", "Perl", "Go", "Python", "Csharp", "Cpp", "Ruby","Php", "Objective-C", "Swift"])

</script>
<style module>
  .lang:hover {
    cursor:pointer;
    background: #f5f5f5;
    color: black;
  }
</style>

<ClientOnly>

# Language and File Support

> You can work with a wide range of programming languages, along with their corresponding package managers and binary file formats. Each language may have unique file extensions associated with their specific package manager of the manifest files.

## Source Code Languages

<hr class="thick" />

Scantist supports various package managers and manifests files for each programming language. To learn more about the language of choice, please refer to the table below and select the corresponding language.

<div style="display:flex;flex-wrap: wrap">
  <el-static-card v-for="lang in languages" @click="location.replace(`/en-US/Language-and-File-Support/${lang}-Language-Support.html`)" is-border style="margin: 5px;" :class="$style.lang">
    <img :src="`/images/Language-and-File-Support/${lang}.svg`" style="width:87px;margin-left:auto;margin-right:auto;min-height:87px" >
    <el-txt type="body" style="display:flex;justify-content: center;margin-top:12px">{{ convertLang(lang) }}</el-txt>
  </el-static-card>
</div>

<br />

| Languages   | Package Manager                                                                     | Manifest Files                                       |
| ----------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Java        | Maven                                                                               | pom.xml                                              |
|             | Gradle                                                                              | build.gradle                                         |
|             | Ant                                                                                 | ivy.xml, build.xml                                   |
|             | Kotlin                                                                              | build.gradle.kts                                     |
| Javascript  | NPM / PNPM                                                                          | package.json, package-lock.json, npm-shrinkwrap.json |
|             | Yarn                                                                                | yarn.lock, package.json                              |
| Perl        | CPAN                                                                                | Makefile.PL                                          |
| Go          | Go Modules                                                                          | go.mod                                               |
| Python      | pip                                                                                 | setup.py                                             |
|             |                                                                                     | requirements.txt                                     |
|             |                                                                                     | pipfile.lock                                         |
| C#          | NuGet 2                                                                             | .sln, packages.config                                |
|             | NuGet 3                                                                             | .sln, project.json, project.lock.json                |
|             | NuGet 4                                                                             | .sln, .csproj (SDK-style), project.assets.json       |
| Ruby        | RubyGems                                                                            | gemfile.lock, gemfile                                |
| PHP         | Composer                                                                            | composer.lock, composer.json                         |
| Objective-C | CocoaPods                                                                           | Podfile.lock                                         |
| Swift       | Swift                                                                               | Package.swift                                        |
| C/C++       | C/C++ does not have a package manager hence, Scantist scans the source code instead |                                                      |

## Binary File Formats

<hr class="thick" />

Scantist supports various file extensions for each binary file format. To learn more about the binary file of choice, please refer to the table below.

| File Format    | File Extensions                                                                      |
| -------------- | ------------------------------------------------------------------------------------ |
| Bytecode       | .jar, .war, .ear, .aar                                                               |
| Binary Archive | .zip, .rar, .7z, .tar, .tar.gz                                                       |
| Binary File    | .so, .o, .dll, .a, .lib, .elf, .exe, .com, .bin, .deb, .msi, .rpm, .ko, .sys, .dylib |
| Mobile         | .apk, .xapk, .aab                                                                    |
| Image          | .tar (docker image)                                                                  |

## What's next?

</ClientOnly>
<!--
<hr class="thick" />

You now set up Scantist SCA and are ready to start scanning your open source projects. Scantist is designed to integrate seamlessly with your existing software development workflows and tools.

- [Trigger a scan](../Trigger-Scan/)

- [Access scan results](#)

- [Fix vulnerabilities](#)

- [Create compliance policies](#)

</ClientOnly> -->
