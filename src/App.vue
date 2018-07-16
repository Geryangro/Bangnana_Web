<template>
  <div id="app">
    <b-container fluid class="nopadding">
      <router-view/>
    </b-container>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
  </div>
</template>

<script>
export default {
  
}
</script>


<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
.nomargin {
  margin 0px !important
}
.nopadding
  padding 0px !important

.navbar-col {
  z-index 5
  margin-bottom -83px;
}
@font-face {
  font-family: 'replay';
  src: url('assets/font/replay.otf');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'whale';
  src: url('assets/font/whale.otf');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'roboto';
  src: url('assets/font/roboto.ttf');
  font-weight: normal;
  font-style: normal;
}
.white {
  color #ffffff;
}
.tosca {
  color #18ADB1;
}
.roboto {
  font-family: 'roboto';
}
.replay {
  font-family: 'replay'; 
}
.whale {
  font-family: 'whale';
}
.mobile_view {
  display: none;
}
@media screen and (max-width: 768px) {
  .dekstop_view {
    display: none;
  }
  .mobile_view {
    display :block;
  }
}
</style>
