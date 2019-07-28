<template>
    <div class="parent-page">
        <input type="text" v-model="data1"> &nbsp;
        <input type="text" v-model="data2"> &nbsp;
        <button v-on:click="sendData">자식컴포넌트로 보내기</button>
    </div>
    <child-page></child-page>
</template>

<script>
/* eslint-disable no-console */
import childPage from '@/views/ChildPage.vue'

export default {
    name: 'parentPage',
    data () {
        return {
            'data1': '',
            'data2': ''
        }
    },
    methods: {
        sendData () {
            console.log(this.data1 +' , '+ this.data2);

        }
    },
    components: {
        childPage
    }
}
</script>

<style>

</style>
