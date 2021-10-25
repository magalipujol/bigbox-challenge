<template>
  <Carousel>
    <Slide> Slide 1 Content </Slide>
    <Slide> Slide 2 Content </Slide>
  </Carousel>
</template>

<script>
// import { Carousel, Slide } from 'vue-carousel'
const { Carousel, Slide } = require('vue-carousel')
export default {
  name: 'Carousel',
  components: {
    Carousel,
    Slide
  }
}
</script>
