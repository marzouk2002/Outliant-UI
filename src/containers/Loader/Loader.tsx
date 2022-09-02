import { FC } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { selectApiLoading } from '../../redux/app/appSlice'
import { AppProps } from '../App'
import LoaderComponent from '../../components/LoaderComponent'

const Loader = (WrappedComponent: FC): FC => {
    const LoaderWapper: FC<AppProps> = (props) => {

        const isLoading = useAppSelector(selectApiLoading)

        return (
            <>
                {
                    isLoading && 
                        <LoaderComponent/>
                }
                <WrappedComponent {...props}/>
            </>
        )

    }
    
    return LoaderWapper
}

export default Loader;