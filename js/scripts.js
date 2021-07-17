function Pizza(size, crust, meatArray, vegArray) {
  this.size = size;
  this.crust = crust;
  this.meatArray = meatArray;
  this.vegArray = vegArray;
  this.ongoingPrice = 0;
}

Pizza.prototype.priceOfSize = function() {
  if (this.size === "6 inch") {
    this.ongoingPrice = 9;
  }
  else if (this.size === "8 inch") {
    this.ongoingPrice = 12;
  }
  else {
    this.ongoingPrice = 20;
  }
  return this.ongoingPrice;
} 

Pizza.prototype.priceOfMeat = function() {
  return this.ongoingPrice += (this.meatArray.length + 2.5);
}