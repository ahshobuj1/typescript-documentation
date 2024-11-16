{
  //* Union Type

  type UserType = {
    name: string;
    gender: 'male' | 'female';
    blood: 'A+' | 'O+' | 'AB+';
  };

  const user1: UserType = {
    name: 'shobuj',
    gender: 'male',
    blood: 'A+',
  };

  //* Intersection Types

  type frontEnd = {
    skills: string[];
    role1: 'Front-End Developer';
  };

  type backEnd = {
    skills: string[];
    role2: 'Back-End Developer';
  };

  type FullStackDeveloper = frontEnd & backEnd;

  const fullStackDev: FullStackDeveloper = {
    skills: ['React', 'Express', 'Node.js', 'Tailwind'],
    role1: 'Front-End Developer',
    role2: 'Back-End Developer',
  };

  //
}
