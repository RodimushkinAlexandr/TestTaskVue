import { defineStore } from 'pinia'
import type User from '../types/User'
import axios from 'axios'


interface UserStore {
  user: User | null
}

export const UserStore = defineStore({
  id: 'User',
  state: (): UserStore => ({
    user: {
      name: 'Anton',
      score: 1000
    }
  }),
})