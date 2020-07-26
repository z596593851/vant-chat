<template>
  <div>
    <router-view/>

<!--    <van-tabbar route placeholder v-if="isShow">-->
<!--      <van-tabbar-item replace to="/message" icon="chat-o">消息</van-tabbar-item>-->
<!--      <van-tabbar-item replace to="/friends" icon="friends-o">好友</van-tabbar-item>-->
<!--      <van-tabbar-item replace to="/me" icon="contact">我</van-tabbar-item>-->
<!--    </van-tabbar>-->
  </div>
</template>

<script>

export default {

  data(){
    return{
      isShow:false
    }
  },

  created() {

  },
  methods:{
    //登陆页面隐藏底部导航栏
    // routerChange:function (to,from) {
    //   console.info(to.name)
    //   if(to.name!=="login"){
    //     this.isShow=true
    //   }else {
    //     this.isShow=false
    //   }
    // }
  }

}
</script>

<style>

</style>
