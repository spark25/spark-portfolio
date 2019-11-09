<template>
  <div class="page_wrapper">
    <section class="sec_wrapper">
      <div class="section_head light_color">
        <div class="head_txt">Profile</div>
      </div>
      <div class="profile_section">
        <div class="_left">
          <div class="section_title">about</div>
          <div class="_about">
            <div
              class="display_3 bold_txt light_color"
              style="margin-bottom:16px"
            >As a developer I...</div>
            <div class="c_wrapper">
              <div class="c_title fadeup light_color bold_txt">Confess</div>
              <div class="c_text fadeup">That I don't know everything.</div>
            </div>
            <div class="c_wrapper">
              <div class="c_title fadeup light_color bold_txt">Concede</div>
              <div class="c_text fadeup">That I don't have all the answers.</div>
            </div>
            <div class="c_wrapper">
              <div class="c_title fadeup light_color bold_txt">Commit</div>
              <div class="c_text fadeup">To a problem until a solution is found.</div>
            </div>
          </div>
        </div>
        <div class="_right">
          <div class="section_title">skills</div>
          <div class="_skills" style="font-size:5rem;">
            <div v-for="skill in skills" :key="skill.id" class="icon_wrapper animated zoomIn">
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
            <div class="tech_icon" v-for="tech in exp.stack" :key="tech.id">
              <i :class="tech.class" v-tooltip="tech.name"></i>
            </div>
          </div>
          <div class="clients">
            <div class="client_name" v-for="client in exp.clients" :key="client.id">{{ client }}</div>
          </div>
          <div class="period">{{ exp.period }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import db from "@/firebase/firebase.js";
export default {
  data() {
    return {
      skills: [],
      experience: []
    };
  },

  methods: {
    get_skills() {
      // const skills = [];
      const skillsRef = db.collection("skills");
      const orderedSkills = skillsRef.orderBy("order");
      orderedSkills.get().then(snapshot => {
        snapshot.forEach(doc => {
          this.skills.push(doc.data());
        });
      });
    },
    get_exp() {
      // const exp = [];
      const expRef = db.collection("experience");
      const orderedExp = expRef.orderBy("order");
      orderedExp.get().then(snapshot => {
        snapshot.forEach(doc => {
          this.experience.push(doc.data());
        });
      });
    },
    icon_fix() {
      document.querySelectorAll("._firebase").forEach(element => {
        // element.innerHTML = `<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgYmFzZVByb2ZpbGU9InRpbnkiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGQ9Ik0yOTcuMDM2LDIwNS41NzhsLTM2LjMzNCwzMy44MDlsLTMzLjcxNi02OC4wMDVsMTcuNDQ2LTM5LjEwOGM0LjQxNi03Ljg0LDExLjYyMS03Ljg1NSwxNi4wMzcsMCAgIEwyOTcuMDM2LDIwNS41Nzh6IiBmaWxsPSIjRkZBMDAwIi8+PHBvbHlnb24gZmlsbD0iI0Y1N0YxNyIgcG9pbnRzPSIyNjAuNzAyLDIzOS4zODYgMTI0LjkyNCwzNjUuNjk3IDIyNi45ODYsMTcxLjM4MSAgIi8+PHBhdGggZD0iTTMzNi43NzYsMTUzLjkwMWM2LjQ5MS02LjIzOSwxMy4yMDItNC4xMTEsMTQuOTEyLDQuNzI5bDM1LjM0MiwyMDUuMzc1TDI2OS44NzMsNDM0LjIyICAgYy00LjEsMi4yNjQtMTQuOTU3LDMuMjQ2LTE0Ljk1NywzLjI0NnMtOS45MS0xLjE4NS0xMy42ODctMy4yODFMMTI0LjkyLDM2NS42OUwzMzYuNzc2LDE1My45MDF6IiBmaWxsPSIjRkZDQTI4Ii8+PHBhdGggZD0iTTIyNi45ODYsMTcxLjM4MUwxMjQuOTI0LDM2NS42OTdsNDUuNDYtMjgzLjk5OGMxLjY3NC04Ljg0Nyw2LjcxLTkuNjk5LDExLjIwMy0xLjg5TDIyNi45ODYsMTcxLjM4MXoiIGZpbGw9IiNGRkEwMDAiLz48L2c+PC9zdmc+" width="40px">`
        element.innerHTML = `<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgYmFzZVByb2ZpbGU9InRpbnkiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGQ9Ik0yOTcuMDM2LDIwNS41NzhsLTM2LjMzNCwzMy44MDlsLTMzLjcxNi02OC4wMDVsMTcuNDQ2LTM5LjEwOGM0LjQxNi03Ljg0LDExLjYyMS03Ljg1NSwxNi4wMzcsMCAgIEwyOTcuMDM2LDIwNS41Nzh6IiBmaWxsPSIjRkZBMDAwIi8+PHBvbHlnb24gZmlsbD0iI0Y1N0YxNyIgcG9pbnRzPSIyNjAuNzAyLDIzOS4zODYgMTI0LjkyNCwzNjUuNjk3IDIyNi45ODYsMTcxLjM4MSAgIi8+PHBhdGggZD0iTTMzNi43NzYsMTUzLjkwMWM2LjQ5MS02LjIzOSwxMy4yMDItNC4xMTEsMTQuOTEyLDQuNzI5bDM1LjM0MiwyMDUuMzc1TDI2OS44NzMsNDM0LjIyICAgYy00LjEsMi4yNjQtMTQuOTU3LDMuMjQ2LTE0Ljk1NywzLjI0NnMtOS45MS0xLjE4NS0xMy42ODctMy4yODFMMTI0LjkyLDM2NS42OUwzMzYuNzc2LDE1My45MDF6IiBmaWxsPSIjRkZDQTI4Ii8+PHBhdGggZD0iTTIyNi45ODYsMTcxLjM4MUwxMjQuOTI0LDM2NS42OTdsNDUuNDYtMjgzLjk5OGMxLjY3NC04Ljg0Nyw2LjcxLTkuNjk5LDExLjIwMy0xLjg5TDIyNi45ODYsMTcxLjM4MXoiIGZpbGw9IiNGRkEwMDAiLz48L2c+PC9zdmc+" width="40px">`;
      });
      document.querySelectorAll("._dynatrace").forEach(element => {
        // element.innerHTML = `<a href="http://seekvectorlogo.com/dynatrace-vector-logo-svg/" target="_blank"><img src="http://seekvectorlogo.com/wp-content/uploads/2018/01/dynatrace-vector-logo.png" height="45px"/>`
        element.innerHTML = "Dynatrace";
      });
      document.querySelectorAll("._sqlite").forEach(element => {
        // element.innerHTML = `<img src="http://seekvectorlogo.com/wp-content/uploads/2019/07/sqlite-vector-logo.png" height="30px"/>`
        element.innerHTML = "SQLite";
      });
      document.querySelectorAll("._highchart").forEach(element => {
        element.innerHTML = "Highcharts";
      });
    }
  },

  created() {
    if (localStorage.getItem("_skills") == null) {
      this.get_skills();
    } else {
      this.skills = JSON.parse(localStorage.getItem("_skills"));
    }
    if (localStorage.getItem("_exp") == null) {
      this.get_exp();
    } else {
      this.experience = JSON.parse(localStorage.getItem("_exp"));
    }
  },

  mounted() {
    this.icon_fix();
    const exp_boxes = document.querySelectorAll(".exp_box");
    const abouts = document.querySelectorAll(".fadeup");
    const options = {
      root: null,
      threshold: 0.25
      // rooMargin:'200px'
    };

    //Observer for experience
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else if (entry.isIntersecting) {
          entry.target.classList.add("animated", "fadeInUp", "reveal_me");
        }
        observer.unobserve(entry.target);
      });
    }, options);

    //Observer for abouts
    const about_options = {
      root: null,
      threshold: 0
    };
    const about_observer = new IntersectionObserver(function(entries) {
      let transitionDelay = 0;
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else if (entry.isIntersecting) {
          entry.target.style.transitionDelay = transitionDelay + "s";
          entry.target.classList.add("reveal_slide");
          transitionDelay = transitionDelay + 0.3;
        }
        about_observer.unobserve(entry.target);
      });
    }, about_options);

    //Observing observers
    exp_boxes.forEach(box => {
      observer.observe(box);
    });

    abouts.forEach(el => {
      about_observer.observe(el);
    });
  }
};
</script>

