<template>
    <div>
        <h1>me</h1>

        <van-tabbar route placeholder>
            <van-tabbar-item replace to="/message" icon="chat-o">消息</van-tabbar-item>
            <van-tabbar-item replace to="/friends" icon="friends-o">好友</van-tabbar-item>
            <van-tabbar-item replace to="/me" icon="contact">我</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "me"
    }
</script>

<style scoped>

</style>