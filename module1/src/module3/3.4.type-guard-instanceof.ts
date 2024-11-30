{
  //* instanceof guard

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log('barking');
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log(`dog is barking`);
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMew() {
      console.log(`cat is meawing`);
    }
  }

  //* Smart ways

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Dog;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMew();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog('This is dog', 'Dog');
  const cat = new Cat('This is Cat', 'Cat');

  getAnimal(dog);

  //? Normal ways

  // const getAnimal = (animal: Animal) => {
  //   if (animal instanceof Dog) {
  //     animal.makeBark();
  //   } else if (animal instanceof Cat) {
  //     animal.makeMew();
  //   } else {
  //     animal.makeSound();
  //   }
  // };

  // const dog = new Dog('This is dog', 'Dog');
  // const cat = new Cat('This is Cat', 'Cat');

  // getAnimal(dog);

  //
}
