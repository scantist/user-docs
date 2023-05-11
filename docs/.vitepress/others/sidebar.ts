import { Options } from "./types";

import fs from "fs";
import path from "path";

function getSidebarItems(dir: string[], currentRoot: string | undefined, root: string | undefined, options: Options): object {
  return dir.filter(e => e.endsWith('.md') || fs.statSync(path.resolve(currentRoot ?? '/', e)).isDirectory()).map((e: string) => {
    const childDir: string = path.resolve(currentRoot ?? '/', e);
    if (fs.statSync(childDir).isDirectory()) {
      const sectionLink = `/en-US/`.concat(childDir.replace(root ?? '', '')).concat(`/index.md`);
      return {
        text: (e.charAt(0).toUpperCase() + e.slice(1)).replaceAll('-', ' '),
        link: sectionLink,
        collapsible: options.collapsible,
        collapsed: options.collapsed,
        items: getSidebarItems(fs.readdirSync(childDir), childDir, root, options)
      };
    } else if (e.endsWith('.md') && e !== 'index.md') {
      return {
        text: ((e.charAt(0).toUpperCase() + e.slice(1)).slice(0, -3)).replaceAll('-', ' '),
        link: `/en-US/`.concat(childDir.replace(root ?? '', ''))
      };
    }
    return {};
  });
};

// export function getSidebar(options: Options = {}) {
//   options.contentRoot = options?.contentRoot ?? '/docs/en-US/';
//   options.contentDirs = options?.contentDirs ?? null;
//   options.collapsible = options?.collapsible ?? true;
//   options.collapsed = options?.collapsed ?? true;

// 	options.contentRoot = path.join(process.cwd(), options.contentRoot)
//   console.log('options contentroot', options.contentRoot);
// 	const dir = fs.readdirSync(options.contentRoot).filter((file: string) => (options.contentDirs === null || options.contentDirs?.indexOf(file) !== -1) && fs.statSync(path.join(options.contentRoot ?? '/', file)).isDirectory());
// 	return getSidebarItems(dir, options.contentRoot, options.contentRoot, options)
// }

export function getSidebar() {
  return [{
    text: 'Get Started with Scantist',
    collapsed: true,
    link: '/Get-Started-with-Scantist'
  }];
}

