import React from 'react';

import Column from 'Components/Column';
import Row from 'Components/Row';
import Container from 'Components/Container';

import './Footer.sass';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Column>
            <p>
              Desenvolvido com muito <i className="fa fa-heart" /> por Matheus
              Loureiro
            </p>
          </Column>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;