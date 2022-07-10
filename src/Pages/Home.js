import React from 'react';

import Header from '../Componets/Header/Header';
import Banner from '../Componets/Banner/Banner';

import Posts from '../Componets/Posts/Posts';
import Footer from '../Componets/Footer/Footer';

function Home(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
 
