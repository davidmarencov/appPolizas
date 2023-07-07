import { defineStore, acceptHMRUpdate } from 'pinia'

export const useSessionStore = defineStore("session", {
    state: () => ({
        logged: false,
        user: {},
    }),
    getters: {
        isLoggedIn: (state) => state.logged,
    },
    actions: {
        signIn(user: {}) {
            this.user = user;
            this.logged = true;
        },
        signOut() {
            this.logged = false;
            this.user = {};
        },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useSessionStore, import.meta.hot))
  }