<style lang="scss" scoped>
.sec_wrapper{
  min-height: 90vh;
  @include sm{
    min-height: fit-content;
  }
}
.profile_section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 50vh;
  @include sm {
    grid-template-columns: 1fr;
    grid-gap: 10%;
  }
  @include md {
    grid-template-columns: 1fr;
    grid-gap: 10%;
  }

  // .section_title {
  //   // color: $offWhite;
  //   writing-mode: vertical-rl;
  //   text-orientation: sideways;
  //   font-size: 5vmin;
  //   font-weight: 800;
  // }

  ._left,
  ._right {
    display: flex;
  }

  ._about,
  ._skills {
    flex: 1;
  }
  ._left {
    ._about {
      display: grid;
      justify-content: center;
      overflow-y: hidden;

      .c_wrapper {
        overflow-y: hidden;
        @include sm {
          margin-bottom: 16px;
        }

        .c_title {
          opacity: 0;
          font-family: "Montserrat", sans-serif;
          text-transform: lowercase;
          font-size: 4vmin;
          transform: translateY(5px);
          transition-property: transform, opacity;
          transition-duration: 1s;
        }
        .c_text {
          opacity: 0;
          color: #ddd;
          font-size: 3.2vmin;
          transform: translateY(5px);
          transition-property: transform, opacity;
          transition-duration: 1s;
        }
      }
    }
  }
  ._right {
    ._skills {
      display: grid;
      grid-gap: 25px;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      justify-items: center;
      align-content: center;
      @include sm {
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
      }
      @include md {
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
      }
      .icon_wrapper {
        // background: #aeb1ae5e;
        display: flex;
        align-items: center;
        justify-content: center;

        &:nth-child(even) {
          animation-delay: 0.3s;
        }
        &:nth-child(odd) {
          animation-delay: 0.1s;
        }
        // @include transition;

        i {
          transition: all 0.5s;
          // //  color: #888;

          &:hover {
            transform: scale(1.5);
            // color: $offWhite;
          }

          @include sm {
            font-size: 10vmin;
          }
          @include md {
            font-size: 10vmin;
          }
        }
      }
    }
  }
}

