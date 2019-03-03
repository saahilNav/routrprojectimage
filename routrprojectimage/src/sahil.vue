<template>
    <div v-if="news">hello i am  {{news.Description}} </div>
</template>

<script>
export default {
name:'sahil',
data(){
        return{
       news:null
        }},
 created(){
     this.fetchDataId();
 },
 methods:{
 fetchDataId(){
     
     this.news=this.$store.getters.getUserId(+this.$route.params.id);
     alert( "this news"+ this.news)
 }}
}
</script>

<style>

</style>
