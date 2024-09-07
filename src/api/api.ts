import { WeatherForecast } from "../_generated-openapi/WeatherForecast";

export const weatherForecastClient = new WeatherForecast({ baseUrl: process.env.REACT_APP_BACKEND_BASE_URL});
