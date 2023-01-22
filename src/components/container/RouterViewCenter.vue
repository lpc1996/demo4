<template>
  <div>
    <el-page-header @back="goBack">
      <template #content>
        <span class="text-large font-600 mr-3"> Title </span>
      </template>
    </el-page-header>
    <router-view></router-view>
  </div>
</template>

<script lang="js">
export default {
  props:[

  ],
  setup (props) {
    

    return {}
  }
}
</script>

<style scoped>

</style>