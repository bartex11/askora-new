import React from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBBtn,
  MDBIcon,
  MDBCardBody,
  MDBCard,
  MDBCardText,
  MDBAnimation,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

import SectionContainer from "../components/sectionContainer";

import Data from "../data/Data";

class TranslationsPage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);
  state = {
    data: Data,
    modal1: false,
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  componentDidMount() {
    document.title = "Аскора ООД - Преводи";
  }
  render() {
    const { data } = this.state;
    return (
      <div className="voucher-page">
        <MDBContainer className="mt-5">
          <MDBRow>
            <MDBCol>
              <SectionContainer noBorder>
                <MDBJumbotron style={{ padding: 0 }}>
                  <MDBCol
                    className="background-image text-center py-0 px-4"
                    style={{ backgroundImage: `url(./images/globus.jpg)` }}
                  >
                    <MDBCol className="py-5 jumbo-col">
                      <p className="mb-2">{data.translationList}</p>

                      <p className="mb-2">{data.translationList1}</p>
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
                  Защо АСКОРА?
                </MDBCardTitle>
                <div className="content-wrapper">
                  <ul className="translation-list">
                    <li>Висококвалифицирани преводачи;</li>
                    <li>
                      Задължителна редакция на текста на превода от друг
                      преводач;
                    </li>
                    <li>
                      Ефективна комуникация между възложител и изпълнител;
                    </li>
                    <li>
                      Конфиденциалност, гарантирана с подписването на декларация
                      или договор за конфиденциалност;
                    </li>
                    <li>
                      Заверка на документи във всички министерства и легализация
                      в Консулски отдел на МВнР;
                    </li>
                    <li>
                      Приемливи цени, с отстъпки за обем при преводите и
                      преференциални цени за постоянни клиенти.
                    </li>
                  </ul>
                </div>

                <MDBNavLink
                  tag="button"
                  to="/contacts"
                  className="contact-link"
                  onClick={this.scrollToTop}
                >
                  <MDBBtn outline color="white" className="mb-5">
                    <MDBIcon icon="clone" className="mr-2" /> Контакти
                  </MDBBtn>
                </MDBNavLink>
                <MDBBtn
                  outline
                  color="white"
                  className="mb-5"
                  onClick={this.toggle(1)}
                >
                  Сертификат
                </MDBBtn>

                <MDBModal
                  isOpen={this.state.modal1}
                  toggle={this.toggle(1)}
                  centered
                  size="lg"
                >
                  <MDBModalHeader
                    className="text-black"
                    color="black"
                    toggle={this.toggle(1)}
                  >
                    Сертификат Аскора
                  </MDBModalHeader>
                  <MDBModalBody>
                    <img
                      src="./images/sertifikat.jpg"
                      alt="askora-logo"
                      className="sertifikat-image"
                    />
                  </MDBModalBody>
                  <MDBModalFooter>
                    <MDBBtn color="color-text" onClick={this.toggle(1)}>
                      Затвори
                    </MDBBtn>
                  </MDBModalFooter>
                </MDBModal>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-4">
            <MDBCol md="6" className="tranlsation-item">
              <MDBAnimation reveal type="fadeInRight">
                <MDBCard cascade className="">
                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>
                      <strong>Сътрудници</strong>
                    </MDBCardTitle>
                    <MDBCardText>
                      Сътрудниците на Агенцията са филолози и специалисти с
                      висше юридическо, техническо, икономическо и медицинско
                      образование. При необходимост като преводачи се ползват
                      носители на чуждия език, на който се превежда.
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
                      <strong>Ръководство</strong>
                    </MDBCardTitle>
                    <MDBCardText>
                      Ръководството на фирмата поставя високи изисквания към
                      преводачите и техните преводи: отлично владеене на чуждия
                      и на родния език, ерудиция, самокритичност, познаване на
                      специфичната за конкретните текстове сфера на познание,
                      чувство за отговорност, прецизност, коректност при
                      изпълнение на поставените срокове. За гарантиране на
                      необходимото качество всички готови преводи преминават
                      през вътрешнофирмен редакционен контрол.
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
                      <strong>Преводачи</strong>
                    </MDBCardTitle>
                    <MDBCardText>
                      Всички наши преводачи са подписали декларация за запазване
                      на търговската тайна по чл. 52 от Търговския закон, както
                      и декларация за отговорност по чл. 290, ал. 1 и 2 от
                      Наказателния кодекс за достоверността на извършваните
                      преводи.
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
                      <strong>Преводи</strong>
                    </MDBCardTitle>
                    <MDBCardText>
                      Готовият превод се предава на хартиен или магнитен носител
                      в предпочитан от клиента формат, с подписа на извършилия
                      го заклет преводач и фирмен печат. Получаването на
                      преводите може да се извърши в офиса, по имейл, по факс, с
                      пощенска пратка, с куриер в страната или чужбина.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>

          <MDBRow className="translation-footer mb-4">
            <MDBCol md="6" className="tranlsation-item">
              <MDBAnimation reveal type="fadeInLeft">
                <MDBCard cascade className="">
                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>
                      <strong>
                        Аскора ООД извършва следните видове преводи:
                      </strong>
                    </MDBCardTitle>
                    <MDBCardText>
                      <ul>
                        <li>
                          преводи на документи и на всякакви видове текстове;
                        </li>
                        <li>
                          официални преводи на текстове, поставени на фирмена
                          бланка с декларация за верността на превода от
                          преводача и фирмен печат;
                        </li>
                        <li>
                          легализирани преводи на документи, заверени в
                          съответните институции, с апостил и заверка на подписа
                          на преводача от Консулския отдел на МВнР;
                        </li>
                        <li>устни преводи: консекутивен и симултанен.</li>
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
export default TranslationsPage;
