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
  background-color: rgb(255, 73, 73);
  color: white;
}

/* Change the link color on hover, focus */
li > a:hover {
  background-color: rgb(255, 73, 73);
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
