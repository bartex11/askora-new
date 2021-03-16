import React from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBIcon,
  MDBBtn,
} from "mdbreact";

import SectionContainer from "../components/sectionContainer";
import Data from "../data/Data";

class LegalisationPage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  state = {
    data: Data,
  };

  componentDidMount() {
    document.title = "Аскора ООД - Легализация";
  }

  render() {
    const { data } = this.state;
    return (
      <div className="legalisations-page">
        <MDBContainer className="mt-5">
          <MDBRow>
            <MDBCol>
              <SectionContainer noBorder>
                <MDBJumbotron style={{ padding: 0 }}>
                  <MDBCol
                    className="background-image text-center py-0 px-4"
                    style={{ backgroundImage: `url(./images/globus1.jpg)` }}
                  >
                    <MDBCol className="py-5 jumbo-col">
                      <p className="mb-2">{data.legalisationList}</p>

                      <p className="mb-2">{data.legalisationList1}</p>

                      <p>{data.legalisationList2}</p>
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
                  Легализация
                </MDBCardTitle>
                <div className="content-wrapper">
                  <p className="mx-5 mb-3">
                    Заверка означава правно-административното оформяне на
                    оригиналния документ или на неговото нотариално заверено
                    копие в различни министерства и ведомства, както и
                    заверяването на подписа на преводача от Консулски отдел на
                    Министерство на външните работи. Легализация на документи е
                    полагането на апостил (Apostille) в Министерството на
                    правосъдието и Министерството на външните работи върху
                    документи, издадени в България. С апостила се удостоверява
                    автентичността на документа. Тази заверка е валидна за
                    всички страни по света, подписали Хагската конвенция от 5
                    октомври 1961 г.
                  </p>
                  <p className="mx-5 mb-3">
                    Текстът на документа се превежда от наш заклет преводач,
                    чийто спесимен се съхранява в МВнР, и преводът се скачва със
                    заверения документ. На място или по банков път ние заплащаме
                    всички необходими такси. Сроковете за изпълнението на
                    поръчките са съобразени със сроковете за заверка на
                    министерствата и ведомствата, а цените - с таксите и
                    държавните таксови марки на заверяващите инстанции.
                  </p>
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
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default LegalisationPage;
