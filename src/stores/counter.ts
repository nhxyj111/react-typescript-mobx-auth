import { observable } from 'mobx'
import { RootStore } from './root'

export class CounterStore {
  rootStore: RootStore

  @observable count = 0

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }
}
