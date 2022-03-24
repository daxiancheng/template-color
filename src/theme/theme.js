import { themes } from "./model";
// 修改页面中的样式变量值
const changeStyle = (obj) => {
  for (let key in obj) {
    document
      .getElementsByTagName("body")[0]
      .style.setProperty(`--${key}`, obj[key]);
  }
};
// 改变主题的方法
export const setTheme = (themeName) => {
  localStorage.setItem("theme", themeName); // 保存主题到本地，下次进入使用该主题
  const themeConfig = themes[themeName];
  changeStyle(themeConfig);
};