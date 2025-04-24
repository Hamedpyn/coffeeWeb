import ProductsDetails from "@/components/templates/Product/ProductDetails";
import "@/styles/Product.module.css";


const Product = (props) => {

  return (
    <ProductsDetails data={props.data}/>
  );
};

export default Product;

export async function getStaticPaths() {
  const res = await fetch('http://localhost:4000/menu');
  const data = await res.json();

  const paths = data.map(item => {
    return {
      params: { id: item.id.toString() }
    }
  })

  return {
    paths, fallback: false
  }
}
export async function getStaticProps(context) {

  const res = await fetch(`http://localhost:4000/menu/${context.params.id}`);
  const data = await res.json();

  return {
    props: {
      data
    }
  }
}