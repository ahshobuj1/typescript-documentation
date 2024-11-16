{
  // *Type Alias with Object

  type studentType = {
    id: number;
    name: string;
    age: number;
    gender: string;
    contact: string;
    isMarried: boolean;
  };

  const student1: studentType = {
    id: 1,
    name: 'shobuj',
    age: 22,
    gender: 'male',
    contact: '01318357290',
    isMarried: false,
  };

  const student2: studentType = {
    id: 2,
    name: 'ah',
    age: 21,
    gender: 'male',
    contact: '01228934534',
    isMarried: false,
  };

  // *Type Alias with Function

  type Sum = (num1: number, num2: number) => number;

  const myFunction: Sum = (num1, num2) => num1 + num2;
  myFunction(3, 9);

  // const myFunction = (num1: number, num2: number): number => num1 + num2;

  //
}
