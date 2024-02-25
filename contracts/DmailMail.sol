// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;


contract Dmail  {

    event Message(
        address indexed from,
        string indexed to,
        string indexed path
    );

    function send_mail(string memory to, string memory path) public  {
        address owner = msg.sender;
        emit Message(owner,to,path);
    }
}