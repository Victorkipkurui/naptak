// app/page.tsx

import AboutPage from "./components/about";
import Contact from "./components/contacts";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import Technologies from "./components/technologies";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full">
      <Header/>
      <Hero/>
      <AboutPage/>
      <Services/>
      <Technologies/>
      <Contact/>
      <Footer/>
    </main>
  );
}
