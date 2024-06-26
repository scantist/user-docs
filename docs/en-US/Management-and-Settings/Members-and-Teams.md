---
title: Members and Teams
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: settings, members, teams
---

<script setup>
import { companyConfig } from '../../../config/companyConfig.js'
</script>

<ClientOnly>

# {{ $frontmatter.title }}

> Add members to {{companyConfig.APP_NAME}} and assign them to specific roles and teams for efficient management and collaboration on {{companyConfig.APP_NAME}}.

## Members and Teams Settings

<hr style="border:2px solid gray" />

1. Click on the <b>Organisations</b> icon located at the left navigation bar.

2. Go to the <b>Members and Teams</b> tab.

## Organization Members

<hr style="border:2px solid gray" />

You can invite or add members to your organization and assign roles to them.

### Invite a member

1. Select <b>+ Invite Member</b>.

    :::warning &#9888;
    You will not be able to invite if the email address has not been registered with {{companyConfig.APP_NAME}}. You will need to ask the invitee to create an account with {{companyConfig.APP_NAME}} first
    :::

    <img src="/images/Settings/Members-and-Teams-1.png" alt="invite member">

2. A list of emails can be input into the box, separated by commas. For example: test@email.com, text2@email.com, etc.

    It is a requirement to include the Role and Teams that those users will be invited to.
    <div style="flex: 1;">
        <img src="/images/Settings/Members-and-Teams-8.png" />
    </div>

3. The invited member will receive an email verification to their inbox and once they have verified the email, their status will show as <b><span style="color: green;">active</span></b> in the members settings.

### Assign role

By default, a new member will be assigned as an <b>Organization Member</b> role. Click on the <b>edit</b> icon to re-assign a new role for the member.

<img src="/images/Settings/Members-and-Teams-3.png" />

See <a href="./Roles-and-Privileges/">Roles and Privileges</a> for details of various member roles and their privileges.

## Organization Teams

<hr style="border:2px solid gray" />

Once you have invited members to your organization, you can assign them to specific teams to manage their access and responsibilities.

<div style="padding-left: 10px; padding-right: 10px; padding-top: 0.1px; padding-bottom: 0.1px;">
    <p><span style="font-size: 18px;">📓</span> For instance, let's assume that there are two teams being created in the organization: backend and frontend. Under the team settings, members who are in the frontend team can only view and take action on the projects assigned to the frontend team and the same goes for the backend team. This ensures that there is limited access to sensitive information, and the team members can only work on projects that are relevant to their assigned team.</p>
</div>

### Create team

1. Enter a name for the team e.g. Backend or Frontend.

2. Select <b>+ Create a new team</b>.

<img src="/images/Settings/Members-and-Teams-4.png" alt="create team">

### Assign members to specific teams

In the members settings, click on the <b>edit</b> icon to assign members to specific teams. You may want to choose more than one team.

<img src="/images/Settings/Members-and-Teams-5.png" alt="assign members to specific teams">

### Remove members from a team

To remove a member from a team, follow these steps:

1. In the team's settings, click on the number in the <b>Member Count</b> column associated to the Team Name.

    <img src="/images/Settings/Members-and-Teams-6.png" alt="number under Member Count column">

2. Search for the member you want to remove and click on the <b>delete</b> icon next to their name.

    <img src="/images/Settings/Members-and-Teams-7.png" alt="delete member">

3. The member will now be removed from the team and will no longer have access to the repositories associated with the team.

:::warning
This action does not remove the member from your organization entirely. To do so, you can click on the <b>delete</b> icon next to their name under the <b>Organization Members</b> section.
:::

</ClientOnly>
