<template>
    <b-col class="agen" cols="4">
        <b-img v-if="agen.avatar != 0 && agen.avatar != null" class="agen_img" :src="'http://member.agenafrakids.com/misc/avatar/' + agen.avatar" @error="errorImage" fluid/>
        <b-img v-else class="agen_img" :src="require('../assets/avatar.png')" fluid/>
        <p>{{agen.name_f}}</p>
        <b-button  class="btn_selectAgen">
            Pilih Agen
        </b-button>
    </b-col>
</template>

<script>
export default {
  name: 'agen',
  props: ['agen'],
  watch: {
      agen: function(val){
        this.agenBio = val;
      }
  },
  data(){
      return {
          agenBio: [],
        //   imageUrl: '',
      }
  },
  methods: {
      errorImage: function(){
          this.agenBio.avatar = "../assets/avatar.png"
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
.agen {
    margin: 20px 0px;
}
.agen_img {
    border-radius: 50%;
    background-color: #888888;
    width: 200px;
}
.btn_selectAgen {
    background-color: #FDAD1A;
    border-radius: 15px;
    border: none;
    padding: 8px 15px;
    font-size: 18px;
}
</style>
