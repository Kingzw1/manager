import { defineStore } from 'pinia'
interface UserState {
    isShowFold: boolean
    token: string
}
export const useUserStore = defineStore('user', {
    state: (): UserState => ({

        token: '',
        isShowFold: false
    }),

    getters: {

    },

    actions: {

    },


})