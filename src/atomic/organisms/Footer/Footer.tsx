// src/components/LoginPage.tsx

import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {

  return (
    <footer className="footer">
      <div className="container container--footer">
        <div className="footer__inner">
          <div className="footer__content">
            <div className="footer__info">
              <p>Корпоративный университет “Дельта Трафо” - обучающая платформа, созданная исключительно для внутреннего
                использования
                сотрудниками компании.
                Вся выложенная на этом ресурсе информация является интеллектуальной собственностью ООО “Дельта Трафо” и
                запрещается к
                распространению среди
                лиц не являющихся сотрудниками компании.
              </p>
              <p>Не для коммерческого использования.</p>
            </div>
            <div className="footer__social">
              <div className="social">
                <a className="social__link" href="#">
                  <img className="social__img" src="src/assets/images/icons/vk.svg" alt=""/>
                </a>
                <a className="social__link" href="#">
                  <img className="social__img" src="src/assets/images/icons/site.svg" alt=""/>
                </a>
              </div>
              <div className="footer__social-text">По вопросам обучения и работы Корпоративного
                Университета обращайтесь в отдел управления
                персоналом
              </div>
            </div>
          </div>
          <div className="footer__copy">
            <img src="src/assets/images/icons/copy.svg" alt=""/>
            2023 Корпоративный университет “Дельта Трафо”
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
