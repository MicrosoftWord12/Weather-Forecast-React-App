export interface WeatherRequest {
    RequestLookupFile: string;
    RequestParameters: {
        API_KEY: string;
        query: string;
        days?: number;
        dt? : number;
    }
}

export interface WeatherResponse {
    location: WeatherLocationType
    current: WeatherCurrent
}

export interface WeatherLocationType {
    name: string;
    region: string;
    country: string;
    lat: number;
    long: number;
    timezone_id: string;
    localtime: string;
    localtime_epoch: number;
}

export interface WeatherCurrent {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: WeatherCondition;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
}

export interface WeatherCondition {
    text: string;
    icon: string;
    code: number;
}