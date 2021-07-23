# Orrins Saucey Slices 
A javascript pizza parlor project to showcase my developing skills as they progress at Epicodus.

## Technologies Used :
* HTML
* CSS
* Github
* JavaScript 
* jQuery
* Bootstrap

## Description : 
This website generates a total price based on what size of pizza, toppings and crust the user would like - it used a Pizza object, conditionals and a few custom protoype methods to calculate the final values.  I struggled to get proper return values until I realized I had been referencing a property that was not properly defined, though it felt absolutely maddening to figure out at first, it was a great way to practice debugging and I feel much more comfortable working with the debugger.



## To View My Gitpages :
 Click the link to view my page live! 
 https://git-daisy.github.io/OrrinsSauceySlices/


## To Clone This Repository Locally: 
* In my Github account, navigate to the main page of the 'OrrinsSauceySlices' repository. 
* Above the list of files, click the green box that says "Code" - this will copy the URL to your clipboard.
* To clone the repository using HTTPS, under "Clone with HTTPS", click the small clipboard icon. Use the same process for cloning with SSH key or Github CLI.
* Open gitbash and change the current working directory to the location where you want the cloned directory.
* Type "git clone" and then paste the URL you copied to the clipboard earlier.
* Press "enter" to create your local clone.
* Have fun!

## License: 
* Copyright [2021] [ Daisy Collins ]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

##Tests

Describe: Pizza()

Test: It should create a Pizza object including size, crust and toppings.

Expect: new Pizza("6 inch","canadian bacon","pineapple","colossal crust").toEqual(Pizza{size: "6 inch", meat:"canadian bacon",veggies:"pineapple",crust:"colossal crust", ongoingPrice: 0}) 

Describe: Pizza.prototype.priceOfSize()

Test: It should calculate and return the prize of the size selected. 
Expect: newOrder.priceOfSize("6 inch").toEqual(9)

Descibe: Pizza.prototype.priceOfMeat()

Test: It should include the extra $3.00 price of selected meat add-ons.
Expect: newOrder.priceOfMeat("canadian bacon").toEqual(12)

Describe: Pizza.prototype.priceOfVeg()

Test: It should include the extra $1.50 price of selected veggie add-ons
Expect: newOrder.priceOfVeg("mushrooms").toEqual(10.50)

Describe: Pizza.prototype.priceOfCrust()

Test: It should include the extra $2.00price of fancy crust.
Expect: newOrder.priceOfCrust("Cheesus Crust").toEqual(11)

