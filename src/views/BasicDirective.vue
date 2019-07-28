<template>
  <div class="basic-directive" v-cloak>
    <h2>기본 디렉티브 연습</h2>
    <hr>
    <div>
      <h3>1. v-text</h3>
      <p>이름: <span>{{ user.name }}</span></p> 
      <p>나이: <span v-text="user.age"></span></p>
    </div>
    <div>
      <h3>2. v-html</h3>
      <p>{{ title }}</p> 
      <p v-html="title"></p>
    </div>
    <div>
      <h3>3. v-show</h3>
      <input type="checkbox" v-on:click="isShow = !isShow">
      &nbsp;<span>checkbox value = {{ isShow }}</span>
      <p v-show="isShow">show OR hide</p>
    </div>
    <div>
      <h3>4. v-if</h3>
      <input type="text" v-model="num" placeholder="숫자를 입력해주세요.">
      <div v-if="num != ''">
        <p v-if="num > 5">value가 숫자 5보다 크다.</p>
        <p v-if="num < 5">value가 숫자 5보다 작다.</p>
        <p v-if="num == 5">value가 숫자 5보다 같다.</p>
      </div>
    </div>
    <div>
      <h3>5. v-pre</h3>
      <p v-pre> {{ name }} </p>
      <p v-pre> {{ v-pre는 렌더링이 없음. }} </p>
    </div>
    <div>
      <h3>6. v-cloak</h3>
      <p>자바스크립트가 실행전일때, 깜박이는 형상 방지(css도 추가함.)</p>
    </div>
    <div>
      <h3>7. v-once</h3>
      <p>한번만 실행이 됩니다.</p>
    </div>



  </div>
  
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      'user': {
        'name':'김정민',
        'age':'31'
      },
      'title':'<h2>제목입니다.</h2>',
      'isShow':true,
      'num': '',
    };
  },
  methods: {

  }
}
</script>

<style>
.basic-directive > div {
  border-bottom: 1px solid rgba(154, 154, 154, 1);
  padding-bottom:5px;
}
[v-cloak] {
  display: none;
}
</style>
