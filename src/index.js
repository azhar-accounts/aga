import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Bounce, ToastContainer } from 'react-toastify';
import './style.css';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <App />
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
        />
    </StrictMode>
);
