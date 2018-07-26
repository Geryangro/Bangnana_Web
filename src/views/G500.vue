<template>
  <div class="product">
      <div class="background_navbar dekstop_view"></div>
      <div class="content_gr">
          <navbar />
          <b-img class="imgGr mobile_view" :src="require('../assets/500mob.jpg')" fluid/>
          <b-col md="12">
              <b-row>
                  <b-col md="10" offset-md="1">
                      <div class="">
                          <div class="text-left">
                                <b-img class="imgGr dekstop_view" :src="require('../assets/g500.jpg')" fluid/>
                                <p>Gerakan 500 itu merupakan kampanye sosial yang di inisiasi 
                                oleh Bangnana Chips sebagai gerakan amal di mana setiap 
                                500 rupiah keuntungan dari 1 produk Bangnana 
                                Chips menjadi dana program sosial di Desa Quran.
                                </p>
                                <h2 class="replay tosca dekstop_view">Desa Quran itu apa sih?</h2>
                                <h2 class="replay tosca mobile_view text-center dq">Desa Quran itu apa sih?</h2>
                                <br>
                                <p>
                                Desa Qur’an adalah desa binaan yang terletak di Rawakalong, Gunung Sindur, Bogor. 
                                Apa saja yang dibina? Yang dibina adalah sumber daya manusianya agar dapat 
                                berkembang di bidang ekonomi, pendidikan, dan kesehatan. 
                                Apa saja sih pogram Desa Quran? Kamu bisa cek langsung di webnya.
                                </p>
                            </div>                            
                            <b-button href="https://desaquran.org/" class="btn-desa replay">
                                desaquran.org
                            </b-button>
                            <div class="text-left">
                                <p>
                                Banyak program bermanfaat untuk membantu sesama. Kamu udah kece jualan Bangnana Chips ditambah juga 
                                kamu secara tidak langsung beramal untuk memberdayakan saudara-saudara kita di Desa Quran.   
                                </p>
                                <p>
                                Bagaimana sih perasaan kamu? Pasti luar biasa kan. Ayo buruan gabung dengan kami sebagai agen kebaikan.    
                                </p>
                            </div>
                      </div>
                      
                  </b-col>
              </b-row>
          </b-col>
      </div>
      <footbar />
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import footbar from '@/components/footbar.vue'

export default {
  name: 'product',
  components: {
      navbar,
      footbar
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
p {
    font-size: 24px;
}
.background_navbar {
    background-color: #B0AE37;
    padding: 10px 0px;
    height: 85px;
    position: absolute;
    width: 100%;
}
.content_gr {
    background-color: #FEFCED;
    padding: 10px 0px;
}
.imgGr {
    margin-top: 50px;
    margin-bottom: 20px;
}
.btn-desa {
    background-color: #FDAD1A;
    color: #ffffff;
    padding: 8px 50px;
    border: none;
    border-radius: 40px;
    text-align: center !important;
    font-size: 25px;
    margin: 30px 0px 40px;
}
@media screen and (max-width: 768px) {
    .content_gr {
        padding: 20px 0px;
    }
    .imgGr {
        margin-bottom: 30px;
        margin-top: -75px;
    }
    p {
        font-size: 18px;
    }
    .dq {
        font-size: 20px;
    }
}
</style>
