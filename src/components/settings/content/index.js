import React from 'react'
import './index.css'
import Profile from './profile';
import Objective from './objective';
import Education from './education';
import Skills from './skills';
import Experience from './experience';
import Certificate from './certificate';
import { Collapse, Select } from 'antd';
import { connect } from "react-redux";
import { SettingOutlined } from '@ant-design/icons';
import { updateResumeData } from '../../../actions/resumeActions'
const { Panel } = Collapse;
const { Option } = Select;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const genExtra = () => (
  <SettingOutlined
    onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
);



class Content extends React.Component {
  state = {
    expandIconPosition: 'left',
  };

  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition });
  };

  render() {
    const { data, updateData } = this.props;
    return (
      <div id="content">
        <Collapse
          // defaultActiveKey={['1']}
          onChange={callback}
          // expandIconPosition={expandIconPosition}
        >
          <Panel header="User Profile" key="1" extra={genExtra()}>
            <div><Profile updateData={updateData} data={data} /></div>
          </Panel>
          <Panel header={data.objective.heading} key="2" extra={genExtra()}>
            <div><Objective updateData={updateData} data={data}/></div>
          </Panel>
          <Panel header={data.skills.heading} key="3" extra={genExtra()}>
            <Skills updateData={updateData} data={data}/>
          </Panel>
          <Panel header={data.education.heading} key="4" extra={genExtra()}>
            <Education updateData={updateData} data={data}/>
          </Panel>
          <Panel header={data.experience.heading} key="5" extra={genExtra()}>
            <Experience  updateData={updateData} data={data}/>
          </Panel>
          <Panel header={data.certificate.heading} key="6" extra={genExtra()}>
            <Certificate updateData={updateData} data={data}/>
          </Panel>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.resumeReducer
  }
}
const mapDispatchToProps = (dispatch) => {
	return {
		updateData: data => {
			dispatch(updateResumeData(data))
    },
	}

}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Content)