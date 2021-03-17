import React, {Component} from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink,
} from 'mdbreact';
import Data from './data/Data';

import {HashRouter as Router} from 'react-router-dom';
import Routes from './Routes';

class App extends Component {
  state = {
    collapseID: '',
    data: Data,
  };

  toggleCollapse = collapseID => () =>
    this.setState (prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : '',
    }));

  closeCollapse = collapseID => () => {
    window.scrollTo (0, 0);
    this.state.collapseID === collapseID && this.setState ({collapseID: ''});
  };

  render () {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{backgroundColor: 'transparent'}}
        onClick={this.toggleCollapse ('mainNavbarCollapse')}
      />
    );

    const {collapseID, data} = this.state;

    return (
      <Router>
        <div className="flyout">
          <MDBNavbar color="white" dark expand="md" fixed="top" scrolling>
            <MDBNavbarBrand href="/" className="py-0 font-weight-bold">
              <img
                src="./images/askora_logo.jpg"
                alt="askora-logo"
                height="40"
                style={{marginRight: '10px'}}
              />

            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse ('mainNavbarCollapse')}
              className={this.state.collapseID ? 'close' : 'hamburger'}
            />
            <MDBCollapse
              id="mainNavbarCollapse"
              isOpen={this.state.collapseID}
              navbar
            >
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to="/"
                    onClick={this.closeCollapse ('mainNavbarCollapse')}
                  >
                    <strong>{data.menuHome}</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse ('mainNavbarCollapse')}
                    to="/about"
                  >
                    <strong>{data.menuAbout}</strong>
                  </MDBNavLink>
                </MDBNavItem>
    
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse ('mainNavbarCollapse')}
                    to="/translations"
                  >
                    <strong>{data.menuTranslations}</strong>
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse ('mainNavbarCollapse')}
                    to="/legalisation"
                  >
                    <strong>{data.menuLegalisation}</strong>
                  </MDBNavLink>
                </MDBNavItem>
        
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse ('mainNavbarCollapse')}
                    to="/prices"
                  >
                    <strong>{data.menuPrices}</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    onClick={this.closeCollapse ('mainNavbarCollapse')}
                    to="/contacts"
                  >
                    <strong>{data.menuContacts}</strong>
                  </MDBNavLink>
                </MDBNavItem>
         
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          {collapseID && overlay}

          <main style={{marginTop: '4rem'}}>
            <Routes />
          </main>

          <MDBFooter color="indigo">
            <p className="mb-0 py-3 text-center">
              &copy; {new Date ().getFullYear ()} Copyright:
              АСКОРА
            </p>
            <div className="mb-0 py-3 text-center">
            Designed by <a href="https://bartex11.github.io/bartonization/" target="_blank" rel="noreferrer" >Bartonization</a>
            </div>
            
          </MDBFooter>
        </div>
      </Router>
    );
  }
}

export default App;
