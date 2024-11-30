{
  //* Type guard using typeof and in

  type CommonType = string | number;

  const add = (param1: CommonType, param2: CommonType) => {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const resultAddFunction = add(2, 3); //? Result will be 5

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: 'admin';
  };

  const createUser = (user: NormalUser | AdminUser) => {
    if ('role' in user) {
      console.log(`The user name is ${user.name}. He is ${user.role} user`);
    } else {
      console.log(`The user name is ${user.name}, He is normal user`);
    }
  };

  const normalUser: NormalUser = {
    name: 'A H',
  };

  const adminUser: AdminUser = {
    name: 'shobuj',
    role: 'admin',
  };

  const useCreateUser = createUser(adminUser); // result: The user name is shobuj. He is admin user
  const useCreateUser1 = createUser(normalUser); // result: The user name is A H. He is normal user

  //
}
