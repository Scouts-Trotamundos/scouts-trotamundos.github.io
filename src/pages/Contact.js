import React, { useState } from "react";

import ContactForm from "../components/ContactForm/ContactForm";

const Contact = () => {
  const [isAnswered, setIsAnswered] = useState(false);
  const [isScouter, setIsScouter] = useState(false);
  return (
    <div id="main">
      {/* <!-- Post --> */}
      <article className="post">
        <header>
          <div className="title" id="aboutUsTitle">
            <h2>¿Quieres ponerte en contacto con nosotr@s?</h2>
          </div>
        </header>
        {!isAnswered && (
          <div className="text-center">
            <h2>¿Qué quieres ser?</h2>
            <div>
              <button
                onClick={() => {
                  setIsScouter(true);
                  setIsAnswered(true);
                }}
              >
                Quiero ser Scouter (Monitor/Monitora)
              </button>
              <button
                onClick={() => {
                  setIsScouter(false);
                  setIsAnswered(true);
                }}
              >
                Quiero que mi hijo/hija sea Scout
              </button>
            </div>
          </div>
        )}

        {isAnswered && (
          <ContactForm isScouter={isScouter} setIsAnswered={setIsAnswered} />
        )}
        <footer></footer>
      </article>
    </div>
  );
};

export default Contact;
