import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { _router } from './routes';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return <RouterProvider router={_router} />;
}
