<!--  -->
<template>
    <div>
       <div v-for="(item,index) in tabList" :key="index">
           <div :class="{active:curIndex===index}" @click="handleClick(index)"> {{item.title}}</div> </div> 
    </div>
</template>

<script>
export default {
  name:'tabBar',
  props:{
      tabList:{
          type:Array,
          default:()=>[]
      },
      curIndex:{
          type:[Number,String],
          default:0
      }
  },
  methods: {
      handleClick(index){
          this.$emit('update:curIndex',index)
      }
  }
}

</script>
<style lang='scss' scoped>
.active{
    color:red;
}
</style>