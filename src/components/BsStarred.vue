<style lang="scss" scoped>
$primary-color: #24292e;
.card {
  margin: 10px;
  border-radius: 4px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12) !important;
  background: white;
  .card__header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: $primary-color;
    padding: 10px;
    color: white;
    border-radius: inherit;
    align-items: center;
    .card__header__icon {
      padding-right: 10px;
    }
  }

  .card__content {
    .card__content__item {
      display: flex;
      border-bottom: 1px solid #eee;
      align-items: center;
      .card__content__item__text {
        padding: 10px;
        color: $primary-color;
      }
      .card__content__item__icon {
        padding: 10px;
        color: $primary-color;
      }
    }
  }
  .card__content--state-empty {
    padding: 10px;
    text-align: center;
  }
}
</style>
<template>
  <div class="card">
    <div class="card__header">
      <i class="material-icons card__header__icon">
        assistant
      </i>
      <span>Favoritos</span>
    </div>
    <div class="card__content">
      <div v-if="userStarred.length > 0">
        <div
          class="card__content__item"
          v-for="starred in userStarred"
          :key="starred.id"
        >
          <i class="material-icons card__content__item__icon">
            star
          </i>
          <a
            class="card__content__item__text"
            :href="starred.html_url"
            target="_blank"
            >{{ starred.name }}</a
          >
        </div>
      </div>
      <div class="card__content--state-empty" v-else>
        <span>Usuário não possui favoritos.</span>
      </div>
    </div>
  </div>
</template>
<script>
import BsButton from "./BsButton.vue";
import BsLoader from "./BsLoader.vue";
import { getStarred } from "../service/user-service";
export default {
  name: "BsRepos",
  props: ["loading"],
  components: {
    BsButton,
    BsLoader
  },
  data() {
    return {
      userStarred: []
    };
  },
  methods: {},
  async created() {
    const resp = await getStarred(this.$route.params.username);
    if (resp.status === 200) {
      this.userStarred = resp.data;
    } else {
      window.alert('Erro interno do servidor.')
    }
  }
};
</script>
