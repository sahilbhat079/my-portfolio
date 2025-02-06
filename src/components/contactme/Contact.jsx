import React, { useState } from "react";
import styles from "./Contact.module.css";
import { FaEnvelope, FaWhatsapp, FaFacebookMessenger, FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com"; // Import emailjs

const ContactMe = ({
  email = "sahilgani.sahilgani@gmail.com", // Default email
  phone = "+916-005-104-044", // Default phone number
  messenger = "", // Default Messenger ID
  whatsappLink = "https://wa.me/+916005104044", // Default WhatsApp link
  messengerLink = "https://m.me/user.fb123", // Default Messenger link
  emailLink = "https://www.linkedin.com/in/sahil-gani-2b963121a/", // Default email link
}) => {
  // State to manage form input data, success/error messages, and loading state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });

  const [isSuccess, setIsSuccess] = useState(null); // to track success/failure
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loading state for the button

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email || !formData.project) {
      setErrorMessage("All fields are required!");
      return;
    }

    setLoading(true); // Set loading to true to show the spinner and disable button

    // Send email via EmailJS
    emailjs
      .sendForm(
        "service_tzbmgiq", // Your service ID
        "template_4gynaoc", // Your template ID
        e.target, // The form element
        "D2iHB-r7y7KwPuWLG" // Your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true); // If email is sent successfully
          setErrorMessage(''); // Clear error message if success
        },
        (error) => {
          console.log(error.text);
          setIsSuccess(false); // If there's an error
          setErrorMessage('Something went wrong, please try again!');
        }
      )
      .finally(() => {
        setLoading(false); // Reset loading state after the process is complete
      });

    // Reset the form data after submission
    setFormData({
      name: '',
      email: '',
      project: ''
    });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        
        {/* Left Side - Contact Methods */}
        <div className={styles.contactOptions}>
          <h2>Talk to me</h2>
          
          {/* Email Contact Option */}
          {email && (
            <div className={styles.contactCard}>
              <FaEnvelope className={styles.icon} />
              <div>
                <h3>Email</h3>
                <p>{email}</p>
                <a href={emailLink}>Write me →</a>
              </div>
            </div>
          )}

          {/* WhatsApp Contact Option */}
          {phone && (
            <div className={styles.contactCard}>
              <FaWhatsapp className={styles.icon} />
              <div>
                <h3>Whatsapp</h3>
                <p>{phone}</p>
                <a href={whatsappLink}>Write me →</a>
              </div>
            </div>
          )}

          {/* Messenger Contact Option */}
          {messenger && (
            <div className={styles.contactCard}>
              <FaFacebookMessenger className={styles.icon} />
              <div>
                <h3>Messenger</h3>
                <p>{messenger}</p>
                <a href={messengerLink}>Write me →</a>
              </div>
            </div>
          )}
        </div>

        {/* Right Side - Contact Form */}
        <div className={styles.contactForm}>
          <h2>Write me your project</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Insert your email"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Project</label>
              <textarea
                name="project"
                value={formData.project}
                onChange={handleChange}
                placeholder="Write your project"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={styles.sendButton}
              disabled={loading} // Disable the button when loading
            >
              {loading ? (
                <div className={styles.spinner}></div> // Show loading spinner
              ) : (
                <>
                  Send Message <FaPaperPlane />
                </>
              )}
            </button>
          </form>

          {/* Display Success or Error message */}
          {isSuccess === true && <p className={styles.successMessage}>Your message was sent successfully!</p>}
          {isSuccess === false && <p className={styles.errorMessage}>{errorMessage}</p>}
        </div>
        
      </div>
    </section>
  );
};

export default ContactMe;
