import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Pokedex</h1>
    <br className="max-md:hidden"/>
    <span className="red_gradient text-center">Search for you favourite Pokemon and try to find them all</span>
    </section>
  );
}
