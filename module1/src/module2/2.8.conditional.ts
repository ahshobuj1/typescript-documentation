{
  //* Conditional type

  type a1 = number;
  type b1 = undefined;

  type C = a1 extends null ? true : false;
  type D = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type Cars = {
    bike: string;
    car: string;
    ship: string;
  };

  type CheckVehicle<T> = T extends keyof Cars ? true : false;

  type VehicleShip = CheckVehicle<'ship'>;
  type PrivateZat = CheckVehicle<'zip'>;

  //
}
