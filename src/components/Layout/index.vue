<template>
  <div class="mySticky">
    <el-tabs class="tabs" v-model="activeName" @tab-change='tabChange'>
      <el-tab-pane disabled>
        <template #label>
          <div class="text-xl mb-[-10px] flex items-start font-bold w-200px text-black tracking-4px px-10px">
            预测报告分析平台
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
  </div>
  <el-tabs class="tabs" v-model="activeName" @tab-change='tabChange'>
    <el-tab-pane disabled>
      <template #label>
        <div class="text-xl mb-[-10px] flex items-start font-bold w-200px text-black tracking-4px px-10px">
          预测报告分析平台
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
  { label: '数据处理', name: 'dealData', icon: EpOperation },
  { label: '数据分析', name: 'analyzeData', icon: EpTrendCharts },
]
const tabChange = () => {
  router.push({ path: '/' + activeName.value });
}
onMounted(() => {
  activeName.value = router.currentRoute.value.path.slice(1)
})
</script>
<style lang="scss" scoped>
.title {
  font-size: 24px;
  text-align: center;
  font-weight: bold;
}

:deep(.el-tabs__header) {
  margin: 0;
}

.mySticky {
  position: fixed;
  z-index: 999;
  width: 100%;
  background: #fff;
}

.tabs {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 17px;
  line-height: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #409eff;
  padding-top: 10px;
}
</style>
