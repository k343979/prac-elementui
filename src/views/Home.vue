<template>
    <div id="home">
        <el-container v-loading="full_loading">
            <el-header class="bg-main-color">
                <Header
                    :header_title="$t('attributes.project_title')"
                    @loading="changeFullLoad" />
            </el-header>
            <el-container v-loading="is_loading" class="flex-wrap">
                <HeaderSubMenu @loading="changeFullLoad" />
                <el-aside width="200px">Aside</el-aside>
                <el-container>
                    <el-main>Main</el-main>
                </el-container>
            </el-container>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
    import Header from '../components/Header'
    import HeaderSubMenu from '../components/HeaderSubMenu'
    export default {
        name: 'Home',
        data() {
            return {
                // 画面ローディング
                full_loading: true,
                is_loading: false
            }
        },
        methods: {
            // フルスクリーンローディング切替
            changeFullLoad(loading_flag) {
                this.full_loading = loading_flag;
            }
        },
        mounted() {
            setTimeout(() => {
                this.full_loading = false;
            }, 1000);
        },
        components: {
            Header,
            HeaderSubMenu,
        }
    }
</script>

<style scoped>
/*  */
</style>
