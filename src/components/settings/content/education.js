import React from 'react'
import { Input } from 'antd';
const { TextArea } = Input;

const Education = (props) => {
  const { data, updateData } = props;
  return (
    <div>
        {/* <Input placeholder="Objective" name="heading" value={data.objective.heading} onChange={changeHandle} style={{ width: '60%', marginBottom:'2%'}} />
          <TextArea
          value={data.objective.description}
          name="description"
          onChange={changeHandle}
          placeholder="Description"
          autoSize={{ minRows: 2}}
        /> */}
    </div>      
  );
};

export default Education