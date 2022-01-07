<template>
  <div class="container">
    <div class="container-inner">
      <div class="container-left">
        <div>
          <h1>VMS</h1>
          <h5 class="head-valve">VALVE MANAGEMENT SYSTEM</h5>
          <h2>QA/QC</h2>
        </div>
        <div class="form">
          <form @submit="onClick" method="post">
            <div class="name">
                <label for="username">Username</label>
                <input type="text" name="username" id="username" v-model="username">
            </div>
            <div class="password">
                <label for="passwd">Password</label>
                <input type="password" name="passwd" id="passwd" v-model="password">
            </div>
              <button type="submit">LOGIN</button>
          </form>
          <div class="footer">
              <img src="./assets/logo.png" alt="star-logo" class="logo">
              <h3 class="layernote">LAYER<span>NOTE</span></h3>
              <p id="status"></p>
          </div>
        </div>
      </div>
      <div class="container-right">
          <img src="./assets/right.jpg" alt="" class="dc">
      </div>
    </div>
      
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      username: "",
      password: "",
    };
  },
  methods:{
    onClick(){
      axios.post("/", {username: this.username, password: this.password}).then(response =>{
        console.log(response);
      })
    }
  }
}
</script>


<style >
body{margin: 0;}
*{font-family: 'Roboto', sans-serif; color: rgb(25, 41, 41); letter-spacing: 2px; overflow: hidden;}
h1{margin-bottom: 10px; letter-spacing: 7px;}
h5{font-weight: lighter; margin-bottom: 5px; margin-top: 2px;}
h2{margin-top: 0px;}
h3{padding-top: 10px;}
span{font-weight: lighter;}
form>*{margin-bottom: 20px;}
label{float:left; font-size: 15px; letter-spacing: 0px;}
input[type=text]{box-sizing: border-box; padding: 10px; margin: 10px 0; border: 1px solid grey; border-radius: 8px; width: 100%; background-color: rgba(100, 148, 237, 0.274);}
input[type=password]{box-sizing: border-box; padding: 10px; margin: 10px 0; border: 1px solid grey; border-radius: 8px; width: 100%; background-color:rgba(100, 148, 237, 0.274);}
button{padding: 10px; border: none; background-color: #3b54c5; color: white; width: 100%; border-radius: 10px; margin-bottom: 50px;}
.container{background-color:rgb(41, 38, 38); height: 100vh; display: flex; align-items: center;}
.container-inner{height: 85vh; width: 75%; display:grid; grid-template-columns: 1fr 2fr; background-color: white; margin: auto auto; border-radius: 10px;}
.container-left{ text-align: center; margin: 20%; display: inline-block; height: 100%; margin-top: 10px;}
.container-right{margin: 0px; padding: 0px; display: flex; align-items: center; height: 100%;}
.head-valve{ border-bottom: 1px solid grey; padding-bottom:8px; }
.layernote{ border-top: 1px solid grey;}
.logo{ width: 70px; }
.dc{height:100%; width: 100%;}  
</style>