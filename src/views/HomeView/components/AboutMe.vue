<template>
  <section class="about-me-section">
    <h2>lorem Ipsum<br>
        lorem Ipsum<br>
        lorem Ipsum</h2>

    <h3>lorem Ipsum <br>
        lorem Ipsum <br>
        lorem Ipsum</h3>
  </section>
</template>
<style scoped>
.about-me-section{
  /* flex items-center justify-between flex-col bg-teal-300  */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 4rem;
  line-height: 2.2em;
  height: 65vh;
  /* background-color: tomato; */
}

@media (min-width: 600px) {
  .about-me-section{
    flex-direction: row;
    justify-content: space-between;
    
    width: 80%;
  }
}
</style>
