---
title: Members and Teams
author: Shamala Mani Vannan, Jackie Tan
page: true
lang: en-US
tags: settings, members, teams
---

<script setup>
import { companyConfig } from '../../../../config/companyConfig.js'
</script>

<ClientOnly>

# {{ $frontmatter.title }}

> Add members to {{companyConfig.APP_NAME}} and assign them to specific teams for efficient management and collaboration on {{companyConfig.APP_NAME}}.

## Members and Teams Settings

<hr style="border:2px solid gray" />

1. Click on the “Settings” tab located at the navigation bar

2. Got to the “Teams and Member” group tab

## Organization members

<hr style="border:2px solid gray" />

You can invite members to join your organization and assign roles to them.

### Invite member

1. Enter the email address of the member that you want to add to your organization

<div style="display: flex; background-color: #FFFAE6;">

<div style="flex: 0.05; ">

&#9888;

</div>

<div style="flex: 1; ">

<div>

You will not be able to invite if the email address has not been registered with {{companyConfig.APP_NAME}}. You will need to ask the invitee to create an account with {{companyConfig.APP_NAME}} first

</div>

</div>

</div>

2. Select “Invite Member” next to the box

<img src="/images/Settings/Settings-4.png" alt="invite member">

3. The invited member will receive an email verification to their inbox and once they have verified the email, their status will show as “active” in the members settings

### Add member

Adding members to your organization is useful when you want your team to use a single organization on {{companyConfig.APP_NAME}} and streamline the scanning process.

1. Click on “Add member” icon

<img src="/images/Settings/Settings-5.png" alt="add member">

2. Enter their username, email address, and assign them a role and team

3. Provide your users with the default password as displayed on the registration form

4. Once the new user logs in with their email address and default passwords, it is recommended that they create a new password for security reasons

<div style="display: flex; background-color: #FFFAE6;">

<div style="flex: 0.05; ">

&#9888;

</div>

<div style="flex: 1; ">

<div>

The system will automatically send an email invitation to the provided email address, prompting the user to complete their registration and set up their account

</div>

</div>

</div>

### Assign role

By default, the member will be assigned as a “member” role. Click on the “edit” box to assign a role for the member.

> **Info:** Learn more about member roles <br> > &nbsp;&nbsp;&nbsp;&nbsp;[Member Roles](Member-Roles.md)

## Team

<hr style="border:2px solid gray" />

Once you have invited members to your organization, you can assign them to specific teams to manage their access and responsibilities.

<div style="background-color: #F4F5F7; padding-left: 10px; padding-right: 10px; padding-top: 0.1px; padding-bottom: 0.1px;">
    <p><span style="font-size: 18px;">📓</span> For instance, let's assume that there are two teams being created in the organization: backend and frontend. Under the team settings, members who are in the frontend team can only view and take action on the projects assigned to the frontend team and the same goes for the backend team. This ensures that there is limited access to sensitive information, and the team members can only work on projects that are relevant to their assigned team.</p>
</div>

### Create team

1. Enter a name for the team e.g. Backend team or Frontend team

2. Select “Create a new team” next to the box

<img src="/images/Settings/Settings-6.png" alt="create team">

### Assign members to specific teams

In the members settings, click on the “edit” icon to assign members to specific teams. You may want to choose more than one team.

> **Info:** Learn more about team roles <br> > &nbsp;&nbsp;&nbsp;&nbsp;[Member Roles](Member-Roles.md)

### Remove members from the team

To remove a member from a team, follow these steps:

1. In the team’s settings, click on the number indicated below the member count

<img src="/images/Settings/Settings-7.png" alt="remove member">

2. Search for the member you want to remove and click on the “delete” icon next to their name

<img src="/images/Settings/Settings-8.png" alt="delete member">

3. The member will now be removed from the team and will no longer have access to the repositories associated with the team

<div style="display: flex; background-color: #FFFAE6;">

<div style="flex: 0.05; ">

&#9888;

</div>

<div style="flex: 1; ">

<div>

Note that this action does not remove the member from your organization entirely. To remove a member from your organization completely, you can click on the “delete” icon next to their name on the members settings.

</div>

</div>

</div>

</ClientOnly>
