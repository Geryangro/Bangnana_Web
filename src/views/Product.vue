<template>
  <div class="product">
      <div class="background_product">
          <navbar />
      </div>
      <div class="content_product">
          <b-col md="12">
            <b-row>
              <b-col md="4" class="description_product" v-for="(product,index) in productModel" :key="index">
                  <b-img :src="product.image"/>
                  <p class="tosca replay title_product">{{product.title}}</p>
                  <p class="roboto sub_description_product text-left">{{product.description}}</p>
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
import axios from 'axios'

export default {
  name: 'product',
  components: {
      navbar,
      footbar
  },
  props: {
    msg: String
  },
  data () {
      return {
        productModel: [],
      }
    },
    created: function() {
        this.loadDataLogo();
    },
    methods: {
        loadDataLogo:function(){
            var self = this;
            axios.get('productModel.json')
            .then(function(response){
                self.productModel = response.data.result.data;
            })
            .catch(function(error){
                self.productModel = "error" + error;
            })
        },
        
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
.background_product {
    background-color: #000;
    padding: 10px 0px;
    background-image: url("../assets/banner_produk.jpg");
    background-size: cover;
    height: 383px;
}
.content_product {
    background-color: #FEFCED;
    padding: 40px 0px;
}
.description_product {
    margin-top: 40px;
    margin-bottom: 40px;
}
.title_product {
    font-size: 30px;
    margin: 20px 0px;
}
.sub_description_product {
    padding: 0px 20px;
}
@media screen and (max-width: 768px) {
    .background_product {
        background-image: url("../assets/reseller.jpg");
        background-size: 100% 100%;
        height: 200px;
        margin-left: -1px;
    }
}
</style>
