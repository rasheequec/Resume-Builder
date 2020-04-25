import React, { useState } from 'react'
import { Input, Form, Col, Row, Button } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';

const Education = (props) => {
  const { data, updateData } = props;
  const [details, setDetails] = useState([{id:1, university:"", course:"",from:"",to:""}])
  const [active, setActive] = useState(true)

  const editHandle = () => {
    setActive(!active)
  }
  const addField = () => {
    setDetails([...details, {id: Math.random(), university:"", course:"", from:"", to:""}])
  }
  const changeHandle = (e, id) => {
    let newDetails = details.map((item) => {
      if (item.id == id) {
        item[e.target.name] = e.target.value;
      }
      return item
    });
    setDetails(newDetails)
    let education = {...data.education, list: newDetails }
    let newData = {...data, education}
    updateData(newData)
  }
  const changeHeading = e => {
    let education = {...data.education, heading: e.target.value }
    let newData = {...data, education}
    updateData(newData)
  }
  const deleteField = id => {
    let newDetails = details.filter(data => data.id != id)
    setDetails(newDetails)
    let education = {...data.education, list: newDetails }
    let newData = {...data, education}
    updateData(newData)
  }
  return (
    <div>
      <Input disabled={active} onChange={changeHeading} size="medium" value={data.education.heading} placeholder="Education" name="heading" style={{ width: '60%', margin: '1.5%'}} />
      {active && <EditOutlined className="editIcon" onClick={editHandle}/>}
      {details.map(data => {
        return(
        <div>
          <Row gutter={10} style={{padding: '1.5%'}}>
        <Col span={18}>
        <Input name="university" onChange={e => changeHandle(e, data.id)}  placeholder="University" />
        </Col>
        <Col span={6}>
        <Input name="from" onChange={e => changeHandle(e, data.id)} placeholder="From" />
        </Col>
      </Row>
      <Row gutter={10} style={{padding: '1.5%'}}>
    <Col span={18}>
      <Input name="course" onChange={e => changeHandle(e, data.id)} placeholder="Course" />
      </Col>
      <Col span={6}>
        <Input name="to" onChange={e => changeHandle(e, data.id)} placeholder="To" />
        </Col>
      </Row>
      <DeleteOutlined onClick={() => deleteField(data.id)}/>
      <hr/>
        </div>
        )
      })}
      

      <Button
                  type="dashed"
                  style={{ width: '60%', margin: '1.5%' }}
                  onClick={addField}
                >
                  <PlusOutlined style={{ margin: '0 8px' }}/> Add field
                </Button>
    </div>      
  );
};

export default Education