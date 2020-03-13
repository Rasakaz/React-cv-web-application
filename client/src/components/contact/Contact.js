
import React, { Component } from 'react';



class Contact extends Component {
    constructor() {
        super();
        this.data = {
            Name: '',
            Email: '',
            Phone: '',
            Message: ''
        }
    }

    getDiscribe(type) {
        switch (type) {
            case 'Name':
                return 'Full Name';
            case 'Email':
                return 'Email Address';
            case 'Phone':
                return 'Phone Number';
            case 'Message':
                return 'Enter Your Message';
            default:
                return '';
        }
    }

    clearInput(event) {
        var inputField = document.getElementById(event.target.id);
        if (inputField.value === 'Full Name' ||
            inputField.value === 'Email Address' ||
            inputField.value === 'Phone Number' ||
            inputField.value === 'Enter Your Message')
            inputField.value = '';

    }

    getContent() {
        let divs = [];
        for (let type in this.data) {
            let discribe = this.getDiscribe(type);
            divs.push(
                <div key={type} className='inputs-div'>
                    {type}:
                    <input type="text" className='contact-inputs' id={type} defaultValue={this.getDiscribe(type)} onClick={this.clearInput} ></input>
                </div>
            );
        }
        return divs;
    }

    parseData() {
        this.data.Name = document.getElementById('Name').value;
        this.data.Email = document.getElementById('Email').value;
        this.data.Phone = document.getElementById('Phone').value;
        this.data.Message = document.getElementById('Message').value;
        if (this.data.Name !== 'Full Name' &&
            this.data.Email !== 'Email Address' &&
            this.data.Message !== 'Enter your Message')
            this.writeMessageToFile();
    }

    writeMessageToFile() {
        console.log(JSON.stringify(this.data));
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.data)
        };
        fetch('/sendMessage', options)
            .then((res) => console.log(res));

        document.getElementById('Name').value = 'Full Name';
        document.getElementById('Email').value = 'Email Address';
        document.getElementById('Phone').value = 'Phone Number';
        document.getElementById('Message').value = 'Enter Your Message';
    }

    render() {
        return (
            <div className='contact'>
                <h1>Contact</h1>
                <div className='contact-input'>
                    {this.getContent()}
                    <button type='button' onClick={() => { this.parseData() }}>Send Message</button>
                </div>
            </div>
        );
    }
}

export default Contact;