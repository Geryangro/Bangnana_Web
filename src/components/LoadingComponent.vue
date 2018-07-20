<template>
  <div class="loading">
        <b-img class="icon" :src="require('../assets/kiki.png')" fluid/>
            <p>{{text}}</p>
    </div>
</template>

<script>

export default {
  name: 'beranda',
  props: {
    text: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon-container {
    width:100%;
    text-align:center;
}

.icon {
    width:100px;
    height:100px;
    -webkit-animation:pulse 2.3s linear infinite;
    -moz-animation:pulse 2.3s linear infinite;
    animation:pulse 2.3s linear infinite;
}

@-webkit-keyframes pulse {
    0% {
        transform: scale(.1);
    }
    25% {
        transform: scale(.5);
    }
    50% {
        transform: scale(1);
    } 
    75% {
        transform: scale(.5);
    } 
    100% {
        transform: scale(.1);
    }
}

@keyframes pulse {
    0%{
        transform: scale(.1);
    } 
    25% {
        transform: scale(.5);
    }
    50% {
        transform: scale(1);
    } 
    75% {
        transform: scale(.5);
    } 
    100% {
        transform: scale(.1);
    }
}
</style>
