<template>
  <div class="aboutPage">
    <div class="gradient-section">
      <h1 class="title">About us</h1>
      <p class="text">
        Fabrique aims at creating a way for users to have access to sustainably 
        made products. As users have started shifting more towards sustainable 
        and eco friendly products there is a need for sustainable fashion to be
         made accessible which is what we aim to accomplish with our platform.
     </p>
    </div>
    <img class="heroAbout" src="@/assets/img/heroAbout.jpg" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.gradient-section {
  display: flex;
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
  position: relative;
  /* align-self: center; */
  text-align: center;
  letter-spacing: 0.3em;
  font-weight:bold;
  text-indent: 0.3em;
  font-size:smaller;
  color: #fff;
  text-transform: uppercase;
  font-family: "Magisho", sans-serif;
  margin-top: 0.8%;
  padding-left: 1em;
  text-shadow: 1px 1px 2px black;
}
.gradient-section .text {
  position: relative;
  align-self: center;
  text-align: right;
  font-family: "Magisho", sans-serif;
  font-size:1em;
  font-weight: 100;
  letter-spacing: 0.1em;
  margin-top: 10%;
  padding: 0% 10%;
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
    display: flex;
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
