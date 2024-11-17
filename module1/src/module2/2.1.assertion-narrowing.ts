{
  //

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === 'string') {
      const convert = parseFloat(value);
      return convert * 1000;
    }

    if (typeof value === 'number') {
      return value * 1000;
    }
  };

  const result1 = kgToGm(1000);
  const result2 = kgToGm(1000) as number;
  const result3 = kgToGm('1000') as string;

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }

  //
}
