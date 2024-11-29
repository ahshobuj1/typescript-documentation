{
  //*

  class Person {
    id: number;
    name: string;
    age: number;

    constructor(id: number, name: string, age: number) {
      this.id = id;
      this.name = name;
      this.age = age;
    }

    makeSleep() {
      console.log(`The ${this.name} sleeps for 6 hours daily`);
    }
  }

  class Student extends Person {
    department: string;

    constructor(id: number, name: string, age: number, department: string) {
      super(id, name, age);
      this.department = department;
    }

    studyPlane() {
      console.log(`The Student ${this.name} studies 12 hours per day`);
    }
  }

  const studentInstance = new Student(9101, 'A H Shobuj', 22, 'Economics');
  console.log(studentInstance.studyPlane());

  class Teacher extends Person {
    profession: string;

    constructor(id: number, name: string, age: number, profession: string) {
      super(id, name, age);
      this.profession = profession;
    }

    takeClass() {
      console.log(
        `The Teacher's ${this.name} takes 8 hours class everyday excepts friday`
      );
    }
  }

  const teacherInstance = new Teacher(1, 'MR. Teacher bro', 35, 'Math Teacher');
  console.log(teacherInstance.takeClass());
  //
}
