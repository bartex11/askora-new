import React from 'react';
import {MDBJumbotron, MDBContainer, MDBRow, MDBCol} from 'mdbreact';

import SectionContainer from '../components/sectionContainer';

const LegalisationPage = props => {
  return (
    <div className="legalisations-page">

      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol>
            <SectionContainer noBorder>
              <MDBJumbotron style={{padding: 0}}>
                <MDBCol
                  className="background-image text-center py-0 px-4"
                  style={{backgroundImage: `url(./images/globus1.jpg)`}}
                >
                  <MDBCol className="py-5 jumbo-col">

                    <p className="mb-2">
                      Аскора ООД урежда всички формалности по заверката и легализацията на Вашите документи във всички държавни институции и посолства в Република България.
                    </p>

                    <p className="mb-2">
                      Предлагаме също така услуги по заверката на легализираните документи в посолствата и консулските служби на чуждите държави в България.
                    </p>
                    <p>
                      Цената на легализирания документ следователно се формира като сума от стойността на превода, куриерската услуга и държавната такса за заверка и апостил в съответната институция.
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

export default LegalisationPage;
