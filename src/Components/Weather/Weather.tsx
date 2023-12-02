import React, { FormEvent } from 'react'
import WeatherAPI from '../../Server/APIs/WeatherAPI'
import { WeatherResponse } from '../../Types/WeatherTypes'

const Weather = () => {

    const [weatherResponse, setWeatherResponse] = React.useState<WeatherResponse>({} as WeatherResponse)

    const weatherApi = React.useMemo(() => new WeatherAPI(), [])

    React.useEffect(() => {
        const fetchedData = async () => {
            try{

                const data = await weatherApi.sendWeatherRequest("london")

                setWeatherResponse(data)

            }catch(error){
                console.error('Error fetching data: ', error)
            }
        }
        fetchedData()
    }, [weatherApi])


    const input = (data: FormEvent) => {
        data.preventDefault()
        const dataInput = new FormData(data.target as HTMLFormElement)
        const dataInputString = dataInput.get('locationInput')
        weatherApi.sendWeatherRequest(dataInputString as string)
    }

    return (
        <div className='flex items-center justify-center h-[80vh] flex-col'>
            <div className='bg-gray-400 p-[25vh] rounded-full'>
                <h1 className='font-extrabold text-center text-2xl'>Weather Statistics</h1>


                <form className="flex flex-col justify-center text-center bg-slate-300 rounded-md p-2 m-2" onSubmit={(e) => input(e)}>
                    <label className="mb-2" htmlFor="locationInput">Enter Location Here</label>
                    <input className="mb-2 rounded-md text-center bg-slate-400 text-white placeholder:text-white" id="locationInput" type="text" placeholder='Location' name='locationInput'/>
                    <input className="mb-2 hover:bg-slate-500 p-2 cursor-pointer bg-slate-300 rounded-xl" type="submit" value="Submit Location" />
                </form>


                <div className='text-center text-xl'>
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