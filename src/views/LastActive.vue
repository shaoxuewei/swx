<template>
    <div>
        <div class="active">
            <div class="item mar" v-for="(item,index) in items" :key="index">
                <img :src="item.src" alt="">
                <div class="imgright">
                    <div class="title">上海大虹桥首家三级公立受啥刺激那就是觉得{{item.title}}上海大虹桥首家三级公立受啥刺激那就是觉得</div>
                    <div class="content">{{item.content}}
                    </div>
                         <div class="time">{{item.time}}</div>
                   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // key: value
                items:[
                    {   
                        src:require('../../static/QQ截图20190104172519.png'),
                        title:'上海大虹桥首家三级公立受啥刺激那就是觉得',
                        content:'6月8日上午9点，地处上海市闵行区新虹桥国际医学园区',
                        time:'2018-11-05'
                    },
                     {
                         src:require('../../static/QQ截图20190104172519.png'),
                        title:'上海大虹桥首家三级公立受啥刺激那就是觉得',
                        content:'6月8日上午9点，地处上海市闵行区新虹桥国际医学园区',
                        time:'2018-11-05'
                    },
                     {
                         src:require('../../static/QQ截图20190104172519.png'),
                        title:'上海大虹桥首家三级公立受啥刺激那就是觉得',
                        content:'6月8日上午9点，地处上海市闵行区新虹桥国际医学园区',
                        time:'2018-11-05'
                    },
                ]
            }
        },
    }
</script>

<style scoped lang="less">
    .active{
        background-color: #ffffff;
        .mar{
            margin: 0 1rem;
        }
        .item{
            border-bottom: 1px solid #F2F2F2;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            height: 9rem;
            img{
                display: block;
                margin: 0 1rem 0 0;
                width:8rem;
                height: 5rem;
            }
            .imgright{
               
                .title{
                    width:13rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    font-size: 1.2rem;
                        padding: 0.7rem 0 0.2rem 0;
                }
                .content{
                    height: 3rem;
                    display: flex;
                    justify-content: flex-end;
                     white-space: normal;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    color:#bbb;
                    position: relative;
                    line-height: 1.5rem;
                        padding: 0 0 0.2rem 0;
                        
                }
                .content::after{
                    content: '...';
                    position: relative;
                    top: 1.5rem;
                    right: 0.2rem;
                }
                .time{
                    text-align:right;
                    color:#bbb;
                        margin: 0 0.8rem;
                         font-size: 1.2rem;
                }
            }
        }
    }
</style>