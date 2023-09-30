<template>
  <div >
    <div class="gradient-section">
      <div class="section">
        <h1 class="title">ORDER SUCCESSFUL!</h1><hr>
        <p class="text">
          Thank you for shopping with us! Visit Again!<br><br>More about Us<br>
          Fabrique aims at creating a way for users to have access to sustainably 
          made products. As users have started shifting more towards sustainable 
          and eco friendly products there is a need for sustainable fashion to be
          made accessible which is what we aim to accomplish with our platform.
      </p>
     </div>
    </div>
    <img class="heroAbout" src="@/assets/img/heroAbout.jpg" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.section{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
}
.gradient-section {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(transparent, rgb(0, 0, 0));
  z-index: -1;
  text-align: center;
  align-items: center;
  justify-content: top;
  overflow: hidden;
}
.gradient-section .title {
  position: absolute;
  align-self: center;
  text-align: center;
  letter-spacing: 0.3em;
  font-weight: 100;
  text-indent: 0.3em;
  font-size: 3rem;
  color: #fff;
  text-transform: uppercase;
  font-family: "Magisho", sans-serif;
  margin-top: 4em;
  text-shadow: 1px 1px 2px black;
}
.gradient-section .text {
  position: absolute;
  align-self: center;
  text-align: center;
  font-family: "Magisho", sans-serif;
  font-size: 1.3rem;
  font-weight: 100;
  letter-spacing: 0.1em;
  margin-top: 15em;
  padding: 0em 20em;
  text-shadow: 1px 1px 2px black;
  color: #fff;
}

.heroAbout {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: -5;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  z-index: -2;
  object-position: top;
  animation: fade-in 0.5s forwards;
  overflow: hidden;
}

@media only screen and (max-width: 600px) {
  
  .gradient-section .title {
    font-size: 2rem;
  }
  .gradient-section .text {
    font-size: 1rem;
    /* width: 40vh; */
    position: relative;
    display: flex;
    width: 120%;
  }
  .section{
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: 100%;
  text-align: center;
  align-items: center;
  padding-left: 1em;
}
}
</style>
