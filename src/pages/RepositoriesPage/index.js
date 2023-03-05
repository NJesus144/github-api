import React from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

const RepositoriesPage = () => {
  const user = {
    login: 'NJesus144',
    name: 'Nalbert de Jesus',
    avatar_url: 'https://avatars.githubusercontent.com/u/94402903?v=4',
    followers: 2,
    following: 1,
    company: null,
    blog: 'https://nalbertjesus.onrender.com/',
    location: null,
  };

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
