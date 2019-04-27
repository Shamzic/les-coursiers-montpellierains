/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component}  from 'react'
import '../css/ContactForm.css'
import axios from 'axios'

import './contactform.php'

const API_PATH = 'http://localhost:1992/les-coursiers-montpellierains/api/contact/index.php';

class Contact2 extends Component  {

  constructor(props) {
      super(props);
      this.state = {
        fname: '',
        lname: '',
        email: '',
        message: '',
        mailSent: false,
        error: null
      }
    }



    render() {
      return (
        <div className="mail.php" id="contacts">
            <p>Contact Me</p>
            <div>
              <form method="post">
                  <label>Email</label>
                  <input type="email" name="email" required/><br/>
                  <label>Message</label>
                  <textarea name="message" required></textarea><br/>
                  <input type="submit"></input>
              </form>
            </div>
        </div>
      );
    }
}

export default Contact2
