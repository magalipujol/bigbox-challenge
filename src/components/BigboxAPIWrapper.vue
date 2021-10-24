<script>
export default {
  async getActivities (page, limit) {
    const response = await fetch(
      `https://json-biglifeapp.herokuapp.com/activity?_page=${page}&_limit=${limit}`
    )
    const data = await response.json()
    const activities = await data
    for (const activity of activities) {
      activity.activity = JSON.parse(activity.activity)
    }
    return activities
  },
  async getActivityByID (id) {
    const response = await fetch(
      ` https://json-biglifeapp.herokuapp.com/activity/${id}`
    )
    const data = await response.json()
    const activity = await data
    activity.activity = JSON.parse(activity.activity)
    return activity
  }
}
</script>
