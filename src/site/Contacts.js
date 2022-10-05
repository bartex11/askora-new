import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBJumbotron,
  MDBIcon,
  MDBAnimation,
} from "mdbreact";

import SectionContainer from "../components/sectionContainer";

import Data from "../data/Data";
import "./Styles/Contacts.css";

class Contacts extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);
  state = {
    data: Data,
  };
  componentDidMount() {
    document.title = "Аскора ООД - Контакти";
  }
  render() {
    const { data } = this.state;
    return (
      <div className="contact-page">
        <MDBContainer className="mt-5">
          <MDBRow>
            <MDBCol>
              <SectionContainer noBorder>
                <MDBJumbotron style={{ padding: 0 }}>
                  <MDBCol
                    className="background-image text-center py-0 px-4"
                    style={{ backgroundImage: `url(./images/contact.jpg)` }}
                  >
                    <MDBCol className="py-5 jumbo-col">
                      <div id="intro-contacts">

                        <MDBAnimation reveal type="fadeInDown">
                          <a
                            href="https://www.google.de/maps/@41.6433894,25.3679928,17z?hl=bg"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="contact-content">
                              <MDBIcon icon="map-marker-alt" size="2x" />
                              <span>6600 Kърджали <br /> ул."Републиканска" 41</span>
                            </div>
                          </a>
                        </MDBAnimation>

                        <MDBAnimation reveal type="fadeInLeft">
                          <a
                            href="https://www.facebook.com/%D0%90%D1%81%D0%BA%D0%BE%D1%80%D0%B0-%D0%9E%D0%9E%D0%94-315542438513230/?ref=aymt_homepage_panel"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="contact-content">
                              <MDBIcon fab icon="facebook-square" size="2x" />

                              <span id="fb">{data.contactsFb}</span>
                            </div>
                          </a>
                        </MDBAnimation>
                        <MDBAnimation reveal type="fadeInRight">
                          <div className="contact-content">
                            <MDBIcon far icon="envelope" size="2x" />

                            <span>
                              {data.contactsMail} <br /> {data.contactsMail1} <br /> {data.contactsMail2}
                            </span>
                          </div>
                        </MDBAnimation>

                        <MDBAnimation reveal type="fadeInUp">
                          <div className="contact-content">
                            <MDBIcon icon="phone" size="2x" />

                            <span>
                              0878 45 30 30 
                            </span>
                          </div>
                        </MDBAnimation>
                      </div>
                    </MDBCol>
                  </MDBCol>
                </MDBJumbotron>
              </SectionContainer>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
export default Contacts;
