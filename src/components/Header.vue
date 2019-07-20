<template>
  <div class="header">
    <h1>{{msg}}</h1>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
    name: 'Header',
    props: {
        msg: String
    }
}
</script>
