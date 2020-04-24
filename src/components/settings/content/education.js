import React from 'react'
import { Input, Form, Col, Row } from 'antd';

const Education = (props) => {
  const { data, updateData } = props;
  const changeHandle = () => {

  }
  return (
    <div>
      <Row gutter={10} style={{padding: '1.5%'}}>
        <Col span={18}>
        <Input name="photo" onChange={changeHandle}  placeholder="University" />
        </Col>
        <Col span={6}>
        <Input name="name" onChange={changeHandle} placeholder="From" />
        </Col>
      </Row>
      <Row gutter={10} style={{padding: '1.5%'}}>
    <Col span={18}>
      <Input name="title" onChange={changeHandle} placeholder="Course" />
      </Col>
      <Col span={6}>
        <Input name="address1" onChange={changeHandle} placeholder="To" />
        </Col>
      </Row>
    </div>      
  );
};

export default Education