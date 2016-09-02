# Node.js Calendar emulator
### Tim Creasy and Marshall Friskics-Warren


## Methodology
We utilized a logic and math heavy approach to making a `cal` emulator. The app
is designed to run and make a copy of the terminal `cal` app character for character.
This includes white space and newlines.  
In an effort to keep the code flexible we focused on finding patterns and deriving
equations to represent the patterns algebraically so that the code would be easily applicable
to any month or year that Zeller's algorithm works on.  
We also did mostly pair programming and used a lot of pen and paper to plan our project.

## Running this app
To test this app you will need Node installed. The file `/bin/node-cal` is an executable
that can be run be typing `./bin/node-cal` from the project root.  
TO run the tests on the outputs please install Mocha and Chai. This can be done with the
`npm install` command. Run tests with `npm test` command.  
To test coverage we also require Istanbul. To use it and run test coverage type
`npm run coverage`.
### Options
The app takes 0-2 arguments on the command line.   
Zero arguments will return the current month.  
One argument of a year will print a full year.  
Two arguments of a month, then year, will return that month.

#### *NOTE*:
For any month but September (9), 2016 one test in `test/get-current-month.js` will fail.
This is because the month and year in the test to expect are hardcoded, while the function
it is testing uses the Date() constructor to figure out the current date.
