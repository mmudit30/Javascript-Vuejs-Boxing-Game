new Vue({
  el:'#vue-app',
  data:{
    health:100,
    ended:false,
    lkick:false,
    rkick:false
  },
  methods:{
    restart: function(){
            this.health = 100;
            this.ended = false;
        },
        lpunch: function(){
          this.rkick=false;
          this.lkick=true;
          this.health -= 10;
          if(this.health<=0){
            this.ended = true;
            this.rkick=false;
            this.lkick=false;

          }
        },
        rpunch: function(){
          this.lkick=false;
          this.rkick=true;
          this.health -= 10;
          if(this.health <= 0){
            this.ended = true;
			this.rkick=false;
            this.lkick=false;
          }
        }
    }

});
