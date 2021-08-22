<template>
    <div id="app">
        <Home />
    </div>
</template>

<script>
    import Home from "./views/Home.vue";
    export default {
        data() {
            return {
                // 
            }
        },
        components: {
            Home
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    /* 共通スタイル */

    html, body, div, span, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    abbr, address, cite, code,
    del, dfn, em, img, ins, kbd, q, samp,
    small, strong, sub, sup, var,
    b, i,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section, summary,
    time, mark, audio, video {
        margin:0;
        padding:0;
        border:0;
        outline:0;
        font-size:100%;
        vertical-align:baseline;
        background:transparent;
    }

    body {
        line-height:1;
    }

    article,aside,details,figcaption,figure,
    footer,header,hgroup,menu,nav,section {
        display:block;
    }

    nav ul {
        list-style:none;
    }

    p, h1, h2, h3, h4, h5, li, button, small, label {
        margin-bottom: 0!important;
        letter-spacing: 0.1em;
        white-space: nowrap;
    }

    blockquote, q {
        quotes:none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content:'';
        content:none;
    }

    a {
        margin:0;
        padding:0;
        font-size:100%;
        vertical-align:baseline;
        background:transparent;
    }

    span {
        white-space: nowrap;
    }

    /* change colours to suit your needs */
    ins {
        background-color:#ff9;
        color:#000;
        text-decoration:none;
    }

    /* change colours to suit your needs */
    mark {
        background-color:#ff9;
        color:#000;
        font-style:italic;
        font-weight:bold;
    }

    del {
        text-decoration: line-through;
    }

    abbr[title], dfn[title] {
        border-bottom:1px dotted;
        cursor:help;
    }

    table {
        border-collapse:collapse;
        border-spacing:0;
    }

    /* change border colour to suit your needs */
    hr {
        display:block;
        height:1px;
        border:0;  
        border-top:1px solid #cccccc;
        margin:1em 0;
        padding:0;
    }

    input, select {
        vertical-align:middle;
    }

    
    /* make yourself */
    .w-100 {
        width: 100%!important;
    }

    .d-flex {
        display: flex!important;
    }

    .justify-center {
        justify-content: center!important;
    }

    .align-center {
        align-items: center!important;
    }

    .flex-wrap {
        flex-wrap: wrap!important;
    }

    .mb-5 {
        margin-bottom: 5px!important;
    }

    .mb-0 {
        margin-bottom: 0!important;
    }

    .ps-40 {
        padding-left: 40px!important;
    }

    .ps-20 {
        padding-left: 20px!important;
    }

    .ps-10 {
        padding-left: 10px!important;
    }

    .me-0 {
        margin-right: 0!important;
    }

    .pe-10 {
        padding-right: 10px!important;
    }

    .pe-5 {
        padding-right: 5px!important;
    }

    .font-30 {
        font-size: 30px!important;
    }

    .font-25 {
        font-size: 25px!important;
    }

    .font-20 {
        font-size: 20px!important;
    }

    .el-row {
        margin-bottom: 20px;
    }

    .el-col {
        border-radius: 4px;
    }

    .el-dropdown-link {
        cursor: pointer;
        /* color: #409EFF; */
    }

    .el-icon-arrow-down {
        font-size: 12px;
    }

    .bg-main-color {
        background-color: #074B8F!important;
    }

    .bg-neutral-color {
        background-color: #606266!important;
    }

    .ft-white-color {
        color: #fff!important;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .btn-border-collapse {
        border: none!important;
    }

    /* #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    } */
</style>
