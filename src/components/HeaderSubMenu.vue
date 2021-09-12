<template>
    <el-container id="header-sub-menu" class="w-100">
        <el-row class="w-100 mb-0">
            <el-col :span="24">
                <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo d-flex justify-content-center"
                    mode="horizontal"
                    @select="selectMenu"
                    background-color="#074B8F"
                    text-color="#ffffff"
                    active-text-color="#ffd04b">
                    <el-menu-item index="1">
                        <i class="el-icon-s-home mb-5 me-0"></i>
                        {{ $t("attributes.home") }}
                    </el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">Workspace</template>
                            <el-menu-item index="2-1">item one</el-menu-item>
                            <el-menu-item index="2-2">item two</el-menu-item>
                            <el-menu-item index="2-3">item three</el-menu-item>
                            <el-submenu index="2-4">
                                <template slot="title">item four</template>
                                <el-menu-item index="2-4-1">item one</el-menu-item>
                                <el-menu-item index="2-4-2">item two</el-menu-item>
                                <el-menu-item index="2-4-3">item three</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">Workspace</template>
                            <el-menu-item index="3-1">item one</el-menu-item>
                            <el-menu-item index="3-2">item two</el-menu-item>
                            <el-menu-item index="3-3">item three</el-menu-item>
                        </el-submenu>
                        <el-submenu index="4">
                            <template slot="title">
                                <i class="el-icon-setting mb-5 me-0"></i>
                                {{ $t("attributes.setting") }}
                            </template>
                            <el-menu-item index="4-1">{{ $t("attributes.user_info") }}</el-menu-item>
                            <el-menu-item index="4-2">{{ $t("attributes.setting_account") }}</el-menu-item>
                            <el-menu-item index="4-3">{{ $t("attributes.setting_lang") }}</el-menu-item>
                            <el-menu-item index="4-4">{{ $t("attributes.other") }}</el-menu-item>
                        </el-submenu>
                    </el-menu>
            </el-col>
        </el-row>
    </el-container>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            }
        },
        methods: {
            selectMenu(key, keyPath) {
                console.log(key, keyPath);
            },
        }
    }
</script>

<style scoped>
    #header-sub-menu {
        height: 60px;
    }

</style>