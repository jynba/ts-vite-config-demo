<template>
  <div class="block text-center relative">
    <el-carousel trigger="click" height="75vh">
      <el-carousel-item v-for="item in imgs" :key="item">
        <div class="relative w-full h-full">
          <img :src="item" alt="" class=" w-full h-full items-center">
          <div class="items-center text-white">
            <p class="my-1rem" style="font-size: 45px;font-weight: 400;">
              开源数据预测分析工具
            </p>
            <p class="" style="color:#f8f9fc !important;font-size: 1.25rem;line-height: 1.5;font-weight: 300;">
              医疗数据预测分析平台！人人可用。
            </p>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="mt-30px">
    <div class="my-100px">
      <p class="font-bold text-[36px] p-10px text-center">
        产品特点
      </p>
      <div class="flex justify-center">
        <div class="bg-white p-20px flex flex-col mx-30px justify-center w-400px" v-for="i in used" :key="i.title">
          <div class="flex justify-center">
            <img class="w-65px h-65px" :src="i.img">
          </div>
          <p class="text-center text-[24px] p-10px">{{ i.title }}</p>
          <p class="text-center mt-20px text-[#8492a6]">
            {{ i.desc }}
          </p>
        </div>
      </div>
    </div>

    <div class="my-100px">
      <p class="font-bold text-[36px] p-10px text-center">
        适用场景
      </p>
      <div class="flex justify-center p-20px">
        <el-card class="mx-40px" style="width: 400px" v-for="s in scenes" :key="s.title" shadow="always">
          <div class="bg-white p-10px">
            <img :src="s.img">
            <p class="text-center p-10px text-[28px]">{{ s.title }}</p>
            <p class="text-center p-10px">{{ s.desc }}</p>
          </div>
        </el-card>
      </div>
    </div>
  </div>
  <footer>
    <div class="h-100px bg-white">

    </div>
  </footer>
</template>

<script setup lang="ts">
import { banner1, banner2, scene1, scene2, scene3, pre, set, analyzs } from '@/assets/images';
const imgs = ref([
  banner1,
  banner2,
]);

const scenes = ref([
  {
    title: '高校师生',
    desc: '专业作图，直接使用',
    img: scene1,
  },
  {
    title: '医务人员',
    desc: '数据分析，一键生成',
    img: scene2,
  },
  {
    title: '科研人员',
    desc: '极简交互，快速建模',
    img: scene3,
  },
])

const used = ref([
  {
    title: '数据管理',
    desc: '支持excel文件上传，导出',
    img: set,
  },
  {
    title: '数据预处理',
    desc: '数据清洗，缺失值处理',
    img: pre,
  },
  {
    title: '数据分析',
    desc: '支持多种数据分析模型拓展',
    img: analyzs,
  },
])

</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.items-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>