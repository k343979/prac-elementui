<template>
    <el-container id="header">
        <el-row class="w-100 mb-0" type="flex" justify="space-between" align="middle">
            <el-col :span="4">
                <div class="d-flex justify-center align-center">
                    <i class="el-icon-s-custom ft-white-color font-20"></i>
                    <h1 class="ps-10 ft-white-color font-20">{{ header_title }}</h1>
                </div>
            </el-col>
            <el-col :span="14">
                <el-row class="mb-0" type="flex" justify="end" align="middle">
                    <el-col :span="4">
                        <div class="d-flex justify-center align-center">
                            <a href="https://tsunag.works" class="ft-white-color" target="_blank">
                                {{ $t("attributes.usecase") }}
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <el-dropdown>
                            <span class="el-dropdown-link ft-white-color hover-sub-color">
                                <i class="fas fa-globe pe-5"></i>
                                {{ $t("attributes.language") }}
                                <i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown" style="width:140px;">
                                <el-dropdown-item>
                                    <el-button class="btn-border-collapse" @click="changeLocale('ja')">
                                        {{ $t("attributes.japanese") }}
                                    </el-button>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <el-button class="btn-border-collapse" @click="changeLocale('en')">
                                        {{ $t("attributes.english") }}
                                    </el-button>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </el-container>
</template>

<script>
export default {
    name: 'Header',
    props: {
        header_title: String
    },
    data() {
        return {
            // 
        }
    },
    methods: {
        changeLocale(language) {
            this.$emit("loading", true);
            if (language === "ja") {
                this.$i18n.locale = 'ja';
            } else {
                this.$i18n.locale = 'en';
            }
            this.$emit("loading", false);
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #header {
        height: 60px;
    }
</style>
