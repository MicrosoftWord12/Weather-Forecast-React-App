export interface INavProp {
    id: number;
    Name: string;
    Endpoint: string;
}

export interface INavigationPropList {
    NavigationPropList: Array<INavProp>
}

export interface IAlertProps {
    hidden: boolean;
}

export interface IWeatherAlertProps {
    setAlert: (isAlertEnabled: boolean) => void;
}

