<!--  -->
<template>
    <div>
      <div v-for="(item,index) in list" :key="index">
          <!-- {{item}} -->
      </div>
      
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
    list:[]
    };
  },
  created(){
    axios.get('/getList').then(res=>{
      this.list=res.data;
      console.log(this.list)
    })
  }
//   components: {},

//   computed: {},

//   mounted: {},

//   methods: {}
}

</script>
<style lang='scss' scoped>

</style>