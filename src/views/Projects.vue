<template>
  <div class="_project">
    <template v-if="currentProject">
    <div class="project_hero_grid">
      <div class="section_title">{{ currentProject.title }}</div>

      <div class="about_project">
        <div class="project_image">
          <img :src="currentProject.heroImage" alt="Project Image" srcset class="hero_image" />
        </div>
        <div class="project_desc">
          <p>{{ currentProject.desc }}</p>
        </div>
      </div>
      <div class="project_carousel" v-if="projects.length > 0">
        <carousel :nav="false" :mouseDrag="false" :responsive="{0:{items:2, dots:true},600:{items:4,dots:false}}">
          <template slot="prev">
            <span class="prev">
              <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </span>
          </template>
          <img
            :src="project.thumb"
            class="project_thumb"
           
            v-for="project in projects"
            :key="project.id"
            :class="{ 'project_thumb_active' :project.order == 1 }"
            @click="selectProject(project.id)"
            :data-after-content="project.title"
          />
          <template slot="next">
            <span class="next">
              <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </span>
          </template>
        </carousel>
      </div>
    </div>
    </template>
    <template v-else>
        <div class="spinner lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </template>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import db from "@/firebase/firebase.js";
export default {
  components: { carousel },
  data() {
    return {
      projects: [],
      currentProject: null
    };
  },
  methods: {
    selectProject(id) {
      let thumbs = document.querySelectorAll('.project_thumb')
      thumbs.forEach(el =>{
        el.classList.remove('project_thumb_active')
      })

      event.target.classList.add('project_thumb_active')
      
      this.currentProject = this.projects.filter(project => {
        return project.id == id;
      })[0];
    }
  },
  created() {
    const projectRef = db.collection("projects");
    const orderedProjects = projectRef.orderBy("order");

    orderedProjects.get().then(snapshot => {
      snapshot.forEach(doc => {
        let project = doc.data();
        project.id = doc.id;
        this.projects.push(project);
      });
      this.currentProject = this.projects[0];
      document.querySelector('.project_thumb').classList.add('project_thumb_active')
    });
  }
};
</script>

<style lang="scss" scoped>
._project {
  padding: 2rem 0;
  height: calc(100vh - 64px);
  margin-bottom: 4rem;

  @include sm {
    height: calc(100vh - 56px);
    margin-bottom: 2rem;
  }

  .project_hero_grid {
    display: grid;
    grid-template-columns:
      minmax(2rem, 1fr)
      minmax(300px, 80%)
      minmax(2rem, 1fr);
    grid-template-rows: 380px auto;
    grid-row-gap: 15px;

    .section_title {
      grid-column: 1 / auto;
      font-size: 5vmin;
    }
    .about_project {
      display: grid;
      grid-template-columns: 2fr 1fr;

      @include sm {
        grid-template-columns: 1fr;
      }
      .project_image {
        overflow: hidden;
        .hero_image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          
        }
      }
      .project_desc {
        color: $offWhite;
        overflow: hidden;
        font-size: 0.95rem;
        padding: 0 15px 15px 15px;
        @include sm {
          padding: 15px 0 0 0;
          font-size: 0.8rem;
        }
      }
    }

    .project_carousel {
      grid-row: 2 / span 1;
      grid-column: 2 / -1;
      position: relative;

      @include sm {
        grid-column: 1 / -1;
      }

      .project_thumb {
        width: 250px;
        height: 140px;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        transition: all 0.5s ease-in;
        opacity: 0.5;
        z-index: 10;
        @include sm {
        width: 50vw;
        height: 30vw;
      }
      }

      .project_thumb_active{
        opacity: 1;
        z-index: 999 !important;
        transform: scale(1.1);
        
      }

      .prev {
        position: absolute;
        top: 0;
        left: 0;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.5);
        color: #000;
        z-index: 2;
        cursor: pointer;
        @include sm {
       display: none
      }
      }
      .next {
        position: absolute;
        top: 0;
        right: 0;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.5);
        color: #000;
        z-index: 2;
        cursor: pointer;
           z-index: 2;
        @include sm {
       display: none
      }
      }
    }
  }
}

.spinner{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-32px);
}
</style>