function Animal() {
  this.type = Animal;

  Animal.prototype.sound = function () {
    console.log("Animal Sound");
  };
}

Dog.prototype = object.create(Animal.prototype);

Dog.prototype.sound = function () {
  console.log("Bark");
};

let mydog = new Dog();
mydog.sound();
