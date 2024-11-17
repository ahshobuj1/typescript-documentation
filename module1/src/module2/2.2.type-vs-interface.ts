{
  // * Type vs Interface

  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  const user1: User2 = {
    name: 'shobuj',
    age: 22,
  };

  //* Intercept Types

  type InterceptUser1 = User1 & {role: string};
  interface InterceptUser2 extends User2 {
    role: string;
  }

  const user2: InterceptUser2 = {
    name: 'shobuj',
    age: 22,
    role: 'Dev',
  };

  // * Array

  type RollType1 = number[];
  const studentRoll1: RollType1 = [1, 3, 4, 5];

  interface RollType2 {
    [index: number]: number;
  }
  const studentRoll2: RollType2 = [1, 3, 4, 5];

  //* Function

  type Add1 = (num1: number, num2: number) => number;
  const add1: Add1 = (num1, num2) => num1 + num2;

  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add2: Add2 = (num1, num2) => num1 + num2;

  //
}
