import React from 'react';

import { MdGroup, MdLocationCity, MdLink } from 'react-icons/md';

import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

const Profile = () => (
  <Container>
    <Header>
      <Avatar src="https://avatars.githubusercontent.com/u/94402903?v=4" />
      <Login>Nalbert26</Login>
      <Name>Nalbert</Name>
    </Header>
    <Inner>
      <Data>
        <MdGroup size={20} />
        30&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;10&nbsp;<i>seguindo</i>
      </Data>
      <Data>
        <MdLocationCity size={20} />
        Santo André
      </Data>
      <Data>
        <MdLink size={20} />
        <a href="https://nalbertjesus.onrender.com/">
          nalbertjesus.onrender.com
        </a>
      </Data>
    </Inner>
  </Container>
);

export default Profile;
