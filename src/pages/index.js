import About from "@/components/templates/Index/About";
import Menu from "@/components/templates/Index/Menu";
import Offer from "@/components/templates/Index/Offer";
import Reservation from "@/components/templates/Index/Reservation";
import Services from "@/components/templates/Index/Services";
import Slider from "@/components/templates/Index/Slider";

export default function Home(props) {


  return (
    <>
      <Slider />
      <About />
      <Services services={props.services} />
      <Offer />
      <Menu menu={props.menu} />
      <Reservation />
    </>
  );
}

export async function getStaticProps() {
  const servicesResponse = await fetch('http://localhost:4000/services');
  const services = await servicesResponse.json();

  const menuResponse = await fetch('http://localhost:4000/menu')
  const menu = await menuResponse.json()

  return {
    props: {
      services,
      menu,
    },
    revalidate: 60 * 60 * 12
  }
}