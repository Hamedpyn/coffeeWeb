import BreadCrumb from '@/components/modules/BreadCrumb/BreadCrumb'
import Card from '@/components/modules/Card/Card';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Search({ menu }) {
  const { query } = useRouter();
  const [userSearchResult, setResults] = useState([]);

  useEffect(() => {
    if (!query.q) return;

    const q = query.q.toLowerCase();
    const filtered = [...menu].filter(i =>
      i.title.toLowerCase().includes(q) || i.type.toLowerCase().includes(q)
    );
    setResults(filtered);
  }, [query.q]);
  return (
    <>
      <BreadCrumb label={'Result'} />
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="section-title">
            <h4 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Menu & Pricing</h4>
            <h1 className="display-4">Competitive Pricing</h1>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h1 className="mb-5 text-center">Hot Coffee</h1>

              {userSearchResult.filter(item => item.type == 'hot').length ? (

                userSearchResult.filter(item => item.type == 'hot').map(item => (
                  <Card key={item.id} {...item} />
                ))
              ) : (
                <h3>no item</h3>
              )}

            </div>
            <div className="col-lg-6">
              <h1 className="mb-5 text-center">Cold Coffee</h1>
              {userSearchResult.filter(item => item.type == 'cold').length ? (

                userSearchResult.filter(item => item.type == 'cold').map(item => (
                  <Card key={item.id} {...item} />
                ))
              ) : (
                <h3>no item</h3>
              )}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:4000/menu`);
  const menu = await res.json();

  return {
    props: {
      menu,
    }
  };
}