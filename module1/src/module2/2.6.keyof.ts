{
  // * Key of Constraints

  type UserType = {
    name: 'shobuj';
    email: 'ahshobuj11@gmail.com';
    address: 'bangladesh';
  };

  type user1 = 'name' | 'email' | 'address'; // manual
  type user2 = keyof UserType; // dynamic keyof

  const studentDetailsChecking = <T, X extends keyof T>(obj: T, key: X) => {
    return obj[key];
  };

  const student = {
    id: 1,
    name: 'shobuj',
    study: 'honours 2nd year',
  };

  const checkingStudent1 = studentDetailsChecking(student, 'name');
  const checkingStudent2 = studentDetailsChecking(student, 'id');
  const checkingStudent3 = studentDetailsChecking(
    {
      client: 'react',
      server: 'express',
      language: 'typescript',
    },
    'client'
  );

  // const std = student['name'];
  // const std1 = student['study'];

  //
}
