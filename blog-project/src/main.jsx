import { createRoot } from 'react-dom/client'
import './index.css'
import Approutes from './routes/Approutes.jsx'
import AllContext from './context/AllContext.jsx'
import {ToastContainer} from 'react-toastify'
createRoot(document.getElementById('root')).render(
    <AllContext>
        <Approutes />
        <ToastContainer/>
    </AllContext>
)
