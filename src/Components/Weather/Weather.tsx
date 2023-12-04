import { FormEvent, useState, useEffect, useMemo, useRef } from 'react'
import WeatherAPI from '../../Server/APIs/WeatherAPI'
import { WeatherResponse } from '../../Types/WeatherTypes'
import { IWeatherAlertProps } from '../../Types/ComponentProps'

const Weather = (props: IWeatherAlertProps) => {

    const [weatherResponse, setWeatherResponse] = useState<WeatherResponse>({} as WeatherResponse)
    // const [location, setLocation] = useState<string>('')
    const defaultValue  = 'London'
    const locationRef = useRef<string>(defaultValue)

    const weatherApi = useMemo(() => new WeatherAPI(), [])

    useEffect(() => {
        const fetchedData = async () => {
            try{

                await weatherApi.sendWeatherRequest(locationRef.current ? locationRef.current : defaultValue)

            }catch(error){
                console.error('Error fetching data: ', error)
            }
        }

        fetchedData()


    }, [locationRef.current])


    const input = async (data: FormEvent) => {
        data.preventDefault()
        const dataInput = new FormData(data.target as HTMLFormElement)
        const dataInputString = dataInput.get('locationInput')

        if(dataInputString === null || dataInputString === "Test"){
            props.setAlert(true)
        }

        let weatherData = await weatherApi.sendWeatherRequest(dataInputString as string)        
        locationRef.current = dataInputString as string

        // setLocation(dataInputString as string)
        setWeatherResponse(weatherData)
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