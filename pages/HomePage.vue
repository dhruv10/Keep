<template>
  <div class="home-page">
    <div class="home-input-div">
      <input class="input input-home" type="text" placeholder="Take a note..." v-model="text">
      <button @click="buttonClicked(text)">Add</button>
      <button @click="increment">{{ counter }}</button>
      <button @click="todoList" >Show on console</button>
    </div>
    <div class="main-content">
      <span>Notes that you add appear here</span>
      <div>
         <ul v-for="(key, item) in items" :key="item.id">
            <li>Task 1</li>
         </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'HomePage',
  data() {
    return {
      text: null,
      items: [],
      randomTest: [],
    }
  },
  computed: mapState(['list', 'counter']),
  todoList() {
      console.log('Data from getters: ', this.$store.getters.todoList);
  },
  methods: {
    // ...mapActions(['add']),
    buttonClicked(text) {

      // Not working with mapActions  
      this.$store.dispatch({
        type: 'add',
        text: text
      })
    // this.add(text);
    },
    increment() {
        this.$store.dispatch({
            type: 'counter'
        })
    }
  }
}
</script>

<style scoped>
.home-page {
  display: inline-block;
  text-align: center;
  width: 80%;
  margin-left: 250px;
}
.input-home {
  width: 40%;
}
.home-input-div {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
.main-content {
  display: flex;
  justify-content: center;
  margin-top: 100px;
  height: 300px;
}
</style>
