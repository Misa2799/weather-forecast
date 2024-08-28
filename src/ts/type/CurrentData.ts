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
  sys: { sunset: number };
  dt: number;
  name: string;
  timezone: number;
}
