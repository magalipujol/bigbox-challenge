<template>
  <div class="d-flex flex-wrap">
      <ActivityCard
        v-for="(activity, index) in activities"
        :key="index"
        :activity="activity"
      ></ActivityCard>
    </div>
</template>

<script>
import ActivityCard from '@/components/ActivityCard.vue'
import BigboxAPIWrapper from '@/components/BigboxAPIWrapper.vue'

export default {
  name: 'Actividades',
  data () {
    return {
      activities: []
    }
  },
  components: {
    ActivityCard
  },
  async mounted () {
    this.activities = await BigboxAPIWrapper.getActivities(1, 9)
    console.log(this.activities)
  }
}
</script>
<style scoped>
.align-content-start {
  align-content: center;
}

.container {
  padding: 0;
  align-content: center;
}
</style>
