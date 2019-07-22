<template>
    <div class="signin">
        <h2>회원가입</h2>

        <div>
            ID: <input type="text" v-model="userId">
            PW: <input type="text" v-model="userPw"> 
            <button v-on:click="sendUserData">회원가입</button>
        </div>
    </div>
</template>

<style scoped>
.signin {
    padding-top: 20px;
    text-align: center;
}
.signin > div {
    margin-top: 20px;
}
button {
    margin: 0px 5px;
}
</style>


<script>
/* eslint-disable no-console */ 


var data = {
    'userId' : '',
    'userPw' : ''
}
export default {
    name: 'SignIn',
    data () {
        return data;
    },
    methods: {
        sendUserData () {
            console.log(this);
            console.log(this.userId, this.userPw);
        }
    }
}
</script>
