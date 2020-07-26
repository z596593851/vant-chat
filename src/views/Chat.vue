<template>
    <div class="chat-bubble">
        <van-nav-bar :title=name fixed placeholder left-arrow  @click-left="onClickLeft"/>
        <div class="chat-content" style="margin-bottom: 50px">
            <chat-bubble v-for="(item,index) in talkList"
                         :imgUrl=item.imgUrl
                         :content=item.content
                         :position=item.position
            />
        </div>

        <div class="sendBox" style="position: fixed; bottom: 0; left: 0; height:50px; width: 100%; border-top: thin solid #ebedf0;">
            <van-field
                    v-model=this.sendContent
                    center
                    clearable
                    placeholder="输入"
            >
                <template #button>
                    <van-button size="small" type="primary">发送</van-button>
                </template>
            </van-field>
        </div>

    </div>
</template>

<script>
    import ChatBubble from "@/components/ChatBubble"
    export default {
        name: "Chat",

        components:{
            ChatBubble
        },
        created() {
            this.name=this.$route.query.name
        },
        data(){
            return{
                id:"",
                name:"",
                sendContent:"",
                talkList:[
                    {
                        imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595676641743&di=e5b38480a416b82d67540069b62a0b8a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D75ce80d1f0deb48ffb69a1d6c01e3aef%2F3e3342a7d933c895597782cbd21373f08202000f.jpg",
                        content:"吃了吗？",
                        position:"left"
                    },

                    {
                        imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595676641743&di=e5b38480a416b82d67540069b62a0b8a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D75ce80d1f0deb48ffb69a1d6c01e3aef%2F3e3342a7d933c895597782cbd21373f08202000f.jpg",
                        content:"还没呢，你呢？",
                        position:"right"
                    },
                    {
                        imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595676641743&di=e5b38480a416b82d67540069b62a0b8a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D75ce80d1f0deb48ffb69a1d6c01e3aef%2F3e3342a7d933c895597782cbd21373f08202000f.jpg",
                        content:"还没呢，你呢？",
                        position:"right"
                    },
                    {
                        imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595676641743&di=e5b38480a416b82d67540069b62a0b8a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D75ce80d1f0deb48ffb69a1d6c01e3aef%2F3e3342a7d933c895597782cbd21373f08202000f.jpg",
                        content:"还没呢，你呢？",
                        position:"right"
                    },
                    {
                        imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595676641743&di=e5b38480a416b82d67540069b62a0b8a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D75ce80d1f0deb48ffb69a1d6c01e3aef%2F3e3342a7d933c895597782cbd21373f08202000f.jpg",
                        content:"还没呢，你呢？",
                        position:"right"
                    },
                    {
                        imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595676641743&di=e5b38480a416b82d67540069b62a0b8a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D75ce80d1f0deb48ffb69a1d6c01e3aef%2F3e3342a7d933c895597782cbd21373f08202000f.jpg",
                        content:"吃了吗？",
                        position:"left"
                    },
                    {
                        imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595676641743&di=e5b38480a416b82d67540069b62a0b8a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D75ce80d1f0deb48ffb69a1d6c01e3aef%2F3e3342a7d933c895597782cbd21373f08202000f.jpg",
                        content:"吃了吗？",
                        position:"left"
                    },
                    {
                        imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595676641743&di=e5b38480a416b82d67540069b62a0b8a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D75ce80d1f0deb48ffb69a1d6c01e3aef%2F3e3342a7d933c895597782cbd21373f08202000f.jpg",
                        content:"还没呢，你呢？",
                        position:"right"
                    },
                    {
                        imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595676641743&di=e5b38480a416b82d67540069b62a0b8a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D75ce80d1f0deb48ffb69a1d6c01e3aef%2F3e3342a7d933c895597782cbd21373f08202000f.jpg",
                        content:"还没呢，你呢？",
                        position:"right"
                    },
                    {
                        imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595676641743&di=e5b38480a416b82d67540069b62a0b8a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D75ce80d1f0deb48ffb69a1d6c01e3aef%2F3e3342a7d933c895597782cbd21373f08202000f.jpg",
                        content:"吃了吗？",
                        position:"left"
                    },
                    {
                        imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595676641743&di=e5b38480a416b82d67540069b62a0b8a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3D75ce80d1f0deb48ffb69a1d6c01e3aef%2F3e3342a7d933c895597782cbd21373f08202000f.jpg",
                        content:"吃了吗？",
                        position:"left"
                    },
                ]
            }
        },
        mounted() {
            this.scrollToBottom()
        },
        updated() {
            this.scrollToBottom()
        },
        methods:{
            onClickLeft(){
                this.$router.push({name:'message'})
            },
            scrollToBottom() {
                // this.$nextTick(() => {
                //     const container = this.$el.querySelector(".chat-bubble");
                //     container.scrollTop = container.scrollHeight;
                //     console.info(container.scrollHeight)
                //
                // })
                window.scrollTo(0, document.body.scrollHeight);
            }
        }
    }
</script>

<style scoped>

</style>