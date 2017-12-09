<template>
  <div id="sidebarApp" class="sidebar_app">
    <ul class="agenda_list sidebar_list">
      <li v-for="item in $store.state.items"><nuxt-link :to="contentUri(item.uri)">{{item.list}}</nuxt-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    contentUri (uri) {
      return `/${uri}`
    }
  }
}
</script>
<style lang="scss">
.sidebar_list{
  padding: 0;
   li {
     list-style: none;
     margin-bottom: 10px;
   }
 }
</style>
