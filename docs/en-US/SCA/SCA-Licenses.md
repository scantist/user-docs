---
title: SCA Licenses
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: SCA, licenses, types, permissive, neutral, restrictive, attributes
description: This document explains SCA Licenses
---

<script setup>
import { companyConfig } from '../../../config/companyConfig.js'
</script>
<ClientOnly>

# {{ $frontmatter.title }}

> Discover how you can ensure that the software project complies with the licensing requirements of the components used.

## What are OSS Licenses

<hr class="thick" />

Open source licenses are legal agreements between the developers of open source software and the users of that software. They define the terms and conditions under which the software can be used, modified and distributed. These licenses define what the user is allowed to do with the software, what they are restricted from doing, and what they are required to do when using the OSS component.

## License Types

<hr class="thick" />

{{companyConfig.APP_NAME}} classifies the open source licenses as permissive, neutral and restrictive. It is important to review and understand the terms of each license associated with the OSS components used in the project.

### Permissive Licenses

Permissive licenses impose minimal restrictions and requirements on the users of the software. These licenses allow users to use, modify, and redistribute the software as long as they give credit to the original author and do not hold them liable for any issues that may arise from the use of the software.

The MIT License and the Apache License are two of the most commonly used permissive licenses in the open source community. The SPDX License List also shows that most OSS licenses are permissive in nature.

[SPDX License List | Software Package Data Exchange (SPDX)](https://spdx.org/licenses)

### Neutral Licenses

Neutral licenses impose some restrictions on the users of the software, but these restrictions are not as strict as those of restrictive licenses. These licenses may require users to include a copy of the license or copyright notice in any distribution of the software or to make the source code of any modifications available to the public.

Examples of neutral licenses include the Mozilla Public Licenses and the Eclipse Public License.

### Restrictive Licenses

Restrictive licenses impose strong restrictions or have commercially non-viable requirements on the users of the software. These licenses may require users to release any modifications made to the software under the same license or to make the source code of the software available to anyone who receives a copy of the software.

Examples of restrictive licenses include the GNU General Public Licenses (GPL) and the Affero General Public License (AGPL).

## License Attributes

<hr class="thick" />

To avoid any legal or financial implications, it is important to review the license attributes associated with each component regularly and update licensing policies to align with the organization’s objectives.

1.&nbsp;&nbsp;&nbsp; Click on the “arrow” icon located in the “info” column

2.&nbsp;&nbsp;&nbsp; This will expand a pop-up window displaying more information about the license attributes associated with the component.

This section will be empty if there is no licensing policy is found. Learn to create your [licensing policies]().

![Example of MIT License](/images/Application-Security-Testing-Solution/SCA/SCA-Licenses-1.png)

### Allowed License Attribute

The "Allowed" category includes attributes for open source libraries that are licensed via permissive licenses. These licenses impose minimal restrictions on the use, modification and distribution of the software.

### Required License Attribute

The "Required" category includes licensed open source attributes that require additional attention from the user. This may include requirements for attribution or the inclusion of a copy of the license in the distributed software. The requirements for each license may differ, so it is important to review and adhere to the specific requirements of each license.

### Restricted License Attribute

The "Restricted" category includes licensed open source attributes that are restricted to use under an organization's licensing policy. This may include licenses that impose strong restrictions or have commercially non-viable requirements that are not acceptable to the organization. Organizations may choose to restrict the use of certain licenses based on their policies, compliance requirements, or business objectives.

</ClientOnly>
