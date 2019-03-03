<template>
    <div v-if="news">hi i am imageDetails
        <ul>
       <li> <img :src="news.NewsPic"  width="70%%" alt="this pic does not exist"></li>
         <li><strong>Summary:</strong> {{news.Summary}}</li>
         <li><strong>Date:</strong>  {{news.date}}</li>
         <li><strong>Editor:</strong>  {{news.Editor}}</li>
           <li><strong>Title:</strong> {{news.Title}}</li>
            <li><strong>Description:</strong>{{news.Description}}</li>
            </ul>
            <router-link
    v-if="$routerHistory.hasPrevious()"
    :to="{ path: $routerHistory.previous().path }">
    GO BACK
</router-link>

    </div>
    
</template>

<script>
export default {
    name:'imageDetails',
    data(){
        return{
       news:null
        }
    }
    ,

 created(){
     this.fetchDataId();
 },
 methods:{
 fetchDataId(){
     
     this.news=this.$store.getters.getUserId(+this.$route.params.id);
     alert( "this news"+ this.news)
     
 }
 }
}

</script>

<style scoped>
ul{
    list-style-type: none;
    margin-left: 10px;
    

}
li{
          width: 50%;
  
}

</style>
