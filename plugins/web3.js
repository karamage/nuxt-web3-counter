// plugins/web3.js
import Web3 from "web3"
import artifacts from "~~/build/contracts/SingleNumRegister.json"

export default async function(context, inject) {
  let web3

  if (
    typeof window !== 'undefined' &&
    typeof window.ethereum !== 'undefined'
  ) {
    // MetaMask経由でブロックチェーンに接続
    web3 = new Web3(window.ethereum)
    window.ethereum.enable().catch((error) => {
      // User denied account access
      console.log(error)
    })
  } else if (
    typeof window !== 'undefined' &&
    typeof window.web3 !== 'undefined'
  ) {
    // 説読後
    web3 = new Web3(window.web3.currentProvider)
  } else {
    const httpEndpoint = "http://127.0.0.1:7545" // if change it, connect some chain.
    web3 = new Web3(new Web3.providers.HttpProvider(httpEndpoint))
  }

  let networkId = await web3.eth.net.getId() // チェーンのネットワークID取得
  // コントラクトの初期化
  let contract = new web3.eth.Contract(
    // 設定ファイルとアドレスが必要
    artifacts.abi, // コントラクトのコンパイル後の設定ファイル
    artifacts.networks[networkId].address // ネットワークIDごとに保存されているコントラクトのアドレスを読み込む
  )
  inject('web3', web3)
  inject('contract', contract)
}