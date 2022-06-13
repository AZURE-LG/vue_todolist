开发步骤
1. 结构铺设
  1.1 使用 vue create vue-todolist 创建一个新的工程
  1.2 将 src 目录下面的 assets 文件夹删除 同时将 componentes 里面的 HelloWorld.vue 删除
  1.3 需要将 vue.config.js 里面 增加 lintOnSave: false
  1.4 copy styles 到 src 目录 并在 main.js 将样式引入
  1.5 在 componentes 文件夹中 创建 TodoHeader.vue TodoMain.vue TodoFooter.vue  从 md 里面 copy 对应的结构
  1.6 需要在 App.vue 注册并使用
  1.7 在App.vue 中 最外面的div 需要加一个类名 todoapp

2. 循环展示任务
  2.1 从 md 里面 copy 数组到 App.vue 里面
  2.2 在App.vue 里面 找到 <todo-main :list="list"></todo-main> 子组件标签 使用 父向子传值 的方法 将 数组传递给 子组件
  2.3 找到 TodoMain.vue 文件 使用 props: ['list'] 接收父组件 传递过来的数据
  2.4 在 TodoMain.vue 文件中 在 li标签身上 写 v-for="item in list" :key="item.id"
  2.5 在 TodoMain.vue 文件中 label标签  {{ item.name }} input标签  v-model="item.isDone"
  2.6 在 TodoMain.vue 文件中 li身上的类名 都需要通过 对象的属性  :class="{completed: item.isDone}"

3. 添加任务
  在 TodoHeader.vue 文件中 找到 文本框 v-model.trim="taskName"
  在 TodoHeader.vue 文件中 需要 定义 taskName 的变量
  在 TodoHeader.vue 文件中 需要给 文本框 注册 @keydown.enter="addTask"
  在 TodoHeader.vue 文件中 定义 函数 addTask
  在 TodoHeader.vue 文件中 需要 子向父 传值 this.$emit('addTaskFn', this.taskName)
  在 App.vue 文件中 找到 对应的子组件标签 <todo-header @addTaskFn="add"></todo-header>
  在 App.vue 文件中 定义 add的函数 接收到 子组件 传递过来的任务名
  在 App.vue文件中 add 函数里面 构建 对象 将对象 push 到 数组中  需要注意 id的问题
  在 TodoHeader.vue 文件中 找到 addTask 里面 this.taskName = '' 将输入框清空

4. 删除任务
  在 TodoMain.vue 文件 在 butotn 标签身上 注册 点击事件 @click="delTask(item.id)"
  在 TodoMain.vue 文件中 定义 delTask 函数 需要 向父组件传递数据 this.$emit('delTaskFn', id)
  在 App.vue 文件中 找到 <todo-main @delTaskFn="del"></todo-main>
  在 App.vue 文件中 定义 del 函数
  在 App.vue 文件中 del 函数里面 使用 filter方法 进行 过滤 新数组 覆盖原来的 list 数组

5. 底部统计
   1. 在 App.vue 文件中 找到  <todo-footer :list="list"></todo-footer> 子组件标签 需要 父向子传值
   2. 在 TodoFooter.vue　文件中　使用　props: ['list'] 来接收 父组件 传递过来的数据
   3. 在 TodoFooter.vue　文件中 找到 span标签 使用 {{  list.length }}


6. tab 的效果
  6.1 在 TodoFooter.vue 文件中 删除2个li 标签
  6.2 在 TodoFooter.vue 文件中  在 li 身上 使用 v-for 进行循环 将数组的元素 通过插值表达式 写入到 li 中 {{ item }}
  6.3 在 TodoFooter.vue 文件中  在 a 标签身上 通过 :class="{selected: i === index}" 需要在 data 里面定义 变量 i 的值 为 0
  6.4 在 TodoFooter.vue 文件中  在 a 标签身上 通事件绑定 @click="toggle(index)" 
  6.5 在 TodoFooter.vue 文件中 定义 toggle 函数 接收 index 变量 将 index 的值赋值为 this.i = index

7. 数据切换
  7.1 在 TodoFooter.vue 文件中  toggle 函数里面 通过 子向父传值 this.$emit('toggleFn', index)
  7.2 在 App.vue 文件中 找到  <todo-footer @toggleFn="toggle"></todo-footer>
  7.3 在 App.vue 文件中 定义  toggle 函数  需要接收子组件 传递过来的数据
  7.4 在 App.vue 文件中 定义  i 的变量 初始值 为 0  i: 0
  7.5 在 App.vue 文件中 在 toggle 函数里面 将 index 赋值为  i    this.i = index
  7.6 在 App.vue 定义 计算属性 showList 根据 i 来筛选对应的数据
  7.7 在 App.vue 文件中 将 <todo-main></todo-main> 里面的 :list="list"  修改为 :list="showList"   
  7.8 在 App.vue 文件中 将 <todo-footer></todo-footer> 里面的 :list="list"  修改为 :list="showList"  

8. 清空已完成
  8.1 在 TodoFooter.vue 文件中 找到 清空已完成 给其注册事件 @click="clear"
  8.2 在 TodoFooter.vue 文件中 定义函数 clear 函数体中 通过 子向父传递数据 this.$emit('clearFn')
  8.3 在 App.vue 中 找到  <todo-footer @clearFn="clear"></todo-footer>
  8.4 在 App.vue 中  定义函数 clear 过滤出 未完成 覆盖 this.list 数组

# vue-toodlist

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
