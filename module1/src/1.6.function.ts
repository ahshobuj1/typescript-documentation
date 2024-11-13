function add(first: number, second: number): number {
  return first + second;
}

const addSum = (first: number, second: number): number => first + second;

//? object -> function -> method

const users = {
  name: 'Shobuj',
  balance: 200,
  addBalance(amount: number): string {
    return `my account balance is ${this.balance + amount}`;
  },
};

//* mapping
const arrays: number[] = [1, 3, 5, 6, 8];
const mapping = arrays.map((square: number): number => square * square);
