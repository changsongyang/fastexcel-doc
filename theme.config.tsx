import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Navbar from "./components/navbar";

const config: DocsThemeConfig = {
  logo: <span>EasyExcel Plus</span>,
  navbar: {
    component: Navbar,
  },
  navigation: false,

  project: {
    link: "https://github.com/CodePhiliaX/easyexcel-plus",
  },
  docsRepositoryBase:
    "https://github.com/CodePhiliaX/easyexcel-plus/tree/main/docs",
  footer: {
    content: `© ${new Date().getFullYear()} EasyExcel Plus. All rights reserved.`,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="EasyExcel Plus - 让Excel处理更简单" />
      <meta
        property="og:description"
        content="高性能、易用的Java Excel处理工具"
      />
    </>
  ),
  darkMode: false,
  i18n: [
    { locale: "zh-CN", name: "简体中文" },
    { locale: "zh-TW", name: "繁體中文" },
    { locale: "en", name: "English" },
    { locale: "ja", name: "日本語" },
  ],
};

export default config;
