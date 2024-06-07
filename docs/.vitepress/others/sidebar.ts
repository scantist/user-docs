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
              text: "Sample Project Scanning",
              link: "/en-US/Get-Started/Create-and-Manage-Project/Sample-Project-Scanning",
            },
            {
              text: "Upload Files Directly",
              link: "/en-US/Get-Started/Create-and-Manage-Project/Upload-Files-Directly",
            },
            {
              text: "Filtering Projects",
              link: "/en-US/Get-Started/Create-and-Manage-Project/Filtering-Projects",
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
              text: "Start Scan and Report Generation",
              link: "/en-US/Get-Started/Projects-Overview/report-generation",
            },
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
          text: "C / C++ Language Support",
          link: "/en-US/Language-and-File-Support/Cpp-Language-Support",
        },
        {
          text: "Ruby Language Support",
          link: "/en-US/Language-and-File-Support/Ruby-Language-Support",
        },
        {
          text: "PHP Language Support",
          link: "/en-US/Language-and-File-Support/Php-Language-Support",
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
              text: "Components & Dependency Tree",
              link: "/en-US/Scan-Engines/SCA/Components",
            },
            {
              text: "Vulnerabilites",
              link: "/en-US/Scan-Engines/SCA/Vulnerabilities",
            },
            {
              text: `Remediation`,
              link: "/en-US/Scan-Engines/SCA/Remediation",
            },
            {
              text: "Licenses",
              link: "/en-US/Scan-Engines/SCA/Licenses",
            },
            {
              text: `Compliance Policy Rules Monitoring`,
              link: "/en-US/Scan-Engines/SCA/Compliance-Policy-Rules",
            },
            {
              text: `Reports`,
              link: "/en-US/Scan-Engines/SCA/Export-Reports-on-app",
            },
            {
              text: `Project Settings`,
              link: "/en-US/Scan-Engines/SCA/project-settings",
            },
            {
              text: "Scan History & Comparison",
              link: "/en-US/Scan-Engines/SCA/Scan-Comparison",
            },
            {
              text: `Scan Result Analysis`,
              link: "/en-US/Scan-Engines/SCA/Scan-Result-Analysis/index",
              collapsed: true,
              items: [
                {
                  text: `Organization Component Management`,
                  link: "/en-US/Scan-Engines/SCA/Scan-Result-Analysis/Organization-Component-Management",
                },
                {
                  text: `Organization Vulnerability Management`,
                  link: "/en-US/Scan-Engines/SCA/Scan-Result-Analysis/Organization-Vulnerability-Management",
                },
                {
                  text: `Organization Compliance Management`,
                  link: "/en-US/Scan-Engines/SCA/Scan-Result-Analysis/Organization-Compliance-Management",
                },
                {
                  text: `*Organization Component and Vulnerability Management Report`,
                  link: "/en-US/Scan-Engines/SCA/Scan-Result-Analysis/Organization-Component-and-Vulnerability-Management-Report",
                },
              ]
            },
            {
              text: `*Components Result Action`,
              link: "/en-US/Scan-Engines/SCA/Component-Result-Action",
            },
            {
              text: `*Vulnerability Result Suppression`,
              link: "/en-US/Scan-Engines/SCA/Vulnerability-Result-Suppression",
            },
            {
              text: `Schedule and Event Trigger Scan`,
              link: "/en-US/Scan-Engines/SCA/Schedule-and-Event-Trigger-Scan",
            }
          ]
        },
        {
          text: "SAST & IaC",
          link: "/en-US/Scan-Engines/SAST-and-IaC/index",
          collapsed: true,
          items: [
            // {
            //   text: "Monthly Scan",
            //   link: "/en-US/Scan-Engines/SAST-and-IaC/monthly-scan",
            // },
            {
              text: "Vulnerability, Bugs, Code Smell, Security HotSpot Detection",
              link: "/en-US/Scan-Engines/SAST-and-IaC/vulnerability-bugs",
            },
            {
              text: "Issue highlight in Source Code",
              link: "/en-US/Scan-Engines/SAST-and-IaC/issue-highlight-source-code",
            },
            {
              text: "PDF Report Generation",
              link: "/en-US/Scan-Engines/SAST-and-IaC/pdf-report-generation",
            },
            {
              text: "Schedule and Event Trigger Scan",
              link: "/en-US/Scan-Engines/SAST-and-IaC/schedule-event-trigger",
            },
            // {
            //   text: "Severity Levels",
            //   link: "/en-US/Scan-Engines/SAST-and-IaC/sast-severity-levels",
            // }
          ]
        },
        {
          text: "*Fuzzing Test",
          link: "/en-US/Scan-Engines/Fuzzing/index",
          collapsed: true,
          items: [
            {
              text: "Issue Detections",
              link: "/en-US/Scan-Engines/Fuzzing/Issue-Detections",
            },
            {
              text: "Crash Detections",
              link: "/en-US/Scan-Engines/Fuzzing/Crash-Detections",
            },
          ]
        },
        {
          text: "*Code Snippets",
          link: "/en-US/Scan-Engines/Code-Snippet/index",
          collapsed: true,
          items: [
            {
              text: "Code Traceability Analysis",
              link: "/en-US/Scan-Engines/Code-Snippet/Code-Traceability-Analysis",
            },
            {
              text: "OSS Components Identification",
              link: "/en-US/Scan-Engines/Code-Snippet/OSS-Components-Identification",
            },
            {
              text: "License Detection",
              link: "/en-US/Scan-Engines/Code-Snippet/License1",
            },
            {
              text: "License Conflict Analysis",
              link: "/en-US/Scan-Engines/Code-Snippet/License-Conflict-Analysis",
            },
            {
              text: "Copyright Detection",
              link: "/en-US/Scan-Engines/Code-Snippet/Copyright",
            }
          ]
        },
      ],
    },
    {
      text: "Plugins and Integrations",
      link: "/en-US/Plugins-and-Integrations/index",
      collapsed: true,
      items: [
        {
          text: `Trigger Scan via UI`,
          link: "/en-US/Plugins-and-Integrations/Trigger-Scan-via-UI/",
          collapsed: true,
          items: [
            {
              text: "Upload Scan Settings",
              link: "/en-US/Plugins-and-Integrations/Trigger-Scan-via-UI/Upload-Scan-Settings",
            },
            {
              text: "SCM Scan Settings",
              link: "/en-US/Plugins-and-Integrations/Trigger-Scan-via-UI/SCM-Scan-Settings",
            },
          ],
        },
        {
          text: "Build-based Scan - CI/CD Pipeline",
          link: "/en-US/Plugins-and-Integrations/Build-based-Scan-CICD-Pipeline/",
          collapsed: true,
          items: [
            {
              text: "Bamboo CI Integration",
              link: "/en-US/Plugins-and-Integrations/Build-based-Scan-CICD-Pipeline/Bamboo-CI-Integration",
            },
            {
              text: "CircleCI Integration",
              link: "/en-US/Plugins-and-Integrations/Build-based-Scan-CICD-Pipeline/CircleCI-Integration",
            },
            {
              text: "GitHub Actions CI Integration",
              link: "/en-US/Plugins-and-Integrations/Build-based-Scan-CICD-Pipeline/GitHub-Actions-Integration",
            },
            {
              text: "GitLab CI Integration",
              link: "/en-US/Plugins-and-Integrations/Build-based-Scan-CICD-Pipeline/GitLab-CI-Integration",
            },
            {
              text: "Jenkins CI Integration",
              link: "/en-US/Plugins-and-Integrations/Build-based-Scan-CICD-Pipeline/Jenkins-CI-Integration",
            },
            {
              text: "Travis CI Integration",
              link: "/en-US/Plugins-and-Integrations/Build-based-Scan-CICD-Pipeline/Travis-CI-Integration",
            },
          ],
        },
        {
          text: `IDE Plugin`,
          link: "/en-US/Plugins-and-Integrations/IDE-Plugin",
        },
        {
          text: `Jira Integration`,
          link: "/en-US/Plugins-and-Integrations/Jira-Integration",
        },
        {
          text: `SSO (LDAP, OIDC, KeyCloak)`,
          link: "/en-US/Plugins-and-Integrations/SSO-LDAP-OIDC-KeyCloak",
        },
      ]
    },
    // {
    //   text: "Knowledge Base",
    //   link: "/en-US/Knowledge-Base/index",
    //   collapsed: true,
    //   items: [
    //     {
    //       text: "SBOM Enquiry",
    //       link: "/en-US/Knowledge-Base/SBOM-Enquiry",
    //     },
    //     {
    //       text: "Self Components Management",
    //       link: "/en-US/Knowledge-Base/Scan-History/",
    //     },
    //     {
    //       text: "Vulnerability Enquiry",
    //       link: "/en-US/Knowledge-Base/Scan-Type",
    //     },
    //     {
    //       text: "Self Vulnerability Management",
    //       link: "/en-US/Knowledge-Base/Scan-Type",
    //     },
    //     {
    //       text: "Scan Type",
    //       link: "/en-US/Knowledge-Base/Scan-Type",
    //     },
    //     {
    //       text: "Scan Type",
    //       link: "/en-US/Knowledge-Base/Scan-Type",
    //     }
    //   ],
    // },
    {
      text: "Management and Settings",
      link: "",
      collapsed: true,
      items: [
        {
          text: "Organization",
          link: "/en-US/Management-and-Settings/Organization-Details",
        },
        {
          text: "Members and Teams",
          link: "/en-US/Management-and-Settings/Members-and-Teams",
        },
        {
          text: "Roles and Privileges",
          link: "/en-US/Management-and-Settings/Roles-and-Privileges",
        },
        {
          text: "Project Tags",
          link: "/en-US/Management-and-Settings/Project-Tags",
        },
        {
          text: "Integrations Settings",
          link: "/en-US/Management-and-Settings/Integrations-Settings/",
          collapsed: true,
          items: [
            {
              text: "Eclipse",
              link: "/en-US/Management-and-Settings/Integrations-Settings/Eclipse",
            },
            {
              text: "Jira",
              link: "/en-US/Management-and-Settings/Integrations-Settings/Jira",
            },
            {
              text: "SCM Integration",
              link: "/en-US/Management-and-Settings/Integrations-Settings/SCM-Integration",
            },
          ],
        },
        {
          text: "Access Tokens",
          link: "/en-US/Management-and-Settings/Access-Tokens",
        },
        {
          text: "Compliance Policy Rules",
          link: "/en-US/Management-and-Settings/Compliance-Policy-Rules/",
          collapsed: true,
          items: [
            {
              text: "Policy Rule Type",
              link: "/en-US/Management-and-Settings/Compliance-Policy-Rules/Policy-Rule-Type/",
              collapsed: true,
              items: [
                {
                  text: "Component Rule Attribute",
                  link: "/en-US/Management-and-Settings/Compliance-Policy-Rules/Policy-Rule-Type/Component-Rule-Attribute",
                },
                {
                  text: "Vulnerability Rule Attribute",
                  link: "/en-US/Management-and-Settings/Compliance-Policy-Rules/Policy-Rule-Type/Vulnerability-Rule-Attribute",
                },
                {
                  text: "License Rule Attribute",
                  link: "/en-US/Management-and-Settings/Compliance-Policy-Rules/Policy-Rule-Type/License-Rule-Attribute",
                },
                {
                  text: "Project Rule Attribute",
                  link: "/en-US/Management-and-Settings/Compliance-Policy-Rules/Policy-Rule-Type/Project-Rule-Attribute",
                },
              ],
            },
          ],
        },
        {
          text: "Organization Group",
          link: "/en-US/Management-and-Settings/Organization-Group.md",
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
