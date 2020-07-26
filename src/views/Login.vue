<template>
    <div>
        <van-form @submit="onSubmit">
            <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
            />
            <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                    登陆
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                username:"",
                password:"",
            }
        },
        methods:{
            onSubmit(values) {
                this.$router.push({name:'message'})
            },
        }
    }
</script>

<style scoped>

</style>