const Park = function (name, price, dinosaurs) {
  this.name = name;
  this.price = price;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur) {
  this.dinosaurs = this.dinosaurs.filter(function(value) {
    return value !== dinosaur;
  })
};

Park.prototype.topDino = function() {
  let guests = [];
  for (let i = 0; i < this.dinosaurs.length; i++ ) {
    guests.push(this.dinosaurs[i].guestsAttractedPerDay);
  }
  let top = Math.max(...guests);
  for (let i = 0; i < this.dinosaurs.length; i++ ) {
    if (this.dinosaurs[i].guestsAttractedPerDay === top) {
      return this.dinosaurs[i];
    }
  }
};

Park.prototype.bySpecies = function(species) {
  return this.dinosaurs.filter(function(value) {
    return value.species === species ;
  })
};

Park.prototype.dailyVisitors = function() {
  let total = 0;
  for (let i=0; i < this.dinosaurs.length; i++){
    total += this.dinosaurs[i].guestsAttractedPerDay;
  }
  return total;
}

Park.prototype.annualVisitors = function() {
  return (this.dailyVisitors() * 365);
}

Park.prototype.annualRevenue = function() {
  return (this.annualVisitors() * this.price);
}

Park.prototype.removeBySpecies = function(species) {
  this.dinosaurs = this.dinosaurs.filter(function(value) {
    return value.species !== species;
  })
};

module.exports = Park;
