export interface WeatherData {
  list: [
    {
      dt: number;
      main: {
        temp: number;
        feels_like: number;
        humidity: number;
      };
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        }
      ];
      pop: number;
      rain: {
        "3h": number;
      };
      dt_txt: string;
    }
  ];
  city: { name: string; timezone: number };
}
