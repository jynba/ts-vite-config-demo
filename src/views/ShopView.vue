<template>
  <div>
    <h2>computed watch watchEffect的实战</h2>
    <div class="jy-test">
      <div class="jy-test__inner">el</div>
      <div class="jy-test--success">Test</div>
    </div>
    <div>
      <input v-model="keyWord" placeholder="搜索" type="text" />
      <button @click="stop">停止监听</button>
    </div>
    <div>
      <table border width="600" cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>商品名称</th>
            <th>商品价格</th>
            <th>商品数量</th>
            <th>商品总价</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in filterData">
            <td align="center">{{ item.name }}</td>
            <td align="center">{{ item.price }}</td>
            <td align="center">
              <button @click="item.count > 1 ? item.count-- : null">-</button>
              {{ item.count }}
              <button @click="item.count < 99 ? item.count++ : null">+</button>
            </td>
            <td align="center">{{ item.price * item.count }}</td>
            <td align="center"><button @click="del(index)">删除</button></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td align="center">总价：{{ total }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, reactive, ref, watch, watchEffect } from 'vue'
interface Data {
  name: string
  price: number
  count: number
}
let data = reactive<Data[]>([
  {
    name: 'apple',
    price: 10,
    count: 1,
  },
  {
    name: 'banana',
    price: 20,
    count: 2,
  },
  {
    name: 'orange',
    price: 30,
    count: 2,
  },
])
let keyWord = ref<string>('')
let filterData = computed(() => {
  return data.filter((item: Data) => {
    return item.name.includes(keyWord.value)
  })
})
const del = (index: number) => {
  data.splice(index, 1)
}
const total = computed(() => {
  // 注意filterData是一个ComputedRef对象，所以要用filterData.value
  return filterData.value.reduce((total, item) => {
    return total + item.price * item.count
  }, 0)
})
// 引用类型时，新旧值都是一样的
// reactive会默认隐性调用deep
// 若监听单一属性时，需要使用函数
watch(
  () => data,
  (newValue, oldValue) => {
    console.log('newValue', newValue)
    console.log('oldValue', oldValue)
  },
  { immediate: true, deep: true },
  //   flush: 'pre' 组件更新前执行 // 默认是post 组件更新后执行 // sync 同步执行
)

const stop = watchEffect(
  (OnCleanup) => {
    console.log('watchEffect', data)
    console.log('keyword', keyWord)
    OnCleanup(() => {
      console.log('before')
    })
  },
  {
    flush: 'post',
    onTrigger: (e) => {
      console.log('onTrigger', e)
    },
  },
)
</script>
<!-- 
    由于是单页面应用，只有一个html，scoped的作用是把文件作为作用域，样式只在文件内生效，
    App.vue中不用加 因为是全局 -->
<style scoped lang="scss">
@include b(test) {
  background-color: red;
  width: 400px;
  @include e(inner) {
    color: blue;
  }
  @include m(success) {
    color: green;
  }
}
</style>
