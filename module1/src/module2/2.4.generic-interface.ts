{
  //* Generic object with interface

  interface UserType<T, X = null> {
    name: string;
    laptop: {
      brand: string;
      model: string;
      price: number;
    };
    watch: T;
    bike?: X;
  }

  //

  interface UserType1 {
    brand: string;
    model: string;
  }

  const user1: UserType<UserType1> = {
    name: 'shobuj',
    laptop: {
      brand: 'huwei',
      model: 'Matebook D15',
      price: 75000,
    },
    watch: {
      brand: 'samsung',
      model: 'KMh-145B',
    },
  };

  //

  interface UserType2 {
    brand: string;
    model: string;
    price: number;
    bloodTrack: boolean;
  }

  const user2: UserType<UserType2> = {
    name: 'shobuj',
    laptop: {
      brand: 'apple',
      model: 'SHl-S15',
      price: 99000,
    },
    watch: {
      brand: 'samsung',
      model: 'KMh-145B',
      price: 25000,
      bloodTrack: true,
    },
  };

  //

  interface UserType3 {
    brand: string;
    model: string;
    price: number;
    bloodTrack: boolean;
  }

  interface BikeType {
    brand: string;
    model: string;
  }

  const user3: UserType<UserType2, BikeType> = {
    name: 'shobuj',
    laptop: {
      brand: 'apple',
      model: 'SHl-S15',
      price: 99000,
    },
    watch: {
      brand: 'samsung',
      model: 'KMh-145B',
      price: 25000,
      bloodTrack: true,
    },
    bike: {
      brand: 'xiomi',
      model: 'KMH-2334',
    },
  };
}
