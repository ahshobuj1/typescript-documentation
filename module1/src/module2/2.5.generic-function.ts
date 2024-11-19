{
  //* Generic Function

  const createArray = (param: string): string[] => {
    return [param];
  };

  const genericArray = <T>(param: T): T[] => {
    return [param];
  };

  const genericTuple = <T, Y>(param1: T, param2: Y): [T, Y] => {
    return [param1, param2];
  };

  const callArray = createArray('bangladesh');
  const callGenericArray = genericArray<number>(234);
  const callGenericArrayObj = genericArray<{id: number; name: string}>({
    id: 12,
    name: 'shobuj',
  });

  const callGenericTuple = genericTuple<number, string>(22, 'shobuj');
  type Tuple = {age: number; position: string};

  const callGenericTuple2 = genericTuple<string, Tuple>('shobuj', {
    age: 22,
    position: 'Next Level Web 2.0',
  });

  //
  //
  //
  // *

  const studentCrouse = <T>(student: T) => {
    const crouse: string = 'Next level web dev 2.0';
    return {
      ...student,
      crouse,
    };
  };

  const callStudent1 = studentCrouse<{
    name: string;
    roll: number;
    email: string;
    dev: boolean;
  }>({
    name: 'shobuj',
    roll: 9101,
    email: 'ahshobuj11@gmail.com',
    dev: true,
  });

  type Student2 = {
    name: string;
    roll: number;
    email: string;
    level: number;
  };
  const callStudent12 = studentCrouse<Student2>({
    name: 'shobuj',
    roll: 9101,
    email: 'ahshobuj11@gmail.com',
    level: 2,
  });

  //
}
