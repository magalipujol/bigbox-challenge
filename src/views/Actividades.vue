<template>
  <div class="d-flex flex-wrap" style="max:width=50%">
      <ActivityCard
        v-for="(activity, index) in activities"
        :key="index"
        :activity="activity"
      ></ActivityCard>
    </div>
    <router-link tag="button" :to="'/actividades/page=' + (Number($route.params.page)-1) + '/limit=' + $route.params.limit"><button class="btn btn-primary"><span class="material-icons">
chevron_left
</span></button></router-link>
    <router-link tag="button" :to="'/actividades/page=' + (Number($route.params.page)+1) + '/limit=' + $route.params.limit"><button class="btn btn-primary"><span class="material-icons">
navigate_next
</span></button></router-link>
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

.btn-primary {
  background: #FF6C5E;
  color: white;
  border: white solid 2px;
  border-radius: 50%;
  margin: 15px;
}

.btn-primary:hover {
  border: #FF6C5E solid 2px;
}
.d-flex {
  justify-content: center;
  padding-top: 5%
}
</style>
