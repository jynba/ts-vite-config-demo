<template>
  <el-tabs class="tabs" v-model="activeName" @tab-change='tabChange'>
    <el-tab-pane disabled>
      <template #label>
        <div class="w-200px tracking-wider">
          <h3 class="text-xl m-7px font-bold text-black tracking-4px">
            预测报告分析平台
          </h3>
        </div>
      </template>
    </el-tab-pane>
    <el-tab-pane v-for="tab in tabs" :key="tab.name" :name="tab.name">
      <template #label>
        <div class="text-xl flex items-center p-10px ">
          <component v-if="tab.icon" :is="tab.icon" />
          <span>
            {{ tab.label }}
          </span>
        </div>
      </template>
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>

import EpElementPlus from '~icons/ep/element-plus';
import EpDataAnalysis from '~icons/ep/data-analysis';
import EpOperation from '~icons/ep/operation';
import EpTrendCharts from '~icons/ep/trend-charts';
import router from '@/router';
const activeName = ref('home')
const tabs = [
  { label: '首页', name: 'home', icon: EpElementPlus },
  { label: '我的数据', name: 'mydata', icon: EpDataAnalysis },
  { label: '数据处理', name: 'mydataDetail', icon: EpOperation },
  { label: '数据分析', name: 'dealData', icon: EpTrendCharts },
]
const tabChange = () => {
  router.push({ path: '/' + activeName.value });
}
</script>
<style lang="scss" scoped>
.title {
  font-size: 24px;
  text-align: center;
  font-weight: bold;
}

.tabs {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 17px;
  line-height: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #409eff;
}
</style>
