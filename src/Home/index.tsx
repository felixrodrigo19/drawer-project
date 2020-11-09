import React from 'react';
import { View } from 'react-native';

import { Container, Dev, Title } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <View>
        <Title>Drawer</Title>
        <Dev>Por Rodrigo Felix</Dev>
      </View>
    </Container>
  );
};

export default Home;
