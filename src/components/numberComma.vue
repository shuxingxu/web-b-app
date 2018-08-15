<template>
  <span>{{_numberComma}}</span>
</template>
<script>
import { numberComma } from 'vux'
export default {
  name: 'numberComma',
  computed:{
    _numberComma(){
      return numberComma(this.number)
    }
  },
  props: {
    number: {
      type: Number,
      default: 0
    }
  }
}
</script>