export function enUSSidebar() {
  return [
    {
      text: 'Get Started with Scantist',
      link: '/en-US/Get-Started-with-Scantist/',
      collapsed: true,
      items: [
        {
          text: 'Sign up for Scantist',
          link: '/en-US/Get-Started-with-Scantist/Sign-up-for-Scantist'
        },
        {
          text: 'SCM Integration',
          link: '/en-US/Get-Started-with-Scantist/SCM-Integration'
        },
        {
          text: 'Organization Group',
          link: '/en-US/Get-Started-with-Scantist/Organization-Group'
        }
      ]
    },
    {
      text: 'Language and File Support',
      link: '/en-US/Language-and-File-Support/',
      collapsed: true,
      items: [
        {
          text: 'Java Language Support',
          link: '/en-US/Language-and-File-Support/Java-Language-Support'
        },
        {
          text: 'JavaScript Language Support',
          link: '/en-US/Language-and-File-Support/JavaScript-Language-Support'
        },
        {
          text: 'Perl Language Support',
          link: '/en-US/Language-and-File-Support/Perl-Language-Support'
        },
        {
          text: 'Go Language Support',
          link: '/en-US/Language-and-File-Support/Go-Language-Support'
        },
        {
          text: 'Python Language Support',
          link: '/en-US/Language-and-File-Support/Python-Language-Support'
        },
        {
          text: 'C# Language Support',
          link: '/en-US/Language-and-File-Support/Csharp-Language-Support'
        },
        {
          text: 'Ruby Language Support',
          link: '/en-US/Language-and-File-Support/Ruby-Language-Support'
        },
        {
          text: 'PHP Language Support',
          link: '/en-US/Language-and-File-Support/PHP-Language-Support'
        },
        {
          text: 'Objective-C Language Support',
          link: '/en-US/Language-and-File-Support/Objective--C-Language-Support'
        },
        {
          text: 'Swift Language Support',
          link: '/en-US/Language-and-File-Support/Swift-Language-Support'
        },
      ]
    },
    {
      text: 'Create and Manage Project',
      link: '/en-US/Create-and-Manage-Project/',
      collapsed: true,
      items: [
        {
          text: 'Upload Files Directly',
          link: '/en-US/Create-and-Manage-Project/Upload-Files-Directly'
        },
        {
          text: 'Add SCM Repositories',
          link: '/en-US/Create-and-Manage-Project/Add-SCM-Repositories'
        },
      ]
    },
    {
      text: 'Trigger Scan',
      link: '/en-US/Trigger-Scan/',
      collapsed: true,
      items: [
        {
          text: 'Scan Type',
          link: '/en-US/Trigger-Scan/Scan-Type'
        },
        {
          text: 'Upload Scan Settings',
          link: '/en-US/Trigger-Scan/Upload-Scan-Settings'
        },
        {
          text: 'SCM Scan Settings',
          link: '/en-US/Trigger-Scan/SCM-Scan-Settings'
        }
      ]
    },
    {
      text: 'Build-based Scan - CI/CD Pipeline',
      link: '/en-US/Build-based-Scan-CICD-Pipeline/',
      collapsed: true,
      items: [
        {
          text: 'Jenkins CI Integration',
          link: '/en-US/Build-based-Scan-CICD-Pipeline/Jenkins-CI-Integration'
        },
        {
          text: 'Gitlab CI Integration',
          link: '/en-US/Build-based-Scan-CICD-Pipeline/Gitlab-CI-Integration'
        },
      ]
    },
    {
      text: 'Application Security Testing Solution',
      link: '/en-US/Application-Security-Testing-Solution/',
      collapsed: true,
      items: [
        {
          text: 'SCA',
          link: '/en-US/Application-Security-Testing-Solution/SCA/',
          collapsed: true,
          items: [
            {
              text: 'SCA Components Results',
              link: '/en-US/Application-Security-Testing-Solution/SCA/SCA-Components-Results',
            },
            {
              text: 'SCA Vulnerabilities Results',
              link: '/en-US/Application-Security-Testing-Solution/SCA/SCA-Vulnerabilities-Results',
            },
            {
              text: 'SCA Licenses',
              link: '/en-US/Application-Security-Testing-Solution/SCA/SCA-Licenses',
            },
            {
              text: 'Export Reports on Scantist',
              link: '/en-US/Application-Security-Testing-Solution/SCA/Export-Reports-on-Scantist',
            },
          ]
        },
        {
          text: 'SAST',
          link: '/en-US/Application-Security-Testing-Solution/SAST/',
          collapsed: true,
        },
        {
          text: 'IaC',
          link: '/en-US/Application-Security-Testing-Solution/IaC/',
          collapsed: true,
        },
        {
          text: 'Fuzzing',
          link: '/en-US/Application-Security-Testing-Solution/Fuzzing/',
          collapsed: true,
        },
        {
          text: 'Code Traceability',
          link: '/en-US/Application-Security-Testing-Solution/Code-Traceability/',
          collapsed: true,
        },
      ]
    },
    {
      text: 'Compliance Policy Rules',
      link: '/en-US/Compliance-Policy-Rules/',
      collapsed: true,
      items: [
        {
          text: 'Policy Rule Type',
          link: '/en-US/Compliance-Policy-Rules/Policy-Rule-Type/',
          collapsed: true,
          items: [
            {
              text: 'Component Rule Attribute',
              link: '/en-US/Compliance-Policy-Rules/Policy-Rule-Type/Component-Rule-Attribute',
            },
            {
              text: 'Vulnerability Rule Attribute',
              link: '/en-US/Compliance-Policy-Rules/Policy-Rule-Type/Vulnerability-Rule-Attribute',
            },
            {
              text: 'License Rule Attribute',
              link: '/en-US/Compliance-Policy-Rules/Policy-Rule-Type/License-Rule-Attribute',
            },
            {
              text: 'Project Rule Attribute',
              link: '/en-US/Compliance-Policy-Rules/Policy-Rule-Type/Project-Rule-Attribute',
            },
          ]
        },
      ]
    },
    {
      text: 'Projects Overview',
      link: '/en-US/Projects-Overview/',
      collapsed: true,
      items: [
        {
          text: 'Categorize Projects',
          link: '/en-US/Projects-Overview/categorize-projects',
        },
      ]
    },
    {
      text: 'Scan History',
      link: '/en-US/Scan-History/',
    },
    {
      text: 'Settings',
      link: '/en-US/Settings/',
      collapsed: true,
      items: [
        {
          text: 'Organization',
          link: '/en-US/Settings/Organization',
        },
        {
          text: 'Members and Teams',
          link: '/en-US/Settings/Members-and-Teams/',
          collapsed: true,
          items: [
            {
              text: 'Member Roles',
              link: '/en-US/Settings/Members-and-Teams/Member-Roles',
            },
          ]
        },
        {
          text: 'Tags',
          link: '/en-US/Settings/Tags',
        },
        {
          text: 'Integrations Settings',
          link: '/en-US/Settings/Integrations-Settings/',
          collapsed: true,
          items: [
            {
              text: 'Jira (WIP)',
              link: '/en-US/Settings/Integrations-Settings/Jira-WIP',
            },
          ]
        },
      ]
    },
  ]
}

export function zhCNSidebar() {
  return [
    {
      text: '开始使用思探明',
      link: '/zh-CN/Get-Started-with-Scantist/',
      collapsed: true,
      items: [
      ]
    }
  ]
}