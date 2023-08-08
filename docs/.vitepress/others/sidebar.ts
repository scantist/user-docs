import { Options } from "./types";

import fs from "fs";
import path from "path";
import { companyConfig } from "../../../config/companyConfig";

function getSidebarItems(
  dir: string[],
  currentRoot: string | undefined,
  root: string | undefined,
  options: Options
): object {
  return dir
    .filter(
      (e) =>
        e.endsWith(".md") ||
        fs.statSync(path.resolve(currentRoot ?? "/", e)).isDirectory()
    )
    .map((e: string) => {
      const childDir: string = path.resolve(currentRoot ?? "/", e);
      if (fs.statSync(childDir).isDirectory()) {
        const sectionLink = `/en-US/`
          .concat(childDir.replace(root ?? "", ""))
          .concat(`/index.md`);
        return {
          text: (e.charAt(0).toUpperCase() + e.slice(1)).replaceAll("-", " "),
          link: sectionLink,
          collapsible: options.collapsible,
          collapsed: options.collapsed,
          items: getSidebarItems(
            fs.readdirSync(childDir),
            childDir,
            root,
            options
          ),
        };
      } else if (e.endsWith(".md") && e !== "index.md") {
        return {
          text: (e.charAt(0).toUpperCase() + e.slice(1))
            .slice(0, -3)
            .replaceAll("-", " "),
          link: `/en-US/`.concat(childDir.replace(root ?? "", "")),
        };
      }
      return {};
    });
}

export function getSidebar() {
  return [
    {
      text: "Get Started",
      collapsed: true,
      link: "/Get-Started",
    },
  ];
}

