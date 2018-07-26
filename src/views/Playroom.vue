<template>
  <div class="playroom">
    <div class="background_playroom">
      <navbar />
    </div>

    <div class="wrapPlay">
      <div class="wrap">
        <div class="game">

        </div>
        <div class="modal-overlay">
          <div class="modalblock">
            <h3 class="textpopup">Wow! Kamu sudah siap <br> Jadi Bagian dari BangananaChips</h3>
            <ul class="ulPop">
              
              <li>
                <button class="btn-try" @click="refresh">
                  Main Lagi
                </button>
              </li>
              <li>
                <router-link to="/jadireseller">
                  <button class="btn-reseller">
                    Jadi Reseller
                  </button>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <footbar />
  </div>
</template>

<script>

import axios from 'axios'
import navbar from '@/components/navbar.vue'
import footbar from '@/components/footbar.vue'
import JQuery from 'jquery'
let $ = JQuery

export default {
  name: 'playroom',
  components: {
      navbar,
      footbar,
  },
  data () {
      return {
          memorycards: [],
      }
  },
  watch: {
      memorycards: function(){
         this.animation();
      }
  },
  created: function(){
      this.loadDataCards();
  },
  mounted: function(){
  },
  methods: {
      refresh: function(){
        location.reload();
      },
      loadDataCards: function(){
            var ini = this;
            axios.get('cards.json')
            .then(function(response){
                ini.memorycards = response.data.result.data;
            })
            .catch(function(error){
                ini.memorycards = "error" + error;
            })
      },
      animation: function(){
        var Memory = {
        init: function(cards){
            this.$game = $(".game");
            this.$modal = $(".modalblock");
            this.$overlay = $(".modal-overlay");
            this.$restartButton = $("button.restart");
            this.cardsArray = $.merge(cards, cards);
            this.shuffleCards(this.cardsArray);
            this.setup();
        },

        shuffleCards: function(cardsArray){
            this.$cards = $(this.shuffle(cardsArray));
        },
            
        setup: function(){
            this.html = this.buildHTML();
            this.$game.html(this.html);
            this.$memoryCards = $(".cardflip");
            this.paused = false;
            this.guess = null;
            this.binding();
        },
            
        binding: function(){
            this.$memoryCards.on("click", this.cardClicked);
            this.$restartButton.on("click", $.proxy(this.reset, this));
        },
            
        cardClicked: function(){
            var _ = Memory;
            var $card = $(this);
                if(!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
                    $card.find(".inside").addClass("picked");
                    if(!_.guess){
                    _.guess = $(this).attr("data-id");
                    } else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
                    $(".picked").addClass("matched");
                    _.guess = null;
                    } else {
                    _.guess = null;
                    _.paused = true;
                    setTimeout(function(){
                        $(".picked").removeClass("picked");
                        Memory.paused = false;
                    }, 600);
                    }
                    if($(".matched").length == $(".cardflip").length){
                    _.win();
                    }
                }
            },

        win: function(){
            this.paused = true;
            setTimeout(function(){
                Memory.showModal();
                Memory.$game.fadeOut();
            }, 1000);
        },

        showModal: function(){
            this.$overlay.show();
            this.$modal.fadeIn("slow");
        },

        hideModal: function(){
            this.$overlay.hide();
            this.$modal.hide();
        },

        reset: function(){
            this.hideModal();
            this.shuffleCards(this.sArray);
            this.setup();
            this.$game.show("slow");
        },

        shuffle: function(array){
            var counter = array.length, temp, index;
            // While there are elements in the array
            while (counter > 0) {
                // Pick a random index
                index = Math.floor(Math.random() * counter);
                // Decrease counter by 1
                counter--;
                // And swap the last element with it
                temp = array[counter];
                array[counter] = array[index];
                array[index] = temp;
                }
                return array;
        },
            
        buildHTML: function(){
            var frag = '';
            this.$cards.each(function(k, v){
                frag += '<div class="cardflip" data-id="'+ v.id +'"><div class="inside">\
                <div class="front"><img class="img-back" src="'+ v.image +'"\
                alt="'+ v.name +'" /></div>\
                <div class="back"><img src="game/Default.png"\
                alt="Codepen" /></div></div>\
                </div>';
            });
            return frag;
        }
      }
      Memory.init(this.memorycards);
      }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
.playroom {
  background-image: url('../assets/Background.jpg');
  background-size: 100% 100%;
  height: 740px;
}
.background_playroom {
  padding: 20px 0px 10px;
}
.wrapPlay {
  padding: 40px 0px;
}
.wrap {
  position: relative;
  height: 100%;
  min-height: 550px;
  padding: 20px;
}
h3.textpopup {
  font-family: 'whale';
  color: #99268D;
  margin-top: 150px;
}
ul.ulPop {
  margin-top: 30px;
}
.ulPop li {
  display: inline;
  margin: 0px 10px;
}
.game {
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-perspective: 500px;
          perspective: 500px;
  min-height: 100%;
  height: 100%;
  padding: 0px 50px;
}
.btn-reseller {
  border: none;
  background-color: #F8A51C;
  color: #ffffff;
  padding: 8px 30px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  font-size: 20px;
}
.btn-reseller:hover {
  background-color: #ffffff;
  color: #F8A51C;
  padding: 8px 30px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  border: none;
}
.btn-reseller:active {
  background-color: #ffffff;
  color: #F8A51C;
  padding: 8px 30px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  border: none;
}
.btn-try {
  border: none;
  background-color: #2980b9;
  color: #ffffff;
  padding: 8px 30px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  font-size: 20px;
}
.btn-try:hover {
  background-color: #ffffff;
  color: #2980b9;
  padding: 8px 30px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  border: none;
}
@-webkit-keyframes matchAnim {
  0% {
    background: #bcffcc;
  }
  25% {
    background: red;
  }
  50% {
    background: green;
  }
  75% {
    background: yellow;
  }
  100% {
    background: white;
  }
}

@keyframes matchAnim {
  0% {
    background: #bcffcc;
  }
  25% {
    background: red;
  }
  50% {
    background: green;
  }
  75% {
    background: yellow;
  }
  100% {
    background: white;
  }
}
@-webkit-keyframes shake {
  10%, 90% {
    transform: translate3d(-5px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(5px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-5px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(5px, 0, 0);
  }
}
@keyframes shake {
  10%, 90% {
    transform: translate3d(-5px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(5px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-5px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(5px, 0, 0);
  }
}
.cardflip {
  float: left;
  margin: 10px 10px;
  width: 180px;
  height: 190px;
  padding: 5px;
  text-align: center;
  display: block;
  -webkit-perspective: 500px;
          perspective: 500px;
  position: relative;
  cursor: pointer;
  z-index: 50;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
@media (max-width: 800px) {
  .cardflip {
    width: 100px;
    height: 50px;
  }
}
.cardflip .inside {
  width: 100%;
  height: 100%;
  display: block;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  transition: .4s ease-in-out;
  padding: 20px 0px;
}
.cardflip .inside.picked, .cardflip .inside.matched {
  -webkit-transform: rotateY(180deg);
          transform: rotateY(180deg);
}
.cardflip .inside.matched {
  -webkit-animation: 2s shake;
          animation: 2s shake;
  -webkit-animation-delay: .4s;
          animation-delay: .4s;
  padding: 0px 10px;
}
.cardflip .front, .cardflip .back {
  border: none;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px 0px;
}
.cardflip .front img, .cardflip .back img {
  max-width: 100%;
  display: block;
  margin: 0 auto;
  max-height: 100%;
}
.cardflip .front {
  -webkit-transform: rotateY(-180deg);
          transform: rotateY(-180deg);
}
@media (max-width: 800px) {
  .cardflip .front {
    padding: 5px;
  }
}
.cardflip .back {
  -webkit-transform: rotateX(0);
          transform: rotateX(0);
}
@media (max-width: 800px) {
  .cardflip .back {
    padding: 10px;
  }
}

.modal-overlay {
  display: none;
}

.modalblock {
  display: none;
  position: relative;
  width: 600px;
  height: 400px;
  margin: 0 auto;
  background-image: url('../assets/popup.png');
  top: 50%;
  padding: 30px 10px;
}
.modalblock .winner {
  font-size: 80px;
  text-align: center;
  font-family: "Anton", sans-serif;
  color: #4d4d4d;
  text-shadow: 0px 3px 0 black;
}
@media (max-width: 480px) {
  .playroom {
    background-image: url('../assets/backlul.jpg');
    background-size: 100% 100%;
    height: 640px;
  }
  h3.textpopup {
    margin-top: 110px;
    font-size: 18px;
  }
  .wrap {
    padding-top: 0px;
    padding-bottom: 0px;
    min-height: 500px;
  }
  .wrapPlay {
    padding: 0px 0px;
  }
  .game {
    padding: 0px 15px;
  }
  .cardflip {
    margin: 10px 2px;
    width: 48.3%;
  }
  .modalblock {
    background-image: url('../assets/popupmobile.png');
    background-size: 100% 100%;
    width: 100%;
    height: 350px;
    margin-top: 40px;
  }
  .modalblock .winner {
    font-size: 60px;
  }
  .cardflip .front, .cardflip .back {
    height: 100px;
  }
  .btn-try {
    margin-bottom: 10px;
    margin-right: 10px;
  }
}
.modalblock .restart {
  font-family: "Anton", sans-serif;
  margin: 30px auto;
  padding: 20px 30px;
  display: block;
  font-size: 30px;
  border: none;
  background: #4d4d4d;
  background: linear-gradient(#4d4d4d, #222);
  border: 1px solid #222;
  border-radius: 5px;
  color: white;
  text-shadow: 0px 1px 0 black;
  cursor: pointer;
}
.modalblock .restart:hover {
  background: linear-gradient(#222, black);
}
.modalblock .message {
  text-align: center;
}
.modalblock .message a {
  text-decoration: none;
  color: #28afe6;
  font-weight: bold;
}
.modalblock .message a:hover {
  color: #56c0eb;
  border-bottom: 1px dotted #56c0eb;
}
.modalblock .share-text {
  text-align: center;
  margin: 10px auto;
}
.modalblock .social {
  margin: 20px auto;
  text-align: center;
}
.modalblock .social li {
  display: inline-block;
  height: 50px;
  width: 50px;
  margin-right: 10px;
}
.modalblock .social li:last-child {
  margin-right: 0;
}
.modalblock .social li a {
  display: block;
  line-height: 50px;
  font-size: 20px;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
.modalblock .social li a.facebook {
  background: #3b5998;
}
.modalblock .social li a.facebook:hover {
  background: #4c70ba;
}
.modalblock .social li a.google {
  background: #D34836;
}
.modalblock .social li a.google:hover {
  background: #dc6e60;
}
.modalblock .social li a.twitter {
  background: #4099FF;
}
.modalblock .social li a.twitter:hover {
  background: #73b4ff;
}

footer {
  height: 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 0;
}
footer .disclaimer {
  line-height: 20px;
  font-size: 12px;
  color: #727272;
  text-align: center;
}
@media (max-width: 767px) {
  footer .disclaimer {
    font-size: 8px;
  }
}
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    margin: 0px;
    font-size: 14px;
    color: #ffffff;
    cursor: pointer;
}
a {
    color: #42b983;
}
a:hover {
    text-decoration: none;
}
</style>