<template>
  <div class="container">
    <p class="fs-1 activity-text activity-subtitle">Actividades similares:</p>
    <div class="d-flex flex-wrap">
      <ActivityCard
        v-for="(activity, index) in activities"
        :key="index"
        :activity="activity"
      ></ActivityCard>
    </div>
  </div>
</template>

<script>
import ActivityCard from '@/components/ActivityCard.vue'

export default {
  props: {
    activities: Array
  },
  components: {
    ActivityCard
  }
}
</script>

<style scoped>
.activity-text {
  font-family: Quicksand;
  font-style: normal;
  color: #464646;
  text-align: left;
  font-weight: 400;
  size: 16px;
}
.activity-subtitle {
  font-size: 22px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -1px;
  margin-top: 40px;
  letter-spacing: -1;
}
</style>
