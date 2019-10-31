<template>
  <div class="page_wrapper">
    <div class="section_head light_color"><div class="head_txt">Profile</div></div>
    <div class="skill_section">
      <div class="skill_left">
          <h1 class="skill_head display_1 bold_txt light_color">
            Skills
          </h1>
      </div>
      <div class="skill_right">
        <div class="_skills animated zoomIn" style="font-size:5rem;">
           <div v-for="skill in skills" :key="skill.id" class="icon_wrapper">
             <i :class="skill.class"></i>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/firebase.js";
export default {

  data(){
    return{
    skills: []
    }
  },

  created(){
    const skillsRef =  db.collection("skills");
     const orderedSkills = skillsRef.orderBy('order')
    orderedSkills.get()
    .then(snapshot => {
      snapshot.forEach(doc => {
       this.skills.push(doc.data())

      });
    });

  }

}
</script>

<style lang="scss" scoped>
.skill_section{
  display: grid;
  grid-template-columns: 1fr 1fr;

  @include sm{
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
  @include md{
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  .skill_left{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .skill_head{
      // flex: 1
    }

  }
  .skill_right{
    ._skills{
      display: grid;
      grid-gap: 25px;
      // grid-row-gap: 20px;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      justify-items: center;
      align-content: center;
      .icon_wrapper{
        // background: #aeb1ae5e;
        display: flex;
        align-items: center;
        justify-content: center;

        // &:nth-child(even){
        //   margin-bottom: 50px;
          

        // }
         i{
           transition: all 0.5s;
           color: #888;
           &:hover{
             transform: scale(1.5);
              color: $offWhite;
           }
      }
      }
     
    }
  }

}
</style>>