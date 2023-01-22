<template>
  <!--  -->
  <div class="main-content" element-loading-text="正在加载数据，请稍后..." v-loading="loading">
    <el-container class="main-content" v-if="initData != null">
      <el-header class="header">
        <TopBarVue :receiveData="initData" />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <MainAsideVue :receiveData="initData.menuInfo" />
        </el-aside>
        <el-container>
          <el-main>
            <TabCenterVue ref="tabs"/>
          </el-main>
          <el-footer>
            <FooterVue />
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import { ref, reactive, watch, onMounted } from 'vue';
  // import { defineComponent } from 'vue';
  import UserService from "./service/UserService";
  import TopBarVue from './components/container/TopBar.vue';
  import MainAsideVue from './components/container/MainAside.vue';
  import TabCenterVue from './components/container/TabCenter.vue';
  import FooterVue from "./components/container/Footer.vue";

  // const userService = null;
  // const initData = userService.getInitData();
  // let loading = ref(false);

  // onMounted({
  //   if(initData != null && initData != undefined &&initData != {}){

  //   }
  // })
  

export default {
  data() {
    return {
      initData: {
        homeInfo: {},
        logoInfo: {},
        userInfo: {},
        menuInfo: []
      },
      loading: true
    }
  },
  components: {
    "TopBarVue": TopBarVue,
    "MainAsideVue": MainAsideVue,
    "TabCenterVue": TabCenterVue,
    "FooterVue": FooterVue
  },
  UserService: null,
  created() {
    this.UserService = new UserService();
    const tabs = ref(null);
    console.log(tabs)
  },
  mounted() {
    this.UserService.getInitData().then(data => {
      this.initData = data;
      this.loading = false;
    })
  }
}

</script>

<style scoped>
.main-content {
  width: 100vw;
  height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px var(--el-menu-border-color);
}

.el-aside {
  border-right: solid 1px var(--el-menu-border-color);
}

.el-main {
  border-bottom: solid 1px var(--el-menu-border-color);
}

.el-footer {
  text-align: center;
}
</style>