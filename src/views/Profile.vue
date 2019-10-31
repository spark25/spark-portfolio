<template>
  <div class="page_wrapper">
    <section class="sec_wrapper">
      <div class="section_head light_color">
        <div class="head_txt">Profile</div>
      </div>
      <div class="skill_section">
        <div class="skill_left">
          <h1 class="skill_head display_1 bold_txt light_color">Skills</h1>
        </div>
        <div class="skill_right">
          <div class="_skills animated zoomIn" style="font-size:5rem;">
            <div v-for="skill in skills" :key="skill.id" class="icon_wrapper">
              <i :class="skill.class"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="_experience">
      <div class="article_layout">
        <div class="section_title">experience</div>
        <div class="exp_box" v-for="exp in experience" :key="exp.id">
          <div class="exp_title heading bold_txt">{{ exp.title}}</div>
          <p class="exp_short_desc">{{ exp.description}}</p>
          <div class="_tech">
            <div class="tech_icon" v-for="tech in exp.tech" :key="tech.id">
              <i :class="tech"></i>
            </div>
          </div>
          <div class="clients">
            <div class="client_name" v-for="client in exp.clients" :key="client.id">{{ client }}</div>
          </div>
          <div class="period medium_txt">{{ exp.period }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import db from "@/firebase/firebase.js";
export default {
  data() {
    return {
      skills: [],
      experience: []
    };
  },

  created() {
    this.skills = this.$store.state.skills;
    this.experience = this.$store.state.exp;
  }
};
</script>

<style lang="scss" scoped>
.skill_section {
  display: grid;
  grid-template-columns: 1fr 1fr;

  @include sm {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
  @include md {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  .skill_left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .skill_head {
      // flex: 1
    }
  }
  .skill_right {
    ._skills {
      display: grid;
      grid-gap: 25px;
      // grid-row-gap: 20px;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      justify-items: center;
      align-content: center;
      .icon_wrapper {
        // background: #aeb1ae5e;
        display: flex;
        align-items: center;
        justify-content: center;

        // &:nth-child(even){
        //   margin-bottom: 50px;

        // }
        i {
          transition: all 0.5s;
          //  color: #888;
          &:hover {
            transform: scale(1.5);
            // color: $offWhite;
          }
        }
      }
    }
  }
}

._experience {
  background: $offWhite;
  width: 100%;
  min-height: 100vh;
  padding-top: 4rem;
  padding-bottom: 4rem;

  .article_layout {
    display: grid;
    grid-template-columns:
      minmax(3rem, 1fr)
      minmax(auto, 60ch)
      minmax(3rem, 1fr);
    grid-row-gap: 1rem;

    .section_title {
      grid-column: 1 / auto;
      color: $darkSec;
      writing-mode: vertical-rl;
      text-orientation: sideways;
      font-size: 5vmin;
      font-weight: 800;

      // padding: 5px;
    }
    .exp_box {
      grid-column: 2 / auto;
      background: #fff;
      padding: 2rem;
      box-shadow: 0px 18px 30px -12px #c2c2c2;
      position: relative;
      .exp_title {
        color: $darkSec;
        margin-bottom: 1rem;
      }
      .exp_short_desc {
        color: $darkPrime;
      }
      ._tech {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        .tech_icon {
          font-size: 2rem;
          margin-right: 2rem;
        }
      }

      .clients {
        display: flex;
        .client_name {
          padding: 5px 20px;
          background: rgba(182, 182, 182, 0.445);
          margin-right: 1rem;
          color: $darkPrime;
          font-weight: 500;
        }
      }

      .period {
        position: absolute;
        right: -1.5rem;
        bottom: 10px;
        border-right: 2px solid $yellow;
        color: #888;
        font-size: 1rem;
        writing-mode: vertical-rl;
        text-orientation: sideways;
      }
    }
  }
}
</style>>