export function enUSSidebar() {
  return [
    {
      text: "Get Started",
      link: "/en-US/Get-Started/",
      collapsed: true,
      items: [
        {
          text: `Sign up for ${companyConfig.APP_NAME}`,
          link: "/en-US/Get-Started/Sign-up-for-more",
        },
        {
          text: "SCM Integration",
          link: "/en-US/Get-Started/SCM-Integration",
        },
        {
          text: "Organization Group",
          link: "/en-US/Get-Started/Organization-Group",
        },
      ],
    },
    {
      text: "Language and File Support",
      link: "/en-US/Language-and-File-Support/",
      collapsed: true,
      items: [
        {
          text: "Java Language Support",
          link: "/en-US/Language-and-File-Support/Java-Language-Support",
        },
        {
          text: "JavaScript Language Support",
          link: "/en-US/Language-and-File-Support/JavaScript-Language-Support",
        },
        {
          text: "Perl Language Support",
          link: "/en-US/Language-and-File-Support/Perl-Language-Support",
        },
        {
          text: "Go Language Support",
          link: "/en-US/Language-and-File-Support/Go-Language-Support",
        },
        {
          text: "Python Language Support",
          link: "/en-US/Language-and-File-Support/Python-Language-Support",
        },
        {
          text: "C# Language Support",
          link: "/en-US/Language-and-File-Support/Csharp-Language-Support",
        },
        {
          text: "Ruby Language Support",
          link: "/en-US/Language-and-File-Support/Ruby-Language-Support",
        },
        {
          text: "PHP Language Support",
          link: "/en-US/Language-and-File-Support/PHP-Language-Support",
        },
        {
          text: "Objective-C Language Support",
          link: "/en-US/Language-and-File-Support/Objective-C-Language-Support",
        },
        {
          text: "Swift Language Support",
          link: "/en-US/Language-and-File-Support/Swift-Language-Support",
        },
      ],
    },
    {
      text: "Create and Manage Project",
      link: "/en-US/Create-and-Manage-Project/",
      collapsed: true,
      items: [
        {
          text: "Upload Files Directly",
          link: "/en-US/Create-and-Manage-Project/Upload-Files-Directly",
        },
        {
          text: "Add SCM Repositories",
          link: "/en-US/Create-and-Manage-Project/Add-SCM-Repositories",
        },
      ],
    },
    {
      text: "Trigger Scan",
      link: "/en-US/Trigger-Scan/",
      collapsed: true,
      items: [
        {
          text: "Upload Scan Settings",
          link: "/en-US/Trigger-Scan/Upload-Scan-Settings",
        },
        {
          text: "SCM Scan Settings",
          link: "/en-US/Trigger-Scan/SCM-Scan-Settings",
        },
      ],
    },
    {
      text: "Build-based Scan - CI/CD Pipeline",
      link: "/en-US/Build-based-Scan-CICD-Pipeline/",
      collapsed: true,
      items: [
        {
          text: "Bamboo CI Integration",
          link: "/en-US/Build-based-Scan-CICD-Pipeline/Bamboo-CI-Integration",
        },
        {
          text: "CircleCI Integration",
          link: "/en-US/Build-based-Scan-CICD-Pipeline/CircleCI-Integration",
        },
        {
          text: "GitHub Actions CI Integration",
          link: "/en-US/Build-based-Scan-CICD-Pipeline/GitHub-Actions-Integration",
        },
        {
          text: "GitLab CI Integration",
          link: "/en-US/Build-based-Scan-CICD-Pipeline/GitLab-CI-Integration",
        },
        {
          text: "Jenkins CI Integration",
          link: "/en-US/Build-based-Scan-CICD-Pipeline/Jenkins-CI-Integration",
        },
        {
          text: "Travis CI Integration",
          link: "/en-US/Build-based-Scan-CICD-Pipeline/Travis-CI-Integration",
        },
      ],
    },
    {
      text: "SCA",
      link: "/en-US/SCA/",
      collapsed: true,
      items: [
        {
          text: "SCA Components Results",
          link: "/en-US/SCA/Components",
        },
        {
          text: "SCA Licenses",
          link: "/en-US/SCA/Licenses",
        },
        {
          text: `Export Reports on ${companyConfig.APP_NAME}`,
          link: "/en-US/SCA/Export-Reports-on-app",
        },
      ],
    },
    {
      text: "Compliance Policy Rules",
      link: "/en-US/Compliance-Policy-Rules/",
      collapsed: true,
      items: [
        {
          text: "Policy Rule Type",
          link: "/en-US/Compliance-Policy-Rules/Policy-Rule-Type/",
          collapsed: true,
          items: [
            {
              text: "Component Rule Attribute",
              link: "/en-US/Compliance-Policy-Rules/Policy-Rule-Type/Component-Rule-Attribute",
            },
            {
              text: "Vulnerability Rule Attribute",
              link: "/en-US/Compliance-Policy-Rules/Policy-Rule-Type/Vulnerability-Rule-Attribute",
            },
            {
              text: "License Rule Attribute",
              link: "/en-US/Compliance-Policy-Rules/Policy-Rule-Type/License-Rule-Attribute",
            },
            {
              text: "Project Rule Attribute",
              link: "/en-US/Compliance-Policy-Rules/Policy-Rule-Type/Project-Rule-Attribute",
            },
          ],
        },
      ],
    },
    {
      text: "Projects Overview",
      link: "/en-US/Projects-Overview/",
      collapsed: true,
      items: [
        {
          text: "Categorize Projects",
          link: "/en-US/Projects-Overview/categorize-projects",
        },
      ],
    },
    {
      text: "Scan History",
      link: "/en-US/Scan-History/",
    },
    {
      text: "Settings",
      link: "/en-US/Settings/",
      collapsed: true,
      items: [
        {
          text: "Organization",
          link: "/en-US/Settings/Organization",
        },
        {
          text: "Members and Teams",
          link: "/en-US/Settings/Members-and-Teams/",
          collapsed: true,
          items: [
            {
              text: "Member Roles",
              link: "/en-US/Settings/Members-and-Teams/Member-Roles",
            },
          ],
        },
        {
          text: "Integrations Settings",
          link: "/en-US/Settings/Integrations-Settings/",
          collapsed: true,
          items: [
            {
              text: "Jira",
              link: "/en-US/Settings/Integrations-Settings/Jira",
            },
          ],
        },
      ],
    },
    {
      text: "References",
      collapsed: true,
      items: [
        {
          text: "SCA BOM Detect CLI Commands & Parameters",
          link: "/en-US/References/SCA-BOM-Detect-CLI-Commands-&-Parameters",
        },
      ],
    },
  ];
}

export function zhCNSidebar() {
  return [
    {
      text: "开始使用思探明",
      link: "/zh-CN/Get-Started/",
      collapsed: true,
      items: [],
    },
  ];
}
