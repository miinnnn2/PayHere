import React, { useState } from 'react';
import Register from '@components/SearchAndRegister/Register';
import Search from '@components/SearchAndRegister/Search';
import * as SC from './Main.style';

const Main = () => {
  const [isUpdated, setIsUpdated] = useState<boolean>(false);

  return (
    <SC.Container>
      <SC.LeftContainer>
        <Search isUpdated={isUpdated} updateHandler={setIsUpdated} />
      </SC.LeftContainer>
      <SC.RightContainer>
        <Register isUpdated={isUpdated} updateHandler={setIsUpdated} />
      </SC.RightContainer>
    </SC.Container>
  );
};

export default Main;
