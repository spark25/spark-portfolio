<template>
  <div id="app">
    <header id="nav">
      <div class="brand">
        <div class="brand_logo">
          <img src="@/assets/sklogo.png" alt srcset height="25px" />
        </div>
        <div class="brand_text">toosumit</div>
      </div>
      <div class="ham_icon" @click="showMenu">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </div>
      <div class="nav_menu">
        <div class="menu_item">Home</div>
        <div class="menu_item">Projects</div>
        <div class="menu_item">Misc</div>
        <div class="menu_item">Contact</div>
      </div>
    </header>
    <router-view />
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
export default {
  methods: {
    showMenu() {
      document.querySelector(".nav_menu").classList.toggle("showMe");
    }
  }
};
</script>

<style lang="scss">
// @import "./assets/style/global";

#nav {
  min-height: 70px;
  background: $darkSec;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  font-family: 'Poppins', sans-serif;

  .ham_icon {
    font-size: 18px;
    color: #ddd;
    display: none;

    @include sm {
      display: block;
      cursor: pointer;
    }
  }
  .nav_menu {
    display: flex;
    color: #ddd;
    font-weight: 500;
    text-transform: lowercase;
    align-items: center;
    justify-content: center;

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
      padding: 5px;
      margin-right: 10px;
      display: block;
      height: 100%;
      position: relative;

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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    font-size: 1.5rem;

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
    font-size: 14px;
    color: #ccc;
  }
}
</style>

