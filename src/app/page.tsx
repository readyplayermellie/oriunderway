import Counter from "./components/Counter";
import AboutUs from "./components/AboutUs";
import Photos from "./components/Photos";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20">
      <div>
        <h1 className="text-6xl">Ori (nog niet) onderweg</h1> 
      </div>
      <Counter />
      <AboutUs />
      <Photos />
      <Contact />
    </div>
  );
}
