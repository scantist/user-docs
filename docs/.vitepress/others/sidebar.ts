import { Options } from "./types";

import fs from "fs";
import path from "path";

function getSidebarItems(dir: string[], currentRoot: string | undefined, root: string | undefined, options: Options): object {
	return dir.filter(e => e.endsWith('.md') || fs.statSync(path.resolve(currentRoot ?? '/', e)).isDirectory()).map((e: string) => {
    const childDir = path.resolve(currentRoot ?? '/', e);
    if (fs.statSync(childDir).isDirectory()) {
      return {
        text: (e.charAt(0).toUpperCase() + e.slice(1)).replaceAll('-', ' '),
        collapsible: options.collapsible,
        collapsed: options.collapsed,
        items: getSidebarItems(fs.readdirSync(childDir), childDir, root, options)
      };
    } else if (e.endsWith('.md')) {
      return {
        text: ((e.charAt(0).toUpperCase() + e.slice(1)).slice(0, -3)).replaceAll('-', ' '),
        link: '/en-US/'.concat(childDir.replace(root ?? '', ''))
      };
    }
    return {};
  })
};

export function getSidebar(options: Options = {}) {
  options.contentRoot = options?.contentRoot ?? '/docs/en-US/';
  options.contentDirs = options?.contentDirs ?? null;
  options.collapsible = options?.collapsible ?? true;
  options.collapsed = options?.collapsed ?? true;

	options.contentRoot = path.join(process.cwd(), options.contentRoot)
  console.log('options contentroot', options.contentRoot);
	const dir = fs.readdirSync(options.contentRoot).filter((file: string) => (options.contentDirs === null || options.contentDirs?.indexOf(file) !== -1) && fs.statSync(path.join(options.contentRoot ?? '/', file)).isDirectory());
	return getSidebarItems(dir, options.contentRoot, options.contentRoot, options)
}