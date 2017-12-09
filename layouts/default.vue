<template>
  <div>
    <nuxt/>
  </div>
</template>
<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
}
#__nuxt {
  position: relative;
  top: 60px;
  height: calc( 100% - 60px);
  > div {
    height: 100%;
  }
}
.next_link {
  margin-top: 30px;
  a {
    display: block;
    border-radius: 4px;
    background: #e27a7a;
    color: #fff;
    padding-top: 20px;
    height: 60px;
    text-decoration: none;
  }
}

.container {
  padding: 0 !important;
  &.content_page {
    width: 100%;
    height: 100%;
  }
  .app_container {
    display: flex;
    width: 100%;
    height: 100%;
    h2 {
      margin: 0 0 20px 0;
    }
    .sidebar {
      width: 20%;
      padding: 20px;
      border-right: #666 solid 1px;
    }
    .main_content {
      width: 80%;
      height: 100%;
      overflow: auto;
      padding: 20px;
    }
  }
  .orange_btn {
    margin-bottom: 10px;
  }
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
