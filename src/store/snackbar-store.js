const state = {
    message: null,
    type: null
};

const mutations = {
    reset(state) {
        state.type = null
        state.message = null
    },
    set(state, data) {
        state.message = data.message
        state.type = data.type
    }
};

const getters = {
    snackbarData: state => state
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
};
