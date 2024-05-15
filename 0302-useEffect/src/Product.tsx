import React, { useEffect } from 'react'

function Product() {

    useEffect(() => {
        function handleScroll(event) {
          console.log(event);
        }
        window.addEventListener('scroll', handleScroll);
    
        return () => { // Vai acontecer quando o elemento sai da tela
          window.removeEventListener('scroll', handleScroll);
        }
      }, [])

  return (
    <div style={{height: "200vh"}}>My Product</div>
  )
}

export default Product