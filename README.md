Describe: Pizza()

Test: It should create a Pizza object including size, crust and toppings.
Expect: new Pizza("6 inch","canadian bacon","pineapple","colossal crust").toEqual(Pizza{size: "6 inch", meat:"canadian bacon",veggies:"pineapple",crust:"colossal crust", ongoingPrice: 0}) 

Describe: Pizza.prototype.priceOfSize()

Test: It should calculate and return the prize of the size selected.
Expect: newOrder.priceOfSize("6 inch").toEqual(9)

Descibe: Pizza.prototype.priceOfMeat()

Test: It should include the extra price of selected meat add ons.
Expect: newOrder.priceOfMeat("canadian bacon").toEqual(14.5)
