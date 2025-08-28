<template>
  <header class="header">
    <div class="header-container">
      <div class="header-left">
        <a href="/" class="logo">k88936's Home</a>
      </div>
      <div class="header-right">
        <nav class="nav">
          <a href="/" class="nav-link" >Home</a>
          <a href="https://k88936.github.io/blogs/" class="nav-link" >Blogs</a>
        </nav>
        <el-switch
            v-model="isDark"
            inline-prompt
            active-icon="Moon"
            inactive-icon="Sunny"
            @change="toggleDark"
        />
      </div>
    </div>
  </header>
</template>

<script>
import {onMounted, watch} from 'vue'
import {useDark, useToggle} from '@vueuse/core'
import {Moon, Sunny} from '@element-plus/icons-vue'

export default {
  name: 'Header',
  setup() {

    // 使用useDark hook实现主题切换逻辑
    const isDark = useDark()
    const toggleDark = useToggle(isDark)

    const showAbout = () => {
      alert('Source of - A modern static file distribution platform for software packages.')
    }

    // 监听主题变化并保存到localStorage
    watch(isDark, (newVal) => {
      localStorage.setItem('theme', newVal ? 'dark' : 'light')
    })

    // 页面加载时检查保存的主题设置
    onMounted(() => {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        isDark.value = savedTheme === 'dark'
      } else {
        // 检查系统主题偏好
        isDark.value = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      }
    })

    return {
      isDark,
      toggleDark,
      showAbout,
      Moon,
      Sunny,
    }
  }
}
</script>

<style scoped>
.header {
  background: var(--el-bg-color);
  border-bottom: 1px solid var(--el-border-color);
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 24px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 24px;
}

.logo {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--el-text-color-primary);
  text-decoration: none;
}

.nav {
  display: flex;
  gap: 16px;
}

.nav-link {
  color: var(--el-text-color-regular);
  text-decoration: none;
  font-weight: 500;
  padding: 8px 0;
  transition: color 0.2s;
}

.nav-link:hover {
  color: var(--el-text-color-primary);
}


</style>