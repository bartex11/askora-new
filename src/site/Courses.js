import React from 'react';
import {MDBJumbotron, MDBContainer, MDBRow, MDBCol} from 'mdbreact';

import SectionContainer from '../components/sectionContainer';

const LegalisationPage = props => {
  return (
    <div className="courses-page">

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
                      Благодарение на сплотения и висококвалифициран екип, както и на добрия мениджмънт, езикова школа "Аскора" се развива много успешно. До сега през нашия център са преминали около 3000 курсисти, като с всяка изминала година техният брой нараства.
                    </p>

                    <p className="mb-2">
                      Школата разполага с отлична материална база и млад, амбициозен екип от преподаватели-филолози. Уютната обстановка и индивидуалният подход към всеки клиент са гаранция за успеха и качеството на учебния процес.
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
