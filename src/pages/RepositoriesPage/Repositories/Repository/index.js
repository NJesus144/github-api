import React from 'react';

import { Container, Name, Description, Footer, Lang, Link } from './styles';

const Repository = () => (
  <Container>
    <Name>Repository Name</Name>
    <Description>Repository Description</Description>
    <Footer color="#f37272">
      <Lang>Repository Lang</Lang>
      <Link href="https://github.com/NJesus144" target="_blank">
        Ver
      </Link>
    </Footer>
  </Container>
);

export default Repository;