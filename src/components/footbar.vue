<template>
  <div class="footer text-left">
    <b-col class="dekstop_view" md="12">
        <b-row>
            <b-col md="6">
                <p class="white title_footbar">ABOUT US</p>
                <hr class="white_short">
                <p class="white footbar_description">
                    Brand keripik pisang yang nikmatnya berlimpah. Bangnana Chips memanfaatkan hasil panen petani pisang 
                    lokal di daerah Jawa Barat sebagai bahan baku utamanya. Bangnana Chips tanpa MSG aman dikonsumsi 
                    oleh seluruh kalangan. Mempunyai standard Food Grade produksi dan telah memperoleh izin edar.
                </p>
                <div class="medsos">
                    <ul>
                        <a href="https://www.facebook.com/bangnanachips.bangnanachips">
                            <li class="medsos_logo"><b-img :src="require('../assets/medsoc_fb.png')"/></li>
                        </a>
                        <a href="https://twitter.com/bangnanachips?lang=en">
                            <li class="medsos_logo"><b-img :src="require('../assets/medsoc_twit.png')"/></li>
                        </a>
                        <a href="https://www.instagram.com/bangnanachips/">
                            <li class="medsos_logo"><b-img :src="require('../assets/medsoc_ig.png')"/></li>
                        </a>
                        <li class="medsos_logo">www.bangnanachips.com</li>
                    </ul>
                </div>
            </b-col>
            <b-col md="6">
                <div class="contact">
                    <p class="white title_footbar">CONTACT</p>
                    <hr class="white_short">
                    <p>
                        <ul>
                            <a href="/">
                                <li>Beranda</li>
                            </a>
                            <a href="/product">
                                <li>Produk</li>
                            </a>
                            <a href="/g500">
                                <li>Gerakan 500</li>
                            </a>
                            <a href="https://agenbangnana.com/">
                                <li>Menjadi Agen</li>
                            </a>
                            <a href="/jadireseller">
                                <li>Beli Produk</li>
                            </a>
                        </ul>
                    </p>
                </div>
            </b-col>
        </b-row>
    </b-col>
    <b-col class="mobile_view">
        <p class="white copyright nomargin">© 2018 PT. Afra Insan Amanah. All Right Reserved.</p>
    </b-col>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    msg: String
  }
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
    margin: 0px;
    font-size: 22px;
    color: #ffffff;
    cursor: pointer;
}
a {
    color: #42b983;
}
a:hover {
    text-decoration: none;
}
.footer {
    background-color: #B0AE37;
    padding: 40px 30px;
}
.title_footbar {
    font-size: 26px;
    font-weight: 700;
}
.footbar_description {
    font-size: 18px;
}
.white_short {
    border-top: 4px solid #ffffff;
    width: 10%;
    margin-left: 0px;
    margin-bottom: 25px;
}
.contact {
    margin-left:200px;
}
.medsos {
    margin-top: 20px;
}
.medsos_logo {
    display: inline-block;
    margin-right: 30px;
}
@media screen and (max-width: 768px) {
    .footer {
        padding: 20px 0px;
    }
    .copyright {
        font-size: 12px;
        text-align: center;
    }
}
</style>
