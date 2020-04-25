import React, { useState } from 'react'
import { Input, Form, Col, Row, Button } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
const { TextArea } = Input;

const Experience = (props) => {
  const { data, updateData } = props;
  const [details, setDetails] = useState([{id:1, description:"", from:"", to:""}])
  const [active, setActive] = useState(true)

  const editHandle = () => {
    setActive(!active)
  }
  const addField = () => {
    setDetails([...details, {id: Math.random(), description:"", from:"", to:""}])
  }
  const changeHandle = (e, id) => {
    let newDetails = details.map((item) => {
      if (item.id == id) {
        item[e.target.name] = e.target.value;
      }
      return item
    });
    setDetails(newDetails)
    let experience = {...data.experience, list: newDetails }
    let newData = {...data, experience}
    updateData(newData)
  }
  const changeHeading = e => {
    let experience = {...data.experience, heading: e.target.value }
    let newData = {...data, experience}
    updateData(newData)
  }
  const deleteField = id => {
    let newDetails = details.filter(data => data.id != id)
    setDetails(newDetails)
    let experience = {...data.experience, list: newDetails }
    let newData = {...data, experience}
    updateData(newData)
  }
  return (
    <div>
      <Input disabled={active} onChange={changeHeading} size="medium" value={data.experience.heading} placeholder="Work Experience" name="heading" style={{ width: '60%', margin: '0.5%'}} />
      {active && <EditOutlined className="editIcon" onClick={editHandle}/>}
      {details.map(data => {
        return(
        <div>
          <Row gutter={10} style={{padding: '0.5%'}}>
        <Col span={18}>
        <TextArea
          name="description"
          onChange={e => changeHandle(e, data.id)}
          placeholder="Description"
          autoSize={{ minRows: 3}}
        />
        </Col>
        <Col span={5}>
        <Input name="from" onChange={e => changeHandle(e, data.id)} placeholder="From" style={{marginBottom: "13%"}}/>
        <Input name="to" onChange={e => changeHandle(e, data.id)} placeholder="To" />
        </Col>
        <Col span={1}>
        <DeleteOutlined onClick={() => deleteField(data.id)}/>
        </Col>
      </Row>
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

export default Experience