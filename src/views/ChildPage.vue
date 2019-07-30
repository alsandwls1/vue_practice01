<template>
    <div class="child-page">
        <h2>childpage</h2>
        <br>
        <p>받아온 데이터 => </p>
        <p>{{ sendObj }}</p>
        <br>
        <p>실시간 데이터 => </p>
        <p>{{ sendDynamic }}</p>
    </div>
</template>

<script>
export default {
    name: 'child-page',
    data () {
        return {

        }
    },
    props: [
        'sendObj', 'sendDynamic'
    ],  
    methods: {
        
    }
}
</script>

<style>
.child-page {
    border: 1px solid black;
    width: 610px;
    height: 200px;
    margin: 20px 0px;
}
</style>
