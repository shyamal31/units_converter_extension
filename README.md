# Smart Units Converter - Browser Extension

An extension that converts your selected values into popular units. Saves time, Makes life easier:dancer:

![MIT license](https://img.shields.io/badge/License-MIT-green.svg)
![GitHub issues](https://img.shields.io/github/issues/nihitmittal/units_converter_extension)
![GitHub pull requests](https://img.shields.io/github/issues-pr/nihitmittal/units_converter_extension)
![GitHub contributors](https://img.shields.io/github/contributors/nihitmittal/units_converter_extension)
[![Build Status](https://travis-ci.com/NCSU-S/units_converter_extension.svg?branch=master)](https://travis-ci.com/NCSU-S/units_converter_extension)
![Coveralls github](https://coveralls.io/repos/github/nihitmittal/units_converter_extension/badge.svg?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/nihitmittal/units_converter_extension/maintainability)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.10023391.svg)](https://doi.org/10.5281/zenodo.10023391)

**Click on the image below to view the video**

[![Alt text](https://i.ytimg.com/vi/W4USPH2sBJw/hqdefault.jpg)](https://www.youtube.com/watch?v=u454b1ZjO14)

## Use Cases

- Convert $ to ¥ when you are shopping abroad
- Convert kilometers to miles when you are planning routes before driving
- Convert kilograms to pounds when you are buying food
- Convert celcius to fahrenheit when you are talking about weather
- Convert hours to seconds when you are calculating time
- Convert celcius to Fahrenheit when you are calculating temperature
- Convert Mb/s to b/s when you are calculating internet speed
- Convert square meter to square feet when you are calculating the measure of area
- Convert litres to gallons when you are calculating the volume for liquid items online
- Convert TB to GB when you are buying data storage devices
- Convert Time from a given time zone to another (PST to EST)
  
## Installation

- Clone the repository using
  
  ```
  git clone https://github.com/shyamal31/units_converter_extension
  ```
  
- In the chrome browser open
  ```
  chrome://extensions/
  ```
- Enable developer settings if it is not enabled

  ![image](https://github.com/shyamal31/units_converter_extension/assets/85347670/1dc7c2ee-cbaa-4308-a3dd-937062d035e8)

- Choose Load Unpacked
- Select the repository folder that was cloned in the first step

  ![image](https://github.com/shyamal31/units_converter_extension/assets/85347670/6b1264db-9a24-4846-8c19-e1e925582e1c)


- The extension will now be added to the Chrome

![image](https://github.com/shyamal31/units_converter_extension/assets/85347670/d8364664-7236-42ee-aa27-ada0c4ce3fcf)


- Screenshot of working of the extension
- Displays the most relevant converted unit first
![image](https://github.com/nihitmittal/units_converter_extension/blob/master/assets/Images/Monitor_1.png)

- Click on view all button to view all of the converted units for that metric
![image](https://github.com/nihitmittal/units_converter_extension/blob/master/assets/Images/Monitor_2.png)

## Languages

- JavaScript
- HTML
- CSS

## Software Requirements

- Node.js
- NPM

## Style Checker and Analyzer

### Standard Js

Installation</b>
`npm install standard --global` in comand line interface to install globally
`npm install standard --save-dev` in command line interface to install locally

Running Standard Js</b>
go to root of project and type `standard` if StandardJs is installed globally
go to root of project and type `npx standard` if StandardJs is installed locally
Instead of installing it using npm, you can also use the extension available on VS Code

## IDE and Code Fomatter

- IDE and Style Checker: [VSCode](https://code.visualstudio.com/)

- Code Style Formatter: [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)

- Code Syntax Checker : [Eslint](https://https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for Vscode plugin.

VS Code uses js-beautify internally, but it lacks the ability to modify the style you wish to use. This extension enables running js-beautify in VS Code, AND honouring any .jsbeautifyrc file in the open file's path tree to load your code styling. Run with F1 Beautify (to beautify a selection) or F1 Beautify file.

## Test and Coverage

### Unit Test
  
  - [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/).
    
  - Setup
  
    From the repository root, run: ```npm install --save-dev mocha chai```
    
    Then run: ```npm test [filename]```
    
    npm will then attempt to run all test files that end with ```*.test.js ```, if you do not specify filename.

### Code Coverage
  
  - [Istanbul](https://istanbul.js.org/) and [Coveralls](https://coveralls.io/)

## Automated Analysis Tool

- [DeepScan](https://deepscan.io/dashboard/#view=project&tid=22379&pid=25708&bid=807947&prid=&subview=overview&b=master)

<img width="1427" alt="deepScan" src="https://github.com/nihitmittal/units_converter_extension/blob/master/assets/Images/Deepscan.png">

## Documentation ([Wiki](https://github.com/NCSU-S/units_converter_extension/wiki))
#### "What" and "How" Docs

<div>
<nav>
    <h2><a href="https://nihitmittal.github.io/units_converter_extension/">JSDoc Generated Documentation</a></h2><h3>Classes</h3><ul><li><a href="https://nihitmittal.github.io/units_converter_extension/Area.html">Area</a></li><li><a href="https://nihitmittal.github.io/units_converter_extension/Currency.html">Currency</a></li><li><a href="https://nihitmittal.github.io/units_converter_extension/DataTransfer.html">DataTransfer</a></li><li><a href="https://nihitmittal.github.io/units_converter_extension/Data.html">Data</a></li><li><a href="https://nihitmittal.github.io/units_converter_extension/Length.html">Length</a></li><li><a href="https://nihitmittal.github.io/units_converter_extension/Mass.html">Mass</a></li><li><a href="https://nihitmittal.github.io/units_converter_extension/Speed.html">Speed</a></li><li><a href="https://nihitmittal.github.io/units_converter_extension/Temperature.html">Temperature</a></li><li><a href="https://nihitmittal.github.io/units_converter_extension/Time.html">Time</a></li><li><a href="https://nihitmittal.github.io/units_converter_extension/Volume.html">Volume</a></li></ul><h3>Global</h3><ul><li><a href="https://ncsu-s.github.io/units_converter_extension/global.html#descending_length">descending_length</a></li><li><a href="https://ncsu-s.github.io/units_converter_extension/global.html#get_conversion_class">get_conversion_class</a></li><li><a href="https://ncsu-s.github.io/units_converter_extension/global.html#get_conversions">get_conversions</a></li><li><a href="https://ncsu-s.github.io/units_converter_extension/global.html#get_possible_conversions_list">get_possible_conversions_list</a></li><li><a href="https://ncsu-s.github.io/units_converter_extension/global.html#getPreciseNumber">getPreciseNumber</a></li><li><a href="https://ncsu-s.github.io/units_converter_extension/global.html#getPrecision">getPrecision</a></li><li><a href="https://ncsu-s.github.io/units_converter_extension/global.html#matches_filter">matches_filter</a></li><li><a href="https://ncsu-s.github.io/units_converter_extension/global.html#POPULAR_UNITS">POPULAR_UNITS</a></li><li><a href="https://ncsu-s.github.io/units_converter_extension/global.html#showModal">showModal</a></li><li><a href="https://ncsu-s.github.io/units_converter_extension/global.html#UNITS">UNITS</a></li></ul>
</nav>
</div>

#### "Why" and "Why not" Docs

Think about the case when you shopping on Amazon. When you want to purchase Dumbbells on the website, the weight unit is somewhat you are not familiar with. You will google search the conversion of two units. But now, we have units converter, helping you to covert the unit by a single select with the mouse.

#### Feature Model</br>

```xml
<!--  This model was created online using SPLOT's Feature Model Editor (http://www.splot-research.org) -->
<feature_model name="Unit Converter Extension">
    <feature_tree> 
        :r Unit Converter Extension(_r) 
            :m Length(_r_1) 
            :m Mass(_r_3) 
            :m Temperature(_r_4) 
            :m Time(_r_5) 
            :m Currency(_r_6) 
            :m Area(_r_7) 
            :m Datarate(_r_8) 
            :m Speed(_r_10) 
    </feature_tree>
    <constraints> 
        constraint_1:_r_1 or _r_7 
        constraint_2:_r_1 or _r_5 or _r_10 
    </constraints>
</feature_model>
```

![feature_model](https://github.com/nihitmittal/units_converter_extension/blob/master/assets/Images/Feature_model.png)
