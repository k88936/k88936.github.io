<template>
  <div id="app">
    <Header/>
    <el-container>
      <el-aside>
        <el-anchor :offset="70" class="anchor-nav">
          <el-anchor-link href="#Apps">Apps</el-anchor-link>
        </el-anchor>
      </el-aside>
      <el-main class="main">
        <div id="Apps">
          <h2>Featured Apps</h2>
          <el-row :gutter="20" class="sites-grid">
            <el-col
                v-for="site in sites"
                :key="site.title"
                :xs="24"
                :sm="12"
                :md="8"
                :lg="6"
                class="site-col"
            >
              <SiteCard :site="site"/>
            </el-col>
          </el-row>
        </div>
      </el-main>
      <el-aside></el-aside>
    </el-container>
  </div>
</template>

<script>
import {ref, onMounted} from 'vue'
import Header from './components/Header.vue'
import SiteCard from "@/components/SiteCard.vue";

export default {
  name: 'App',
  components: {
    SiteCard,
    Header
  },
  setup() {
    const sites = ref([])

    const loadSites = async () => {
      try {
        const response = await fetch('/sites/apps.json')
        sites.value = await response.json()
      } catch (error) {
        console.error('Failed to load sites:', error)
      }
    }

    onMounted(() => {
      loadSites()
    })

    return {
      sites
    }
  }
}
</script>

<style>
#app {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-color: var(--el-bg-color-page);
}

body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

.el-main {
  padding: 20px;
}

.el-aside {
  width: 300px;
  padding: 20px;
  border-right: 1px solid var(--el-border-color);
}

.anchor-nav .el-anchor__link {
  padding: 12px 20px;
}

.sites-grid {
  margin: 0 -10px; /* 补偿el-row的gutter产生的负边距 */
}

.site-col {
  margin-bottom: 20px; /* 添加底部边距，增加行间距 */
}

h2 {
  color: var(--el-text-color-primary);
  border-bottom: 1px solid var(--el-border-color);
  padding-bottom: 10px;
}
</style>