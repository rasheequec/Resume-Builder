import React from 'react'
import { Input, Form, Col, Row } from 'antd';


const Profile = (props) => {
    const { data, updateData } = props;
    const changeHandle = (e) =>{
        let profileData = {...data.profile, [e.target.name]: e.target.value }
        let newData = {...data, profile: profileData}
        updateData(newData)
        // {...profileData}
        // updateData(e.target.name)
    }
    return (
        <div>
            {/* <Form name="horizontal_login" layout="inline"> */}
        <Row gutter={10} style={{padding: '1.5%'}}>
        <Col span={12}>
        <Input name="photo" onChange={changeHandle}  placeholder="Profile Image" />
        </Col>
        <Col span={12}>
        <Input name="name" onChange={changeHandle} placeholder="Name" />
        </Col>
      </Row>
      <Row gutter={10} style={{padding: '1.5%'}}>
    <Col span={12}>
      <Input name="title" onChange={changeHandle} placeholder="Designation" />
      </Col>
      <Col span={12}>
        <Input name="address1" onChange={changeHandle} placeholder="Address Line 1" />
        </Col>
      </Row>
      <Row gutter={10} style={{padding: '1.5%'}}>
      <Col span={12}>
        <Input name="address2" onChange={changeHandle} placeholder="Address Line 2" />
        </Col>
        <Col span={12}>
        <Input name="phone" onChange={changeHandle} placeholder="Phone number" />
        </Col>
      </Row>
      <Row gutter={10} style={{padding: '1.5%'}}>
      <Col span={12}>
        <Input name="email" onChange={changeHandle} placeholder="Email" />
        </Col>
        <Col span={12}>
        <Input name="website" onChange={changeHandle} placeholder="Website" />
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