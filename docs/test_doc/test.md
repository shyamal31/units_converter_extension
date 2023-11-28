# Unit Testing and Test Coverage Documentation

This document provides an overview of the unit testing framework and test coverage used in this project. The project utilizes the Mocha and Chai testing framework to verify the functionality of its functions and methods.

## Unit Testing Framework: Mocha and Chai

[Mocha](https://mochajs.org/) is a JavaScript test framework that runs on Node.js and in the browser, making asynchronous testing simple and fun. [Chai](https://www.chaijs.com/) is a BDD/TDD assertion library for Node.js and the browser that can be paired with any JavaScript testing framework.

### Test Suites

The project is organized into the following test suites:

1. **Conversion Tests ([`conversion_test.md`]()):**
   - It test conversion of Area, Volume, Data, DataTransfer, Length, Mass, Speed and Time.

2. **Currency Tests ([`currency_test.md`]()):**
   - Unit tests for currency conversion functionality.

3. **Temperature Tests ([`temperature_test.md`]()):**
   - Unit tests for temperature conversion functionality.
4. **TimeZone Tests ([`TimeZone_test.md`]()):**
   - Unit tests for timezone conversion functionality.

## Test coverage image

![Image 11-27-23 at 7 47 PM](https://github.com/shyamal31/units_converter_extension/assets/57554284/0e5cd7f1-cec3-4f30-9c69-5cd04099cbd0)



### Running Tests

To run the tests, execute the following command in the project directory:

```bash
npm test
