<template>
<div class="_home">
    <div class="highlight">
      <div class="left_highlight">
        <div class="overlay_grid">
          <div class="_bg animated fadeInLeft slow"></div>

          <div class="_fg animated fadeInDown slow">
            <div class="bullet_lines">
              <div class="display_1">
                <span class="display_1 bold_txt">Fullstack</span><br>
                <span class="display_1 bold_txt">Developer</span><br>
                <span class="display_2 light_txt">with love for</span><br>
                <span class="display_2 light_txt">Design<span class="display_1 bold_txt" style="color:#f78608;">.</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right_highlight">
        <div class="dp_grid">
          <div
            class="_frame animated fadeInRight"
            style="color:#ddd; display:flex; align-items:center; justify-content:center;"
          >
          <div class="display_1"> Hello!</div>
          </div>
          <img :src="dp" alt srcset class="_dp animated fadeIn" />
        </div>

        <div class="_intro animated fadeInUp slow">
          <p class="_intro_text ">
            I am Sumit, a Software Engineer from Pune, India,
            <br> currently working with Zensar Technologies
            <br> I create scalable web apps and make sure they look awesome while I am at it.
          </p>

          <div class="btn btn-yellow">
            <div class="btn_text">Know More</div>
            <div class="btn_icon">
              <font-awesome-icon :icon="['fas', 'arrow-right']" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="section">
      <div class="section_head">What I do</div>
      <div class="domain_grid">
        <div class="domain_card _design">
         <img src="@/assets/illustrations/design2.svg" class="card_img" alt="" srcset="">
          <div class="card_info">
            <div class="card_title heading light_text">UI/UX Design</div>
            <div class="card_desc">
              Wire-Frames, mockups and more
            </div>
          </div>
        </div>
        <div class="domain_card _responsive">
           <img src="@/assets/illustrations/responsive2.svg" class="card_img" alt="" srcset="">
          <div class="card_info ">
            <div class="card_title heading light_text">Responsive Design</div>
            <div class="card_desc">
              Design that adaps to every device you use
            </div>
            </div>
        </div>
        <div class="domain_card _development">
           <img src="@/assets/illustrations/webdev2.svg" class="card_img" alt="" srcset="">
          <div class="card_info">
            <div class="card_title heading light_text"> Web Development</div>
            <div class="card_desc">
              Backend, Databases, APIs, everything covered
            </div>
            </div>
        </div>
        <div class="domain_card _visualization">
           <img src="@/assets/illustrations/visualization1.svg" class="card_img" alt="" srcset="">
          <div class="card_info">
            <div class="card_title heading light_text">Visualization</div>
            <div class="card_desc">
              Data into information, and information into insights
            </div>
            </div>
        </div>
      </div>
    </section>
</div>
</template>

<script>
import dp_data from '../assets/dp.json'
export default {
  name: "home",
  data(){
    return{
      dp : ""
    }
  },
  components: {},
  created(){
    this.dp = dp_data.data
    
  }
};
</script>
<style lang="scss" scoped>

.highlight {
  width: 100%;
  min-height: 90vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 1rem;
  align-items: center;

  @include sm {

    margin-top: 50px;
  }
  @include md {
    margin-top: 50px;
  }

  .left_highlight {
    padding-right: 2rem;
    color: #eee;
  
    .overlay_grid {
      display: grid;
      grid-template-columns: 50px 50px 5fr 50px 50px;
      grid-template-rows: 1fr 1fr 50px;

      @include sm{
        grid-template-columns:50px 30px 3fr 30px 30px;
        grid-template-rows: 1fr 1fr 30px;
      }
      // height: 70vh;
      ._bg {
        background: transparent;
        border-top: 5px solid $yellow;
        border-right: 5px solid $yellow;
        border-bottom: 5px solid $yellow;
        grid-column: 1 / span 4;
        grid-row: 2 / span 2;
      }
      ._fg {
        //  background: $darkPrime;
        grid-column: 3 / span 1;
        grid-row: 1 / span 2;
        .bullet_lines{
          font-family: 'Roboto', sans-serif;
        }
      }
    }
  }
  .right_highlight {
    padding-left: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    // grid-area: "left";
    display: grid;

  

    ._intro {
      display: grid;
      color: #ddd;
      font-size: 1rem;
      padding: 2rem 2rem 2rem 0;

      ._intro_text {
        margin-bottom: 2rem;
        max-width: 50ch;

        @include sm{
          padding-right: 20vmin;
        }
      }
    }
  }
}

.section {
  background: $offWhite;
  min-height: 100vh;
  padding: 4rem 4rem;

  @include sm{
    padding: 3rem 1.5rem; 
  }
   @include md{
    padding: 3rem 1.5rem; 
  }
  .domain_grid{
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

     @include sm{
   grid-gap: 2rem;
  }

    @include md{
   grid-gap: 2rem;
  }
    .domain_card{
      background: rgb(255, 255, 255);
      height: 400px;
      display: grid;
      grid-template-rows: auto minmax(30%, 35%);
      transition: transform 0.5s;
      overflow: hidden;
      &:hover{ 
        transform: translateY(-10px);
        // box-shadow: 0px 18px 30px -12px #c2c2c2
        }

        @include sm{
          &:hover{
          transform:none;
        }
      }
      .card_img{
        max-width: 100%;
        height: 100%;
        transition: all 5s;
        z-index: 1;
        &:hover{
          transform: scale(1.2);
          transform-origin: center center;
        }
       
      

      }
      .card_info{
        font-family: 'Roboto', sans-serif;
        background: $darkSec;
        color: #ddd;
        padding: 0.5rem 1rem;
        transition: color 0.5s;
        z-index: 2;

        &:hover{
          color: $orange;
        }

        .card_desc{
           font-family: 'Poppins', sans-serif !important;
           line-height: normal;
          color: #c2c2c2 !important;
          margin-top: 10px;
      }
      }
    }
  }

}

.dp_grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 200px;

  @include sm{
    grid-template-rows: 50px 100px;
  }

  ._frame {
    border-top: 10px solid $orange;
    border-left: 10px solid $orange;
    border-bottom: 10px solid $orange;
    background: transparent;
    grid-row: 2 / span 1;
    grid-column: 1 / span 1;

     @include sm{
     border-top: 5px solid $orange;
    border-left: 5px solid $orange;
    border-bottom: 5px solid $orange;
  }
  }
  ._dp {
    grid-row: 1 / span 3;
    grid-column: 1 / span 3;
    padding: 10px;
    height: 300px;
    z-index: 1;
    animation-delay: 1s !important;

    @include sm{
      padding: 5px;
    height: 150px;
  }

  }
}
</style>
