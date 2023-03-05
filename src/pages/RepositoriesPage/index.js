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
      id: '1',
      name: 'Repo 1',
      description: 'Descrição',
      html_url: 'https://nalbertjesus.onrender.com/',
      language: 'Javascript',
    },
    {
      id: '2',
      name: 'Repo 2',
      description: 'Descrição',
      html_url: 'https://nalbertjesus.onrender.com/',
      language: 'Javascript',
    },
    {
      id: '3',
      name: 'Repo 3',
      description: 'Descrição',
      html_url: 'https://nalbertjesus.onrender.com/',
      language: 'PHP',
    },
    {
      id: '4',
      name: 'Repo 4',
      description: 'Descrição',
      html_url: 'https://nalbertjesus.onrender.com/',
      language: 'Ruby',
    },
    {
      id: '5',
      name: 'Repo 5',
      description: 'Descrição',
      html_url: 'https://nalbertjesus.onrender.com/',
      language: 'Java',
    },
    {
      id: '6',
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
        <Repositories repositories={repositories} />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
