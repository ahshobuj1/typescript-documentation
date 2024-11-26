{
  //* Utility Types

  type Person = {
    name: string;
    age: number;
    email?: string;
    contact: string;
  };

  //* Pick
  type personIdentity = Pick<Person, 'name' | 'age'>;

  //* Omit -> remove property
  type personContact = Omit<Person, 'name' | 'age'>;

  //* Require
  type requirePerson = Required<Person>;

  //* Optional | Partial
  type makeOptionalPerson = Partial<Person>;

  //* Readonly
  type readonlyPerson = Readonly<Person>;
  const person: readonlyPerson = {
    name: 'shobuj',
    age: 22,
    email: 'ahshobuj11@gmail.com',
    contact: '01021',
  };

  //* Record
  // type MyObj = {
  //   a: string;
  //   b: string;
  // };

  const myObj: Record<string, string> = {
    a: 'aaa',
    b: 'hello',
    c: 'hi',
  };

  const emptyObject: Record<string, unknown> = {
    a: 12,
    b: 'hello',
    c: true,
  };

  //
}
