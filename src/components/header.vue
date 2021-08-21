<template>
    <el-container id="header">
        <el-row class="w-100 mb-0" type="flex" justify="space-between" align="middle">
            <el-col :span="4">
                <div class="d-flex justify-center align-center">
                    <i class="el-icon-s-custom font-30"></i>
                    <h1 class="font-20 ps-10">{{ header_title }}</h1>
                </div>
            </el-col>
            <!-- <el-col :span="8">
                <el-row class="mb-0" type="flex" justify="space-between" align="middle">
                    <el-col :span="5">
                        <p>あああ</p>
                    </el-col>
                    <el-col :span="5">
                        <p>あああ</p>
                    </el-col>
                    <el-col :span="5">
                        <p>あああ</p>
                    </el-col>
                    <el-col :span="5">
                        <p>{{ $t("attributes.setting") }}</p>
                    </el-col>
                </el-row>
            </el-col> -->
        </el-row>
    </el-container>
</template>

<script>
export default {
    name: 'Header',
    props: {
        header_title: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #header {
        height: 60px;
    }


    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
