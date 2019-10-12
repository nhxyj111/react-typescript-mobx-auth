import React, { createContext } from 'react'
import { create } from 'mobx-persist'
import { CounterStore } from './counter'
import { ErrorStore } from './error'
import { AuthStore } from './auth'

const hydrate = create({
  storage: localStorage,
  jsonify: true,
})

export class RootStore {
  // routerStore = new RouterStore(this);
  couterStore = new CounterStore(this)

  errorStore = new ErrorStore(this)

  authStore = new AuthStore(this)

  constructor() {
    hydrate('auth', this.authStore)
  }
}

export const RootStoreContext = createContext(new RootStore())
