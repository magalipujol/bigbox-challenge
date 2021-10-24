<template>
  <div class="d-flex flex-wrap">
    <ActivityDescription :activity="activity"></ActivityDescription>
  </div>
</template>

<script>
import ActivityDescription from '@/components/ActivityDescription.vue'

export default {
  name: 'Actividades',
  data () {
    return {
      activities: []
    }
  },
  components: {
    ActivityDescription
  },
  async mounted () {
    const response = await fetch(
      'https://json-biglifeapp.herokuapp.com/activity?_page=1&_limit=9'
    )
    const data = await response.json()
    this.activities = await data
    for (const activity of this.activities) {
      activity.activity = JSON.parse(activity.activity)
    }
    console.log(this.activities)
  }
}
</script>
