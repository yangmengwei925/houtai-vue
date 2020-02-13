<template>
  <div class="home">
   <!-- {{list}}  -->
    <HelloWorld :data="list[currentIndex]"/>
  <!-- <tabBar :tabList="tabList" :curIndex.sync="curIndex" /> -->
  </div>
</template>

<script>
import axios from 'axios'
//  import {mapState} from 'vuex'
import {mapState} from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'
// import tabBar from '@/components/tabBar.vue'
export default {
  data(){
    return {
  list:[],
  // tabList:[
  //   {
  //     title:1,
  //     pick:"移动"
  //     },{
  //       title:2,
  //       pick:"三个"
  //       },{
  //         title:3,
  //         pick:"给个"
  //         }
  // ],curIndex:0
    }
  },
   created(){
    axios.get('/getList').then(res=>{
      this.list=res.data;
      // console.log(this.list)
    })
  },
  components: {
    HelloWorld,
    // tabBar
  },
  //仓库取数据·
  computed:{
    //  ...mapState(['list'])
    ...mapState(['currentIndex'])
  }
}
</script>
<style  scoped>
  .home{
    height:100%
  }
</style>
