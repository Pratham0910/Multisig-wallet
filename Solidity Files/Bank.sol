// SPDX-License-Identifier: MIT
pragma solidity ^0.8.5;

contract Bank {
    event Deposit(address sender, address receiver, uint amount);
    //1. Deposit the money
    //2. Withdraw the money
    //3. View balance
    //4. Transfer money
    mapping(address => uint) balances;

    //msg.value -> amount of tokens being sent to the smart contract
    //msg.sender -> the address calling the functiosn in the smart contract
    function deposit() public payable {
        require(msg.value > 0, "Invalid Transaction");
        balances[msg.sender] -= msg.value;
        balances[_recepient] += msg.value;
        emit Deposit(sender, _receiver, msg.value);
    }
    function withdraw(uint256 amount) external{
        bool transactionSuccess = msg.sender.call(value: amount) ();
        require(transacationSuccess, "Transaction was unsuccessful");
        balances[msg.sender] -= amount;
    }
}