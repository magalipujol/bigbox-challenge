<template>
  <div class="card" style="width: 18rem">
    <img
      class="card-img-top activity-img"
      :src="this.activity?.activity.image[0]"
      alt="Card image cap"
    />
    <div class="card-body activity-card-body">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <h5 class="card-title activity-title">
              {{ this.activity?.title }}
            </h5>
            <span class="material-icons">&#xE87C;</span>
          </div>
          <div class="col-sm">
            <p class="card-text activity-participants">
              {{ this.activity?.activity.participants }}
            </p>
          </div>
        </div>
      </div>
      <p class="card-text activity-location">
        {{ this.activity?.activity.locations[0].province }}
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
* {
  background-color: #e5e5e5;
}

.card-title,
.card-text {
  font-family: Quicksand;
  font-style: normal;
}

.card-text {
  font-weight: 400;
  size: 14px;
  line-height: 17.5px;
}

.card-title {
  font-weight: 700;
  size: 18px;
  line-height: 22.5px;
}

.activity-points {
  font-weight: 600;
  size: 18px;
  line-height: 22.5px;
}
</style>
