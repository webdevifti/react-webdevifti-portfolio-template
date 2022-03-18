import React, { Component } from 'react';

export default class ContactForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            phone: '',
            email: '',
            message: '',
            isSend: false,
        }
    }
    nameHandler = (event) => {
        this.setState({
            name: event.target.value,
        })
    }
    phoneHandler = (event) => {
      
        this.setState({
            phone: event.target.value,
        })
    }
    emailHandler = (event) => {
        this.setState({
            email: event.target.value,
        })
    }
    messageHandler = (event) => {
        this.setState({
            message: event.target.value,
        })
    }
    formHandler = (event) => {
       event.preventDefault()
       this.setState({
           isSend: true,
           name: '',
           phone: '',
           email: '',
           message: '',
       })

    }
    render() {
        return (
            <div className="contact-form">
                <h3 style={{ color: 'green', fontSize: '20px' }}>{this.state.isSend ? "Your Message has been send successfully." : ""}</h3>
                <form onSubmit={this.formHandler}>
                    <div className="form-row">
                        <div className="form-control">
                            <input type="text" className="input-field" value={this.state.name} placeholder="Name"  onChange={this.nameHandler} required />
                        </div>
                        <div className="form-control">
                            <input type="text" className="input-field" value={this.state.phone} placeholder="Phone"  onChange={this.phoneHandler}required />
                        </div>
                        <div className="form-control">
                            <input type="email" className="input-field" value={this.state.email} placeholder="Email" onChange={this.emailHandler} required />
                        </div>
                    </div>
                    <div className="form-control">
                        <textarea placeholder="Message" value={this.state.message} onChange={this.messageHandler}></textarea>
                    </div>
                    <div className="submit-area">
                        <button type="submit" className="btn btn-submit">{this.state.isSend ? "Sended" : 'Send Message'}</button>
                    </div>
                </form>
            </div>
        )
    }
}
