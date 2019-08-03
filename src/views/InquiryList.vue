<template>
    <div>
        <h2 v-on:click="getList">1:1문의하기</h2>
        <table>
            <thead>
                <tr>
                    <th style="width:40px;">No.</th>
                    <th style="width:400px;">제목</th>
                    <th style="width:310px;">작성일자</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data, index) in dataList" v-bind:key="index">
                    <td class="ct">{{ index + 1 }}</td>
                    <td class="lt">{{ data.title }}</td>
                    <td class="lt">{{ data.createDt }}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
/* eslint-disable */
import firebase from 'firebase'
import { dateFormat } from '@/js/utils/dateUtil.js'
// import { isEmpty } from '@/js/common.js'

var db = firebase.firestore()

export default {
    name: 'inquiryList',
    data () {
        return {
            'dataList' : null
        }
    }, 
    methods: {
        getList () {
            
            db.collection('test-kimjungmin/board/inquiry')
            .get().then((querySnapshot) => {
                const arr = [];
                querySnapshot.forEach((doc) => {
                    const d = doc.data()
                    d.createDt = dateFormat(d.createDt.toDate(), '.')
                    d.id = doc.id
                    arr.push(d)
                })
                this.dataList = arr
            })
            
        }
    },
    activated () {
        console.log("activated start!");
    }

}

</script>

<style scoped>
table {margin: 20px auto;}
thead th{text-align: center;}
table tr{border-bottom: 1px solid black;}
</style>


