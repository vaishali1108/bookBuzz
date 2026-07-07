import React from 'react';
import Header from '../../componets/member/Header';
import Slider from '../../componets/member/Slider';
import About from '../../componets/member/About';
import Event from '../../componets/member/Event';
import Footer from '../../componets/member/Footer';


function Home(props) {

  return (

    <>
      <section id="home">
        <Header />
      </section>

      <section id="home">
        <Slider />
      </section>


      <section id="about">
        <About />
      </section>

      <section id="events">
        <Event />
      </section>


      <section id="contact">
        <Footer />
      </section>
    </>
  );
}

export default Home;
