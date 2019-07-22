<template>
  <div class="leftbar">
    <div class="menu-top">
      <p>{{msg}}</p>
    </div>

    <div class="menu-list">
        <ul>
          <li><router-link to="/">HOME</router-link></li>
          <li><router-link to="/about">ABOUT</router-link></li>
          <li><router-link to="/sign-in">SIGN IN</router-link></li>
          <li><router-link to="/firebase-data">FIREBASE DATA</router-link></li>
          <li><router-link to="/firebase-data1">FIREBASE TEST1</router-link></li>
          <li><router-link to="/firebase-data2">FIREBASE TEST2</router-link></li>
          <li><router-link to="/firebase-data3">FIREBASE TEST3</router-link></li>
          <li><router-link to="/firebase-data4">FIREBASE TEST4</router-link></li>
          <li><router-link to="/firebase-data5">FIREBASE TEST5</router-link></li>
          <li><router-link to="/firebase-data6">FIREBASE TEST6</router-link></li>
        </ul>
    </div>
  </div>
</template>

<style scoped>
.menu-top {
  padding: 10px;
  font-weight: 800;
  font-size: 22px;
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
li > a{
  display: block;
  color: black;
  font-weight: 600;
  padding: 8px 16px;
  text-decoration: none;
}
li > .router-link-exact-active {
  background-color: rgba(255, 73, 73, 0.8);
  color: white;
}

/* Change the link color on hover, focus */
li > a:hover:not(.router-link-exact-active) {
  background-color: rgba(255, 73, 73, 0.3);
  color: white;
}
li > a:focus {
  outline: none;
}
</style>


<script>
/* eslint-disable */
export default {
    name: 'Leftbar',
    props: {
        msg: String
    }
}

</script>
