<template>
  <div class="card" style="width: 18rem">
    <img
      class="card-img-top activity-img"
      :src="this.activity?.activity.image[0]"
      alt="Card image cap"
    />
    <div class="card-body activity-card-body">
      <h5 class="card-title activity-title">{{ this.activity?.title }}</h5>
      <p class="card-text activity-location">
        {{ this.activity?.activity.locations[0].province }}
      </p>
      <p class="card-text activity-participants">
        {{ this.activity?.activity.participants }}
      </p>
      <p class="card-text activity-description">
        {{ this.activity?.activity.description }}
      </p>
      <p class="card-text activity-points">
        {{ this.activity?.points }} puntos
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    activity: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
