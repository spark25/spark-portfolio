<template>
  <section class="_contact sec_wrapper">
    <div class="section_head light_color">
        <div class="head_txt">Contact</div>
      </div>

    <div class="contact_wrapper">
      <div class="illustration_sec">
        <img src="@/assets/illustrations/arrived.svg" alt srcset id="illustration"/>
      </div>

      <div class="form_section">
        <div class="section_title">get in touch</div>
        <div class="_form">
        <div class="custom_select_menu">
           <div class="form_control" @click="open_select_menu">
          <input type="text" id="category" disabled placeholder="Select message category" v-model="category"/>
          <div class="drop_icon"> <font-awesome-icon :icon="['fas', 'sort-down']" /></div>
         
        </div>
         <div class="select_menu" v-if="open_select">
          <ul>
            <li v-for="cat in contact_cat" :key="cat.id" @click="select_this($event)">{{ cat.category }}</li>
          </ul>
        </div>
        </div>
       
        <div class="form_control">
          <input type="text" id="name" placeholder="eg: John Snow" v-model="name" />
        </div>
        <div class="form_control">
          <input type="email" id="email" placeholder="eg: john@castleblack.com" v-model="email"/>
        </div>

        <div class="form_control">
          <textarea name="message" id="message" cols="30" rows="6" v-model="message" placeholder="Enter your message"></textarea>
        </div>

        <div class="contact_btn_group">
            <div class="btn btn-yellow" @click="send_msg">
          <template v-if="!btn_loading">
            <div class="btn_text">Send</div>
          <div class="btn_icon">
            <font-awesome-icon :icon="['fas', 'paper-plane']" />
          </div>
          </template>
          <template v-else><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div> </template>
          
        </div>
         <div class="social_icons">
        <a href="http://github.com/spark25" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a href="https://www.linkedin.com/in/isumitk/" target="_blank">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a href="http://instagram.com/toosumit" target="_blank">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
        <a href="mailto:isumitk@outlook.com" target="_top">
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </a>
      </div>
        </div>

        </div>
      
      </div>
    </div>
    <template>
    <Snackbar ref="snackbar" baseSize="100px" :holdTime="3000" :position="position" :multiple="true"/>
</template>
  </section>

</template>

<script>
import db from "@/firebase/firebase.js";
import Snackbar from 'vuejs-snackbar';
export default {
  components:{
    Snackbar
  },
  data() {
    return {
      contact_cat: [],
      category: "",
      name: "",
      email: "",
      message: "",
      open_select: false,
      btn_loading : false,
      position: 'top-right'
    };
  },
  methods: {
    send_msg() {
      this.btn_loading = true;
      let form_data = {
        category: this.category,
        name: this.name,
        email: this.email,
        message: this.message,
      
      };

      db.collection("messages")
        .add(form_data)
        .then(() => {
           this.btn_loading = false;
           this.$refs.snackbar.info('Thank you for connecting. I\'ll get in touch.')
           this.clearForm()
        })
        .catch(err => {
          console.log("Error sendind messge", err);
           this.btn_loading = false;
          this.$refs.snackbar.error('Message couldn\'t be sent')
           this.clearForm()
        });
    },
    open_select_menu(){
      this.open_select = !this.open_select;
    },

    select_this(event){      
      var selection =  event.currentTarget.innerHTML;
      this.category = selection;
      try {
        document.querySelector('#category').value = selection;
        this.open_select = false;
      } catch (error) {
        console.log("Error selecting Category");
        
      }
    },
    clearForm(){
      this.category = ""
      this.name= ""
      this.email= ""
      this.message= ""
    }
  },
  created() {
    db.collection("contact_categories")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.contact_cat.push(doc.data());
        });
        // console.log(this.contact_cat);
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
  }
};
</script>

<style lang="scss" scoped>

.contact_wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @include sm{
      grid-gap: 2rem;
  }


  @include sm {
    display: grid;
    grid-template-columns: 1fr;
  }
  @include md {
    display: grid;
    grid-template-columns: 1fr;
  }
  .illustration_sec {
  //   background-image: url("../assets/illustrations/arrived.svg");

	// background-repeat: no-repeat;
	// background-size: cover;
  // background-position: top right;
  // min-height: 400px;
  overflow: hidden;

    #illustration {
      width: 100%;
      height: 100%;
      transition: all 10s;

      &:hover{
        transform: scale(1.2);
      }
    }
  }

  .form_section {
    position: relative;
    display: flex;

    .form_message{
      font-family: 'Roboto', sans-serif;
      text-align: right;
      padding: 5px 10px;
      z-index: 1;
    }

    ._form{
      flex: 1;
      .form_control {
      display: flex;
      align-items: center;
      padding: 5px;
      background: $darkSec;
      margin-bottom: 1rem;
      color: $offWhite;
    }
    input,
    textarea {
      background: $darkSec;
      color: $offWhite;
      width: 100%;
      padding: 8px 20px;
      border: none;
      font-size: 1rem;
      outline: none;
    }

    .custom_select_menu{
      position: relative;
      .drop_icon{
        padding: 5px 20px;
        // background: $notBlack;
      }
        .select_menu {
      position: absolute;
      left:  0;
      top: 0px;
      width: 100%;
      box-shadow: 0px 18px 30px -12px $notBlack;
      ul {
        list-style: none;
        li {
          background: $darkSec;
          color: $offWhite;
          padding: 8px 20px;
          cursor: pointer;

          &:hover{
             background: $notBlack;
          }
        }
      }
    }
    }
    .contact_btn_group{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    }
    
  }
}

 .social_icons {
    // flex: 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    font-size: 1.5rem;
    padding: 1rem 2rem;

    @include sm {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    a {
      text-decoration: none;
      color: #bdbdbd;

      &:hover {
        color: $offWhite;
      }
    }
  }
</style>