---
title: Java Language Support
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: java, maven, gradle, ant, kotlin
---
<ClientOnly>
# {{ $frontmatter.title }}

>![Java logo]() Discover Scantist’s capabilities with Java programming language 

## Here's what we support 

<hr style="border:2px solid gray" />

|Languages |Package Manager|Manifest Files         |
|----------|---------------|-----------------------|
|Java      |Maven          |pom.xml                |
|          |Gradle         |build.gradle           |
|          |Ant            |ivy.xml, build.xml     |
|          |Kotlin         |build.gradle.kts       |

## Scan your Java project with Scantist 

<hr style="border:2px solid gray" />

Scantist scans the third-party components by examining `pom.xml`, `build.gradle`, `ivy.xml`, `build.xml` or `build.gradle.kts` files in the source code. 

Maximize your results by building your project with a CI tool before scanning with Scantist. This allows Scantist to obtain both direct and transitive dependencies from the build result. 

- [Integrate Scantist with your preferred CI/CD pipeline tools]()

## Handling no components found in Gradle or Kotlin project 

<hr style="border:2px solid gray" />

If you are working with Gradle or Kotlin projects and cannot find any components, it may be due to multiple gradle scopes contained in the build.gradle or build.gradle.kts files. In such cases, you can refer to an example project like the BasicRx.JavaSampleKotlin app on GitHub to help you resolve this issue. 

 ::: info <svg height="32" aria-hidden="true" viewBox="0 0 16 16" width="32"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg>

[architecture-components-samples/build.gradle at main · android/architecture-components-samples](https://github.com/android/architecture-components-samples/blob/main/BasicRxJavaSampleKotlin/app/build.gradle)
:::

<div style="display:flex;">
<div style="flex:1;">

![A screenshot of build.gradle file]()

</div>
<div style="flex:1;">
You will find multiple gradleScope inside the dependencies section of the build.gradle file in this screenshot. 

By default, Scantist will use the "implementation" gradleScope when scanning the build.gradle file. 

However, some components may not be picked up if they are not under the "implementation" gradleScope. 
</div>
</div>

In this case, you can include the gradleScope parameter with the Scantist Scan Agent command to ensure that all components are scanned. 

```bash
java -jar scantist-bom-detect.jar -gradleScope scope1,scope2,scope3
```

Here's an example usage of the command where Scantist will consider the components under the specified gradleScopes of "implementation", "compile", "kotlinCompilerClasspath", "kapt", and "testImplementation"

```bash
java -jar scantist-bom-detect.jar -gradleScope implementation,compile,kotlinCompilerClasspath,kapt,testImplementation
```

</ClientOnly>