<template>
    <div>
        <van-nav-bar title="消息" fixed placeholder/>

        <chat-thumb v-for="(item,index) in chatList"
                @click="onClick(item)"
                :imgUrl=item.imgUrl
                :name=item.name
                :time=item.time
                :content=item.content />

        <van-tabbar route placeholder>
            <van-tabbar-item replace to="/message" icon="chat-o">消息</van-tabbar-item>
            <van-tabbar-item replace to="/friends" icon="friends-o">好友</van-tabbar-item>
            <van-tabbar-item replace to="/me" icon="contact">我</van-tabbar-item>
        </van-tabbar>
    </div>


</template>

<script>
    import ChatThumb from "@/components/ChatThumb";
    export default {
        name: "index",
        components: {
            ChatThumb
        },
        data() {
            return {
                chatList:[
                    {
                        id:1,
                        imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595676641743&di=e5b38480a416b82d67540069b62a0b8a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D75ce80d1f0deb48ffb69a1d6c01e3aef%2F3e3342a7d933c895597782cbd21373f08202000f.jpg",
                        name:"李四",
                        time:"10:00",
                        content:"在吗？"
                    },
                    {
                        id:2,
                        imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595676605603&di=a8e8017ccae83f63cf1951eae76350c6&imgtype=0&src=http%3A%2F%2Ftupian.qqw21.com%2Farticle%2FUploadPic%2F2020-6%2F2020617225141628.jpg",
                        name:"张三",
                        time:"8:00",
                        content:"今晚吃啥"
                    }
                ]

            };
        },
        methods:{
            onClick(data){
                console.info(data.name)
                this.$router.push({name:'chat',query: {id:data.id,name:data.name}})
            },
        }
    }
</script>

<style scoped>



</style>