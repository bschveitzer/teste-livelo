<style lang="scss">
$primary-color: #24292e;

.header {
  width: 100%;
  background: $primary-color;
  color: white;
  padding: 10px;
  z-index: 32;
  display: flex;
  align-items: center;
  .header__logo {
    cursor: pointer;
    fill: white;
    padding-right: 20px;
  }
}
</style>
<template>
  <header class="header">
    <svg
        class="header__logo"
        height="32"
        viewBox="0 0 16 16"
        width="32"
        aria-hidden="true"
        @click="$router.push('/')"
      >
        <path
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
        ></path>
      </svg>
    <div>
      <bs-input
        name="main-search"
        outlined="true"
        v-model="searchTerm"
        :loading="loading"
        placeholder="Pesquise por membros..."
        append-icon="search"
        @action-triggered="handleSearch"
      />
    </div>
  </header>
</template>
<script>
import BsInput from "./BsInput.vue";
import { search } from '../service/search-service'
export default {
  name: "BsHeader",
  components: {
    BsInput
  },
  data() {
    return {
      searchTerm: "",
      loading: false
    };
  },
  methods: {
    /* Executa a ação de busca caso exista um termo de pesquisa */
    async handleSearch() {
      if(!this.searchTerm) return
      
      this.loading = true
      const resp = await search(this.searchTerm)
      if(resp.status === 200) {
        this.$store.commit('setNewSearch', {search: resp.data, success: true})
        this.$router.push(`/user/${resp.data.login}`)
      } else {
        this.$store.commit('setNewSearch', {search: null, success: false})
        this.$router.push('/')
      }
      this.loading = false
    }
  },
  mounted() {
    /* Tratamento de atualização de informações da busca quando houver reload na página */
    if(this.$route.params.username) {
      this.searchTerm = this.$route.params.username;
      this.handleSearch();
    }
  }
};
</script>
