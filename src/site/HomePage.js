import React from "react";
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
  MDBNavLink,
  MDBIcon,
  MDBJumbotron,
  MDBBtn,
} from "mdbreact";

import Data from "../data/Data";
import "./Styles/HomePage.css";

class HomePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);
  state = {
    data: Data,
  };
  componentDidMount() {
    document.title = "Аскора ООД - Начало";
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <MDBEdgeHeader color="indigo darken-3" className="sectionPage" />
        <div className="mt-3 mb-5">
          <MDBFreeBird>
            <MDBRow>
              <MDBCol
                md="10"
                className="mx-auto float-none white z-depth-1 py-2 px-2"
              >
                <MDBCardBody className="text-center">
                  <h2 className="h2-responsive mb-4">
                    <strong className="font-weight-bold">
                      <img
                        src="./images/askora_logo.jpg"
                        alt="askora-logo"
                        className="pr-2"
                      />
                    </strong>
                  </h2>
                  <MDBRow />
                  <p>{data.home}</p>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBFreeBird>
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <MDBJumbotron className="text-white text-center p-0 mt-5"
                    style={{
                      backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`,
                    }}>
             
                      <MDBCardTitle className="h1-responsive py-4 m-0 font-bold">
                        Интро
                      </MDBCardTitle>
                      <p className="mx-5 mb-3">{data.home1}</p>

                      <p className="mx-5 mb-3">{data.home2}</p>

                      <p className="mx-5 mb-3">{data.home3}</p>
                      <MDBNavLink
                        tag="button"
                        to="/contacts"
                        className=""
                        onClick={this.scrollToTop}
                      >
                        <MDBBtn outline color="white" className="mb-5">
                          <MDBIcon icon="clone" className="mr-2" /> Контакти
                        </MDBBtn>
                      </MDBNavLink>
              
                </MDBJumbotron>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol md="4">
                <MDBAnimation reveal type="fadeInLeft">
                  <MDBCard cascade className="my-3 grey lighten-4">
                    <MDBCardImage
                      cascade
                      className="img-fluid"
                      src="./images/header.jpg"
                    />
                    <MDBCardBody cascade className="text-center">
                      <MDBCardTitle>
                        <i className="fas fa-home pink-text pr-2" />
                        <strong>{data.menuAbout}</strong>
                      </MDBCardTitle>
                      <MDBCardText>{data.aboutMore}</MDBCardText>
                      <MDBNavLink
                        tag="button"
                        to="/about"
                        color="mdb-color"
                        className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                        onClick={this.scrollToTop}
                      >
                        {data.more}
                      </MDBNavLink>
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
                      src="./images/globus.jpg"
                    />
                    <MDBCardBody cascade className="text-center">
                      <MDBCardTitle>
                        <i class="fas fa-language pink-text pr-2" />
                        <strong>{data.menuTranslations}</strong>
                      </MDBCardTitle>
                      <MDBCardText>{data.translationMore}</MDBCardText>

                      <MDBNavLink
                        tag="button"
                        to="/translations"
                        color="mdb-color"
                        className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                        onClick={this.scrollToTop}
                      >
                        {data.more}
                      </MDBNavLink>
                    </MDBCardBody>
                  </MDBCard>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="4">
                <MDBAnimation reveal type="fadeInLeft">
                  <MDBCard cascade className="my-3 grey lighten-4">
                    <MDBCardImage
                      cascade
                      className="img-fluid"
                      src="./images/globus1.jpg"
                    />
                    <MDBCardBody cascade className="text-center">
                      <MDBCardTitle>
                        <i class="fas fa-globe-americas pink-text pr-2" />
                        <strong>{data.menuLegalisation}</strong>
                      </MDBCardTitle>
                      <MDBCardText>{data.legalisationMore}</MDBCardText>

                      <MDBNavLink
                        tag="button"
                        to="/legalisation"
                        color="mdb-color"
                        className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                        onClick={this.scrollToTop}
                      >
                        {data.more}
                      </MDBNavLink>
                    </MDBCardBody>
                  </MDBCard>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol md="4">
                <MDBAnimation reveal type="fadeInRight">
                  <MDBCard cascade className="my-3 grey lighten-4">
                    <MDBCardImage
                      cascade
                      className="img-fluid"
                      src="./images/courses.jpg"
                    />
                    <MDBCardBody cascade className="text-center">
                      <MDBCardTitle>
                        <i class="far fa-credit-card pink-text pr-2" />
                        <strong>{data.menuPrices}</strong>
                      </MDBCardTitle>
                      <MDBCardText>{data.pricesMore}</MDBCardText>

                      <MDBNavLink
                        tag="button"
                        to="/prices"
                        color="mdb-color"
                        className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
                        onClick={this.scrollToTop}
                      >
                        {data.more}
                      </MDBNavLink>
                    </MDBCardBody>
                  </MDBCard>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    );
  }
}

export default HomePage;
