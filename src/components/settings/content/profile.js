import React from 'react'
import { Input, Form, Col, Row } from 'antd';

const Profile = () => {
    return (
        <div>
            {/* <Form name="horizontal_login" layout="inline"> */}
        <Row gutter={10} style={{padding: '1.5%'}}>
        <Col span={12}>
        <Input  placeholder="Profile Image" />
        </Col>
        <Col span={12}>
        <Input  placeholder="Name" />
        </Col>
      </Row>
      <Row gutter={10} style={{padding: '1.5%'}}>
    <Col span={12}>
      <Input placeholder="Designation" />
      </Col>
      <Col span={12}>
        <Input placeholder="Address Line 1" />
        </Col>
      </Row>
      <Row gutter={10} style={{padding: '1.5%'}}>
      <Col span={12}>
        <Input placeholder="Address Line 2" />
        </Col>
        <Col span={12}>
        <Input placeholder="Phone number" />
        </Col>
      </Row>
      <Row gutter={10} style={{padding: '1.5%'}}>
      <Col span={12}>
        <Input placeholder="Email" />
        </Col>
        <Col span={12}>
        <Input placeholder="Website" />
        </Col>
      </Row>
            
            
      {/* <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item> */}
    {/* </Form> */}
        </div>
    )
}

export default Profile