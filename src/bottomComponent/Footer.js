import React from "react";

function Footer() {
  return (
    <form className="footer">
      <h2 className="footer-title container">Есть какой нибудь вопросы?</h2>
      <div className="container footer-form ">
        <button className="footer-btn">ИМЯ</button>
        <button className="footer-btn">ТЕЛЕФОН НОМЕР</button>
        <button className="footer-btn">ОТПРАВИТЬ</button>
      </div>
    </form>
  );
}

export default Footer;
