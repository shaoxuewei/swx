<template>
<!-- 我的报告 -->
    <div class="MyReports">
        <div class="ReportHeader">
            <ul>
                <li class="item" v-for="(item,index) in titleData" :key="index">
                    <img :src="item.img" alt=""/>
                    <p :class="{active:isActive}">{{item.txt}}</p>
                </li>
            </ul>
        </div>
        <div class="ReportContent">

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            active:true,
            titleData:[
                {img:require('../../static/images/icon_jianyan@2x.png'),txt:'生化体验报告',isActive:true},
                {img:require('../../static/images/icon_jiancha@2x.png'),txt:'影像检查报告',isActive:false},
                {img:require('../../static/images/icon_tijian@2x.png'),txt:'体验报告',isActive:false}
                ]
        }
    }
}
</script>
<style lang="less" scoped>
.MyReports{
    .ReportHeader{
        height:1.5rem;
        box-sizing:border-box;
        padding:0.3rem 0.3rem;
        ul{
            display:flex;
            li.item{
                flex:0 1 33%;
                text-align: center;
                img{
                    background-size:30%;
                }
                p{
                    font-size:0.4rem;
                    color:rgba(153,153,153,1);
                    &.active{
                        color:#000;
                    }
                }
            }
        }
    }
}
</style>


