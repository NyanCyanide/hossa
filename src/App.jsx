import Intro from "./components/intro";
import Links from "./components/links";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Hobbies from "./components/hobbies";
import Language from "./components/language";

export default function App() {
  return (
    <section className="container mx-auto md:px-20 px-4 mb-20 selection:bg-lime-500 selection:text-black">
      <Intro />
      <Links />
      <div className="grid grid-flow-rows grid-cols-1 md:grid-cols-2">
        <div><Experience/></div>
        <div><Skills/></div>
        <div><Hobbies/></div>
        <div><Language/></div>
      </div>
    </section>
  );
}
