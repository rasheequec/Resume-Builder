import React, {useState} from 'react'
import { Form, Input, Button } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';

const Certificate = (props) => {
    const { data, updateData } = props;
    const [details, setDetails] = useState([{id:1, text:""}])
    const [active, setActive] = useState(true)


    const editHandle = () => {
      setActive(!active)
    }
    const changeHeading = e => {
    let certificate = {...data.certificate, heading: e.target.value }
    let newData = {...data, certificate}
    updateData(newData)
    }
    const addField = () => {
        setDetails([...details, {id: Math.random(), text:""}])
      }
    const deleteField = id => {
    let newDetails = details.filter(data => data.id != id)
    setDetails(newDetails)
    let certificate = {...data.certificate, list: newDetails }
    let newData = {...data, certificate}
    updateData(newData)
    }
    const changeHandle = (e, id) => {
        let newDetails = details.map((item) => {
            if (item.id == id) {
              item.text = e.target.value;
            }
            return item
          });
          setDetails(newDetails)
          let certificate = {...data.certificate, list: newDetails }
          let newData = {...data, certificate}
          updateData(newData)
    }
    return (
      <div>
            <Input disabled={active} onChange={changeHeading} size="medium" value={data.certificate.heading} placeholder="Certifications" name="heading" style={{ width: '60%', marginBottom: '2%'}} />
      {active && <EditOutlined className="editIcon" onClick={editHandle}/>}

      {details.map( data => (
                          <div>
                          <Input onChange={e => changeHandle(e, data.id)} style={{marginBottom:'2%', width: '80%'}} />
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
    );
  };
  
  export default Certificate