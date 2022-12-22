// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Calculator {

    uint public result;
    event success(string msg, uint value);

    function addNum(uint num1, uint num2) public returns(uint){
        result = num1 + num2;       
        emit success("Addition done", result);
        return result;
    }

    function subNum(uint num1, uint num2) public returns(uint){
        result = num1 - num2;    
        emit success("Subtraction done", result);
        return result;
    }

    function mulNum(uint num1, uint num2) public returns(uint){
        result = num1 * num2;    
        emit success("Multiplication done", result);
        return result;
    }

    function divNum(uint num1, uint num2) public returns(uint){
        result = num1 / num2;    
        emit success("Division done", result);
        return result;
    }
}   