---
title: License Rule Attribute
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: scantist, license, rules
---

<ClientOnly>

# {{ $frontmatter.title }}

> Define policies for licenses used in your software projects

## Name

<hr class="thick" />

The name of the software license that is associated with a particular component

<div style="display: flex; background-color: #FFEBE6;">

<div style="flex: 0.05; ">

&#10060;

</div>

<div style="flex: 1; ">

<div style="color: #BF2600; font-weight: bold;">

You may want to deny the use of component with licenses for a variety of reasons

</div>

<span style="color: #BF2600;">

1. Licenses may have strict requirements for how the code can be used, modified and distributed, which may not align with the organization's goals and business practices

2. Licenses may have associated with legal disputes or other controversies, and the organization may want to avoid any potential risks or liabilities

3. Licenses may have restrictions that conflict with other licenses being used by the organization, making it difficult to comply 

Examples of licenses that may be denied: 

* The Unlicensed 

* Other 

</span>

</div> 

</div>



<div style="display: flex; background-color: #E3FCEF; margin-top: 10px">

<div style="flex: 0.05; ">

:white_check_mark:

</div>

<div style="flex: 1; ">

<div style="color: #006644; font-weight: bold;">

You may want to approve the use of component with licenses without legal restrictions or requirements that are typically approved for use in commercial and non-commercial software projects

</div>

<span style="color: #006644;">

Examples of license that may be approved: 

* MIT Licnese

* Apache License 2.0 

</span>

</div> 

</div>


## Attribute

<hr class="thick" />

Specify restrictions to ensure that only the appropriate licenses are used in your project. The specific rules that are appropriate for your organization may depend on various factors, such as the industry, software type, and legal requirements. 

You can create policy rules for different license attributes:

