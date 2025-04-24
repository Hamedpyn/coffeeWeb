import BreadCrumb from "@/components/modules/BreadCrumb/BreadCrumb";
import TestimonialComp from "@/components/templates/Index/Testimonial";

export default function Testimonial(props) {
  
  
  return (
    <>
    <BreadCrumb label={'Testimonial'} />
    <TestimonialComp comments={props.comments} />
    </>
  )
}

export async function getStaticProps () {
  const res = await fetch('http://localhost:4000/comments')
  const comments = await res.json()

  return {
    props:{
      comments
    }
  }
};