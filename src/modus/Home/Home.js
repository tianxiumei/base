import React from "react"
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import PropTypes from 'prop-types';
import WrappedNormalLoginForm from "../../components/Form.js"
const FormItem = Form.Item;
export default class Home extends React.Component {
	constructor() {
		super();
		
	};
	static contextTypes = {
		router: PropTypes.object
	};
	handleSubmit=()=>{
		this.context.router.push("/user/userHome")
		// console.log(this.context);
	}
	render()
	{
		
		console.log(this.props);
		
		return(<div>
			 <WrappedNormalLoginForm/>
			</div>)
	}
}
