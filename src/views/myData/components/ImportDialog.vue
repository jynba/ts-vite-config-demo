<template>
  <el-dialog title="数据详情" width="500px" v-model="visible" destroy-on-close :close-on-click-modal="false"
    :before-close="close">
    <div class="flex justify-center items-center gap-x-10px h-210px">
      <el-table :data="state.list">
        <el-table-column v-for="item in state.form?.columns" :label="item.title">
          <template #default="{ row }">
            <span>{{ row[item.title] }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-dialog>
</template>
<script lang="ts" setup>
const props = defineProps({
  params: {
    type: Object,
    default: () => ({}),
  },
});
const state = reactive({
  form: props.params,
  list: []
});

let visible = ref(false);
const close = () => {
  visible.value = false;
};

const callback = () => {
  close();
};

defineExpose({ visible });
</script>

<style lang="scss" scoped>
.divide {
  display: inline-block;
  width: 1px;
  height: 100%;
  margin: 0 8px;
  vertical-align: middle;
  position: relative;
  border-left: 1px #999 var(--el-border-style);
}

.img-center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}
</style>
