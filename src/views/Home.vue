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

        <div class="_intro">
          <p class="_intro_text">
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
        <div class="domain_card _design"></div>
        <div class="domain_card _development"></div>
        <div class="domain_card _backend"></div>
        <div class="domain_card _database"></div>
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
  padding: 2rem 4rem;
  .domain_grid{
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    .domain_card{
      background: rgb(255, 255, 255);
      height: 400px;
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
