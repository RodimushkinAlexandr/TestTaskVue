import { defineStore } from 'pinia'
import type Task from '../types/Task'
import axios from 'axios'


interface TaskStore {
  task: Task | null
}

export const TaskStore = defineStore({
  id: 'Task',
  state: (): TaskStore => ({
    task: null
  }),
  getters: {
    getTask() : Task | null {
      return this.task
    }
  },
  actions: {
    async getNewTask(): Promise<void> {
      try {
        const newTask = await axios.get('./taskApi.json')
        this.task = newTask.data
      } catch (e) {

      }
    },
  }
})