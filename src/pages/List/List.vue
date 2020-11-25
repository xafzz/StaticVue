<template>
    <div class="page">
        <div>这是<h1>List</h1></div>
        <div>跳转到<router-link to="/index">首页</router-link></div>
        <div>跳转到<router-link to="/detail">详情页</router-link></div>
    </div>
</template>

<script>

export default {
    name: 'List',
    data() {
        return {
        }
    }
}
</script>
