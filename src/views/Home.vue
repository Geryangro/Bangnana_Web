<template>
  <div class="home">
    <div class="background-home">
        <navbar />
        <b-img class="imgcenter" :src="require('../assets/centerlogo.png')" fluid/>
        <b-img @click="goto('check')" class="arrow" :src="require('../assets/panah-mid.png')" fluid center/>
    </div>
    <b-col md="12" id="check" class="content">
        <b-col md="10" offset-md="1" class="dekstop_view">
            <div class="content_shadow">
                <b-row>
                    <b-col md="7">
                        <div class="content_col">
                            <p class="whale title_content blue text-left">APA SIH BANGNANA?</p>
                            <p>Bangnana Chips, sebuah brand keripik pisang, buatan asli Indonesia.
                                Bangnana Chips memanfaatkan hasil panen petani pisang lokal di daerah 
                                Jawa Barat sebagai bahan baku utamanya, dan dalam proses produksinya 
                                mempekerjakan masyarakat sekitar untuk menghasilkan keripik pisang 
                                berkualitas dengan peralatan produksi standard food grade sehingga aman untuk dikonsumsi masyarakat.
                            </p>
                        </div>
                    </b-col>
                    <b-col md="5">
                        <b-img class="" :src="require('../assets/model.png')" fluid/>
                    </b-col>
                </b-row>
            </div>
        </b-col>
        <b-col class="mobile_view nopadding" cols="12">
            <div class="content_blue">
                <p class="whale title_content white text-center">APA SIH BANGNANA?</p>
                            <p class="white mobile_content">Bangnana Chips, sebuah brand keripik pisang, buatan asli Indonesia.
                                Bangnana Chips tanpa MSG aman dikonsumsi oleh seluruh kalangan.
                                Mempunyai standard Food Grade produksi dan telah memperoleh izin edar.
                            </p>
            </div>
        </b-col>
        <b-col md="10" offset-md="1">
            <div class="content_col_2">
                <p class="whale blue title_content">APA YANG BANGNANA SUGUHKAN <br> 
                UNTUK MENEMANI HARI KITA ?
                </p>
            </div>
            <b-row>
                <b-col class="description_logo" md="6" v-for="(logo,index) in logoTxt" :key="index">
                    <b-row>
                        <b-col cols="4" md="4">
                            <b-img class="img_logo" :src="logo.image"/>
                        </b-col>
                        <b-col cols="8" md="8">
                            <div class="text-left">
                                <p class="title_logo nomargin">{{logo.title}}</p>
                                <p class="description_logo">{{logo.description}}</p>
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-col>
        <div class="mobile_view">
            <p class="whale blue title_background_blue">Bangnana Siap Bikin Mood <br>
                Kamu Balik Lagi!</p>
            <router-link to="/product">
                <b-button class="replay btn_detail">
                DETAIL PRODUK
            </b-button>
            </router-link>
        </div>
        <b-img :src="require('../assets/model_2.png')" fluid/>
    </b-col>
    <b-col md="12" class="nopadding dekstop_view">
        <div class="background_button">
            <p class="whale white title_background_blue">Bangnana Siap Bikin Mood <br>
                Kamu Balik Lagi!
            </p>
            <router-link to="/product">
                <b-button class="replay btn_detail">
                DETAIL PRODUK
            </b-button>
            </router-link>
            
        </div>
    </b-col>
    <footbar />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Beranda from '@/components/Beranda.vue'
import navbar from '@/components/navbar.vue'
import footbar from '@/components/footbar.vue'
import axios from 'axios'

export default {
    name: 'home',
    components: {
        Beranda,
        navbar,
        footbar
    },
    data () {
      return {
        logoTxt: [],
      }
    },
    created: function() {
        this.loadDataLogo();
    },
    methods: {
        goto() {
        var element = document.getElementById("check");
        element.scrollIntoView({behavior: "smooth", block: "start"});
        // var element = document.querySelector('#'+refName);
        // var rect = element.getBoundingClientRect();
        // $('html, body').animate(
        //     {scrollTop: rect.top + window.pageYOffset - 20},
        // 1000);
    },
        loadDataLogo:function(){
            var self = this;
            axios.get('logo.json')
            .then(function(response){
                self.logoTxt = response.data.result.data;
            })
            .catch(function(error){
                self.logoTxt = "error" + error;
            })
        },
    }
}
</script>

<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}
  
a {
    color: #42b983;
}
.blue {
    color: #2C9FB1;
}
.arrow {
  animation: flow 1.5s ease-in-out infinite;
}

@keyframes flow {
   0% {

    -webkit-transform: translatey(0px);
            transform: translatey(0px);
  }
  50% {

    -webkit-transform: translatey(-20px);
            transform: translatey(-20px);
  }
  100% {

    -webkit-transform: translatey(0px);
            transform: translatey(0px);
  }
}
.background-home {
    padding: 10px 0px;
    background-image: url("../assets/desktop.jpg");
    background-size: cover;
    height: 100%; 
}
.brand {
    padding: 0px 40px;
}
img.brandlogo {
    width: 110px;
    height: 50px;
}
.nav-link {
    color: #ffffff !important;
}
.imgcenter {
  margin: 80px 0px 50px;
}
.arrow {
    margin: 40px 0px;
}
.content {
    padding: 50px 0px 0px;
    background-color: #FEFCED;
}
.content_col {
    padding: 10px 40px;
    text-align: left;
}
.content_col > p {
    font-size: 20px;
}
.content_shadow {
    background-color: #ffffff;
    padding: 40px 20px 0px;
    box-shadow:  0px 7px 4px 5px rgba(173,168,173,0.51);
    border-radius: 10px;
}
.title_content {
    font-size: 50px !important;
    margin: 0px;
}
.content_col_2 {
    padding: 50px 0px;
}
.description_logo {
    margin-top: 10px;
    margin-bottom: 10px;
}
.title_logo {
    font-weight: 700;
    font-size: 22px;
}
.background_button {
    background-image: url("../assets/background_blue.jpg");
    background-size: 100% 100%;
    height: 100%; 
    padding: 90px 0px 80px;
}
.title_background_blue {
    font-size: 38px;
}
.btn_detail {
    padding: 8px 55px;
    background-color: #ffffff;
    color: #31A0B1;
    font-size: 25px;
    border-radius: 20px;
    margin: 30px 0px;
    border: none;
}
@media screen and (max-width: 768px) {
    .background-home {
        padding: 10px 0px;
        background-image: url("../assets/mobile.png");
        background-size: cover;
        height: 100%; 
        z-index: 2;
        position: sticky;
    }
    .imgcenter {
        width: 200px;
    }
    .arrow {
        width: 25px;
    }
    .content {
        padding-top: 0px;
    }
    .content_blue {
        background-color: #31A0B1;
        padding: 55px 30px 15px;
        margin-top: -50px;
        z-index: 1;
    }
    .title_content {
        font-size: 20px !important;
    }
    .mobile_content {
        font-size: 14px;
    }
    .content_col_2 {
        padding: 20px 0px;
    }
    .img_logo {
        width: 70px;
    }
    .title_logo {
        font-size: 20px;
    }
    .description_logo {
        font-size: 14px;
        margin-top: 0px;
    }
    .title_background_blue {
        font-size: 24px;
    }
    .btn_detail{
        padding: 8px 20px;
        background-color: #F2AC29;
        color: #ffffff;
        border-radius: 30px;
        font-size: 20px;
        margin: 10px 0px 20px;
    }
}
</style>
