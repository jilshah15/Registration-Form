import React from 'react';
class Register extends React.Component{
	constructor(props){
		super(props);
		this.state={
			student:{
				name:'',
				gender:'',
				city:'',
				address:'',
			}
		}
	}
	
	handleChange=event=>{
  		let student=this.state.student
  		const{name,value}=event.target
  		student[name]=value
  			this.setState({
  				student
  			})
  	}
		handleSubmit=event=>{
			event.preventDefault();
			console.log(this.state.student)
		}
		
			handleClick=event=>{
				alert("Thank You For registration!!!")
			}
			
	
	render(){
			const {student}=this.state
			
		return(
			<div>
					<h1 align="center"><u>Registration Form</u></h1>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label>Name:</label>
						<input name="name" onChange={this.handleChange} defaultValue={student.name}/>
					</div>
						<div>
              			<label>Gender:</label>
              				<input type='radio'
              				       name='gender'
              				       value='male' 
              				       checked={this.state.student['gender']==="male"?true:false}
              				        onChange={this.handleChange}/>
              				       <label>Male</label>
              				<input type='radio'
              				       name='gender'
              				       value='female' 
              				       checked={this.state.student['gender']==="female"?true:false}
              				       onChange={this.handleChange}/>
              				       <label>Female</label>

              			   </div>
						<div>
							<label>City:</label>
							<select name="city" onChange={this.handleChange} defaultValue={student.city}>
							<option>-Select City-</option>
							<option value="ahmedabad">Ahmedabad</option>
							<option value="vadodara">Vadodara</option>
							<option value="surat">Surat</option>
							<option value="mumbai">Mumbai</option>
							</select>
					</div>
						<div>
						<label>Address:
						<textarea onChange={this.handleChange} defaultValue={student.address} name="address"/>
						</label>
					</div>
						<button type="Submit" onClick={this.handleClick}>Submit</button>
				</form>
			</div>
		)
	}
}

export default Register;
