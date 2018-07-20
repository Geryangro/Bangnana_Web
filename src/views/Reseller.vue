<template>
  <div class="reseller">
      <div class="background_navbar">
          <navbar />
      </div>
      <div class="content_gr">
          <b-img class="imgGr dekstop_view" :src="require('../assets/beliProduct.jpg')" fluid/>
          <b-img class="imgGr mobile_view" :src="require('../assets/beliProduct_mob.jpg')" fluid/>
          <b-col md="12" class="">

                <h2 class="replay tosca text-center">Dimana lokasi anda?</h2>
                <p class="textTitle">
                    Kami akan carikan Agen terdekat di kota anda
                </p>
                <b-row >
                    <b-col md="10" offset-md="1">
                        <div class="" v-if="locationFailed">
                             <span class="text-warning">
                                Browser gagal menemukan lokasi Anda, silakan pilih lokasi anda melalu form di bawah
                            </span>
                            <P class="title">Provinsi :</P>
                            <b-form-select v-model="select_prov" :options="option_prov" class="mb-3" />
                            <div v-if="city" >
                                <p class="title">Kota / Kabupaten :</p>
                                <b-form-select  v-model="select_city" :options="option_city" class="mb-3" />
                            </div>
                            <div v-if="district">
                                <p class="title">Kecamatan</p>
                                <b-form-select  v-model="select_kec" :options="option_kec" class="mb-3" />
                            </div>
                            <template slot="first">
                                <!-- this slot appears above the options from 'options' prop -->
                                <option :value="null" disabled>Provinsi</option>
                            </template>
                            <b-button @click="findAgen" class="findAgen">
                                Cari Agen
                            </b-button>
                        </div>
                        <div v-if="locationLoaded">
                        {{location.province_name}}, {{location.city_name}}, {{location.district_name}}
                        </div>
                        <b-row>
                            <agen v-for="(agen) in nearAgen" :key="agen.user_id" cols="12" md="4" :agen="agen" />
                        </b-row>
                        <loading v-if="loading" :text="loadingText"/>
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
import agen from '@/components/agen.vue'
import Loading from '@/components/LoadingComponent.vue'

import google from 'vue2-google-maps'
export default {
  name: 'reseller',
  components: {
      navbar,
      footbar,
      agen,
      Loading
  },
  data() {
      return {
      select_prov: null,
      option_prov: [
          { value: null, text: 'Pilih Provinsi' },
      ],
      select_city: null,
      option_city: [
        { value: null, text: 'Pilih Kota / Kotamadya' },
      ],
      select_kec: null,
      option_kec: [
        { value: null, text: 'Pilih Kecamatan' },
      ],
      loading : false,
      city: false,
      district: false,
       nearAgen: [],
       location: {},
       locationLoaded : false,
       locationFailed : false,
       loadingText: "Sedang Memuat"
    }
  },
  watch:{
      select_prov:function(){
          this.city = true;
          this.loading = true;
          this.dataCityAgen();
      },
      select_city:function(){
          this.district = true;
          this.loading = true;
          this.dataDistrictAgen();
      },
      select_kec:function(){

      },
  },
  created: function (){
      this.dataProvinsiAgen();
      this.getCurrentLocation();
  },
  methods:{
      dataProvinsiAgen: function(){
          var self = this
          axios.post('https://api.member.agenafrakids.com/api/provinces?type=json')
          .then(function(response){
              let provinces = response.data.data.provinces;
              provinces.forEach(function(item){
                  self.option_prov.push({ value: item.province_id, text: item.province })
              });
          }). catch(function(error){
              self.provinces = "error" + error;
          })
      },
      dataCityAgen: function(){
          var self = this
          axios.post('https://api.member.agenafrakids.com/api/cities?type=json',{idProvince:this.select_prov})
          .then(function(response){
              let cities = response.data.data.cities;
              self.option_city = [{ value: null, text: 'Pilih Kota / Kotamadya' }]
              self.select_city = null
              cities.forEach(function(item){
                  self.option_city.push({ value: item.city_id, text: item.type + " " + item.city_name })
              })
              self.loading = false;
          }). catch(function(error){
              self.cities = "error" + error;
          })
      },
      dataDistrictAgen: function(){
          var self = this
          axios.post('https://api.member.agenafrakids.com/api/districts?type=json', {idCity:this.select_city})
          .then(function(response){
              let district = response.data.data.districts;
              self.option_kec = [{ value: null, text: 'Pilih Kecamatan'}]
              self.select_kec = null
              district.forEach(function(item){
                  self.option_kec.push({ value: item.subdistrict_id, text: item.subdistrict_name})
              })
              self.loading = false
          }) .catch(function(error){
             self.district = "error" + error;
          })
      },
      findAgenNear: function(){
          var self = this
          axios.post('https://api.member.agenafrakids.com/api/user/agent/nearest?type=json', {idProvince:this.select_prov, idCity:this.select_city, idDistrict:this.select_kec})
          .then(function(response){
              self.nearAgen = response.data.data.agents;
              self.loading = false
          }) .catch(function(error){
              self.nearAgen = "error" + error;
          })
      },
      findAgen: function(){
          this.loading = true;
          this.findAgenNear();
      },
      getCurrentLocation: function(){
                this.showLoading("Sedang Mencari Lokasi")
                var self = this;
                // Try HTML5 geolocation.
                if (navigator.geolocation) {
                    var options = {
                        enableHighAccuracy: true,
                        timeout: 10000,
                        maximumAge: 0
                    };
                    navigator.geolocation.getCurrentPosition(function(position) {
                        var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                        };
                        self.getNearestAgentByCoordinate(pos.lat, pos.lng);
                    }, function() {
                        self.locationFailed = true;
                        self.hideLoading();
                    }, options);
                } else {
                // Browser doesn't support Geolocation
                    this.locationFailed = true;
                    this.hideLoading();

                }
      },
      getNearestAgentByCoordinate: function(lat, lng){
          var self = this
          axios.post('https://api.member.agenafrakids.com/api/users/agent/nearest/coordinate',
            {
                lat:lat,
                lng:lng,
            })
          .then(function(response){
              self.locationLoaded = true;
              self.nearAgen = response.data.data.agents
              self.location = response.data.data.region
              self.loading = false
          }) .catch(function(error){
          })
      },
      showLoading: function(text){
        this.loadingText = text
        this.loading = true
      },
      hideLoading: function(){
        this.loading = false
      }
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
p {
    font-size: 24px;
}
p.title {
    text-align: left;
    font-size: 20px;
}
.background_navbar {
    background-color: #B0AE37;
    padding: 10px 0px;
}
.content_gr {
    background-color: #FEFCED;
    padding: 0px 0px 60px;
}
.imgGr {
    margin-bottom: 60px;
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
.findAgen {
    background-color: #FDAD1A;
    color: #ffffff;
    padding: 8px 30px;
    font-size: 22px;
    border: none;
    border-radius: 10px;
    width: 400px;
    margin-top: 30px;
    margin-bottom: 80px;
}

.btn_selectAgen {
    background-color: #FDAD1A;
    border-radius: 15px;
    border: none;
    padding: 8px 15px;
    font-size: 18px;
}
.textTitle {
    margin-top: 30px;
}
@media screen and (max-width: 768px) {

    .findAgen {
        width: 200px;
    }
    .imgGr {
        margin-bottom: 30px;
    }
}
</style>
