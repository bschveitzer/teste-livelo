const state = {
  searchObject: null,
  searchSuccess: null
};


const mutations = {
  setNewSearch(state, data) {   
    state.searchObject = data.search;
    state.searchSuccess = data.success;
  }
};

export default {
  state,
  mutations
};
