<template>
  <div >
    <ul  style="list-style-type: none;margin-top: 20px;width: 99%;;margin-left:-37px;">
<li v-for=" obj of getUsers"  :key="obj.id" style="margin-left:10px" >
 <img :src=" obj.NewsPic"  width='100%' class="img"  alt="this pic is not exit"> 
<routerLink :to="'/image/'+obj.id "><p class="p1"> {{obj.Summary}} {{obj.Editor}}</p></routerLink>

</li>
</ul>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'HelloWorld',
 computed: mapGetters(['getUsers']) ,
  
 methods:mapActions(['fetchData']),
 created(){
   this.fetchData();
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  display: flex;
 flex-flow: inherit;
}
</style>
  

