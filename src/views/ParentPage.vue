<template>
    <div class="parent-page">
        <h3># 자식컴포넌트</h3>
        <input type="text" v-model="parentObj.title" placeholder="제목을 입력해주세요."> &nbsp;
        <input type="text" v-model="parentObj.content" placeholder="내용을 입력해주세요."> &nbsp;
        <button v-on:click="sendData">자식컴포넌트로 보내기</button>
        
        <child-page v-bind:send-obj="sendObj" :send-dynamic="parentObj"></child-page>
        <br>

        <h3># 데이터페이지이동(path, props)</h3>
        <br>
        <input type="text" v-model="moveObj.title" placeholder="제목을 입력해주세요."> &nbsp;
        <input type="text" v-model="moveObj.content" placeholder="내용을 입력해주세요."> &nbsp;
        <br><br>
        <button v-on:click="movePage('path')">해당 데이터를 가지고 페이지이동(path)</button> &nbsp;
        <button v-on:click="movePage('params')">해당 데이터를 가지고 페이지이동(path)</button>
    </div>
</template>

<script>
/* eslint-disable */
import router from '@/router.js'
import childPage from '@/views/ChildPage.vue'

export default {
    name: 'parentPage',
    data () {
        return {
            'parentObj' : {
                'title': '',
                'content': ''
            },
            'sendObj': {
                'title': '',
                'content': ''
            },
            'moveObj': {
                'title': '',
                'content': ''
            }
        }
    },
    methods: {
        sendData () {
            this.sendObj.title = this.parentObj.title;
            this.sendObj.content = this.parentObj.content;
        },
        movePage (flag) {
            switch (flag) {
                case 'path':
                    var strParams = [
                        'paramType=query',
                        'title=' + this.moveObj.title,
                        'content=' + this.moveObj.content,
                    ].join('&');
                    router.push('next-page?' + strParams);
                    break;

                case 'params':
                    var pushObj = {
                        name : 'nextPage',
                        params: {
                            paramType: 'params',
                            title: this.moveObj.title,
                            content: this.moveObj.content
                        }
                    }
                    router.push(pushObj)
                    break;
            
                default:
                    break;
            }
        }
    },
    components: {
        childPage
    }
}
</script>

<style>
.parent-page {
    width: 650px;
    margin: 0px auto;
}
</style>
