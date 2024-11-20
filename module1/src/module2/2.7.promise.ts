{
  //* Asynchronous Typescript

  //*  Data Fetching

  type TypeOfPost = {
    id: number;
    userId: number;
    title: string;
    body: string;
  };

  const fetchData = async (): Promise<TypeOfPost> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await res.json();
    return data;
  };

  fetchData();

  //* Simulate
  type Type = {name: string};

  const createNewPromise = (): Promise<Type> => {
    return new Promise<Type>((resolve, reject) => {
      const data: Type = {
        name: 'next level web 2.0',
      };

      if (data) {
        resolve(data);
      } else {
        reject('Error here');
      }
    });
  };

  const callPromise = async () => {
    const data = await createNewPromise();
    console.log(data);
    return data;
  };

  callPromise();

  // const createNewPromise = (): Promise<string> => {
  //   return new Promise<string>((resolve, reject) => {
  //     const data = 'next level web 2.0';

  //     if (data) {
  //       resolve(data);
  //     } else {
  //       reject('Error here');
  //     }
  //   });
  // };

  // const callPromise = async () => {
  //   const data = await createNewPromise();
  //   console.log(data);
  //   return data;
  // };

  // callPromise();

  //
}
