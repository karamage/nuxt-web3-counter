// SPDX-License-Identifier: MIT
// contract/SingleNumRegister.sol
pragma solidity ^0.8.11;

contract SingleNumRegister {
  struct StoreNumber {
    uint256 number;
  }

  StoreNumber public storeNumber = StoreNumber(0);

  function set(uint256 num) public {
    storeNumber = StoreNumber(num);
  }

  function get() public view returns (uint256) {
    return storeNumber.number;
  }
}