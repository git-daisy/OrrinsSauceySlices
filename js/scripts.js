function Pizza(size, crust, meatArray, vegArray) {
  this.size = size;
  this.crust = crust;
  this.meatArray = meatArray;
  this.vegArray = vegArray;
  this.ongoingPrice = 0;
}

Pizza.prototype.priceOfSize = function() {
  if (this.size === "6 inch Personal Zaa - $9") {
    this.ongoingPrice = 9;
  }
  else if (this.size === "10 inch Zaa For Two - $14") {
    this.ongoingPrice = 14;
  }
  else {
    this.ongoingPrice = 20;
  }
  return this.ongoingPrice;
} 

Pizza.prototype.priceOfMeat = function() {
  return this.ongoingPrice += (this.meatArray.length + 3);
}

Pizza.prototype.priceOfVeg = function() {
  return this.ongoingPrice += (this.vegArray.length + 1.5);
}