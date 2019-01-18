<template>
    <!-- 专科诊疗 -->
    <div class="professionMajor">
        专科诊疗
        <icon icon-style="style" icon-class="icon_saomiao"></icon>
    </div>
</template>
<script>
    import icon from '../components/icon.vue'
export default{
    components: {
        'icon':icon
    },
}
</script>
<style lang="less" scoped>
    .professionMajor{
        background:#fff;
        font-size:0.48rem;
        .containerwrap{
            padding:0 
        }
    }
</style>


