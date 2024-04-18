import { Options } from "./types";

import fs from "fs";
import path from "path";
import { companyConfig } from "../../../config/companyConfig.js";

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
          text: `Introducing ${companyConfig.APP_NAME}`,
          link: "/en-US/Get-Started/Introducing-Scantist",
        },
        {
          text: `Sign up for ${companyConfig.APP_NAME}`,
          link: "/en-US/Get-Started/Sign-up-for-more",
        },
        {
          text: `Understanding ${companyConfig.APP_NAME} Dashboard`,
          link: "/en-US/Get-Started/Scantist-Dashboard",
        },
        {
          text: "SCM Integration",
          link: "/en-US/Get-Started/SCM-Integration",
        },
        {
          text: "Create and Manage Project",
          link: "/en-US/Get-Started/Create-and-Manage-Project/",
          collapsed: true,
          items: [
            {
              text: "Upload Files Directly",
              link: "/en-US/Get-Started/Create-and-Manage-Project/Upload-Files-Directly",
            },
            {
              text: "Add SCM Repositories",
              link: "/en-US/Get-Started/Create-and-Manage-Project/Add-SCM-Repositories",
            }
          ]
        },
        {
          text: "Projects Overview",
          link: "/en-US/Get-Started/Projects-Overview/",
          collapsed: true,
          items: [
            {
              text: "Categorize Projects",
              link: "/en-US/Get-Started/Projects-Overview/categorize-projects",
            },
          ],
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
      text: "Scan Engines",
      link: "/en-US/Scan-Engines/index",
      collapsed: true,
      items: [
        {
          text: "SCA",
          link: "/en-US/Scan-Engines/SCA/index",
          collapsed: true,
          items: [
            {
              text: "Components",
              link: "/en-US/Scan-Engines/SCA/Components",
            },
            {
              text: "Vulnerabilites",
              link: "/en-US/Scan-Engines/SCA/Vulnerabilities/index",
            },
            {
              text: "Licenses",
              link: "/en-US/Scan-Engines/SCA/Licenses",
            },
            {
              text: `Export Reports on ${companyConfig.APP_NAME}`,
              link: "/en-US/Scan-Engines/SCA/Export-Reports-on-app",
            },
            {
              text: "Scan Comparison",
              link: "/en-US/Scan-Engines/SCA/Scan-Comparison",
            }
          ]
        },
        {
          text: "SAST",
          link: "/en-US/Scan-Engines/SAST/index",
          collapsed: true,
          items: [
            {
              text: "Severity Levels",
              link: "/en-US/Scan-Engines/SAST/sast-severity-levels",
            }
          ]
        },
        {
          text: "IaC",
          link: "/en-US/Scan-Engines/IaC/index",
        },
        {
          text: "Fuzz Testing",
          link: "/en-US/Scan-Engines/Fuzzing/index",
        },
        {
          text: "Code Snippets",
          link: "/en-US/Scan-Engines/Code-Snippet/index",
        },
      ],
    },
    {
      text: "Scan Triggers",
      link: "/en-US/Scan-Triggers/index",
      collapsed: true,
      items: [
        
          {
            text: `Trigger Scan via ${companyConfig.APP_NAME} UI`,
            link: "/en-US/Scan-Triggers/Trigger-Scan-via-UI/",
            collapsed: true,
            items: [
              {
                text: "Upload Scan Settings",
                link: "/en-US/Scan-Triggers/Trigger-Scan-via-UI/Upload-Scan-Settings",
              },
              {
                text: "SCM Scan Settings",
                link: "/en-US/Scan-Triggers/Trigger-Scan-via-UI/SCM-Scan-Settings",
              },
            ],
          },
          {
            text: "Build-based Scan - CI/CD Pipeline",
            link: "/en-US/Scan-Triggers/Build-based-Scan-CICD-Pipeline/",
            collapsed: true,
            items: [
              {
                text: "Bamboo CI Integration",
                link: "/en-US/Scan-Triggers/Build-based-Scan-CICD-Pipeline/Bamboo-CI-Integration",
              },
              {
                text: "CircleCI Integration",
                link: "/en-US/Scan-Triggers/Build-based-Scan-CICD-Pipeline/CircleCI-Integration",
              },
              {
                text: "GitHub Actions CI Integration",
                link: "/en-US/Scan-Triggers/Build-based-Scan-CICD-Pipeline/GitHub-Actions-Integration",
              },
              {
                text: "GitLab CI Integration",
                link: "/en-US/Scan-Triggers/Build-based-Scan-CICD-Pipeline/GitLab-CI-Integration",
              },
              {
                text: "Jenkins CI Integration",
                link: "/en-US/Scan-Triggers/Build-based-Scan-CICD-Pipeline/Jenkins-CI-Integration",
              },
              {
                text: "Travis CI Integration",
                link: "/en-US/Scan-Triggers/Build-based-Scan-CICD-Pipeline/Travis-CI-Integration",
              },
            ],
          },
      ]
    },
    {
      text: "Settings",
      link: "",
      collapsed: true,
      items: [
        {
          text: "Organization",
          link: "/en-US/Settings/Organization-Details",
        },
        {
          text: "Members and Teams",
          link: "/en-US/Settings/Members-and-Teams",
        },
        {
          text: "Roles and Privileges",
          link: "",
          collapsed: true,
          items: [
            {
              text: "Available Roles",
              link: "/en-US/Settings/Roles-and-Privileges/Available-Roles",
            },
          ],
        },
        {
          text: "Access Tokens",
          link: "/en-US/Settings/Access-Tokens",
        },
        {
          text: "Integrations Settings",
          link: "/en-US/Settings/Integrations-Settings/",
          collapsed: true,
          items: [
            {
              text: "Eclipse",
              link: "/en-US/Settings/Integrations-Settings/Eclipse",
            },
            {
              text: "Jira",
              link: "/en-US/Settings/Integrations-Settings/Jira",
            },
          ],
        },
        {
          text: "Organization Group",
          link: "/en-US/Settings/Organization-Group.md",
        },
        {
          text: "Compliance Policy Rules",
          link: "/en-US/Settings/Compliance-Policy-Rules/",
          collapsed: true,
          items: [
            {
              text: "Policy Rule Type",
              link: "/en-US/Settings/Compliance-Policy-Rules/Policy-Rule-Type/",
              collapsed: true,
              items: [
                {
                  text: "Component Rule Attribute",
                  link: "/en-US/Settings/Compliance-Policy-Rules/Policy-Rule-Type/Component-Rule-Attribute",
                },
                {
                  text: "Vulnerability Rule Attribute",
                  link: "/en-US/Settings/Compliance-Policy-Rules/Policy-Rule-Type/Vulnerability-Rule-Attribute",
                },
                {
                  text: "License Rule Attribute",
                  link: "/en-US/Settings/Compliance-Policy-Rules/Policy-Rule-Type/License-Rule-Attribute",
                },
                {
                  text: "Project Rule Attribute",
                  link: "/en-US/Settings/Compliance-Policy-Rules/Policy-Rule-Type/Project-Rule-Attribute",
                },
              ],
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
        {
          text: "Scan History",
          link: "/en-US/References/Scan-History/",
        },
        {
          text: "Scan Type",
          link: "/en-US/References/Scan-Type",
        }
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
