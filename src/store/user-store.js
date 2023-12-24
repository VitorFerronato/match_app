// user-store.js
const userModule = {
    namespaced: true,
    state: () => ({
        nickName: null,
        userEmail: null,
        isLogged: false
    }),
    mutations: {
        UPDATE_USER_DATA(state, userData) {
            state.nickName = userData.nickName;
            state.userEmail = userData.userEmail;
            state.isLogged = userData.isLogged;
        }
    },
    actions: {
        setUserData({ commit }, userData) {
            commit('UPDATE_USER_DATA', userData);
        }
    }
};

export default userModule;
