<template>
    <div id="home">
        <el-container>
            <el-header class="bg-purple-dark">
                <Header :header_title="$t('attributes.header_title')" />
            </el-header>
            <el-container v-loading="is_loading">
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
    import Header from '../components/header'
    export default {
        name: 'Home',
        data() {
            return {
                is_loading: false
            }
        },
        components: {
            Header,
        }
    }
</script>

<style scoped>
/*  */
</style>
