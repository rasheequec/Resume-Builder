import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';



const Skills = (props) => {
  const { data, updateData } = props;
  const [skills, setSkills] = useState([{id:1, skill:""}])
  const addField = () => {
    setSkills([...skills, {id: Math.random(), skill:""}])
  }
  const deleteField = id => {
    let newSkills = skills.filter(data => data.id != id)
    setSkills(newSkills)
    let skillArray = []
    newSkills.forEach(item => {
      skillArray.push(item.skill)
    })
    let newData = {...data, skills: skillArray}
    updateData(newData)
  }
  const changeHandle = e => {
    let newSkills = skills.map((item) => {
      if (item.id == e.target.name) {
        item.skill = e.target.value;
      }
      return item
    });
    setSkills(newSkills)
    let skillArray = []
    newSkills.forEach(item => {
      skillArray.push(item.skill)
    })
    let newData = {...data, skills: skillArray}
    updateData(newData)
  }
  return (
    <Form name="dynamic_form_item">
            <div>
              {skills.map( data => (
                          <div>
                          <Input onChange={changeHandle} value={data.skill} placeholder={`Skill`} name={data.id} style={{ width: '60%', marginBottom:'2%'}} />
                          <DeleteOutlined onClick={() => deleteField(data.id)} />
                          </div>
              ))}

                <Button
                  type="dashed"
                  style={{ width: '60%' }}
                  onClick={addField}
                >
                  <PlusOutlined style={{ margin: '0 8px' }}/> Add field
                </Button>
     
            </div>
  
    </Form>
  );
};

export default Skills