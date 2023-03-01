import { defineStore } from 'pinia'
import pinia from '../index'

interface stateType {
  token: string
}

export const permissionStore = defineStore('permission', {
  persist: true,
  state: (): stateType => ({
    token: '1'
  }),
  getters: {
    getToken(): string {
      return this.token
    }
  },
  actions: {
    setToken(token: string) {
      this.token = token
    }
  }
})

export const usePermissionStore = () => {
  return permissionStore(pinia)
}