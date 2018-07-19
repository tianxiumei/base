import React from "react"
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import PropTypes from 'prop-types';
const FormItem = Form.Item;
export default class UserHome extends React.Component {
	constructor() {
		super();
		
	};
	static contextTypes = {
		router: PropTypes.object
	};
	m=()=>{
		
      console.log(this.context);
	}
	render()
	{
		
		
		return(<div>
			content
			<a onClick={this.m}>kdmn</a>
			</div>)
	}
}
UserHome = Form.create()(UserHome);