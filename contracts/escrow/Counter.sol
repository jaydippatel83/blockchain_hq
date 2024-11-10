// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CustomCounter {
    // Define a struct to store the counter value
    struct Counter {
        uint256 value;
    }

    // Initialize a counter
    Counter private _counter;

    // Function to retrieve the current counter value
    function current() public view returns (uint256) {
        return _counter.value;
    }

    // Function to increment the counter
    function increment() public {
        _counter.value += 1;
    }

    // Function to decrement the counter
    function decrement() public {
        require(_counter.value > 0, "Counter: decrement overflow");
        _counter.value -= 1;
    }

    // Function to reset the counter to zero
    function reset() public {
        _counter.value = 0;
    }
}