._experience {
  background: $offWhite;
  // background: #fff;
  width: 100%;
  min-height: 100vh;
  padding-top: 4rem;
  padding-bottom: 8rem;
  // margin-bottom: 4rem;

  .article_layout {
    display: grid;
    grid-template-columns:
      minmax(3rem, 1fr)
      minmax(300px, 60ch)
      minmax(3rem, 1fr);
    grid-row-gap: 1rem;

    .section_title {
      grid-column: 1 / auto;
      font-size: 8vmin;
    }

    .exp_box {
      opacity: 0;
      grid-column: 2 / auto;
      background: #fff;
      padding: 2rem;
      box-shadow: 0px 18px 30px -12px #c2c2c2;
      border-bottom: 1px solid $orange;
      position: relative;
      .exp_title {
        color: $darkSec;
        margin-bottom: 1rem;
        // font-family: 'Montserrat', sans-serif;
      }
      .exp_short_desc {
        color: $darkPrime;
        font-size: 1rem;
        @include sm {
          font-size: 0.9rem;
        }
      }
      ._tech {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 1rem;
        .tech_icon {
          font-size: 2rem;
          margin-right: 2rem;

          .noicon {
            font-size: 0.8rem !important;
            color: #888;
            text-decoration: none;
            font-weight: 800;
          }
        }
      }

      .clients {
        display: flex;
        .client_name {
          padding: 5px 20px;
          background: rgba(182, 182, 182, 0.445);
          margin-right: 1rem;
          color: $darkPrime;
          font-size: 0.8rem;
          font-weight: 500;
        }
      }

      .period {
        position: absolute;
        right: -1.2rem;
        top: 10px;
        font-size: 0.8rem;
        border-right: 2px solid $yellow;
        color: #888;
        // padding:5px;
        writing-mode: vertical-rl;
        text-orientation: sideways;
      }
    }
  }
}
</style>>