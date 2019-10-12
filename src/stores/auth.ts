import { observable, action } from 'mobx'
import { persist } from 'mobx-persist'
import { RootStore } from './root'
import { axiosInstance } from '../axios'

export class AuthStore {
  rootStore: RootStore

  @persist @observable token = ''

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @action login(username: string, password: string) {
    axiosInstance
      .post('', {
        username,
        password,
      })
      .then(res => {
        const { code, data } = res.data
        if (code === '1') {
          this.token = data
        }
      })
      .catch(err => {
        this.rootStore.errorStore.globalError = err.message
      })
  }
}
