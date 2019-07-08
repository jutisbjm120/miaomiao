<template>
  <div class="cinema_body">
        <ul>
          <li v-for="item in cinemas" :key="item.id">
            <div>
              <span>{{item.nm}}</span>
              <span class="q">
                <span class="price">{{item.sellPrice}}</span> 元起
              </span>
            </div>
            <div class="address">
              <span>{{item.addr}}</span>
              <span>{{item.distance}}</span>
            </div>
            <div class="card">
              <div v-for="(items,key) in item.tag" :key="key" v-if="items==1">
                {{key | add}}
              </div>
            </div>
          </li>
          
        </ul>
      </div>
</template>

<script>
export default {
    name:"yingyuanb",
  data() {
    return {
      cinemas:[]
    }
  },
  filters: {
    add(res){
      switch(res){
        case 'allowRefund':return '改签'
        break;
        case 'buyout':return '退'
        break;
        case 'cityCardTag':return '折扣卡'
        break;
        case 'deal':return '消费'
        break;
        case 'snack':return '小吃'
        break;
        case 'endorse':return '休闲'
        break;
        case 'sell':return '饮料'
        break;
      }
    }
  },
  methods: {

  },
  components: {

  },
  mounted () {
   this.$axios.get('/api/cinemaList?cityId=10').then((res)=>{
     if(res.data.msg=='ok'){
       this.cinemas=res.data.data.cinemas;
     }
   })
  }
}
</script>

<style scoped>
#content .cinema_body{ flex:1; overflow:auto;}
.cinema_body ul{ padding:20px 20px 0 20px;}
.cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
.cinema_body ul li:last-of-type{  border-bottom:1px solid #e6e6e6; margin-bottom: 0px;}
.cinema_body div{ margin-bottom: 10px;}
.cinema_body .q{ font-size: 11px; color:#f03d37;}
.cinema_body .price{ font-size: 18px;}
.cinema_body .address{ font-size: 13px; color:#666;}
.cinema_body .address span:nth-of-type(2){ float:right; }
.cinema_body .card{ display: flex;}
.cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
.cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
.cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}

</style>