<table>
  <tr>
    <th class="header_bold">License Attributes</th>
    <th class="green_highlight"><b>Allow</b></th>
    <th class="yellow_highlight"><b>Flag</b></th>
    <th class="red_highlight"><b>Deny</b></th>
    <th class="header_bold">Reason for Decision</th>
  </tr>
  <tr>
    <td><b>Commercial Use</b></td>
    <td class="green_highlight">&#10003;</td>
    <td class="yellow_highlight"></td>
    <td class="red_highlight"></td>
    <td>Allows the use of software for commercial purposes</td>
  </tr>
  <tr>
    <td><b>Compensate for Damages</b></td>
    <td class="green_highlight"></td>
    <td class="yellow_highlight">&#10003;</td>
    <td class="red_highlight"></td>
    <td>Requires compensation for damages, which may not be feasible or desirable</td>
  </tr>
  <tr>
    <td><b>Contact Author</b></td>
    <td class="green_highlight">&#10003;</td>
    <td class="yellow_highlight"></td>
    <td class="red_highlight"></td>
    <td>Allows for communications with the author or maintainer of the software</td>
  </tr>
  <tr>
    <td><b>Disclose Network Use</b></td>
    <td class="green_highlight"></td>
    <td class="yellow_highlight">&#10003;</td>
    <td class="red_highlight"></td>
    <td>May reveal sensitive information about the network</td>
  </tr>
  <tr>
    <td><b>Disclose Source</b></td>
    <td class="green_highlight"></td>
    <td class="yellow_highlight"></td>
    <td class="red_highlight">&#10003;</td>
    <td>May require sharing proprietary code or trade secrets</td>
  </tr>
  <tr>
    <td><b>Distribute</b></td>
    <td class="green_highlight">&#10003;</td>
    <td class="yellow_highlight"></td>
    <td class="red_highlight"></td>
    <td>Allows for the distribution of the software</td>
  </tr>
  <tr>
    <td><b>Give Credit</b></td>
    <td class="green_highlight">&#10003;</td>
    <td class="yellow_highlight"></td>
    <td class="red_highlight"></td>
    <td>Requires attribution to the original author</td>
  </tr>
  <tr>
    <td><b>Hold Liable</b></td>
    <td class="green_highlight"></td>
    <td class="yellow_highlight">&#10003;</td>
    <td class="red_highlight"></td>
    <td>May create legal liability or risks for the organization</td>
  </tr>
  <tr>
    <td><b>Include Copyright</b></td>
    <td class="green_highlight">&#10003;</td>
    <td class="yellow_highlight"></td>
    <td class="red_highlight"></td>
    <td>Requires attribution to the original author</td>
  </tr>
  <tr>
    <td><b>Include Install Instructions</b></td>
    <td class="green_highlight">&#10003;</td>
    <td class="yellow_highlight"></td>
    <td class="red_highlight"></td>
    <td>Provides guidance on how to install and use the software</td>
  </tr>
  <tr>
    <td><b>Include License</b></td>
    <td class="green_highlight">&#10003;</td>
    <td class="yellow_highlight"></td>
    <td class="red_highlight"></td>
    <td>Specifies the terms and conditions of use</td>
  </tr>
  <tr>
    <td><b>Include Notice</b></td>
    <td class="green_highlight">&#10003;</td>
    <td class="yellow_highlight"></td>
    <td class="red_highlight"></td>
    <td>Requires attribution to the original author</td>
  </tr>
  <tr>
    <td><b>Include Original</b></td>
    <td class="green_highlight">&#10003;</td>
    <td class="yellow_highlight"></td>
    <td class="red_highlight"></td>
    <td>Allows for the use of original code</td>
  </tr>
  <tr>
    <td><b>Modify</b></td>
    <td class="green_highlight">&#10003;</td>
    <td class="yellow_highlight"></td>
    <td class="red_highlight"></td>
    <td>Allows for modification and customization of the software</td>
  </tr>
  <tr>
    <td><b>Pay Above Use Threshold</b></td>
    <td class="green_highlight"></td>
    <td class="yellow_highlight">&#10003;</td>
    <td class="red_highlight"></td>
    <td>May require payment for sue beyond a certain threshold</td>
  </tr>
  <tr>
    <td><b>Place Warranty</b></td>
    <td class="green_highlight"></td>
    <td class="yellow_highlight">&#10003;</td>
    <td class="red_highlight"></td>
    <td>May create legal liability or risks for the organization</td>
  </tr>
  <tr>
    <td><b>Private Use</b></td>
    <td class="green_highlight">&#10003;</td>
    <td class="yellow_highlight"></td>
    <td class="red_highlight"></td>
    <td>Allows for personal, non-commercial use</td>
  </tr>
  <tr>
    <td><b>Relicense</b></td>
    <td class="green_highlight"></td>
    <td class="yellow_highlight"></td>
    <td class="red_highlight">&#10003;</td>
    <td>May require changing the license terms or restrictions</td>
  </tr>
  <tr>
    <td><b>Rename</b></td>
    <td class="green_highlight">&#10003;</td>
    <td class="yellow_highlight"></td>
    <td class="red_highlight"></td>
    <td>Allows for the software to be renamed for branding or customization</td>
  </tr>
  <tr>
    <td><b>Same License File</b></td>
    <td class="green_highlight">&#10003;</td>
    <td class="yellow_highlight"></td>
    <td class="red_highlight"></td>
    <td>Allows for the software to be used under the same license terms</td>
  </tr>
  <tr>
    <td><b>Same License Library</b></td>
    <td class="green_highlight">&#10003;</td>
    <td class="yellow_highlight"></td>
    <td class="red_highlight"></td>
    <td>Allows for the software to be used in conjunction with other software under the same license terms</td>
  </tr>
  <tr>
    <td><b>State Changes</b></td>
    <td class="green_highlight"></td>
    <td class="yellow_highlight">&#10003;</td>
    <td class="red_highlight"></td>
    <td>May require notification or disclosure of changes to the software</td>
  </tr>
  <tr>
    <td><b>Statically Link</b></td>
    <td class="green_highlight"></td>
    <td class="yellow_highlight">&#10003;</td>
    <td class="red_highlight"></td>
    <td>May create legal liability or risks for the organization</td>
  </tr>
  <tr>
    <td><b>Sublicense</b></td>
    <td class="green_highlight"></td>
    <td class="yellow_highlight"></td>
    <td class="red_highlight">&#10003;</td>
    <td>May require granting additional rights or permissions</td>
  </tr>
  <tr>
    <td><b>Use Patent Claims</b></td>
    <td class="green_highlight"></td>
    <td class="yellow_highlight">&#10003;</td>
    <td class="red_highlight"></td>
    <td>May create legal liability or risks for the organization</td>
  </tr>
  <tr>
    <td><b>Use Trademarks</b></td>
    <td class="green_highlight"></td>
    <td class="yellow_highlight">&#10003;</td>
    <td class="red_highlight"></td>
    <td>May create legal liability or risks for the organization</td>
  </tr>
</table>

<div style="display: flex;">

<div style="flex: 0.05; ">

&#9888;

</div>

<div style="flex: 1; ">

<div>

Please note that the reasons for the decision are not exhaustive and may vary depending on the specific context and legal requirements of each organization. 

</div>

</div> 

</div>

</ClientOnly>