import { FormEvent, useState, useEffect, useMemo, useRef } from 'react'
import WeatherAPI from '../../Server/APIs/WeatherAPI'
import { IWeatherAlertProps } from '../../Types/ComponentProps'

const Weather = ({ setAlert, setAlertMessage }: IWeatherAlertProps) => {

    const [ isDataUpdated, setDataUpdated ] = useState<boolean>(false)
    const defaultValue  = 'London'
    const [ currentLocation, setCurrentLocation ] = useState<string>(defaultValue)

    const weatherApi = useMemo(() => new WeatherAPI(), [])

    useEffect(() => {
        const fetchedData = async () => {
            try{
                const response = await weatherApi.sendWeatherRequest(currentLocation ? currentLocation : defaultValue)
                if(!response?.ok){
                    setAlert(true)
                    setAlertMessage(`Data For *${currentLocation}* Could not be Found`)
                    return;
                }
                setDataUpdated((prev) => !prev)
            }catch(error){
                console.error('Error fetching data: ', error)
            }
        }

        fetchedData()

    }, [currentLocation])


    const input = async (data: FormEvent) => {
        data.preventDefault()
        setAlert(false)
        const dataInput = new FormData(data.target as HTMLFormElement)
        const dataInputString = dataInput.get('locationInput')
        await weatherApi.sendWeatherRequest(dataInputString as string)        
        setCurrentLocation(dataInputString as string)
    }

    return (
        <div className='flex items-center justify-center h-[80vh] flex-col'>
            <div className='bg-gray-400 p-[25vh] rounded-full'>
                <h1 className='font-extrabold text-center text-2xl'>Weather Statistics</h1>


                <form className="flex flex-col justify-center text-center bg-slate-300 rounded-md p-2 m-2" onSubmit={(e) => input(e)}>
                    <label className="mb-2" htmlFor="locationInput">Enter Location Here</label>
                    <input className="mb-2 rounded-md text-center bg-slate-400 text-white placeholder:text-white" id="locationInput" type="text" placeholder='Location' name='locationInput' defaultValue={defaultValue} />
                    <input className="mb-2 hover:bg-slate-500 p-2 cursor-pointer bg-slate-300 rounded-xl border-2 border-black" type="submit" value="Submit Location"/>
                </form>


                <div className='text-center text-xl'>
                    <div>
                        <p>City: {weatherApi.getName()}</p>
                    </div>
                    <div>
                        <p>Country: {weatherApi.getCountry()}</p>
                    </div>
                    <div>
                        <p>Temperature: {weatherApi.getFeelsLikeC() + "C"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather