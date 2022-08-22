
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        All Rights Reserved &copy; 2022 &#8226;
        <a href="https://github.com/Marymafia/FermaMARKET" target="_blank" rel="noreferrer">GitHub</a>

import React from 'react';

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block" />

      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h1 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3" />
                Ferma-MARKET
              </h1>

              <div>
                <img style={{ width: '70px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Visa_2014.svg/2560px-Visa_2014.svg.png" alt="sss" />
                <img style={{ width: '70px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/2560px-Mastercard-logo.svg.png" alt="sss" />
                <img style={{ width: '70px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Mir-logo.svg/1280px-Mir-logo.svg.png" alt="sss" />

              </div>

              <p>
                <h2>

                  Принимаем к оплате
                </h2>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Ссылки
              </h6>
              <p>
                <a href="/category" className="text-reset">Категории</a>
              </p>
              <p>
                <a href="/" className="text-reset">Главная</a>
              </p>
              <p>
                <a href="/about" className="text-reset">О комапнии</a>
              </p>

            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Контакты</h6>
              <p>
                <i className="fas fa-home me-3" />
                {' '}
                © 2022 Ferma-MARKET
                {' '}

              </p>
              <p>
                <i className="fas fa-envelope me-3" />
                ferma-market@mail.ru
              </p>
              <p>
                <i className="fas fa-phone me-3" />
                {' '}
                + 7-925-825-24-44
              </p>
              <p>
                <i className="fas fa-print me-3" />
                {' '}
                + 7-888-888-88-88
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4" style={{ color: 'rgba0, 0, 0, 0.05' }}>
        © 2022 Ferma-MARKET

      </div>
    </footer>
  );
}

export default Footer;
