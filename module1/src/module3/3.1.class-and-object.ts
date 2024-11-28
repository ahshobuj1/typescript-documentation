{
  //* Class

  class Student {
    name: string;
    department: string;
    registration: number;

    constructor(name: string, department: string, registration: number) {
      this.name = name;
      this.department = department;
      this.registration = registration;
    }

    studentDetails(): void {
      console.log(
        `The student name is ${this.name}, he is studying at ${this.department}, his registration number is ${this.registration} `
      );
    }
  }

  const student1 = new Student('A H Shobuj', 'Economics', 2021668528);
  student1.studentDetails();

  //* Parameter Properties -- short way

  class Student1 {
    public constructor(
      public name: string,
      public department: string,
      public registration: number
    ) {}

    studentDetails2(): void {
      console.log(
        `The student name is ${this.name}, he is studying at ${this.department}, his registration number is ${this.registration} `
      );
    }
  }

  const student2 = new Student('A H Shobuj', 'Economics', 2021668528);
  student1.studentDetails();
  //
}
