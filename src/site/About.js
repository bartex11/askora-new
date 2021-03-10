import React from 'react';
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBCardBody,
  MDBCard,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
} from 'mdbreact';

import SectionContainer from '../components/sectionContainer';

import './Styles/About.css';
import Data from '../data/Data';

class AboutPage extends React.Component {
  scrollToTop = () => window.scrollTo (0, 0);
  state = {
    data: Data,
  };
  componentDidMount(){
    document.title = "Аскора ООД - За нас"
  }
  render () {
    const {data} = this.state;
    return (
      <div className="about-page">

      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol>
            <SectionContainer noBorder>
              <MDBJumbotron style={{padding: 0}}>
                <MDBCol
                  className="background-image text-center py-0 px-4"
                  style={{backgroundImage: `url(./images/education.jpg)`}}
                >

                  <MDBCol className="py-5 jumbo-col">

                    <p>
                     {data.about}
                    </p>

                    <ul className="list">
                      <li>{data.aboutList}</li>
                      <li>{data.aboutList1}</li>
                      <li>{data.aboutList2}</li>
                    </ul>

                    <p>
                     {data.about1}
                    </p>

                  </MDBCol>
                </MDBCol>
              </MDBJumbotron>
            </SectionContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer>
        <MDBRow>

          <MDBCol md="4">
            <MDBAnimation reveal type="fadeInLeft">
              <MDBCard cascade className="my-3 grey lighten-4">
                <MDBCardImage
                  cascade
                  className="img-fluid"
                  src="./images/team.jpg"
                />
                <MDBCardBody cascade className="text-center">
                  <MDBCardTitle>
                    <strong>{data.rada}</strong>
                  </MDBCardTitle>
                  <MDBCardText className="text-justify">
                    {data.aboustRada}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>

          <MDBCol md="4">
            <MDBAnimation reveal type="fadeInDown">
              <MDBCard cascade className="my-3 grey lighten-4">
                <MDBCardImage
                  cascade
                  className="img-fluid"
                  src="./images/team.jpg"
                />
                <MDBCardBody cascade className="text-center">
                  <MDBCardTitle>
                    <strong>{data.bina}</strong>
                  </MDBCardTitle>
                  <MDBCardText className="text-justify">
                   {data.aboutBina}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>
          <MDBCol md="4">
            <MDBAnimation reveal type="fadeInRight">
              <MDBCard cascade className="my-3 grey lighten-4">
                <MDBCardImage
                  cascade
                  className="img-fluid"
                  src="./images/team.jpg"
                />
                <MDBCardBody cascade className="text-center">
                  <MDBCardTitle>
                    <strong>{data.toni}</strong>
                  </MDBCardTitle>
                  <MDBCardText className="text-justify">
                   {data.aboutToni}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>

      </MDBContainer>
    </div>
    );
  }
}


export default AboutPage;
