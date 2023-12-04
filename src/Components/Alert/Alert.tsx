import { IAlertProps } from "../../Types/ComponentProps"

const Alert = ({ hidden }: IAlertProps) => {
    if(!hidden){
        return (
            <div ></div>
        )
    }else{
        return (
            <div className='hidden'></div>
        )
    }
}

export default Alert