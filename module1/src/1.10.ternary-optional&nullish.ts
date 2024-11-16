{
  //* Ternary || Optional chaining || Nullish Coalescing Operator
  /// ? Ternary Operator

  const age: number = 22;
  const isAdult = age >= 18 ? 'Adult' : 'Child';
  console.log({isAdult});

  //* Nullish coalescing operator
  //* null / undefined  --> decision making

  const isAuthenticated = null;
  const result1 = isAuthenticated ?? 'Guest';
  console.log({result1});

  // ? Ternary operator count empty string('') as null and undefined, But Nullish         coalescing don't count ('') , Only count null and undefined

  //* Nullish coalescing optional chaining

  type UserType = {
    name: string;
    address: {
      city?: string;
      town?: string;
      presentAddress?: string;
      permanentAddress?: string;
    };
  };

  const user: UserType = {
    name: 'shobuj',
    address: {
      city: 'Chattagram',
      town: 'Cumilla',
      permanentAddress: 'cumilla, chattagram',
    },
  };

  // * The presentAddress value is undefined, now i can set undefined value with nullish
  const address = user?.address?.presentAddress ?? 'Present Address not found';
  console.log({address});

  //
}
