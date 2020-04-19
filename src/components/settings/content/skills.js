import React from 'react'
import { Form, Input, Button } from 'antd';
import { DeleteTwoTone, PlusOutlined } from '@ant-design/icons';
const { TextArea } = Input;



const Skills = () => {
  const onFinish = values => {
    console.log('Received values of form:', values);
  };

  return (
    <Form name="dynamic_form_item" id="objective" onFinish={onFinish}>
      <Form.List name={["names","fff"]}>
        {(fields, { add, remove }) => {
          return (
            <div>
              {fields.map((field, index) => (
                <Form.Item
            
                  required={false}
                  key={field.key}
                >
                  <Form.Item
                    {...field}
                    validateTrigger={['onChange', 'onBlur']}
                    noStyle
                  >
                          <Input placeholder="Objective" style={{ width: '60%', marginBottom:'2%'}} />
                      {/* <TextArea

          placeholder="Description"
          autoSize={{ minRows: 2}}
        /> */}
                  </Form.Item>
                  {fields.length > 1 ? (
                    <DeleteTwoTone
                      className="dynamic-delete-button"
                      style={{ margin: '0 8px' }}
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  ) : null}
                </Form.Item>
              ))}

                <Button
                  type="dashed"
                  onClick={() => {
                    add();
                  }}
                  style={{ width: '60%' }}
                >
                  <PlusOutlined style={{ margin: '0 8px' }}/> Add field
                </Button>
     
            </div>
          );
        }}
      </Form.List>
    </Form>
  );
};

export default Skills