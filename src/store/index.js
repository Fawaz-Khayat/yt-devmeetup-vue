import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      { imageUrl: require('@/assets/newyork.jpg'),
        id: 'fadsfasdgaeqg',
        title: 'Meetup in New York',
        date: '2017-07-18'},
      { imageUrl: require('@/assets/paris.jpg'),
        id: 'dfasdfewqrfad',
        title: 'Meetup in Paris',
        date: '2017-07-19'}
    ],
    user: {
      id: 'jkfhajdfhjfdh',
      registeredMeetups: ['fhdkfhakfhakkk']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: payload.id
      }
      // Reach out to firebase and store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id == meetupId
        })
      }
    }
  }
})
