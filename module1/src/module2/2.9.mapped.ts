{
  //*  Mapped Types

  const arrayNumber: number[] = [1, 2, 5, 6, 7];

  const arrayOfString: string[] = arrayNumber.map((number) =>
    number.toString()
  );
  console.log(arrayOfString);

  // type areaNumber = {
  //   height: number;
  //   width: number;
  // };

  // type areaString = {
  //   [key in keyof areaNumber]: string;
  // };

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const areaOne: AreaString<{height: number; width: string}> = {
    height: 20,
    width: '20',
  };

  //
}
