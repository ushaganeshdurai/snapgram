import { Routes,Route } from 'react-router-dom';
import './globals.css';
import SigninForm from './_auth/forms/SigninForm';
import Home from './_root/pages/Home';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import { Toaster } from './components/ui/toaster';
const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/*public routes */}
            <Route element={<AuthLayout />}>
            <Route path='/sign-in' element={<SigninForm />} />
            <Route path='/sign-up' element={<SignupForm />} />
            </Route>
            {/*private routes */}
            <Route element={<RootLayout />}/>
            <Route index element={<Home />}/>
        </Routes>
        <Toaster />
    </main>
  )
}

export default App