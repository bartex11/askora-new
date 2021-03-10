import React from 'react';
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
} from 'mdbreact';

import Data from '../data/Data';
import './Styles/HomePage.css';

class HomePage extends React.Component {
  scrollToTop = () => window.scrollTo (0, 0);
  state = {
    data: Data,
  };
  componentDidMount(){
    document.title = "Аскора ООД - Начало"
  }
  render () {
    const {data} = this.state;
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
                {/* <h2 className="text-center my-5 font-weight-bold">
                  Аскора сме велики защото:
                </h2> */}
                <p className="text-muted mb-2">
                  {data.home1}
                </p>
                <p className="text-muted mb-2">
                  {data.home2}
                </p>
                <p className="text-muted">
                  {data.home3}
                </p>
                <hr className="my-5" />

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
                          <MDBCardText>
                            Тук ще научите повече за екипа на Аскора
                          </MDBCardText>
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
                    <MDBAnimation reveal type="fadeInDown">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="./images/globus.jpg"
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <i class="far fa-file pink-text pr-2" />
                            <strong>Ваучери</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            За програмите с ваучери
                          </MDBCardText>
                          <MDBNavLink
                            tag="button"
                            to="/vouchers"
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
                          src="./images/globus1.jpg"
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <i class="fas fa-language pink-text pr-2" />
                            <strong>Преводи</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Повече за преводите на Аскора
                          </MDBCardText>

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
                </MDBRow>

                <MDBRow id="categories">
                  <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInLeft">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="https://mdbootstrap.com/wp-content/uploads/2017/06/navigation-1.jpg"
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <i class="fas fa-globe-americas pink-text pr-2" />
                            <strong>Легализация</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Ние легализираме всичко

                          </MDBCardText>

                          <MDBNavLink
                            tag="button"
                            to="/legalisations"
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
                    <MDBAnimation reveal type="fadeIn">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src="https://mdbootstrap.com/wp-content/uploads/2015/08/forms.jpg"
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <i class="fas fa-university pink-text pr-2" />
                            <strong>Курсове</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Курсове провеждани в аскора
                          </MDBCardText>

                          <MDBNavLink
                            tag="button"
                            to="/courses"
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
                          src="https://mdbootstrap.com/wp-content/uploads/2015/08/table-fb.jpg"
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <i class="far fa-credit-card pink-text pr-2" />
                            <strong>Цени</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Научи повече за нашите цени
                          </MDBCardText>

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
