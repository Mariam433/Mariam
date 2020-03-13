import React from "react";
import "./Contact.css";
export const Form = ({ data }) => {
  return (
    <div className="contacts">
      {data.map(element => (
        <div className="contact" key={element.email}>
          <img src="https://bm.img.com.ua/berlin/storage/orig/3/26/e53993fbd96c2bc28aaa3efb7c927263.jpg" />
          <div className="tvyalner">
            <p>
              <h3>Your Coach, {element.name} </h3>
            </p>
            <p>Have a question or need help? Contact your Coach!</p>
            <p>I am passionate about helping people achievetheir goals!</p>
            <div className="mar">
              <div className="ven">
                <div className="rit">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhn35O8pMtJBDUUHkpJKCYU_bNWKTmxBL953JSZ4SOs3-c0Z3P"
                    height="20"
                    width="20"
                  />
                  <a href={`mailto:${element.email}`}>CONTACT</a>
                </div>
              </div>
              <img src="https://cdn3.iconfinder.com/data/icons/happily-colored-snlogo/512/facebook.png" />
              <img src="https://www.uncalidental.com/wp-content/uploads/2020/01/twitter_PNG19.png" />
              <img src="https://cdn.clipart.email/8fba8ea608228729012e59349b758a51_facebook-instagram-logo-png-images-free-transparent-facebook-_280-280.jpeg" />
              <img src="https://dayair.org/wp-content/uploads/2018/01/youtube-social-icon-logo.png" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Form;