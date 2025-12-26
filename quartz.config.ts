// import { QuartzConfig } from "./quartz/cfg"
// import * as Plugin from "./quartz/plugins"

// /**
//  * Quartz 4 Configuration
//  *
//  * See https://quartz.jzhao.xyz/configuration for more information.
//  */
// const config: QuartzConfig = {
//   configuration: {
//     pageTitle: "Leeyoooo",
//     pageTitleSuffix: "",
//     enableSPA: true,
//     enablePopovers: true,
//     analytics: {
//       provider: "plausible",
//     },
//     locale: "zh-CN",
//     baseUrl: "quartz.jzhao.xyz",
//     ignorePatterns: ["private", "templates", ".obsidian"],
//     defaultDateType: "modified",
//     theme: {
//       fontOrigin: "googleFonts",
//       cdnCaching: true,
//       typography: {
//         header: "Schibsted Grotesk",
//         body: "Source Sans Pro",
//         code: "IBM Plex Mono",
//       },
//       colors: {
//         lightMode: {
//           light: "#faf8f8",
//           lightgray: "#e5e5e5",
//           gray: "#b8b8b8",
//           darkgray: "#4e4e4e",
//           dark: "#2b2b2b",
//           secondary: "#284b63",
//           tertiary: "#84a59d",
//           highlight: "rgba(143, 159, 169, 0.15)",
//           textHighlight: "#fff23688",
//         },
//         darkMode: {
//           light: "#161618",
//           lightgray: "#393639",
//           gray: "#646464",
//           darkgray: "#d4d4d4",
//           dark: "#ebebec",
//           secondary: "#7b97aa",
//           tertiary: "#84a59d",
//           highlight: "rgba(143, 159, 169, 0.15)",
//           textHighlight: "#b3aa0288",
//         },
//       },
//     },
//   },
//   plugins: {
//     transformers: [
//       Plugin.FrontMatter(),
//       Plugin.CreatedModifiedDate({
//         priority: ["frontmatter", "git", "filesystem"],
//       }),
//       Plugin.SyntaxHighlighting({
//         theme: {
//           light: "github-light",
//           dark: "github-dark",
//         },
//         keepBackground: false,
//       }),
//       Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
//       Plugin.GitHubFlavoredMarkdown(),
//       Plugin.TableOfContents(),
//       Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
//       Plugin.Description(),
//       Plugin.Latex({ renderEngine: "katex" }),
//     ],
//     filters: [Plugin.RemoveDrafts()],
//     emitters: [
//       Plugin.AliasRedirects(),
//       Plugin.ComponentResources(),
//       Plugin.ContentPage(),
//       Plugin.FolderPage(),
//       Plugin.TagPage(),
//       Plugin.ContentIndex({
//         enableSiteMap: true,
//         enableRSS: true,
//       }),
//       Plugin.Assets(),
//       Plugin.Static(),
//       Plugin.Favicon(),
//       Plugin.NotFoundPage(),
//       // Comment out CustomOgImages to speed up build time
//       Plugin.CustomOgImages(),
//     ],
//   },
// }

// export default config
import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "都是文档",
    pageTitleSuffix: " | Aleeyoo",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "zh-CN",
    baseUrl: "notes.011205.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "local",
      cdnCaching: true,
      typography: {
        header: "Founder Electronics",
        body: "Founder Electronics",
        code: "Consolas",
      },
      colors: {
        lightMode: {
          light: "#ffffff",       // 纯白背景
          lightgray: "#f0f0f0",   // 边框和次要背景
          gray: "#a0a0a0",        // 辅助文字/图标
          darkgray: "#404040",    // 正文颜色
          dark: "#000000",        // 标题与强调文字（纯黑）
          secondary: "#000000",   // 链接颜色（极简黑）
          tertiary: "#707070",    // 悬停/次要链接
          highlight: "rgba(0, 0, 0, 0.05)", // 选区/搜索高亮
          textHighlight: "#eeeeee",
        },
        darkMode: {
          light: "#000000",       // 纯黑背景
          lightgray: "#202020",   // 边框和次要背景
          gray: "#606060",        // 辅助文字/图标
          darkgray: "#d0d0d0",    // 正文颜色
          dark: "#ffffff",        // 标题与强调文字（纯白）
          secondary: "#ffffff",   // 链接颜色（极简白）
          tertiary: "#909090",    // 悬停/次要链接
          highlight: "rgba(255, 255, 255, 0.15)",
          textHighlight: "#333333",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config