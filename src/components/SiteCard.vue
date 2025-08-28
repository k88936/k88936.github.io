<script setup lang="ts">
const props = defineProps({
  site: {
    type: Object,
    required: true
  }
})

const openSite = () => {
  window.open(props.site.url, '_blank')
}
</script>

<template>
  <el-card class="site-card" shadow="hover" @click="openSite">
    <el-row :gutter="20">
      <el-col :span="4">
        <el-image 
          class="site-icon" 
          :src="site.icon" 
          :alt="site.title"
          fit="contain"
          lazy
        />
      </el-col>
      <el-col :span="20">
        <h3 class="site-title">{{ site.title }}</h3>
        <p class="site-desc">{{ site.desc }}</p>
      </el-col>
    </el-row>
  </el-card>
</template>

<style scoped>
.site-card {
  transition: transform 0.3s ease;
  height: 100%;
  cursor: pointer;
}

.site-card:hover {
  transform: translateY(-5px);
}

.site-icon {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.site-title {
  margin: 0 0 10px 0;
  color: var(--el-color-primary);
}

.site-desc {
  margin: 0;
  color: var(--el-text-color-secondary);
  line-height: 1.6;
}
</style>