import React, { useContext } from 'react';
import { PanelProps } from './types';
import TabsContext from '../TabsContext';

const Panel: React.FC<PanelProps> = (props) => {
  const tabsContext = useContext(TabsContext);
  return (
    <div className={'tabs__panel' + (props.index === tabsContext.activeIndex ? ' tabs__panel--active' : '')}>
      {props.children}
    </div>
  );
};

export default Panel;
