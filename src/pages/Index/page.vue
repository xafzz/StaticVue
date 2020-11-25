<template>
    <div class="page">
        <div>跳转到-{{obj.name}}
            <router-link to="/list">列表页</router-link>
        </div>
        <div>跳转到
            <router-link to="/detail">详情页</router-link>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue'
export default {
    setup(){
        console.log(2222)
        let obj = reactive({
            name:'姓名',
            age:'19'
        })
        return {
            obj
        }
    }
}
</script>
