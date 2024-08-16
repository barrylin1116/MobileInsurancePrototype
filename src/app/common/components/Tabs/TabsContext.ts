import React from 'react';
import { TabsContextValues } from './types';

const TabsContext = React.createContext<TabsContextValues>({
  activeIndex: 0
});

export default TabsContext;
