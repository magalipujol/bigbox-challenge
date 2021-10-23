<template>
  <div class="d-flex align-content-start flex-wrap">
            <ActivityCard v-for="(activity, index) in activities" :key="index" :activity="activity"></ActivityCard>
  </div>
</template>

<script>
import ActivityCard from '@/components/ActivityCard.vue'

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
    const response = await fetch('https://json-biglifeapp.herokuapp.com/activity?_page=1&_limit=9')
    const data = await response.json()
    this.activities = await data
    for (const activity of this.activities) {
      activity.activity = JSON.parse(activity.activity)
    }
    console.log(this.activities)
  }
}
</script>
