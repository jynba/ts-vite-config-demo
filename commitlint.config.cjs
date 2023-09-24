/*
 * @Author: GRIT
 * @Date: 2023-05-08 20:02:30
 * @LastEditors: GRIT
 * @LastEditTime: 2023-05-08 20:03:47
 * @FilePath: \vue_study\Vite4.3+Typescript+Vue3+Pinia_Project\vite-vue-ts-seed\commitlint.config.cjs
 * @Description:
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
}

/*
git commit -m <type>[optional scope]: <description> //注意冒号后面有空格
- type：提交的类型（如新增、修改、更新等）
- optional scope：涉及的模块，可选
- description：任务描述
*/
/*
类别含义
feat    新功能
fix     修复 
bugstyle样式修改（UI校验）docs文档更新
refactor重构代码(既没有新增功能，也没有修复 bug)
perf    优化相关，比如提升性能、体验test增加测试，包括单元测试、集成测试等
build   构建系统或外部依赖项的更改
ci      自动化流程配置或脚本修改
revert  回退某个commit提交
*/
/*示例： 非规范提交将提交失败
git commit -m 'feat: 增加 xxx 功能'
git commit -m 'bug: 修复 xxx 功能'
*/
