<template>
  <div class="city_body">
    <div class="city_list">
      <div class="city_hot" >
        <h2 >热门城市</h2>
        <ul class="clearfix">
          <li v-for="item in houtlist" :key="item.index">{{item.nm}}</li>
        </ul>
      </div>
      <div class="city_sort">
        <div v-for="item in newarr" :key="item.index">
          <h2 ref="seaty">{{item.index}}</h2>
          <ul>
            <li v-for="itemlist in item.list" :key="itemlist.id">{{itemlist.nm}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="city_index">
      <ul>
        <li  v-for="(item,i) in newarr" :key="item.list.id" @click="chang(i)">{{item.index}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newarr:[],
      houtlist:[]
    };
  },
  methods: {
    getDate(resouse) {
      // [{index:'A',list:[{nm:'阿城',id:123}]}]
      var houtlist = [];
      var newarr = [];
      //在newarr中和houtlist中追加数据添加数据
      resouse.forEach((element, i) => {
        if(element.isHot==1){
          houtlist.push(element);
        }
        let firstzi = element.py.substring(0, 1).toUpperCase();
        if (ispush(firstzi)) {
          //如果在newarr中存在首字母的数组就追加
          // this.newarr[i].list.push({})
          for (var j = 0; j < newarr.length; j++) {//判断存在一样的index所在的数组
            if (newarr[j].index == firstzi) {
              newarr[j].list.push({ nm: element.nm, id: element.id });
            }
          }
        } else {
          //否则就添加新的数组
          newarr.push({
            index: firstzi,
            list: [{ nm: element.nm, id: element.id }]
          });
        }
      });
      function ispush(firstzi) {//判断在newarr中是否存在一样的index
        for (var i = 0; i < newarr.length; i++) {
          if ((this, newarr[i].index == firstzi)) {
            return true;
          }
        }
        return false;
      }
      newarr= newarr.sort((a,b)=>{
        if(a.index>b.index){
          return 1
        }else{
          return -1
        }
      })
      // console.log(newarr,houtlist);
      return {newarr,houtlist}
    },
    chang(i){
      var h2=this.$refs.seaty[i].offsetTop;
      document.querySelector(".city_list").scrollTop=h2;
    }
  },
  components: {},
  mounted() {
    this.$axios.get("/api/cityList").then(res => {
      // console.log(res.data.data.cities);
      if (res.data.msg == "ok") {
        var {newarr,houtlist}= this.getDate(res.data.data.cities);
        // console.log(newarr,houtlist);
        this.newarr=newarr;
        this.houtlist=houtlist;
      }
    });
  }
};
</script>

<style scoped>
.city_body {
  margin-top: 45px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
.city_body .city_hot {
  margin-top: 20px;
}
.city_body .city_hot h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_hot ul li {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
}
.city_body .city_sort div {
  margin-top: 20px;
}
.city_body .city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}
.city_body .city_sort ul li {
  line-height: 30px;
  line-height: 30px;
}
.city_body .city_index {
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-left: 1px #e6e6e6 solid;
}
</style>
