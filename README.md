# Smart Units Converter - Browser Extension

An extension that effortlessly converts your selected values into popular units, saving you time and making life easier. Plus, it includes powerful statistical analysis tools and personalized health reports to support your daily tasks and wellness goals! 💃

![MIT license](https://img.shields.io/badge/License-MIT-green.svg)
![GitHub contributors](https://img.shields.io/github/contributors/shyamal31/units_converter_extension)
![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)
![ESLint](https://img.shields.io/badge/eslint-passing-brightgreen)
![Beautify](https://img.shields.io/badge/beautify-applied-brightgreen)
![Coveralls github](https://coveralls.io/repos/github/nihitmittal/units_converter_extension/badge.svg?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/shyamal31/units_converter_extension/maintainability)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.14010246.svg)](https://doi.org/10.5281/zenodo.14010246)

**Click on the image below to view the video**

[![Alt text](https://i.ytimg.com/vi/W4USPH2sBJw/hqdefault.jpg)](https://youtu.be/RT2PIYw7BCk)

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
- Automatically calculate mean, standard deviation, and entropy after entering a data set
- Calculate BMI, BMR, and TDEE based on height, weight, age, and gender
- Enable colorblind mode for accessibility

  ## Technologies we used:
 - ![Javascript](https://img.shields.io/badge/logo-javascript-blue?logo=javascript)
 - ![HTML](https://img.shields.io/badge/just%20the%20message-8A2BE2)
 - ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
 - ![CSS](https://img.shields.io/badge/CSS-7B2EQ2)

## Installation Guide

### Step 1: Clone [this](https://github.com/shyamal31/units_converter_extension) Repository

```
git clone [repository_url]

```
### Step 2: Go to chrome extensions
  
- In the chrome browser open
  
  ```
  chrome://extensions/
  ```
### Step 3: Enable developer settings
- Enable developer settings if it is not enabled

  ![image](https://github.com/shyamal31/units_converter_extension/assets/85347670/1dc7c2ee-cbaa-4308-a3dd-937062d035e8)

### Step 4: Unpack the cloned repository
- Choose Load Unpacked
- Select the repository folder that was cloned in the first step

  ![image](https://github.com/shyamal31/units_converter_extension/assets/85347670/6b1264db-9a24-4846-8c19-e1e925582e1c)

### Step 5: Check the extension added
- The extension will now be added to the Chrome

![image](https://github.com/shyamal31/units_converter_extension/assets/85347670/d8364664-7236-42ee-aa27-ada0c4ce3fcf)

### Step 6: Test the extension
- Displays the most relevant converted unit first
![image](https://github.com/shyamal31/units_converter_extension/assets/85347670/a3593a02-0882-4af6-92ba-89192e824de2)


- Click on view all button to view all of the converted units for that metric
![image](https://github.com/shyamal31/units_converter_extension/assets/85347670/bb08278c-de80-4d0a-9293-203b12e5bd48)

## Popup Features for the user
To access the popup feature the user has to click on the extension icon in the top right corner where the user further finds and selects the extension "Unit Convert Selection"

### 1. Direct conversions
- This feature allows the user to directly convert units without the need to select any particular text on the browser. This helps save trouble and effort for the user
- The user selects the conversion he requires from the given standard conversions
![image](https://github.com/user-attachments/assets/d5bf4715-46b9-4d7d-afeb-511365b96190)


- The user can select and convert any unit to the required unit without any restrictions. This direct method allows the user to be quick
![image](https://github.com/user-attachments/assets/b9576171-e2f2-47c5-adde-359951068e4c)


### 2. Customized Conversions

- This feature allows the user to create his own customized unit conversion for his personal use and purposes. This includes all the conversion that are not standard but used as a jargon by people.
- This is the example taken where 1 meter is taken as 3 subs
![image](https://github.com/user-attachments/assets/b4cdf44b-0236-4860-aede-cf512f95e8e6)

- Testing whether the customized conversion works or not
![image](https://github.com/shyamal31/units_converter_extension/assets/85347670/681416b3-a41d-4dcf-b864-7eca0303b7e8)

- Since the customized version of conversion keeps changing it is important to allow the user to alter the units. So a feature is added that allows user to delete his customized conversion.
![image](https://github.com/shyamal31/units_converter_extension/assets/85347670/7e074d75-a02d-4f58-98a3-acd3fa4fceae)

### 3. Favorites 
- This feature allows users to select a particular conversion unit and place it in favorites as the units in favorites are shown at the top. This feature is useful when the user wastes time in finding his desired converted unit from a pool of large units.
- Here we select pint and gallon as favorites in volume converions. 
![image](https://github.com/user-attachments/assets/8035d45f-58e5-4267-b981-4eaf0398a83e)

- So now all the volume conversions will have pint and gallon at the top of the display
![image](https://github.com/shyamal31/units_converter_extension/assets/85347670/4e54e867-9889-41ec-b0ea-e0783e74467c)

### 4. Statistics
- This feature allows the user to calculate mean, standard deviation, and entropy after entering a data set.
![image](https://github.com/user-attachments/assets/0fc774ab-ff80-4b2d-830c-2ca6899bb93f)


### 5. Health Reports

### 6. Colorblind Mode


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


## Run Test cases and coverage


 ### [Test Cases Guide](https://github.com/shyamal31/units_converter_extension/tree/master/docs/test_doc)

 ### Unit Test
  
  - Test cases have been tested using [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/).
    
  #### Setup
  
  From the repository root, run:
  
  ```
    npm install --save-dev mocha chai
  ```

Then run:
  ```
    npm test [filename]
    
  ```
npm will then attempt to run all test files that end with `*.test.js` if you do not specify the filename.

### Code Coverage
  
  - [Istanbul](https://istanbul.js.org/) and [Coveralls](https://coveralls.io/)


## Funding
The project is not currently funded

## 🌠 Future

See RoadMap [here](https://github.com/510-s-Mickey/units_converter_extension/issues/25)

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

## Troubleshooting

If you encounter any issues during any stage of extension use or you encounter any development-related issues, feel free to reach out to our contact our support team at [unit.convertor.help@gmail.com](mailto:unit.convertor.help@gmail.com).


# Contributors

Tingxiang Ji

Hui Sun

Zhichao Hou
