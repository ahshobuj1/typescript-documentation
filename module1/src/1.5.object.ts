//* object - Reference types data

let user: {
  readonly profession: 'Developer';
  company: 'Web Ltd'; //* literal type
  firstName: string;
  middleName?: string; //? optional
  lastName: string;
  age: number;
  isMarried: boolean;
} = {
  profession: 'Developer',
  company: 'Web Ltd',
  firstName: 'a h',
  lastName: 'shobuj',
  age: 22,
  isMarried: false,
};

// user.company = 'Web Ltd';
