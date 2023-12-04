import { IAlertProps } from "../../Types/ComponentProps"

const Alert = ({ isShowing, message }: IAlertProps) => {

    if(message == null || message === ""){
        message = "There is No Message"
    }

    if(isShowing){
        return (
            <div className="flex flex-col items-center text-center bg-slate-400 p-4 m-4 rounded-md">
                <div className="bg-slate-500 p-5 rounded-lg">
                    <div className="text-2xl text-red-500 font-bold">Alert</div>
                    <div className="text-xl">{message}</div>
                </div>
            </div> 
        )
    }else{
        return (
            <></>
        )
    }
}

export default Alert