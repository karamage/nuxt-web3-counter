// SPDX-License-Identifier: MIT
// contract/SingleNumRegister.sol
pragma solidity ^0.8.11;

contract SingleNumRegister {
  struct StoreNumber {
    address from;
    uint256 number;
  }

  StoreNumber[] public storeNumbers;

  function set(uint256 num) public {
    storeNumbers.push(StoreNumber(msg.sender, num));
  }

  function get() public view returns (uint256) {
    uint256 index = storeNumbers.length - 1;
    return storeNumbers[index].number;
  }
}