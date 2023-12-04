export interface INavProp {
    id: number;
    Name: string;
    Endpoint: string;
}

export interface INavigationPropList {
    NavigationPropList: Array<INavProp>
}

export interface IAlertProps {
    isShowing: boolean;
    message?: string;
}

export interface IWeatherAlertProps {
    setAlert: (isAlertEnabled: boolean) => void;
    setAlertMessage: (alertMessage: string) => void;
}

