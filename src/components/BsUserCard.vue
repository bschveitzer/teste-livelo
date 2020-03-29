<style lang="scss" scoped>
.card {
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12) !important;  
  align-items: center;
  background: white;
  .card__avatar {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    .card__avatar__photo {
      border: 2px solid #24292e;
      border-radius: 50%;  
      height: 160px;
    }
  }

  .card__info {
    height: 30px;
    padding: 10px;
    .card__info__subtitle {
      font-size: 12px;
      color: #9e9e9e;
    }
  }

  .card_actions {
    display: flex;
    justify-content: center;
  }
}
</style>
<template>
  <div class="card" v-if="user">
    <div class="card__avatar">
      <img v-if ="user.avatar_url" class="card__avatar__photo" :src="user.avatar_url">
      <bs-loader v-else/>
    </div>
    <div class="card__info">
      <div>{{ user.name }}</div>
      <div class="card__info__subtitle">{{ user.login }}</div>
    </div>
    <div class="card_actions">
      <bs-button text="Repositórios" append-icon="collections_bookmark" @click="$router.push(`/user/${user.login}/repos`)"/>
      <bs-button text="Votados" append-icon="star"  @click="$router.push(`/user/${user.login}/starred`)"/>
    </div>
  </div>
</template>
<script>
import BsButton from './BsButton.vue'
import BsLoader from './BsLoader.vue'
export default {
  name: "BsUserCard",
  props: ["user", "loading"],
  components: {
    BsButton,
    BsLoader
  }
};
</script>
