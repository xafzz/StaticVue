<template>
    <div class="page">
        <div>这是<h1>Detail</h1></div>
        <div>跳转到<router-link to="/index">首页</router-link></div>
        <div>跳转到<router-link to="/list">列表页</router-link></div>
    </div>
</template>

<script>

export default {
    name: 'Detail',
    data() {
        return {
        }
    }
}
</script>
