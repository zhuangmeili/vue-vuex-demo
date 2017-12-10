const locationMixin={
  methods:{
    getLocation(callback){
      //这里面获取位置
      var position={latitude:39.9,longitude:116.5};
      callback(position);
    }
  }

}

export {locationMixin}




