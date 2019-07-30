<template>
    <div class="signin">
        <div>
            <h2>회원가입</h2>
            <div class="member-info">
                <table>
                    <tr>
                        <td>이메일</td>
                        <td><input type="text" name="" id=""></td>
                    </tr>
                    <tr>
                        <td>비밀번호</td>
                        <td><input type="text" name="" id=""></td>
                    </tr>
                    <tr>
                        <td>비밀번호확인</td>
                        <td><input type="text" name="" id=""></td>
                    </tr>
                    <tr>
                        <td>이름</td>
                        <td><input type="text" name="" id=""></td>
                    </tr>
                    <tr>
                        <td>휴대폰번호</td>
                        <td><input type="text" name="" id=""></td>
                    </tr>
                    <tr>
                        <td>생년월일</td>
                        <td><input type="text" name="" id=""></td>
                    </tr>
                    <tr>
                        <td>성별</td>
                        <td>
                            <input type="radio" name="gender" id="m" value="1"><label for="m">남자</label>
                            <input type="radio" name="gender" id="f" value="2"><label for="f">여자</label>
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
