<template>
  <div class="counter">
    <div class="counter-label">
      <div>Counter:{{ number }}</div>
    </div>
    <div class="increment">
      <button
        @click="increment()"
      >
        Increment
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0, // コントラクトから取得する数値
    }
  },
  mounted() {
    // for debug
    console.log('Current Block Number')
    this.$web3.eth.getBlockNumber().then(console.log)
    // read counter from smart contract
    this.getNumber()
  },
  methods: {
    async getNumber() {
      // コントラクトからの読み込み部分
      let ret = await this.$contract.methods.get().call()
      this.number = Number(ret) // フロントへ反映
    },
    async increment() {
      let accounts = await this.$web3.eth.getAccounts()
      // MetaMaskのアカウント取得
      let account = accounts[0]

      // コントラクトへの書き込み
      const next = this.number + 1
      let ret = await this.$contract.methods.set(next).send({from: account})

      this.number = next
    }
  }
}
</script>

<style scoped>
.counter {
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
}
.counter-label {
  font-size: 36px;
  font-weight: bold;
}
.increment {
  margin-top: 8px;
}
</style>