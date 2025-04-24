import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import Services from "@/components/templates/Index/Services";

export default function Service(props) {
  
  return (
    <>
    <BreadCrumb label={'Services'} />
    <Services services={props.services} />
    </>
  )
}

export async function getStaticProps(){
  const res = await fetch('http://localhost:4000/services')
  const data = await res.json()

  return {
    props:{
      services:data
    }
  }
} 