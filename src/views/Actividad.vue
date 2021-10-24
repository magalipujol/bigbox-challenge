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
  name: 'Actividades',
  data () {
    return {
      activities: []
    }
  },
  components: {
    ActivityDescription,
    SimilarActivities
  },
  async mounted () {
    this.activities = await BigboxAPIWrapper.getActivities(1, 4)
    console.log(this.activities)
  }
}
</script>
