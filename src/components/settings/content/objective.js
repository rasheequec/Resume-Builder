import React from 'react'
import { Form, Input, Button } from 'antd';
import { DeleteTwoTone, PlusOutlined } from '@ant-design/icons';
const { TextArea } = Input;

const Objective = (props) => {
  const { data, updateData } = props;
  const changeHandle = e => {
    let objectiveData = {...data.objective, [e.target.name]: e.target.value }
        let newData = {...data, objective: objectiveData}
        updateData(newData)
  }
  return (
    <div>
        <Input placeholder="Objective" name="heading" value={data.objective.heading} onChange={changeHandle} style={{ width: '60%', marginBottom:'2%'}} />
          <TextArea
          value={data.objective.description}
          name="description"
          onChange={changeHandle}
          placeholder="Description"
          autoSize={{ minRows: 2}}
        />
    </div>      
  );
};

export default Objective