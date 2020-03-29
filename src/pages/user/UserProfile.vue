<style lang="scss">
$breakpoint-phone: 640px;
$breakpoint-tablet: 767px;

.grid {
  display: flex;
  flex-wrap: wrap;
  .grid__item {
    width: 100%;
  }
  @media (min-width: $breakpoint-phone){
    .grid__item {
      width: 33%;
      max-width: 400px;
    }
  }
}
</style>
<template>
  <div class="grid">
    <div class="grid__item"> 
      <bs-user-card :user="searchObject"/>
    </div>
    <div class="grid__item"> 
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import BsUserCard from '../../components/BsUserCard.vue'

export default {
  name: "UserProfile",
  components: {
    BsUserCard
  },
  computed: {
    searchObject: function () {
      return this.$store.state.search.searchObject;
    }
  }
};
</script>
