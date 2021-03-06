import styled from '@emotion/styled';

import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { loadInitialData } from '../redux/slice';

import DevLinksContainer from '../containers/DevLinksContainer';

const HomePageWrapper = styled.div({
  height: '100vh',
  padding: '0px 50px',
  display: 'flex',
  flexDirection: 'column',
});

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  }, []);

  return (
    <HomePageWrapper>
      <DevLinksContainer />
    </HomePageWrapper>
  );
}
