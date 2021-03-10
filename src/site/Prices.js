import React from 'react';
import {MDBJumbotron, MDBContainer, MDBRow, MDBCol} from 'mdbreact';

import SectionContainer from '../components/sectionContainer';

const PricesPage = props => {
  return (
    <div className="prices-page">

      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol>
            <SectionContainer noBorder>
              <MDBJumbotron style={{padding: 0}}>
                <MDBCol
                  className="background-image text-center py-0 px-4"
                  style={{backgroundImage: `url(./images/courses.jpg)`}}
                >

                  <MDBCol className="py-5 jumbo-col">

                    <p className="mb-2">
                      Преводът не е търговско изделие, което предварително съществува в напълно готов вид.
                    </p>

                    <p className="mb-2">
                      Всеки отделен текст представлява уникат, чиято форма и най-вече съдържание трябва да бъдат “прехвърлени” на съответния език.
                    </p>
                    <p>
                      Поръчвайки превод, Вие купувате времето и професионализма на отделен преводач или екип от преводачи.
                    </p>

                  </MDBCol>
                </MDBCol>
              </MDBJumbotron>
            </SectionContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    </div>
  );
};

export default PricesPage;
