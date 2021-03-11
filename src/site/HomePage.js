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

import SectionContainer from "../components/sectionContainer";
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
              <MDBCol md="12" className="mt-4 text-justify">
                <p className="text-muted mb-2">{data.home1}</p>
                <p className="text-muted mb-2">{data.home2}</p>
                <p className="text-muted">{data.home3}</p>
                <hr className="my-5" />

                <MDBRow>
                  <MDBCol>
                    <MDBJumbotron style={{ padding: 0 }}>
                      <MDBCol
                        className="text-white text-center py-5 px-4"
                        style={{
                          backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`,
                        }}
                      >
                        <MDBCol className="py-5">
                          <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
                            Интро
                          </MDBCardTitle>
                          <p className="mx-5 mb-5">
                            Днес българските граждани имат възможност да
                            пътуват, живеят и да работят в чужбина. В
                            професионалната си дейност те могат да осъществяват
                            контакти и съвместна дейност с чуждестранни фирми. С
                            преводаческите си услуги Aскора ООД е на
                            разположение на своите клиенти при подготовката и
                            превода на необходимите за тази цел документи
                          </p>

                          <p className="mx-5 mb-5">
                            Доброто владеене на чужди езици е ключова
                            компетентност от съществено значение за успеха в
                            съвременния свят и на трудовия пазар. Ние ще ви
                            помогнем да придобиете необходимите чуждоезикови
                            знания и умения.
                          </p>

                          <p className="mx-5 mb-5">
                            Да проведете своето образование в чужбина е смела и
                            сериозна крачка, която трябва да обмислите
                            внимателно. За да направите най-добрия избор,
                            свържете се с нас – ние предлагаме консултации и
                            помощ при кандидатстване в чуждестранни учебни
                            заведения.
                          </p>
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
                        </MDBCol>
                      </MDBCol>
                    </MDBJumbotron>
                  </MDBCol>
                </MDBRow>

                <MDBRow id="categories">
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

                <MDBRow id="categories">
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
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    );
  }
}

export default HomePage;
