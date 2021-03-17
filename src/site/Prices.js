import React from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCardTitle,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBAnimation,
  MDBNavLink
} from "mdbreact";

import SectionContainer from "../components/sectionContainer";
import Data from "../data/Data";

class PricesPage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  state = {
    data: Data,
  };

  componentDidMount() {
    document.title = "Аскора ООД - Цени";
  }

  render() {
    const { data } = this.state;
    return (
      <div className="prices-page">
        <MDBContainer className="mt-5">
          <MDBRow>
            <MDBCol>
              <SectionContainer noBorder>
                <MDBJumbotron style={{ padding: 0 }}>
                  <MDBCol
                    className="background-image text-center py-0 px-4"
                    style={{ backgroundImage: `url(./images/courses.jpg)` }}
                  >
                    <MDBCol className="py-5 jumbo-col">
                      <p className="mb-2">{data.pricesList}</p>

                      <p className="mb-2">{data.pricesList1}</p>

                      <p>{data.pricesList2}</p>
                    </MDBCol>
                  </MDBCol>
                </MDBJumbotron>
              </SectionContainer>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol>
              <MDBJumbotron
                className="text-white text-center p-0 mb-5"
                style={{
                  backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`,
                }}
              >
                <MDBCardTitle className="h1-responsive py-4 m-0 font-bold">
                  Цената на писмения превод се определя от:
                </MDBCardTitle>
                <div className="content-wrapper">
                  <ul className="translation-list">
                    <li>езика от или на който ще се превежда;</li>
                    <li>
                      степента на сложност на текста, изискващ специализирани
                      познания в съответната област;
                    </li>
                    <li>
                      дължината на преведения текст, изчислена в брой знаци,
                      вкл. интервали;
                    </li>
                    <li>срока за изпълнение на поръчката.</li>
                  </ul>
                  <p className="mx-5 mb-3">
                    Изчисляването на обема на превода се извършва въз основа на
                    преведения текст, а не на текста-първоизточник, като една
                    стандартна страница е равна на 1800 знака с интервали.
                  </p>
                </div>

                <MDBNavLink
                  tag="button"
                  to="/contacts"
                  className="contact-link btn btn-outline-white mb-5"
                  onClick={this.scrollToTop}
                >
                  <MDBIcon icon="clone" className="mr-2" /> Контакти
                </MDBNavLink>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-4">
            <MDBCol md="6" className="tranlsation-item">
              <MDBAnimation reveal type="fadeInRight">
                <MDBCard cascade className="">
                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>
                      <strong>Видове поръчки:</strong>
                    </MDBCardTitle>
                    <MDBCardText>
                      <ul class="text-left">
                        <li>Обикновена поръчка - 5 дни</li>
                        <li>Бърза поръчка - 2 дни</li>
                        <li>Експресна поръчка - 1 ден</li>
                      </ul>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>

            <MDBCol md="6" className="tranlsation-item">
              <MDBAnimation reveal type="fadeInRight">
                <MDBCard cascade className="">
                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>
                      <strong>Начин на плащане:</strong>
                    </MDBCardTitle>
                    <MDBCardText>
                      <ul class="text-left">
                        <li>с платежно нареждане по банков път</li>
                        <li>с наложен платеж чрез куриер</li>
                        <li>в брой в офиса на фирмата</li>
                      </ul>
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

export default PricesPage;
