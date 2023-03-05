import React from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';
import { getLangsFrom } from '../../services/api';

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

  const repositories = [
    {
      name: 'Repo 1',
      description: 'Descrição',
      html_url: 'https://nalbertjesus.onrender.com/',
      language: 'Javascript',
    },
    {
      name: 'Repo 2',
      description: 'Descrição',
      html_url: 'https://nalbertjesus.onrender.com/',
      language: 'Javascript',
    },
    {
      name: 'Repo 3',
      description: 'Descrição',
      html_url: 'https://nalbertjesus.onrender.com/',
      language: 'PHP',
    },
    {
      name: 'Repo 4',
      description: 'Descrição',
      html_url: 'https://nalbertjesus.onrender.com/',
      language: 'Ruby',
    },
    {
      name: 'Repo 5',
      description: 'Descrição',
      html_url: 'https://nalbertjesus.onrender.com/',
      language: 'Java',
    },
    {
      name: 'Repo 6',
      description: 'Descrição',
      html_url: 'https://nalbertjesus.onrender.com/',
      language: 'Ruby',
    },
  ];

  const languages = getLangsFrom(repositories);

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
