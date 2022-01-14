<template>
  <Tutorial/>
</template>

<script>
export default {
  mounted() {
    console.log('Current Block Number')
    this.$web3.eth.getBlockNumber().then(console.log)
  }
}
</script>
