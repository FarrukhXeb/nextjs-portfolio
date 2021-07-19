import { useState } from "react";

function ContactForm() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    subject: "",
    events: "",
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const changeHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    const _errors = {};
    e.preventDefault();

    const { name, email, subject, lastname, events, notes } = inputs;

    if (name === "") {
      _errors.name = "Please enter your name";
    }
    if (email === "") {
      _errors.email = "Please enter your email";
    }
    if (subject === "") {
      _errors.subject = "Please enter your subject";
    }
    if (lastname === "") {
      _errors.lastname = "Please enter your Lastname";
    }
    if (events === "") {
      _errors.events = "Select your event list";
    }
    if (notes === "") {
      _errors.notes = "Please enter your note";
    }

    if (_errors) {
      setErrors(_errors);
    }
    if (
      errors.name === "" &&
      errors.email === "" &&
      errors.email === "" &&
      errors.lastname === "" &&
      errors.subject === "" &&
      errors.events === "" &&
      errors.notes === ""
    ) {
      setInputs({
        name: "",
        email: "",
        subject: "",
        events: "",
        notes: "",
      });
    }
  };
  return (
    <form onSubmit={submitHandler} className="form">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="form-field">
            <input
              value={inputs.name}
              onChange={changeHandler}
              type="text"
              name="name"
              placeholder="Name"
            />
            <p>{errors.name ? errors.name : ""}</p>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="form-field">
            <input
              onChange={changeHandler}
              value={inputs.email}
              type="email"
              name="email"
              placeholder="Email"
            />
            <p>{errors.email ? errors.email : ""}</p>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-field">
            <input
              onChange={changeHandler}
              value={inputs.subject}
              type="text"
              name="subject"
              placeholder="Subject"
            />
            <p>{errors.subject ? errors.subject : ""}</p>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-field">
            <textarea name="message" placeholder="Message"></textarea>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-submit">
            <button type="submit" className="theme-btn">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
