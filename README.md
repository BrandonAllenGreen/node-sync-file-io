## Requirements
Create a JavaScript file to act as a Node.js program named `file-io.js`. This program should accept a single argument which should be a file path. Executing the program will print the contents of that file onto the terminal through the [stdout](http://node.readthedocs.io/en/stable/api/process/#processstdout) stream. Executing the program without an argument should simply return without printing anything. This functionality to be similar to the `cat` command.

Optional: create a second file named `file-io.json` for your program to read.

Example:

    {
      "languages": {
        "JavaScript": "Awesome",
        "C++": "Difficult",
        "BASIC": "Old"
      }
    }
Expected:

    $ ./file-io.js 07.json
    {
      "languages": {
        "JavaScript": "Awesome",
        "C++": "Difficult",
        "BASIC": "Old"
      }
    }