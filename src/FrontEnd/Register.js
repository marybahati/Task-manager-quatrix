import React from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formFields: {
                email: '',
                customer_first_name:'',
                customer_last_name:'',
                personnel_first_name:'',
                personnel_other_name:'',
                password:'',
                customer_phone:'',
                assigned:'',
                deferred:'',
                status:'',
                gender:'',
                age:''
                }
          }
    }
    
    inputChangeHandler(e) {
        let formFields = {...this.state.formFields};
        formFields[e.target.name] = e.target.value;
        this.setState({
         formFields
        });
        console.log(formFields)
       }
     
       formHandler(formFields) {
        axios.post('http://localhost:5000/register', formFields)
          .then(function(response){
            console.log(response);
        })
          .catch(function(error){
            console.log(error);
          });
       }

    render () {
        return (
            <div className='container '>
                <form autoComplete='off' className="text-center border border-light p-5" onSubmit={this.formHandler(this.state.formFields)} 
                style={{width:600, margin:'0 auto'}}>
                    <p className="h4 mb-4">Register to Login</p>
                    <input type="email" id="defaultLoginFormEmail" required={true} onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.email} name='email' className="form-control mb-4" placeholder="E-mail"/>
                    <input  id="customer_first_name" name='customer_first_name' type='text' required={true} onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.customer_first_name} className="form-control mb-4" placeholder="Customer first name "/>
                    <input  id="customer_last_name" name='customer_last_name' type='text' required={true} onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.customer_last_name} className="form-control mb-4" placeholder="Customer last name"/>
                    <input  id="personnel_first_name" name='personnel_first_name' type='text' required={true} onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.personnel_first_name} className="form-control mb-4" placeholder="Personel first name"/>
                    <input  id="personnel_other_name" name='personnel_other_name' type='text' required={true} onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.personnel_other_name} className="form-control mb-4" placeholder="Personel other name"/>
                    <input  id="password" name='password' type='password' required={true} onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.password} className="form-control mb-4" placeholder="Password"/>
                    <input  id="customer_phone" name='customer_phone' type='number' required={true} onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.customer_phone} className="form-control mb-4" placeholder="Phone number"/>
                    <input  id="assigned" name='assigned' type='date' required={true} onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.assigned} className="form-control mb-4" placeholder="Assigned date"/>
                    <input  id="deferred" name='deferred' type='date' required={true} onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.deferred} className="form-control mb-4" placeholder="Deferred date"/>
                    <select  id="status" name='status'   onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.status} className="form-control mb-4" placeholder="Status">
                        <option value='Started'>Started</option>
                        <option value='In Progress'>In Progress</option>
                        <option value='Finished'>Finished</option>
                    </select>
                    <select  id="gender" name='gender'  onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.gender} className="form-control mb-4" placeholder="Gender">
                        <option value='Female'>Female</option>
                        <option value='Male'>Male</option>
                    </select>
                    <input  id="age" name='age' type='number'  onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.age} className="form-control mb-4" placeholder="Age"/>
                    <button className="btn btn-info btn-block my-4" type="submit">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default Register