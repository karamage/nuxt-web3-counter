// migrations/2_deploy_contract.js
const SingleNumRegister = artifacts.require('SingleNumRegister')

module.exports = function (deployer) {
  deployer.deploy(SingleNumRegister)
}