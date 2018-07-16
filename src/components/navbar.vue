<template>
  <div class="navbar">
    
        <b-navbar toggleable="md" type="dark" class="nav">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand class="brand" href="#">
                <b-img class="brandlogo" :src="require('../assets/brandlogo.png')" fluid/>
            </b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">

                    <b-nav-item href="/"><span class="nav_title">BERANDA</span></b-nav-item>
                    <b-nav-item href="/product"><span class="nav_title">PRODUK</span></b-nav-item>
                    <b-nav-item href="/g500"><span class="nav_title">GERAKAN 500</span></b-nav-item>
                    <!-- <b-nav-item href="#"><span class="nav_title">BELI PRODUK</span></b-nav-item> -->
                    <b-nav-item href="https://agenbangnana.com/"><span class="nav_title">MENJADI AGEN</span></b-nav-item>
                    
                    <b-nav-item href="/jadireseller"><span class="nav_title">MENJADI RESELLER</span></b-nav-item>

                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    
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
    display: inline-block;
    margin: 0 10px;
}
  

a {
    color: #42b983;
}
.brand {
    padding: 0px 40px;
    margin: 0px;
}
img.brandlogo {
    width: 110px;
    height: 50px;
    display: block;
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
}
</style>
