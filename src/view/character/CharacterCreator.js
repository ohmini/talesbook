import React, {PureComponent} from 'react'
import {withFormik} from 'formik'

export class CharacterCreator extends PureComponent{
	render(){
		console.log(this.props)
		return(
			<div className="control">
				<input className="input" />
			</div>
		)
	}
}

export const applyFormik =  withFormik({
	mapPropsToValues: (props) => ({
		name: ''
	})
})

export default applyFormik(CharacterCreator)