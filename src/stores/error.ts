import { observable } from 'mobx'
import { RootStore } from './root'

export class ErrorStore {
  rootStore: RootStore

  @observable globalError = ''

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }
}
