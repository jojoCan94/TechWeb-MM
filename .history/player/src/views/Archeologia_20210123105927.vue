<template>
  <div id="app">
    <header>
      <h1>Slider Puzzle</h1>
    </header>

    <Board ref="board" v-show="playing" @restart="restart" />
    <OptionsPane ref="optionsPane" @gameStart="start" v-show="!playing" />

  </div>
</template>

<script>
import Board from 'player\src\components\Board.vue'
import OptionsPane from 'player\src\components\OptionPane.vue'
export default {
  name: 'app',
  components: {
    Board,
    OptionsPane
  },
  data () {
    return {
      playing: false
    }
  },
  methods: {
    start (...args) {
      this.playing = true
      this.$refs.board.start(...args)
    },
    restart () {
      this.playing = false
      this.$refs.optionsPane.reset()
    }
  }
}
</script>

<style lang="scss">
*, *::before, *::after {
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #368ba0;
}
#app {
  font: 14px/20px sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  header {
    h1 {
      font-weight: 100;
      height: 80px;
      line-height: 80px;
      font-size: 38px;
    }
  }
  footer {
    color: #555;
    margin-top: 60px;
  }
}
</style>