import React from "react";

export default class AddContact extends React.Component {

    state ={
        firstName: '',
        lastName: '',
        phone: '',
        image: ''
    }

    addNewContact = (e) => {
        e.preventDefault();
        this.props.addContact(this.state);
    }

    imputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        console.log(this.state);
        return (
            <form onSubmit={(e) => this.addNewContact(e)}>
                <h4>Add new contact</h4>
                <div className="form-group">
                    <label>First name:</label>
                    <input onChange={(e) => {this.imputChange(e)}} type="text" className="form-control" name="firstName" placeholder="Enter first name" />
                </div>
                <div className="form-group">
                    <label>Last name:</label>
                    <input onChange={(e) => {this.imputChange(e)}} type="text" className="form-control" name="lastName" placeholder="Enter last name" />
                </div>
                <div className="form-group">
                    <label>Phone number:</label>
                    <input onChange={(e) => {this.imputChange(e)}} type="phone" className="form-control" name="phone" placeholder="Enter phone number" />
                </div>
                <div className="form-group">
                    <label>Image URL:</label>
                    <input onChange={(e) => {this.imputChange(e)}} type="text" className="form-control" name="image" placeholder="Enter image URL" />
                </div>
                <button type="submit" className="btn btn-secondary mt-2">Submit</button>
            </form>
        )
    }
}