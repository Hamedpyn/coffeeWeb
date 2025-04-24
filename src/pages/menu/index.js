import BreadCrumb from '@/components/modules/BreadCrumb/BreadCrumb'
import Menu from '@/components/templates/Index/Menu'
import React from 'react'

export default function Menus(props) {

  return (
    <>
      <BreadCrumb label={'Menu'} />
      <Menu menu={props.menu} />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:4000/menu`)
  const data = await res.json()
  return {
    props:{
      menu:data
    }
  }
}