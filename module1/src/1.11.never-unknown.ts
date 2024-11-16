{
  //* Never , Unknown and Nullable Types

  const searchName = (value: string | null) => {
    if (value) {
      console.log('(searching)');
    } else {
      console.log('(Value is not string)');
    }
  };

  searchName(null);

  //* Unknown type

  const speedInMeter = (value: unknown) => {
    if (typeof value === 'number') {
      const meter = (value * 1000) / 3600;
      console.log(`--> The meter is ${meter}`);
    }

    if (typeof value === 'string') {
      const [speed, unit] = value.split(' ');
      const meter = (parseFloat(speed) * 1000) / 3600;
      console.log(`--> The meter is ${meter}`);
    } else {
      console.log('--> Wrong Input');
    }
  };

  speedInMeter('21820 kmh');

  //* Never Type
  //* Because the function will not return anything ever, it can only throw error
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };

  throwError('this is an error');

  //
}
