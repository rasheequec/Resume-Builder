import React from 'react'
import { Tabs } from 'antd';
import Content from './content/index'
const { TabPane } = Tabs;

const Settings = () => {
    return (
        <div style={{height: '100vh', backgroundColor: 'white'}}>
    <Tabs defaultActiveKey="1" type="card" size={"large"} >
    <TabPane tab="Content" key="1">
        <Content/>
    </TabPane>
    <TabPane tab="Design" key="2">
      Design
    </TabPane>
    <TabPane tab="Common" key="3">
      Common
    </TabPane>
    <TabPane tab="Templates" key="4">
      Templates
    </TabPane>
  </Tabs>
        </div>
    )
}

export default Settings