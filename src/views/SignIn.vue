<template>
    <div class="signin">
        <div>
            <h4>참고문서</h4>
            <p>https://firebase.google.com/docs/firestore/quickstart?hl=ko</p>
        </div>

        <div>
            <h2>회원가입</h2>
            <span>NAME: </span><input type="text" v-model="user.name">
            <span>EMAIL: </span><input type="text" v-model="user.email"> 
            <button v-on:click="addUserData">등록</button>
        </div>

        <div>
            <h2>회원목록</h2>
            <button v-on:click="getUserList">조회</button>
            <ul>
                <li v-for="(u, index) in userList" v-bind:key="index">{{ u.name }}: {{ u.email }}</li>
            </ul>

        </div>
    </div>
</template>

<style scoped>
.signin {
    padding-top: 20px;
    text-align: center;
}
.signin > div {
    margin-bottom: 50px;
}
button {
    margin: 0px 5px;
}
</style>


<script>
/* eslint-disable no-console */ 
import firebase from 'firebase'

var db = firebase.firestore();
var data = {
    user: {
        'name': '',
        'email': ''
    },
    userList: [],
}

export default {
    name: 'SignIn',
    data () {
        return data;
    },
    methods: {
        // 사용자정보 등록
        addUserData () {
            var user = this.user;

            db.collection('users').add(this.user)
            .then(() => {
                user.name = '';
                user.email = '';
            })
            .catch((error) => {
                console.log("error=>", error);
            })
        },
        // 사용자 목록 조회
        getUserList () {
            let userList = [];

            db.collection('users').get()
            .then((rtnObj) => {
                if(rtnObj.empty) {
                    console.log("데이터 없음.");
                    return;
                }
                rtnObj.forEach(doc => {
                    console.log(doc.id, '=>', doc.data())
                    userList.push(doc.data())
                });
            })
            
            this.userList = userList;
        }
    }
}
</script>
