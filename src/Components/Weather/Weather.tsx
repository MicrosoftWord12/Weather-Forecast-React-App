import React from 'react'
import WeatherAPI from '../../Server/WeatherAPI'
import { WeatherResponse } from '../../Types/WeatherTypes'

const Weather = () => {

    const [weatherResponse, setWeatherResponse] = React.useState<WeatherResponse>({} as WeatherResponse)

    const weatherApi = React.useMemo(() => new WeatherAPI(), [])

    React.useEffect(() => {


        const fetchedData = async () => {
            try{

                const data = await weatherApi.sendWeatherRequest()

                setWeatherResponse(data)

            }catch(error){
                console.error('Error fetching data: ', error)
            }

        }
        
        fetchedData()
    }, [weatherApi])

    return (
        <div className='flex items-center justify-center h-[80vh] flex-col'>
            <div className='bg-gray-400 p-[25vh] rounded-full'>
                <h1 className='font-extrabold text-center text-2xl'>Weather Statistics</h1>
                <div className='text-center'>
                    <div>
                        <p>City: {weatherApi.getRegion()}</p>
                    </div>
                    <div>
                        <p>Country: {weatherApi.getCountry()}</p>
                    </div>
                    <div>
                        <p>Day: {weatherApi.getFeelsLikeF()}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Weather