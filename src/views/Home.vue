<template>
<div class="_home">
    <div class="main">
      <div class="left_main">
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
      <div class="right_main">
        <div class="dp_grid">
          <div
            class="_frame animated fadeInRight"
            style="color:#ddd; display:flex; align-items:center; justify-content:center;"
          >
          <div class="display_1"> Hello!</div>
          </div>
          <img :src="dp" alt srcset height="300px" class="_dp animated fadeIn" />
        </div>

        <div class="_intro animated fadeInUp slower">
          <div class="_intro_text">
            I am Sumit, a Software Engineer from Pune, India,
            <br />currently working with Zensar Technologies
            <br />I create scalable web apps and make sure they look awesome while I am at it.
          </div>

          <div class="btn btn-yellow">
            <div class="btn_text">Know More</div>
            <div class="btn_icon">
              <font-awesome-icon :icon="['fas', 'arrow-right']" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="section"></section>
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

.main {
  width: 100%;
  min-height: 90vh;
  display: grid;
  // grid-template-columns: 1fr 1fr;
  grid-template-areas: "left right";
  grid-gap: 1rem;
  align-items: center;

  @include sm {
    grid-template-areas:
      "left"
      "right";
    margin-top: 50px;
    height: fit-content;
  }
  @include md {
    grid-template-areas:
      "left"
      "right";
    margin-top: 50px;
    height: fit-content;
  }

  .left_main {
    padding-right: 2rem;
    color: #eee;
    grid-area: "left";
    // justify-self: flex-start;
    .overlay_grid {
      display: grid;
      grid-template-columns: 50px 50px 5fr 50px 50px;
      grid-template-rows: 1fr 1fr 50px;
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
  .right_main {
    padding-left: 2rem;
    grid-area: "left";
    // justify-self: flex-end;
    .content {
      color: #ddd;
    }

    ._intro {
      color: #ddd;
      font-size: 18px;
      max-width: 500px;
      padding: 2rem 3rem 2rem 0;

      ._intro_text {
        margin-bottom: 2rem;
        word-wrap: break-word;
      }
    }
  }
}

.section {
  background: $offWhite;
  height: 100vh;
}

.dp_grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 200px;

  ._frame {
    border-top: 10px solid $orange;
    border-left: 10px solid $orange;
    border-bottom: 10px solid $orange;
    background: transparent;
    grid-row: 2 / span 1;
    grid-column: 1 / span 1;
  }
  ._dp {
    grid-row: 1 / span 3;
    grid-column: 1 / span 3;
    padding: 10px;
    z-index: 1;
    animation-delay: 1s !important;
  }
}
</style>
