import React, { PropsWithChildren } from 'react';
import { ResizableBox } from 'react-resizable';

interface ResizableProps {
  direction: 'horizontal' | 'vertical';
}

const Resizable: React.FC<PropsWithChildren<ResizableProps>> = ({
  direction,
  children,
}) => {
  return (
    <ResizableBox height={300} width={300}>
      {children}
    </ResizableBox>
  );
};

export default Resizable;
