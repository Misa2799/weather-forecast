export interface CurrentData {
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
  };
  dt: number;
  name: string;
  timezone: number;
}
