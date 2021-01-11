export default {
    data(){
      return{
        title : 'Title from js file'
      }
    },
    methods: {
      clicked(value) {
        alert(value);
      },
      showTitle(){
        alert(this.title);
      }
    }
  };