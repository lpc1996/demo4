<template>
  <el-tabs v-model="activeName" class="demo-tabs">
    <el-tab-pane
    v-for="pane in tabList"
    :key="pane.name"
    :label="pane.title"
    :name="pane.name"
    :closable="pane.closable"
    :lazy="pane.lazy"
    >
    {{ pane.content }}
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import { ref } from 'vue'
export default{
  setup(){
    let activeName = ref(1);

    let tabList = [
      {
        name:1,
        title:"首页",
        closable:false,
        content:"首页",
        lazy:false
      },{
        name:2,
        title:"字典管理",
        closable:true,
        content:"字典管理",
        lazy:true
      }
    ];

    // const addTabPane = (param)=>{
    //   console.log("调用成功");
    // }

    return {
      activeName,
      tabList,
    }
  },
  methods:{
    addTabPane(param){
      console.log("调用成功");
    }
  },
  expose:['addTabPane']
  
}


</script>
<style>

</style>
