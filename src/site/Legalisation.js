import React from 'react';
import {MDBJumbotron, MDBContainer, MDBRow, MDBCol} from 'mdbreact';

import SectionContainer from '../components/sectionContainer';
import Data from '../data/Data';

class LegalisationPage extends React.Component {
  scrollToTop = () => window.scrollTo (0, 0);

  state = {
    data: Data,
  };

  componentDidMount(){
    document.title = "Аскора ООД - Легализация"
  }

  render () {
    const {data} = this.state;
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
                      {data.legalisationList}
                    </p>

                    <p className="mb-2">
                      {data.legalisationList1}
                    </p>

                    <p>
                      {data.legalisationList2}
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
  }
}

export default LegalisationPage;
