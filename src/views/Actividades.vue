<template>
  <div class="d-flex flex-wrap">
      <ActivityCard
        v-for="(activity, index) in activities"
        :key="index"
        :activity="activity"
      ></ActivityCard>
    </div>
    <router-link tag="button" :to="'/actividades/page=' + (Number($route.params.page)-1) + '/limit=' + $route.params.limit"><button class="btn btn-primary">prev</button></router-link>
    <router-link tag="button" :to="'/actividades/page=' + (Number($route.params.page)+1) + '/limit=' + $route.params.limit"><button class="btn btn-primary">next</button></router-link>

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
    this.activities = await BigboxAPIWrapper.getActivities(this.$route.params.page, this.$route.params.limit)
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
