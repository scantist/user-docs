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

|![Java](/images/Language-and-File-Support/Java.png)|![JavaScript](/images/Language-and-File-Support/JavaScript.png)|![Perl](/images/Language-and-File-Support/Perl.png)|![Go](/images/Language-and-File-Support/Go.png)|![Python](/images/Language-and-File-Support/Python.png)|![C#](/images/Language-and-File-Support/CSharp.png)|
|:-------:|:-------------:|:---:|:---:|:---:|:---:|
|[Java](Java-Language-Support)     |JavaScript|Perl|Go|Python|C#|

|![C/C++](/images/Language-and-File-Support/C.png)|![Ruby](/images/Language-and-File-Support/Ruby.png)|![PHP](/images/Language-and-File-Support/PHP.png)|![Objective-C](/images/Language-and-File-Support/Objective-C.png)|![Swift](/images/Language-and-File-Support/Swift.png)|
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

## What's next?

<hr style="border:2px solid gray" />

You now set up Scantist SCA and are ready to start scanning your open source projects. Scantist is designed to integrate seamlessly with your existing software development workflows and tools.

- [Trigger a scan](../Trigger-Scan/)

- [Access scan results](#)

- [Fix vulnerabilities](#)

- [Create compliance policies](#)

</ClientOnly>