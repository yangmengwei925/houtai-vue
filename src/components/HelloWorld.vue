<template>
  <div class="hello">
    <!-- {{data}} -->
      <p>{{data.question}}</p> 
   <ul>
       <li v-for="(item,index) in data.detail" :key="index" @click="clickFn(item)">
         <span :class="{active:item.checked}"></span>{{item.name}}
         </li>      
      </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
 
export default {
 name: 'HelloWorld',
  props:['data'],
  data(){
    return {
        
    }
  },
  methods:{
      clickFn(item){
       item.checked=true 
       setTimeout(()=>{
          this.add()
       },1000)
      },
      ...mapMutations(['add'])
  },
  }


</script>
<style  scoped>
  .hello{
   height: 100%;
  }
  ul{
    width:100%;
    height: 100px;
  }
  span{
    display: inline-block;
    width:30px;
    height: 30px;
    text-align: center;
    border-radius: 50%;
    border:1px solid tan
  }
  .active{
    color:red
  }
</style>

