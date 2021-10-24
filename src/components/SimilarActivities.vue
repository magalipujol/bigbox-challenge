<template>
  <div class="d-flex flex-wrap">
    <p>Actividades similares:</p>
    <ActivityCard
      v-for="(activity, index) in activities"
      :key="index"
      :activity="activity"
    ></ActivityCard>
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
