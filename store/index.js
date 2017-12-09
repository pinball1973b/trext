import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    title: 'Agenda',
    items: [
      {list: 'Agenda', uri: 'page1'},
      {list: 'Nuxt.jsとは', uri: 'page2'},
      {list: 'Nuxtのはじめ方', uri: 'page3'},
      {list: '実際に作ってみた', uri: 'page4'},
      {list: 'こけたポイント', uri: 'page5'},
      {list: '使い方例', uri: 'page6'}
    ]
  }
})

export default store
