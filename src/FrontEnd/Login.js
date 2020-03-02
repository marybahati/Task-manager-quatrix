import React from 'react'
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formFields: {
                email: '',
                password:''
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
        axios.post('http://localhost:5000/login', formFields)
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
                <form className="text-center border border-light p-5" onsubmit={this.formHandler(this.state.formFields)} 
                style={{width:600, margin:'0 auto'}}>
                    <p className="h4 mb-4">Sign in</p>
                    <input type="email" id="defaultLoginFormEmail" required={true} onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.email} name='email' className="form-control mb-4" placeholder="E-mail"/>
                    <input  id="defaultLoginFormPassword" name='password' type='password' required={true} onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.password} className="form-control mb-4" placeholder="Password"/>
                    <button className="btn btn-info btn-block my-4" type="submit">Sign in</button>
                </form>
            </div>
        )
    }
}

export default Login