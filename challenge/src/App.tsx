import React from 'react';
import { Button } from '@material-ui/core';
import { BottomBar } from './styles/shared-components';
import { Resizable, ResizableBox } from 'react-resizable';

const App: React.FC = () => {
  return (
    <>
      <ResizableBox width={Infinity} height={300}
        minConstraints={[100, 100]} maxConstraints={[Infinity, Infinity]}>
        <span>Contents</span>
      </ResizableBox>

      <BottomBar>
        <Button variant="contained" color="primary" onClick={() => console.log("clicou")}>
          Generate Chart
        </Button>
      </BottomBar>
    </>
  );
}

export default App;
