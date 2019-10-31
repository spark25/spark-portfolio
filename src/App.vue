<template>
  <div id="app">
    <nav id="nav">
      <div class="brand">
        <div class="brand_logo">
          <img src="@/assets/sklogo.png" alt srcset height="25px" />
        </div>
        <div class="brand_text">toosumit</div>
      </div>
      <div class="ham_icon" @click="showMenu">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </div>
      <ul class="nav_menu">
        <router-link to="/" tag="li"  @click.native="showMenu">
          <div class="menu_item">Home</div>
        </router-link>
        <router-link to="/profile" tag="li"  @click.native="showMenu">
          <div class="menu_item">Profile</div>
        </router-link>
        <router-link to="/projects" tag="li"  @click.native="showMenu">
          <div class="menu_item">Projects</div>
        </router-link>
        <router-link to="/contact" tag="li"  @click.native="showMenu">
          <div class="menu_item">Contact</div>
        </router-link>
      </ul>
    </nav>
    <main>
      <router-view />
    </main>

    <div class="footer">
      <div class="brand">
        <div class="brand_logo">
          <img src="@/assets/sklogo.png" alt srcset height="25px" />
        </div>
        <div class="brand_text">toosumit</div>
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
      </div>
      <div class="_cp">Designed and developed by Sumit Kumar</div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/firebase.js";
export default {
  data() {
    return {
      skills: [],
      exp: []
    };
  },
  methods: {
    showMenu() {
      document.querySelector(".nav_menu").classList.toggle("showMe");
    },

    get_skills() {
      const skills = [];
      const skillsRef = db.collection("skills");
      const orderedSkills = skillsRef.orderBy("order");
      orderedSkills.get().then(snapshot => {
        snapshot.forEach(doc => {
          skills.push(doc.data());
        });
        this.$store.dispatch("set_skills", skills);
      });
    },
    get_exp() {
      const exp = [];
      const expRef = db.collection("experience");
      const orderedExp = expRef.orderBy("order");
      orderedExp.get().then(snapshot => {
        snapshot.forEach(doc => {
          exp.push(doc.data());
        });
        this.$store.dispatch("set_exp", exp);
      });
    }
  },
  created() {
     this.$store.dispatch("set_skills");
     this.$store.dispatch("set_exp");
  }
};
</script>

<style lang="scss">
main {
  @include sm {
    margin-top: 100px;
  }
}
#nav {
  min-height: 70px;
  background: $darkSec;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  z-index: 999;

  @include sm {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
  }

  .ham_icon {
    font-size: 18px;
    padding: 10px;
    color: #ddd;
    display: none;

    @include sm {
      display: block;
      cursor: pointer;
    }
  }
  .nav_menu {
    display: flex;
    color: $offWhite;
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    text-transform: lowercase;
    align-items: center;
    justify-content: center;
    list-style: none;

    @include sm {
      transform: translateX(100%);
      background: $darkSec;
      width: 100%;
      height: 50px;
      position: absolute;
      left: 0;
      bottom: -50px;
      transition: all 0.3s ease-in;
    }

    .menu_item {
      padding: 10px 5px;
      margin-right: 10px;
      display: block;
      height: 100%;
      position: relative;
      cursor: pointer;

      &::after {
        content: "";
        width: 100%;
        height: 3px;
        background: $yellow;
        position: absolute;
        left: 0;
        bottom: 0;
        transform: scaleX(0);
        transform-origin: center;
        transition: all 0.3s ease-in;
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: center;
        background: $orange;
        // width: 100%;
      }
    }

    .router-link-exact-active {
      .menu_item::after {
        content: "";
        width: 100%;
        height: 3px;
        background: $yellow;
        position: absolute;
        left: 0;
        bottom: 0;
        transform: scaleX(1);
      }
    }
  }
}

.showMe {
  transform: translateX(0) !important;
}

.brand {
  padding: 5px 20px;
  display: flex;
  align-items: center;

  .brand_logo {
    padding-right: 10px;
  }
  .brand_text {
    font-family: "Source Code Pro", monospace;
    font-weight: 600;
    font-size: 24px;
    letter-spacing: 5px;
    color: #ddd;
  }
}

.footer {
  // font-size: 12px;
  color: #ddd;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 3rem;
  background: $notBlack;

  @include sm {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .social_icons {
    // flex: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    font-size: 1.5rem;
    padding: 1rem 2rem;

    @include sm {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    a {
      text-decoration: none;
      color: #ccc;

      &:hover {
        color: $offWhite;
      }
    }
  }

  ._cp {
    // flex: 2;
    font-size: 14px;
    color: #ccc;
    padding: 1rem 2rem;
    text-align: center;
  }
}
</style>

