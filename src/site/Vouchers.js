import React from 'react';
import {MDBJumbotron, MDBContainer, MDBRow, MDBCol} from 'mdbreact';

import SectionContainer from '../components/sectionContainer';

const VoucherPage = props => {
  return (
    <div className="voucher-page">

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
                      Езикова школа „Аскора” организира курсове с ваучери по английски, немски и гръцки език за заети лица по Оперативна програва „Развитие на човешките ресурси”.
                    </p>

                    <p className="mb-2">
                      Програмата ще бъде отворена скоро и за да кандидатствате, трябва да сте наети по трудов договор или самонаети лица. Освен това трябва да имате средно или пониско образование. Програмата не се отнася за хора с висше образование.
                    </p>
                    <p>
                      Ако желаете да получите информация за началото на процедурата, можете да следите нашата фейсбук страница.
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

export default VoucherPage;
