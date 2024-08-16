import React, { useState, ReactElement, PropsWithChildren } from 'react';
import { TabsProps, TabsChildComponents } from './types';
import TabsContext from './TabsContext';
import Panel from './Panel';
import { PanelProps } from './Panel/types';

const Tabs: React.FC<TabsProps> & TabsChildComponents = (props) => {
  const [activeIndex, setActiveIndex] = useState<number>(props.defaultActiveIndex ?? 0);

  /**
   * @description 處理 Tab 切換
   * @param childElement 子元件
   * @param index 選取的 Tab index
   */
  const handleToggle = (childElement: ReactElement<PropsWithChildren<PanelProps>>, index: number) => {
    if (childElement.props.onToggle) childElement.props.onToggle(childElement.props.name);
    setActiveIndex(index);
  };

  return (
    <TabsContext.Provider value={{ activeIndex }}>
      <div className="tabs">
        {props.navsVisible && React.Children.count(props.children) > 0 && (
          <div className="tabs__navs">
            {React.Children.map(
              props.children,
              (child, index) => {
                const childElement = child as ReactElement<PropsWithChildren<PanelProps>>;
                return React.isValidElement(child)
                  ? (
                    <div className={'tabs__nav' + (activeIndex === index ? ' tabs__nav--active' : '')} onClick={() => handleToggle(childElement, index)} key={childElement.key}>
                      {childElement.props.title}
                    </div>
                    )
                  : child;
              }
            )}
          </div>
        )}
        {React.Children.map(
          props.children,
          (child, index) => React.isValidElement(child)
            ? React.cloneElement(child, { index })
            : child
        )}
      </div>
    </TabsContext.Provider>
  );
};

Tabs.defaultProps = {
  navsVisible: true
};

Tabs.Panel = Panel;

export default Tabs;
