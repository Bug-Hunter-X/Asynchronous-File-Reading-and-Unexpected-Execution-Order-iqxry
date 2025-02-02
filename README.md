# Node.js Asynchronous File Reading Bug

This repository demonstrates a common issue in Node.js related to asynchronous operations and the order of execution.  Specifically, it showcases the problem where a message indicating the start of a file reading operation appears before the file is actually read, potentially leading to race conditions and incorrect results.

## Bug Description

The `bug.js` file attempts to read a file asynchronously using `fs.readFile`.  However, due to the asynchronous nature of the operation, the `console.log('File reading initiated.');` statement executes *before* the callback function within `fs.readFile` (which contains the actual file processing).  This can be problematic if any part of the code depends on the successful completion of file reading.

## Solution

The `bugSolution.js` demonstrates a corrected approach.  The code logic that depends on the file's contents is placed *inside* the `fs.readFile` callback function to ensure that it only executes after the file has been successfully read.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js` to observe the unexpected order of output.
3. Run `node bugSolution.js` to see the correct, expected behavior.