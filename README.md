# guangnian-official-v2

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

---

## 怎么发布新岗位？

> 为了界面美观，建议最多发布 4 个岗位。

到 `src/components/home/HomeRecruitments.vue` 中修改源码，如下：

```vue

<div class="job-cards">
  <JobCard job-name="网站操作员"
           :tags="['测试', '区块链', '交互']"
           description="对区块链项目的去中心化应用 (dApps) 以及去中心化游戏 (GameFi) 进行交互"
           :salary="5000"
           :img-path="MaleGamerSticker"
           education="专科"
           job-page="website-operator"
           :details-clicked="onJobDetailsClick"/>
</div>
```

### 属性解释

- `job-name`: 岗位名称
- `tags`: 岗位标签，用数组表示，3 - 4 个标签合适
- `description`: 岗位描述
- `salary`: 岗位薪资，单位为元
- `img-path`: 岗位图片，将图片放入 `src/assets/` 目录中，图片一般用 [Microsoft Designer | Sticker Creator](https://designer.microsoft.com/sticker-creator) 生成。
- `education`: 岗位学历要求，用 `小学`、`初中`、`中专`、`高中`、`大专`、`本科`、`硕士`、`博士` 表示
- `job-page`: 岗位详情页面的路由名称，需要与 `src/markdowns/jobs` 中的 markdown 文件名称相对应
- `:details-clicked`: 点击岗位详情的事件处理函数（这个保持默认 `onJobDetailsClick` 即可）

### 岗位文件基本需求

```markdown
# 岗位名称（直接替换这个）

岗位职责简介（替换这个）：岗位职责详情（替换这个）

## 任职要求

- 🪙 本科及以上学历；年龄24岁及以下 ；专业不限； 
- 🪙 逻辑能力较好； 
- 🪙 英语能力四级或以上

## 加分项

- 🪙 英语优秀者优先；

## 薪资和成长

- 🪙 薪资面议（月薪不低于 xxxx 元） 
- 🪙 另有：月度绩效奖，项目绩效奖（按年月工资 2 倍 - 4 倍以上） 
- 🪙 良好的成长和机会：互联网前沿行业，享受早期红利期；

## 工作时间

- 🪙 08:00 ~ 12:00 
- 🪙 14:00 ~ 18:00 
- 🪙 每周周日休息

## 福利待遇

- 🪙 五险一金
- 🪙 带薪年假
- 🪙 吃不完的零食，喝不完的奶茶 
- 🪙 公司氛围超好
```