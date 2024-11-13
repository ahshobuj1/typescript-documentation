{
  //? Spread Operators
  //? rest Operators
  //? Destructuring

  //? Spread Operators -> Array

  const groupOne: string[] = ['jason roy', 'alex hales', 'ben stokes'];
  const groupTwo: string[] = ['butler', 'livingstone', 'curran'];
  groupOne.push(...groupTwo);
  // groupOne.push(groupTwo)

  //? Spread Operators -> object

  const bowlerOne = {
    spine: 'dawson',
    medium: 'willy',
    fast: 'wood',
  };

  const bowlerTwo = {
    legBreak: 'livingstone',
    offBreak: 'ali',
    cutter: 'tom',
  };

  const allBowler = {...bowlerOne, ...bowlerTwo};

  //? Destructuring -> object

  const studentDetails = {
    id: 20218266,
    name: {
      firstName: 'a',
      middleName: 'h',
      lastName: 'shobuj',
    },
    contact: '01300023760',
    address: 'bangladesh',
  };

  const {
    id,
    name: {firstName: nickName, lastName},
    contact: studentContact,
  } = studentDetails;

  //? Destructuring -> Array

  const myFriends: string[] = ['shuvo', 'moriom', 'shobuj', 'alex', 'ross'];

  const [, youngerSister, myName, ...rest] = myFriends;
}
