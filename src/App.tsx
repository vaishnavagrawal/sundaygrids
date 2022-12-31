import './App.css';
import FAQ from './components/sections/FAQ';
import Hero from './components/sections/Hero';
import Navbar from './components/sections/Navbar';
import Testimonials from './components/sections/Testimonials';

function App() {
  return (
    <>
      <div className='w-screen h-[125px] absolute bg-[#FAFAFA] z-[-10]'></div>

      <div className=''>
        <Navbar></Navbar>
        <Hero></Hero>
        <Testimonials />
        <FAQ />
      </div>
    </>
  );
}

export default App;
