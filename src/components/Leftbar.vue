<template>
  <div class="leftbar">
    <div class="menu-top">
      <p>{{msg}}</p>
    </div>

    <div class="menu-list">
        <ul>
          <li>
            <a class="dep1" v-on:click="isShow1 = !isShow1">뷰(기본)</a>
            <transition 
              name="accordion"
              v-on:enter="enter"
              v-on:after-enter="afterEnter"
              v-on:leave="leave">
              <ul v-if="isShow1">
                <li><router-link to="/" >뷰 설명</router-link></li>
                <li><router-link to="/firebase-data">Firebase CRUD</router-link></li>
                <li><router-link to="/product-list">상품 리스트</router-link></li>
                <li><router-link to="/basic-directive">기본 디렉티브</router-link></li>
                <li><router-link to="/parent-page">데이터전달 컴포넌트</router-link></li>
              </ul> 
            </transition>
          </li>
        </ul>
        <ul>
          <li>
            <a class="dep1" v-on:click="isShow2 = !isShow2">페이지(링크)</a>
            <transition 
              name="accordion"
              v-on:enter="enter"
              v-on:after-enter="afterEnter"
              v-on:leave="leave">
              <ul v-if="isShow2">
                <li><router-link to="/sign-in" >회원가입</router-link></li>
                <li><router-link to="/2">ITEM02</router-link></li>
                <li><router-link to="/3">ITEM03</router-link></li>
                <li><router-link to="/4">ITEM04</router-link></li>
                <li><router-link to="/5">ITEM05</router-link></li>
                <li><router-link to="/6">ITEM06</router-link></li>
              </ul> 
            </transition>
          </li>
        </ul>
    </div>  
  </div>
</template>

<script>
/* eslint-disable */

var data = {
  'menuList': [
    {'name':'titleA', 'items':['titleA-item01','titleA-item02','titleA-item03','titleA-item04']},
    {'name':'titleB', 'items':['titleB-item01','titleB-item02','titleB-item03','titleB-item04','titleB-item05','titleB-item06']},
    {'name':'titleC', 'items':['titleC-item01','titleC-item02','titleC-item03']},
    {'name':'titleD', 'items':['titleD-item01','titleD-item02']},
    {'name':'titleE', 'items':['titleE-item01','titleE-item02','titleE-item03','titleE-item04','titleE-item05','titleE-item06','titleE-item07','titleE-item08']},
  ],
  'isShow1': true,
  'isShow2': false
}

export default {
  name: 'Leftbar',
  props: {
      msg: String
  },
  data () {
    return data;
  },
  methods: {
    enter (element) {
      console.log('enter=>', element);
      const width = getComputedStyle(element).width;
      element.style.width = width;
      element.style.position = 'absolute';
      element.style.visibility = 'hidden';
      element.style.height = 'auto';

      const height = getComputedStyle(element).height;

      element.style.width = null;
      element.style.position = null;
      element.style.visibility = null;
      element.style.height = 0;

      // Force repaint to make sure the
      // animation is triggered correctly.
      getComputedStyle(element).height;

      // Trigger the animation.
      // We use `setTimeout` because we need
      // to make sure the browser has finished
      // painting after setting the `height`
      // to `0` in the line above.
      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter (element) {
      console.log('afterEnter=>', element);
      element.style.height = 'auto';
    },
    leave (element) {
      console.log('leave=>', element);
      const height = getComputedStyle(element).height;

      element.style.height = height;

      // Force repaint to make sure the
      // animation is triggered correctly.
      getComputedStyle(element).height;

      setTimeout(() => {
        element.style.height = 0;
      });
    }
  }
}

</script>

<style scoped>
.menu-top {
  padding: 10px;
  font-weight: 800;
}
.menu-top > p:after {
  content:"";
  display: block;
  width: 170px;
  border-bottom: 1px solid black;
  margin: 10px auto 0px;
}
ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.dep1 {
  display: block;
  color: black;
  font-weight: 900;
  font-size: 22px;
  padding: 8px 16px;
  text-decoration: none;
}
li > a:not(.dep1){
  display: block;
  color: black;
  font-weight: 600;
  font-size: 15px;
  padding: 5px 16px;
  text-decoration: none;
}
li > .router-link-exact-active {
  background-color: rgba(255, 73, 73, 0.8);
  color: white;
}

/* Change the link color on hover, focus */
li > a:hover:not(.router-link-exact-active):not(.dep1) {
  background-color: rgba(255, 73, 73, 0.3);
  color: white;
}
li > a:focus {
  outline: none;
}

.accordion-enter-active, .accordion-leave-active {
  transition: height 0.2s ease;
  overflow: hidden;
}
.accordion-leave-to, .accordion-enter {
  height: 0;
}
</style>



