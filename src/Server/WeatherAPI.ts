import { WeatherRequest, WeatherResponse, WeatherLocationType, WeatherCondition } from "../Types/WeatherTypes";
import Config from "../Config.json"
import WeatherCurrent from "./Data/WeatherCurrent";
import WeatherLocation from "./Data/WeatherLocation";

export default class WeatherAPI {
    private API_KEY: string = Config.API_KEY || "";
    // private API_URL: string = "https://api.openweathermap.org/data/3.0/onecall?"
    private API_URL: string = "http://api.weatherapi.com/v1/current.json"

    private weatherCurrent: WeatherCurrent | undefined
    private weatherLocation: WeatherLocation | undefined
    
    public async sendWeatherRequest() {
        const url = `${this.API_URL}?key=${this.API_KEY}&q=London}`
        
        try{
            const response = await fetch(url)
            const data = await response.json()
            
            
            // this._updateWeatherVariables(data)
            this.weatherCurrent = new WeatherCurrent(data);
            this.weatherLocation = new WeatherLocation(data);


            return data;
        }catch(e) {
            console.log(e)
        }
        
    }

    // Location
    public getName() : string {
        if(this.weatherLocation){
            return this.weatherLocation?.name.toString();
        }

        return "";
    }

    public getRegion() : string {
        if(this.weatherLocation){
            return this.weatherLocation?.region.toString();
        }

        return "";
    }

    public getCountry() : string {
        if(this.weatherLocation){
            return this.weatherLocation?.country.toString();
        }

        return "";
    }

    public getLat() : string {
        if(this.weatherLocation){
            return this.weatherLocation?.lat.toString();
        }

        return "";
    }

    public getLong() : string {
        if(this.weatherLocation){
            return this.weatherLocation?.long.toString();
        }

        return "";
    }   

    public getTimezoneId() : string {
        if(this.weatherLocation){
            return this.weatherLocation?.timezone_id.toString();
        }

        return "";
    }

    public getLocaltimeEpoch() : string {
        if(this.weatherLocation){
            return this.weatherLocation?.localtime_epoch.toString();
        }

        return "";
    }

    public getLocaltime() : string {
        if(this.weatherLocation){
            return this.weatherLocation?.localtime.toString();
        }

        return "";
    }
    // Current Weather
    
    public getLastUpdatedEpoch() : string {
        if(this.weatherCurrent){
            return this.weatherCurrent.last_updated_epoch.toString();
        }

        return "";
    }

    public getLastUpdated() : string {
        if(this.weatherCurrent){
            return this.weatherCurrent.last_updated;
        }

        return "";
    }

    public getTempC() : string {
        if(this.weatherCurrent){
            return this.weatherCurrent.temp_c.toString();
        }

        return "";
    }

    public getTempF() : string {
        if(this.weatherCurrent){
            return this.weatherCurrent.temp_f.toString();
        }

        return "";
    }

    public getIsDay() : string {
        if(this.weatherCurrent){
            return this.weatherCurrent.is_day.toString();
        }

        return "";
    }

    public getConditionObject() : WeatherCondition {
        if(this.weatherCurrent){
            return this.weatherCurrent.condition!;
        }

        return {
            text: "",
            icon: "",
            code: 0
        };
    }

    public getWindMph() : string {
        if(this.weatherCurrent){
            return this.weatherCurrent.wind_mph.toString();
        }

        return "";
    }

    public getWindKph() : string {
        if(this.weatherCurrent){
            return this.weatherCurrent.wind_kph.toString();
        }

        return "";
    }

    public getWindDegree() : string {
        if(this.weatherCurrent){
            return this.weatherCurrent.wind_degree.toString();
        }

        return "";
    }

    public getWindDir() : string {
        if(this.weatherCurrent){
            return this.weatherCurrent.wind_dir;
        }

        return "";
    }

    public getPressureMb() : string {
        if(this.weatherCurrent){
            return this.weatherCurrent.pressure_mb.toString();
        }

        return "";
    }

    public getPressureIn() : string {
        if(this.weatherCurrent){
            return this.weatherCurrent.pressure_in.toString();
        }

        return "";
    }

    public getPrecipMm() : string {
        if(this.weatherCurrent){
            return this.weatherCurrent.precip_mm.toString();
        }

        return "";
    }

    public getPrecipIn() : string {
        if(this.weatherCurrent){
            return this.weatherCurrent.precip_in.toString();
        }

        return "";
    }

    public getHumidity() : string {
        if(this.weatherCurrent){
            return this.weatherCurrent.humidity.toString();
        }

        return "";
    }

    public getCloud() : string {
        if(this.weatherCurrent){
            return this.weatherCurrent.cloud.toString();
        }

        return "";
    }

    public getFeelsLikeC() : string {
        if(this.weatherCurrent){
            return this.weatherCurrent.feelslike_c.toString();
        }

        return "";
    }

    public getFeelsLikeF() : string {
        if(this.weatherCurrent){
            return this.weatherCurrent.feelslike_f.toString();
        }

        return "";
    }

    public getVisKm() : string {
        if(this.weatherCurrent){
            return this.weatherCurrent.vis_km.toString();
        }

        return "";
    }

    public getVisMiles() : string {
        if(this.weatherCurrent){
            return this.weatherCurrent.vis_miles.toString();
        }

        return "";
    }

    public getUv() : string {
        if(this.weatherCurrent){
            return this.weatherCurrent.uv.toString();
        }

        return "";
    }

    public getGustMph() : string {
        if(this.weatherCurrent){
            return this.weatherCurrent.gust_mph.toString();
        }

        return "";
    }

    public getGustKph() : string {
        if(this.weatherCurrent){
            return this.weatherCurrent.gust_kph.toString();
        }

        return "";
    }
}