import { Store } from "vuex";

export const state = () => ({
    counter: 0,
    list: []
})

export const mutations = {
    addTodo(state, { text }) {
        state.list.push({
            text
        })
        console.log('State list: ', state.list)
    },
    increment(state) {
        state.counter++;
    }
}

export const actions = {
    add(context, { text }) {
        context.commit('addTodo', text)
    },
    counter(context) {
        context.commit('increment')
    }
}

export const getters = {
    todoList: (state, getters) => {
        return getters.list;
    }
}

// import Vue from 'vue'
// import Vuex from 'vuex';

// Vue.use(Vuex)


// export const store = new Vuex.Store({
//     state: {
//         counter: 0,
//         list: []
//     },
//     mutations: {
//         addTodo(state, {text}) {
//             state.list.push({
//                 text
//             })
//             console.log('State list: ', state.list)
//         },
//         increment(state) {
//             state.counter++;
//         }
//     },
//     actions: {
//         add(context) {
//             context.commit('add')
//         }
//     }
// })
