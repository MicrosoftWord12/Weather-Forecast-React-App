import NavigationButton from './NavigationButton'
import { INavigationPropList } from '../../Types/ComponentProps'

export const NavigationBar = ({ NavigationPropList }: INavigationPropList) => {
  return (
    <div>
        <ul className='flex flex-row-reverse bg-gray-400 w-full'>
            {NavigationPropList.map((item) => (
                <NavigationButton key={item.id} id={item.id} Name={item.Name} Endpoint={item.Endpoint} />
            ))}
        </ul>
    </div>
  )
}

export default NavigationBar