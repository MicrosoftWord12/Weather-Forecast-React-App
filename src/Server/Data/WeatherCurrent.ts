import { WeatherResponse } from "../../Types/WeatherTypes";

export default class WeatherCurrent {
    public last_updated_epoch: number = 0;
    public last_updated: string = "";
    public temp_c: number = 0;
    public temp_f: number = 0;
    public is_day: number = 0;
    public condition: {
        text: string;
        icon: string;
        code: number;
    } | undefined;
    public wind_mph: number = 0;
    public wind_kph: number = 0;
    public wind_degree: number = 0;
    public wind_dir: string = "";
    public pressure_mb: number = 0;
    public pressure_in: number = 0;
    public precip_mm: number = 0;
    public precip_in: number = 0;
    public humidity: number = 0;
    public cloud: number = 0;
    public feelslike_c: number = 0;
    public feelslike_f: number = 0;
    public vis_km: number = 0;
    public vis_miles: number = 0;
    public uv: number = 0;
    public gust_mph: number = 0;
    public gust_kph: number = 0;
    public countryName: string = "";



    constructor(data: WeatherResponse) { 
        this.last_updated_epoch = data.current.last_updated_epoch;
        this.last_updated = data.current.last_updated;
        this.temp_c = data.current.temp_c;
        this.temp_f = data.current.temp_f;
        this.is_day = data.current.is_day;
        this.condition = data.current.condition;
        this.wind_mph = data.current.wind_mph;
        this.wind_kph = data.current.wind_kph;
        this.wind_degree = data.current.wind_degree;
        this.wind_dir = data.current.wind_dir;
        this.pressure_mb = data.current.pressure_mb;
        this.pressure_in = data.current.pressure_in;
        this.precip_mm = data.current.precip_mm;
        this.precip_in = data.current.precip_in;
        this.humidity = data.current.humidity;
        this.cloud = data.current.cloud;
        this.feelslike_c = data.current.feelslike_c;
        this.feelslike_f = data.current.feelslike_f;
        this.vis_km = data.current.vis_km;
        this.vis_miles = data.current.vis_miles;
        this.uv = data.current.uv;
        this.gust_mph = data.current.gust_mph;
        this.gust_kph = data.current.gust_kph;
        this.last_updated_epoch = data.current.last_updated_epoch;
        this.last_updated = data.current.last_updated;
    }
}