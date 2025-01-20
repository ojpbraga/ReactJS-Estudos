import React, { useState } from 'react'

const Header = () => {
  return (
    <header>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/Products">Products</a></li>
      </ul>
    </header>
  )
}

const Home = () => {
  return (
    <div>
      <p>Screen Home</p>
    </div>
  )
}

const Products = () => {
  const products = [
    {name: 'Notebook', propriets: ['16gb ram', '512gb'] },
    {name: 'Smartphone', propriets: ['6gb ram', '128gb'] },
  ];

  return (
    products.map(({name, propriets}, index) => (
      <div key={"product_"}>
        <h3>{name}</h3>
        <ul>
          {propriets.map((propriet) => (
            <li key={"propriet_"}>{propriet}</li>
          ))}
        </ul>
      </div>
    ))
  )
}

const Challenge_01 = () => {
  const {pathname} = window.location;
  let Content = Products;

  if(pathname === "/") {
    Content = Home;
  } else {
    Content = Products;
  }

  return (
    <>
      <h1>Desafio 1</h1>
      <Header/>
      <Content/>
    </>
  )
  // if(pathname == "ScreenA.jsx") {
  //   <Header/>
  //   return (
  //     <div>
  //       <h3>Screen A</h3>
  //     </div>
  //   )
  // } else if(pathname == "ScreenB.jsx") {
  //   <Header/>
  //   return (
  //     <div>
  //       <h3>Screen B</h3>
  //     </div>
  //   )
  // }
}

export default Challenge_01