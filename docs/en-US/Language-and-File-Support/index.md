---
title: Language and File Support
page: true
lang: en-US
---
<ClientOnly>
# Language and File Support
>You can work with a wide range of programming languages, along with their corresponding package managers and binary file formats. Each language may have unique file extensions associated with their specific package manager of the manifest files. 

## Source Code Languages 

<hr style="border:2px solid gray" />

Scantist supports various package managers and manifests files for each programming language. To learn more about the language of choice, please refer to the table below and select the corresponding language. 

|![Java]()|![Javascript]()|![Perl]()|![Go]()|![Python]()|![C#]()|
|:---:|:---:|:---:|:---:|:---:|:---:|
|Java|JavaScript|Perl|Go|Python|C#|

|![C/C++]()|![Ruby]()|![PHP]()|![Objective-C]()|![Swift]()|
|:---:|:---:|:---:|:---:|:---:|
|C/C++|Ruby|PHP|Objective-C|Swift|

<br />

|Languages |Package Manager|Manifest Files         |
|----------|---------------|-----------------------|
|Java      |Maven          |pom.xml                |
|          |Gradle         |build.gradle           |
|          |Ant            |ivy.xml, build.xml     |
|          |Kotlin         |build.gradle.kts       |
|Javascript|NPM / PNPM     |package.json, package-lock.json, npm-shrinkwrap.json|
|          |Yarn           |yarn.lock, package.json|
|Perl|CPAN|Makefile.PL|
|Go|Go Modules|go.mod|
|Python|pip|setup.py|
|||requirements.txt|
|||pipfile.lock|
|C#|NuGet 2|.sln, packages.config|
||NuGet 3|.sln, project.json, project.lock.json|
||NuGet 4|.sln, .csproj (SDK-style), project.assets.json|
|Ruby|RubyGems|gemfile.lock, gemfile|
|PHP|Composer|composer.lock, composer.json|
|Objective-C|CocoaPods|Podfile.lock|
|Swift|Swift|Package.swift|
|C/C++|C/C++ does not have a package manager hence, Scantist scans the source code instead||

## Binary File Formats 

<hr style="border:2px solid gray" />

Scantist supports various file extensions for each binary file format. To learn more about the binary file of choice, please refer to the table below. 

|File Format|File Extensions|
|---|---|
|Bytecode|.jar, .war, .ear, .aar|
|Binary Archive|.zip, .rar, .7z, .tar, .tar.gz|
|Binary File|.so, .o, .dll, .a, .lib, .elf, .exe, .com, .bin, .deb, .msi, .rpm, .ko, .sys, .dylib|
|Mobile|.apk, .xapk, .aab|
|Image|.tar (docker image)|

<!--@include: ../../parts/whats-next.md-->
</ClientOnly>