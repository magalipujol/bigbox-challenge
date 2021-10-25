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
            <router-link :to="'/actividades/' + this.activity?.id" style="text-decoration: none; color: inherit;">
            <h5 class="card-title activity-title">
              {{ this.activity?.title }}
            </h5>
            </router-link>
          </div>
          <div class="col-sm">
            <p class="card-text activity-participants">
              {{ this.activity?.activity.participants }}
              <span class="material-icons-outlined"> person_outline </span>
            </p>
          </div>
        </div>
      </div>
      <p class="card-text activity-location">
        <span class="material-icons-outlined place-icon"> place </span
        >{{ this.activity?.activity.locations[0].province }}
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
.card-title,
.card-text {
  font-family: Quicksand;
  font-style: normal;
  color: #464646;
}

.card-text {
  font-weight: 400;
  size: 14px;
  line-height: 17.5px;
  text-align: left;
}

.card-title, .activity-participants {
  font-weight: 700;
  size: 18px;
  line-height: 22.5px;
  text-align: left;
}

.container {
  padding: 0;
}

.activity-participants {
  text-align: right;
}

.activity-points {
  font-weight: 600;
  size: 18px;
  line-height: 22.5px;
}

.activity-location {
  color: #000;
}

.place-icon {
  color: #FF6C5E;
}

.card {
  padding: 10px;
  margin: 10px;
  border: none;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.card:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
