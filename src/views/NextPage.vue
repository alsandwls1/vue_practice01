<template>
    <div>
        <h1>next Page</h1>
        <br>
        <h3>paramType: {{paramObj.paramType}}</h3>
        <h3>title: {{paramObj.title}}</h3>
        <h3>content: {{paramObj.content}}</h3>
    </div>
</template>

<script>
/* eslint-disable */
import { isEmpty } from '@/js/common.js'

export default {
    name: 'nextPage',
    methods : {

    },
    data () {
        return {
            'paramObj': ''
        }
    },
    activated () {
        console.log('activated start!!!!!!!!!!!!!!!')
        
        var pathParams =  this.$route.query
        var paramsParams =  this.$route.params
        
        var data = ''
        if(Object.keys(pathParams).length > 0) data = pathParams
        else if(Object.keys(paramsParams).length > 0) data = paramsParams

        this.paramObj = data;
    }
}
</script>

<style>

</style>
