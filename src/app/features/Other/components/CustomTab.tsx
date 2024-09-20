import { Card, Tabs } from 'antd';
import React from 'react';

const CustomTab: React.FC<{
    tabs: {
        tabElement?: any;
        key: string
    }[],
    tabContents?: {
        activeKey: string,
        body: any
    }[],
    activeKey: string,
    contentClass?: string,
    onChange: (e: string) => void
}> = ({ tabs, tabContents, activeKey, contentClass, onChange, ...props }) => {
  return (
    <>
      <Card id="CustomTab">
        <Tabs type="card" onChange={(e) => onChange(e)}>

          {
              tabs.map((tab, index) => (
                <Tabs.TabPane key={tab.key} tab={tab.tabElement} className="asdasdasdfaasdf" />
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
