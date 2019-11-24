import React, { Component } from 'react';
import Header from '../../components/Header';
import Navbar from '../Navbar';
import SimpleCard from '../Card';
import CardSection from '../CardSection';


export class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header></Header>
        <Navbar navItemList={['Client', 'Patients']} class={"category-block"}></Navbar>
        <SimpleCard></SimpleCard>
        <CardSection></CardSection>
      </div>
    );
  }
}

export default Home;
