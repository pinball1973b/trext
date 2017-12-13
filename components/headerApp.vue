<template>
  <header>
    <div class="logo_box">
      <LogoHeader/>
    </div>
    <h1>trexut</h1>
  </header>
</template>
<script>
import LogoHeader from '~/components/LogoHeader.vue'

export default {
  components: {
    LogoHeader
  }
}
</script>
<style>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #eee;
}
header h1 {
  font-size: 28px;
  letter-spacing: 2px;
  position: absolute;
  left: 110px;
  top: 5px;
  font-weight: 800;
  color: #666;
  text-align: left;
  padding: 10px;
  margin: 0;
}
.logo_box {
  position: absolute;
  top: 5px;
  left: 5px;
  height: 60px;
  width: 82px;
}
.logo_box .VueToNuxtLogo {
  position: absolute;
  top: 0;
  left: 0;
}

</style>
