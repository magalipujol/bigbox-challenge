<template>
  <div class="d-flex flex-wrap">
    <ActivityDescription :activity="activity"></ActivityDescription>
  </div>
  <SimilarActivities :activities="activities"></SimilarActivities>
</template>

<script>
import ActivityDescription from '@/components/ActivityDescription.vue'
import SimilarActivities from '@/components/SimilarActivities.vue'
import BigboxAPIWrapper from '@/components/BigboxAPIWrapper.vue'

export default {
  name: 'Actividad',
  data () {
    return {
      activities: Array,
      activity: Object
    }
  },
  components: {
    ActivityDescription,
    SimilarActivities
  },
  async mounted () {
    this.activities = await BigboxAPIWrapper.getActivities(1, 4)
    console.log(this.activities)
    this.activity = await BigboxAPIWrapper.getActivityByID(this.$route.params.id)
    console.log('acá')
    console.log(this.activity?.activity.description)
  }
}
</script>
