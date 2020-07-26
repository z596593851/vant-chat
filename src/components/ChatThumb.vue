<template>
    <div class="chat-thumb" @click="click">
        <div class="photo">
            <img :src="imgUrl" />
        </div>
        <div class="chat-content">
            <div class="time">{{time}}</div>
            <div class="name">{{name}}</div>
            <div class="content">{{content}}</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ChatThumb",
        props:{
            imgUrl:{type:String, default:""},
            name:{type:String, default:""},
            content:{type:String, default:""},
            time:{type:String, default:""},
            // click: {type: Function, default: function() {}},
        },
        methods:{
            click(e) {
                this.$emit("click", e);
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../style/var';

    .chat-thumb {
        display: flex;
        padding: @padding-md;
        border-bottom: thin solid #ebedf0;
        .chat-content {
            width: 100%;
            padding-top: 6px;
            .name {
                margin: 0;
                font-size: 18px;
                font-weight: 400;
                line-height: 20px;
            }
            .time {
                display: inline-block;
                float:right;
                font-size: 14px;
                line-height: 20px;
                color: #878787;

            }
            .content{
                margin: 5px 0 0;
                font-size: 14px;
                line-height: 20px;
                color: #878787;
            }
        }
        .photo img {
            border-radius: @photo-radius;
            flex-shrink: 0;
            width: 50px;
            height: 50px;
            margin-right: @padding-md;
        }
    }
    .chat-thumb:active{
        background-color: #d6d6d6;
    }

</style>