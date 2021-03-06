function Pizza(size, meatArray, vegArray, crustArray) {
  this.size = size;
  this.meatArray = meatArray;
  this.vegArray = vegArray;
  this.crustArray = crustArray;
  this.ongoingPrice = 0;
}

Pizza.prototype.priceOfSize = function() {
  if (this.size === "6 inch Personal Zaa - $9") {
    this.ongoingPrice = 9;
  }
  else if (this.size === "10 inch Zaa For Two - $14") {
    this.ongoingPrice = 14 ;
  }
  else {
    this.ongoingPrice = 20;
  }
}

Pizza.prototype.priceOfMeat = function() {
  this.ongoingPrice += (this.meatArray.length * 3);
}

Pizza.prototype.priceOfVeg = function() {
  this.ongoingPrice += (this.vegArray.length * 1.5);
}

Pizza.prototype.priceOfCrust = function() {
  this.ongoingPrice += (this.crustArray.length * 2);
}


$(document).ready(function() {
  $("form#menuItems").submit(function(event) {
    event.preventDefault();
    let size = $("#size").val();
    let meatArray = [];
    let vegArray = [];
    let crustArray = [];
    $("input:checkbox[name=meat]:checked").each(function() {
      meatArray.push($(this).val());
    });
    $("input:checkbox[name=veggie]:checked").each(function() {
      vegArray.push($(this).val());
    });
    $("input:checkbox[name=crust]:checked").each(function() {
      crustArray.push($(this).val());
    });

    let newOrder = new Pizza(size, meatArray, vegArray, crustArray);

    newOrder.priceOfSize();
    newOrder.priceOfMeat();
    newOrder.priceOfVeg();
    newOrder.priceOfCrust();
    const totalPrice = newOrder.ongoingPrice;
    $("#total").show();
    $("#damage").text(totalPrice)
  })
})