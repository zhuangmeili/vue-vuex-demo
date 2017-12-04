const helloMixin={
  created(){
    this.hello();
  },
  methods:{
    hello(){
      console.log("hello from mixin!");
    }
  }

}

export {helloMixin}




