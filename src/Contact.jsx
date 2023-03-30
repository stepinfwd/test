import React, { useState } from "react";
import { handleSubmit } from "./firebase/handler";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contact() {
  const init = {
    name: "",
    email: "",
    message: "",
  };
  const [users, setUsers] = useState(init);
  const changeHandler = (e) => {
    setUsers({ ...users, [e.target.id]: e.target.value });
  };
  const notify = () => toast("Thanks for submission");

  const submitHandler = (e) => {
    notify()
    e.preventDefault();
    if (ValidateEmail(users?.email)) {
      handleSubmit(users);
      setUsers(init);
    }
  };

  function ValidateEmail(mail) {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        users?.email
      )
    ) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  }

  return (
    <div>
      <div className="contact-section section ">
        <div className="contact-section-wrap">
          <section className=" col-6">
            <h1>Get in touch.</h1>

            <p>To get in touch with us</p>
            <form >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  onChange={(e) => changeHandler(e)}
                  required={true}
                  value={users?.name}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(e) => changeHandler(e)}
                  required
                  value={users?.email}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  onChange={(e) => changeHandler(e)}
                  value={users?.message}

                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => submitHandler(e)}
                disabled={!users?.name || users?.name.length === 0||!users?.email || users?.email.length === 0}
              >
                Submit
              </button>
            </form>

            <p>
              Phone: 07436567799
              <br />
              Email: Info@nadeemzakkeer.com
            </p>
          </section>
          <ToastContainer />

          {/* <div className="contact-img-wrap col-6">
            <img src="https://images.unsplash.com/photo-1615797229417-c158f4258648?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
