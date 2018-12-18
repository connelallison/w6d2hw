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

module.exports = Park;
