import { WeatherResponse } from "../../Types/WeatherTypes";

export default class WeatherLocation {

    public name: string = "";
    public region: string = "";
    public country: string = "";
    public lat: number = 0;
    public long: number = 0;
    public timezone_id: string = "";
    public localtime_epoch: number = 0;
    public localtime: string = "";


    constructor(data: WeatherResponse) {
        this.name = data.location.name;
        this.region = data.location.region;
        this.country = data.location.country;
        this.lat = data.location.lat;
        this.long = data.location.long;
        this.timezone_id = data.location.timezone_id;
        this.localtime_epoch = data.location.localtime_epoch;
        this.localtime = data.location.localtime;
    }
}