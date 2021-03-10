import React from 'react';
import {MDBJumbotron, MDBContainer, MDBRow, MDBCol} from 'mdbreact';

import SectionContainer from '../components/sectionContainer';

const TranslationsPage = props => {
  return (
    <div className="voucher-page">

      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol>
            <SectionContainer noBorder>
              <MDBJumbotron style={{padding: 0}}>
                <MDBCol
                  className="background-image text-center py-0 px-4"
                  style={{backgroundImage: `url(./images/globus.jpg)`}}
                >
                  <MDBCol className="py-5 jumbo-col">

                    <p className="mb-2">
                      Високо качество, приемливи цени, прецизно спазване на обещаните срокове, конфендициалност и сигурност са водещите принципи в нашата дейност, като даваме предимство на качеството пред бързината. Основната ни цел е да удовлетворим нуждите на нашите клиенти.
                    </p>

                    <p className="mb-2">
                      Като професионална агенция за преводи Аскора ООД има сключен договор с Министерството на външните работи за извършване на официални преводи на документи и други книжа от български на чужди езици и от чужди езици на български.
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

export default TranslationsPage;
