import React from 'react'
import { connect } from "react-redux";
import BasicTemplate from './basic/index'

const Template = (props) => {
    const { data } = props;
return(
    <div>
        {data.template == 'basic' && <BasicTemplate data={data} />}
    </div>
)
}

// export default Template
const mapStateToProps = state => {
    return {
        data: state.resumeReducer
    }
  }
  
  export default connect(
    mapStateToProps
  )(Template);