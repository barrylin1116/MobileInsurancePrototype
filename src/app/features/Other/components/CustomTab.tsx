import { Card, Tabs } from 'antd';
import React from 'react';

const CustomTab: React.FC<{
    tabs: {
        tabElement?: any;
        key: string | number
    }[],
    tabContents?: {
        activeKey: string | number,
        body: any
    }[],
    activeKey: string | number,
    contentClass?: string,
    onChange: (e: any) => void
}> = ({ tabs, tabContents, activeKey, contentClass, onChange, ...props }) => {
  return (
    <>
      <Card id="CustomTab">
        <Tabs type="card" onChange={(e) => onChange(e)}>

          {
              tabs.map((tab, index) => (
                <Tabs.TabPane key={tab.key} tab={tab.tabElement} />
              ))
          }
        </Tabs>
        {
              tabContents && (
                <>
                  <div className={'content ' + `${contentClass || ''}`}>
                    <>
                      {
                        tabContents.find((item: any) => item.activeKey === activeKey)?.body
                    }
                    </>
                  </div>
                </>
              )
          }
      </Card>
    </>
  );
};

export default CustomTab;
