---
title: Vue3集成halo富文本编辑器
date: 2026-2-22 14:31:01
tags: ["Vue"]
category: 学习
thumbnail: 
sticky: 
---

## 起因

起因是想要在一个论坛系统中整合一个富文本编辑器，浏览了全网主流和不主流的编辑器，也对部分编辑器拉取进行部署，大部分文本都都是上面一个工具栏，下面一个文本框，但笔者想要的是类似于语雀、飞书那种现代化的编辑器，在满足基本的功能之上能够对某行进行拖动和编辑，更改好看和适用一点

综合对比下来选用的是 halo 的富文本编辑器：`@halo-dev/richtext-editor`

网上基本上没有这富文本的部署教程，包括 halo 官方也没有一个明确的其他项目集成教程，并且已对富文本编辑进行了归档，源代码地址：https://github.com/halo-sigs/richtext-editor

## 步骤

首先要确保 npm 的版本必须也是大于 20 以上的，这个必须版本要求就已经限制了很多项目了 ~ . ~，只适用于新开的项目

安装依赖，halo 的富文本依赖我是从 `npm.io` 网站上找到的，halo 官方并未指明 npm 的安装方式

```
npm i @halo-dev/components
npm i @halo-dev/richtext-editor
```

实例代码如下，注意必须引入：`import "@halo-dev/richtext-editor/dist/style.css"` 和 `import "@halo-dev/components/dist/style.css"` 这两个样式，否则会出现工具栏的弹窗定位错乱的情况

```vue
<template>
  <div class="rich-text-editor-container" ref="editorContainer">
    <RichTextEditor 
      v-if="editor && isInitialized" 
      :editor="editor" 
      :locale="locale"
      class="main-editor-component"
    />
    <!-- 加载状态占位 -->
    <div v-else class="editor-loading">编辑器加载中...</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, shallowRef, watch, computed } from "vue";

// 核心组件和类
import { 
  RichTextEditor, 
  VueEditor, 
  ExtensionsKit, 
  Extension, 
  Plugin, 
  PluginKey 
} from '@halo-dev/richtext-editor'

// 样式引入
import "@halo-dev/richtext-editor/dist/style.css";
import "@halo-dev/components/dist/style.css";

import { useDebounceFn } from "@vueuse/core";

const props = defineProps({
  initialContent: { type: String, default: "" },
  locale: { type: String, default: "zh-CN" },
  selectedHeadingId: { type: String, default: null }
});

const emit = defineEmits(["update:content", "select-heading", "update:heading-nodes", "update:character-count", "update:word-count"]);

// --- 状态定义 ---
const editor = shallowRef(); // 使用 shallowRef 优化性能
const isInitialized = ref(false);
const content = ref(props.initialContent);
const headingNodes = ref([]);
const localSelectedHeadingId = ref();
const editorContainer = ref(null);

// --- 统计数据计算 ---
const characterCount = computed(() => {
  return editor.value?.storage?.characterCount?.characters() || 0;
});

const wordCount = computed(() => {
  return editor.value?.storage?.characterCount?.words() || 0;
});

// --- 自定义扩展：标题实时检测插件 ---
const HeadingTracker = Extension.create({
  name: "headingTracker",
  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey("heading-tracker"),
        view: () => ({
          update: (view) => {
            const headings = [];
            view.state.doc.descendants((node, pos) => {
              if (node.type.name === "heading") {
                headings.push({
                  level: node.attrs.level,
                  text: node.textContent,
                  id: `heading-${pos}`, // 简单生成ID或使用 node.attrs.id
                });
              }
            });
            headingNodes.value = headings;
            emit("update:heading-nodes", headings);
            emit("update:character-count", characterCount.value);
            emit("update:word-count", wordCount.value);
          }
        }),
      }),
    ];
  },
});

// --- 初始化编辑器 ---
const initEditor = () => {
  // 防抖更新，避免频繁触发父组件更新
  const debounceUpdate = useDebounceFn(() => {
    const html = editor.value?.getHTML() || "";
    content.value = html;
    emit("update:content", html);
    emit("update:character-count", characterCount.value);
    emit("update:word-count", wordCount.value);
  }, 300);

  editor.value = new VueEditor({
    content: props.initialContent,
    extensions: [
      // ExtensionsKit 包含了大部分官方功能（加粗、斜体、表格、图片、斜杆命令等）
      ExtensionsKit.configure({
        placeholder: { placeholder: '输入 "/" 唤起命令...' },
        textAlign: true,
        history: true,
        characterCount: true,
        image: {
          uploadImage: async (file) => {
            // 这里实现你的上传逻辑
            console.log("上传图片:", file);
            return { status: { permalink: URL.createObjectURL(file) } };
          },
        },
      }),
      HeadingTracker, // 注入自定义标题检测
    ],
    popperContainer: document.body,
    onCreate: () => {
      isInitialized.value = true;
      // 初始化后发送统计数据
      emit("update:character-count", characterCount.value);
      emit("update:word-count", wordCount.value);
    },
    onUpdate: () => {
      debounceUpdate();
    },
  });
};

// --- 事件处理 ---
const handleSelectHeading = (id) => {
  localSelectedHeadingId.value = id;
  emit("select-heading", id);
  scrollToHeading(id);
};

// 滚动到指定标题
const scrollToHeading = (id) => {
  // 尝试在编辑器内容中查找标题元素
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    return;
  }
  
  // 如果直接查找失败，尝试在编辑器容器内查找
  if (editorContainer.value) {
    const headingElement = editorContainer.value.querySelector(`[id="${id}"]`);
    if (headingElement) {
      headingElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      return;
    }
  }
  
  // 如果仍然找不到，尝试通过 ProseMirror 编辑器的 API 滚动
  if (editor.value && editor.value.view) {
    const state = editor.value.view.state;
    const pos = parseInt(id.split('-')[1]);
    if (!isNaN(pos)) {
      editor.value.view.dispatch(
        state.tr.setSelection(state.selection.constructor.near(state.doc.resolve(pos)))
      );
      editor.value.view.focus();
    }
  }
};

// --- 生命周期与监听 ---
onMounted(() => {
  initEditor();
});

onBeforeUnmount(() => {
  editor.value?.destroy();
});

watch(() => props.initialContent, (newVal) => {
  if (editor.value && newVal !== editor.value.getHTML()) {
    editor.value.commands.setContent(newVal);
  }
});

// 监听外部传入的选中标题变化
watch(() => props.selectedHeadingId, (newId) => {
  if (newId && newId !== localSelectedHeadingId.value) {
    localSelectedHeadingId.value = newId;
    scrollToHeading(newId);
  }
});
</script>
```

接着就是若想使用上传图片、视频等功能，需要对富文本编辑器源代码进行更改，因为这个编辑器已经深度集成了 halo 系统了，底层用到了 halo 系统的权限控制，会报错如下：

```
User permissions not set in PermissionUtils
```

经过尝试在页面初始化或则在 `App.vue` 对权限初始化都没用，所以就只能对打包后的源代码进行更改，在 `node_modules\@halo-dev\ui-shared\dist\index.js` 文件中找到报错位置 `User permissions not set in PermissionUtils`，去掉后改为 `return true`

最后就能使用了，对于其他的功能集成使用还需要进一步探究
