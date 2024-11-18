{
  //* Generic Types

  type DynamicArrayType<T> = Array<T>;

  const studentId: DynamicArrayType<number> = [12, 33, 22];
  const studentId1: number[] = [12, 33, 22];
  const StudentName: DynamicArrayType<string> = ['shobuj', 'shovo', 'moriom'];
  const studentPassed: DynamicArrayType<boolean> = [true, true, true];
  const genericObject: DynamicArrayType<{name: string; age: number}> = [
    {name: 'a h', age: 22},
    {name: 'shobuj', age: 23},
  ];

  //* Generic Tuple Array

  type TupleArray<X, Y> = [X, Y];

  const studentDetails: TupleArray<string, number> = ['Ah shobuj', 22];
  const user: TupleArray<number, {name: string; married: boolean}> = [
    120,
    {name: 'A h', married: false},
  ];

  //
}
