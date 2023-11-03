import React from 'react'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'
import Default from './Default'

const HeaderFooter = () => {
  
  console.log(Default.element,Default.path)
  return (
    <>
     <Header/>
     <Default/>
     <Footer/>
    </>
  )
}

export default HeaderFooter