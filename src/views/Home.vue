<template>
  <main>
      <div class="main">
    <div class="left_main">
      <div class="overlay_grid">
        <div class="_bg  animated fadeInLeft slow"></div>

      
        <div class="_fg animated fadeInDown slow">
         <!-- <div class="content"> -->
       
            <div class="title">
              Fullstack <br>Developer
              <span style="color:#f78608"></span>  
            </div>
            <div class="heading">
               with love for <br> Design
            </div>
              
         <!-- </div> -->
            
        </div>
        
      </div>
    </div>
    <div class="right_main">
      <div class="dp_grid">
         <div class="_frame heading  animated fadeInRight" style="color:#ddd; display:flex; align-items:center; justify-content:center;">Hi,</div>
        <img src="@/assets/me.png" alt="" srcset="" height="300px" class="_dp animated zoomIn">
       
      </div>

      <div class="_intro animated fadeInUp slower">
        <div class="_intro_text">
            I am Sumit, a Software Engineer from Pune, India, <br> currently working with Zensar Technologies <br>
        I create scalable web apps and make sure they look awesome while I am at it.
        </div>
      
        <div class="btn btn-yellow">
          <div class="btn_text">
              Know More  
          </div>
          <div class="btn_icon">
            <font-awesome-icon :icon="['fas', 'arrow-right']" />

          </div>
      
        
      </div>
      </div>
      
    </div>
  </div>

  <section class="section">

  </section>
  </main>

</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
<style lang="scss" scoped>

.main {
  width: 100%;
  height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @include sm{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 50px;
    min-height: 100vh;
  }

  .left_main {
    flex: 1;
    color: #eee;
    .overlay_grid {
      display: grid;     
      grid-template-columns: 50px 50px 5fr 50px 50px;
      grid-template-rows: 1fr 1fr 50px;
      // height: 70vh;
      ._bg {
        background: transparent;
        border-top:  5px solid $yellow;
        border-right:  5px solid $yellow;
        border-bottom:  5px solid $yellow;
        grid-column: 1/span 4;
        grid-row: 2/span 2;
      }
      ._fg {
        //  background: $darkPrime;
        grid-column: 3/span 1;
        grid-row: 1/span 2;
   
        
      }
    }
  }
  .right_main {
    flex: 1;
    .content{
      color: #ddd;
    }

    ._intro{
      color: #ddd;
      font-size: 18px;
      max-width: 500px;
     
      ._intro_text{
         padding-top: 2rem;
         padding-bottom: 2rem;
      word-wrap: break-word;

      }
      
    }
  }
}

.section{
  background: $offWhite;
  height: 100vh;
}

.dp_grid{
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 200px;

  ._frame{
      
        border-top:  10px solid $orange;
        border-left:  10px solid $orange;
        border-bottom:  10px solid $orange;
        background: transparent;
        grid-row: 2/span 1;
        grid-column: 1 / span 1;
  }
  ._dp{
       grid-row: 1/span 3;
      grid-column: 1 / span 3;
      padding: 10px;
      z-index: 1;
  }
}

</style>
