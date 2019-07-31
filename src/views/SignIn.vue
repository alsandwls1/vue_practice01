<template>
    <div class="signin">
        <div>
            <h2>회원가입</h2>
            <div class="member-info">
                <table>
                    <tr>
                        <td>이메일</td>
                        <td>
                            <input type="text" v-model="userInfo.email">
                            <span class="error" v-show="error.email">이메일을 입력해주세요</span>
                        </td>
                    </tr>
                    <tr>
                        <td>비밀번호</td>
                        <td><input type="text" v-model="userInfo.password"></td>
                    </tr>
                    <tr>
                        <td>비밀번호확인</td>
                        <td>
                            <input type="text" v-model="confirmPw">
                            <span class="error" v-show="error.confirmPw">일치하지 않는 비밀번호입니다. 확인해주세요.</span>
                        </td>
                    </tr>
                    <tr>
                        <td>이름</td>
                        <td><input type="text" v-model="userInfo.name"></td>
                    </tr>
                    <tr>
                        <td>휴대폰번호</td>
                        <td><input type="text" v-model="userInfo.phone"></td>
                    </tr>
                    <tr>
                        <td>생년월일</td>
                        <td><input type="text" v-model="userInfo.birth"></td>
                    </tr>
                    <tr>
                        <td>성별</td>
                        <td>
                            <input type="radio" v-model="userInfo.gender" id="m" value="1"><label for="m">남자</label>
                            <input type="radio" v-model="userInfo.gender" id="f" value="2"><label for="f">여자</label>
                        </td>
                    </tr>
                </table>
            </div>
            <button class="btn-send" v-on:click="addUserData">등록</button>
        </div>
    </div>
</template>

<style scoped>
.signin {
    width: 500px;
    margin: 0px auto;
    padding-top: 20px;
    text-align: center;
}
.member-info {
    margin-top: 30px;
    /* border: 1px solid rgb(153, 153, 153); */
    /* background-color: #fff; */
}
td {
    padding: 15px 13px;
    width: 400px;
    text-align: left;
    border: 1px solid rgb(153, 153, 153);
}

.btn-send {
    margin-top: 20px;
    float: right;
}
.error {
    color: red;
}
</style>


<script>
/* eslint-disable */ 
import firebase from 'firebase'
import {isEmpty} from '@/js/common.js'  

var db = firebase.firestore();
var data = {
    confirmPw:'',
    userInfo : {
        'email':'',
        'password':'',
        'name':'',
        'phone':'',
        'birth':'',
        'gender':'1',
    },
    error: {
        'email': false,
        'pw': false,
        'confirmPw': false,
        'name': false,
        'phone': false,
        'birth': false
    }
}

export default {
    name: 'SignIn',
    data () {
        return data;
    },
    methods: {
        
        
        // 사용자정보 등록
        addUserData () {
            var info = this.userInfo;
            db.collection('test-kimjungmin/member/member')
                .doc()
                .set(info, {merge:true})
                .then((r) => {
                    console.log(r)
                })
                .catch(e => {
                    alert('error=>', e)
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
