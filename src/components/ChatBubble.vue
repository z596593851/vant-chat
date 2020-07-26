<template>
    <div v-if="position==='left'">
        <div class="left-talk">
            <img :src=imgUrl />
            <span>{{content}}</span>
        </div>
    </div>
    <div v-else-if="position==='right'">
        <div class="right-talk">

            <img :src=imgUrl />
            <span>{{content}}</span>
        </div>
<!--        <div style="clear: both"></div>-->
    </div>
</template>

<script>

    export default {
        name: "ChatBubble",
        props:{
            imgUrl:{type:String, default:""},
            content:{type:String, default:""},
            position:{type:String, default:"left"},
        }

    }
</script>

<style scoped lang="less">
    @import '../style/var';
    .left-talk{
        margin:10px;
        clear: right;
        img{
            border-radius: @photo-radius;
            flex-shrink: 0;
            width: 50px;
            height: 50px;
            margin-right: 4px;
        }
        span {
            display: inline-block;
            vertical-align: top;
            max-width: 200px;
            background:#0181cc;
            border-radius:10px;
            color:#fff;
            padding:5px 10px;
            margin-top: 5px;
        }
    }

    .right-talk{
        margin:10px ;
        //解决子元素浮动导致父元素无法被撑开从而无法自适应高度
        overflow: hidden;
        img{
            float: right;
            border-radius: @photo-radius;
            flex-shrink: 0;
            width: 50px;
            height: 50px;
            margin-left: 4px;

        }
        span{
            float: right;
            display: inline-block;
            max-width: 200px;
            vertical-align: top;
            background: #0dd668;
            border-radius:10px;
            color:#fff;
            padding:5px 10px;
            margin-top: 5px;
        }
    }

</style>