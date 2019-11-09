<template>
  <div class="_project">
    <div class="project_hero_grid">
      <div class="section_title">project title</div>

      <div class="about_project">
        <div class="project_image"></div>
        <div class="project_desc">
          <p>
            Cat ipsum dolor sit amet, lick human with sandpaper tongue but stare at
            ceiling cats go for world domination yet miaow then
            turn around and show you my bum. Touch water with paw then recoil in horror
            cough wake up human for food at 4am sit by the fire for refuse to leave cardboard box
          </p>
        </div>
      </div>
      <div class="project_carousel">
        <carousel :nav="false" :dots="false" :items=4>
          <template slot="prev"><span class="prev"><font-awesome-icon :icon="['fas', 'chevron-left']" /></span></template>
          <img src="https://placeimg.com/600/400/any?1"  height="140px" width="200px"/>

          <img src="https://placeimg.com/600/400/any?2"  height="140px" width="200px"/>

          <img src="https://placeimg.com/600/400/any?3"  height="140px" width="200px"/>

          <img src="https://placeimg.com/600/400/any?4"  height="140px" width="200px" />

          <img src="https://placeimg.com/600/400/any?5"  height="140px" width="200px"/>

          <img src="https://placeimg.com/600/400/any?6"  height="140px" width="200px" />

          <img src="https://placeimg.com/600/400/any?7"  height="140px" width="200px"/>

          <img src="https://placeimg.com/600/400/any?8"  height="140px" width="200px" />
          <template slot="next"><span class="next"> <font-awesome-icon :icon="['fas', 'chevron-right']" /></span></template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: { carousel },
  methods:{
   
  }
};
</script>

<style lang="scss" scoped>
._project {
  padding: 2rem 0;
  min-height: 90vh;

  .project_hero_grid {
    display: grid;
    grid-template-columns:
      minmax(3rem, 1fr)
      minmax(300px, 80%)
      minmax(3rem, 1fr);
    grid-template-rows: 400px auto;

    .section_title {
      grid-column: 1 / auto;
      font-size: 5vmin;
    }
    .about_project {
      display: grid;
      grid-template-columns: 3fr 1fr;
      .project_image {
        width: 100%;
        height: 380px;
        background-image: url("https://source.unsplash.com/random/800x600");
        // background: #c2c2c2;
        background-repeat: no-repeat;
        background-size: cover;
      }
      .project_desc {
        color: $offWhite;
        padding: 0 15px 15px 15px;
      }
    }

    .project_carousel {
      // background: rgba(255, 255, 255, 0.267);
      
      // height: 140px;
      grid-row: 2 / span 1;
      grid-column: 2 / -1;
      position: relative;
     
     .prev{
       position: absolute;
       top: 0%;
       left: 0;
      
        width: 50px;
       height: 50px;
       display: flex;
       align-items: center;
       justify-content: center;
      //  border-radius: 50%;
       background: rgba(255, 255, 255, 0.5);
       color: #000;
        z-index: 2;

     }
     .next{
       position: absolute;
       top: 0%;
       right: 0px;
       width: 50px;
       height: 50px;
       display: flex;
       align-items: center;
       justify-content: center;
      //  border-radius: 50%;
       background: rgba(255, 255, 255, 0.5);
       color: #000;
        z-index: 2;
     }

    }
  }
}
</style>