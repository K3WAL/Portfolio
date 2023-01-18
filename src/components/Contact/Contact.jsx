import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <span className="section__subtitle">Contact Me</span>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk To Me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>

              <span className="contact__card-data">user@gmail.com</span>
              <a
                href="mailto:kewaluchiha@gmail.com"
                className="contact__button"
              >
                Write Me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">999-8888-777</span>
              <a
                href="https://api.whatsapp.com/send?phone=6221440879&text=Hello, more information!"
                className="contact__button"
              >
                Write Me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>
              <h3 className="contact__card-title">Messanger</h3>
              <span className="contact__card-data">user.fb123</span>
              <a
                href="https://www.facebook.com/kewal.tmg"
                className="contact__button"
              >
                Write Me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">Write Me Your Project</h3>

          <form className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert Your Name"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert Your E-mail"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag contact__form-area">
                Project
              </label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write About Your Project"
              ></textarea>
            </div>

            <button className="button button--flex">
              Send Message
              <svg
                class="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                {" "}
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
