import { FC, useEffect } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { fetchData } from '../redux/app/appSlice';
import { GlobalStyle } from '../styles/global';
import AppRouter from './Routes/AppRouter';
import Loader from './Loader/Loader';
import { API_URL  } from '../constants/api';

export interface AppProps {}

const App: FC<AppProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
      dispatch(
        fetchData({
          url: `${API_URL}/books` ,
        })
      );
  }, [dispatch]);

  return (
    <>
      <GlobalStyle/>
      <AppRouter/>
    </>
  );
}

export default Loader(App);
