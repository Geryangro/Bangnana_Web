<template>
    <b-container class="" fluid >
        <div class="dekstop_view">
            <b-row class="">
                <b-col md="4" class="logo">
                    <a href="/">
                        <b-img class="brandlogo" :src="require('../assets/brandlogo.png')" fluid/>
                    </a>
                
                </b-col>
                <b-col md="8" class="nav">
                    <div class="navCol">
                        <ul class="navMenu">
                        <a href="/"><li>BERANDA</li></a>
                        <a href="/product"><li>PRODUK</li></a>
                        <a href="/g500"><li>GERAKAN 500</li></a>
                        <a href="https://agenbangnana.com/"><li>MENJADI AGEN</li></a>
                        <a href="/jadireseller"><li>BELI PRODUK</li></a>
                        <a href="/playroom"><li>PLAY ROOM</li></a>
                        </ul>
                    </div>
                </b-col>
            </b-row>
    
        </div>
        <div class="mobile_view"  >
            <b-row>
                <b-col cols="12">
                    <div @click="toggleOpen">
                        <b-img class="logoMobile" :src="require('../assets/Icon Menu.png')" />
                    </div>
                </b-col>
            </b-row>
            <div @click="toggleClose" class="toggleMenu">
                <div class="sideMenu">
                    <b-img class="bannerMob" :src="require('../assets/bannerBang.jpg')"/>
                    <ul class="mob">
                        <a href="/"><li><b-img class="iconMob" :src="require('../assets/icon1.png')"/> BERANDA</li></a>
                        <a href="/product"><li><b-img class="iconMob" :src="require('../assets/icon2.png')"/> PRODUK</li></a>
                        <a href="/g500"><li><b-img class="iconMob" :src="require('../assets/icon3.png')"/> GERAKAN 500</li></a>
                        <a href="https://agenbangnana.com/"><li><b-img class="iconMob" :src="require('../assets/icon4.png')"/> MENJADI AGEN</li></a>
                        <a href="/jadireseller"><li><b-img class="iconMob" :src="require('../assets/icon6.png')"/> BELI PRODUK</li></a>
                        <a href="/playroom"><li><b-img class="iconMob" :src="require('../assets/icon7.png')"/> PLAY ROOM</li></a>
                    </ul>
                </div>
            </div>
        </div>  
    </b-container>
</template>

<script>
export default {
  name: 'navbar',
  data(){
      return {
          openMenu: false,
      }
  },
  methods: {
      toggleOpen: function(){
          var side = document.getElementsByClassName('toggleMenu')[0];
          side.classList.add('menuView');
      },
      toggleClose: function(e){
          var menu = document.getElementsByClassName('toggleMenu')[0];
          if(e.target == menu ){
              menu.classList.remove('menuView');
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
    
}
.nav {
    background-color: #AFAE38;
    border-radius: 30px 0px 0px 30px;
}
.navCol{
    padding: 5px 0px 5px 30px;
}
ul.navMenu {
    padding: 12px 0px 10px;
    margin: 0px;
    list-style-type: none;
}
.navMenu li {
    display: inline;
    padding: 0px 25px;
}
a {
    color: #ffffff;
    font-size: 15px;
}
a:hover {
    text-decoration: none;
    font-size: 15px;
    color: #000;
}
.brand {
    padding: 0px 40px;
    margin: 0px;
}
img.brandlogo {
    width: 110px;
    height: 50px;
    display: block;
    margin: 10px 0px 0px 35px;
}
.nav {
    width: 100%;
}
/* .nav-item:hover {
    color: #ffffff;
    background-color: #ffffff;
} */
.nav-link {
    color: #ffffff !important;
    font-size: 16px;
    font-weight: 500;
    padding: 10px 30px;
}
/* .nav-link:hover {
    color: #AFAE38 !important;
} */
.navbar-nav {
    background-color: #AFAE38;
    border-radius: 40px 40px 40px 40px;
    padding: 0px 20px;
}
span.nav_title {
    font-size: 19px;
    padding: 5px 0px;
}
#nav_collapse > ul > li > a > span:hover {
    color: #000;
    background-color: #AFAE38;
    /* border-bottom: 2px solid #ffffff; */
}
@media screen and (max-width: 768px) {
    .navbar-nav {
        background: hsla(0,0%,100%,.1);
        padding: 0 10px;
        border-radius: 10px;
        margin-top: 10px;
    }
    .logoMobile {
        width: 35px;
        height: 35px;
        float: left;
        margin-top: 10px;
        margin-left: 10px;
        margin-bottom: 10px;
    }
    .toggleMenu {
        display: block;
        height: 100%;
        top: 0;
        position: fixed;
        left: 0;
        margin: auto;
        width: 100%;
        z-index: 10;
        transform: translateX(-100%);
        transition: transform 0.3s ease-in-out;        
    }
    .menuView {
        transform: translateX(0);
    }
    .menuClose {
        transform: translateX(-100%);
    }
    .sideMenu {
        background-color: #ffffff;
        width: 260px;
        height: 100%;
        box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.5);
        z-index: 40;
    }
    .bannerMob {
        width: 260px;
        height: 200px;
    }
    ul.mob {
        background-color: #34495e;
        height: 100%;
        text-align: left;
        list-style-type: none;
        padding-top: 10px;
        padding-left: 0px;
    }
    .mob li {
        padding: 7px 0px 7px 15px;
        font-size: 16px;
    }
    .iconMob {
        width: 20px;
        margin-right: 10px;
    }
}
</style>
