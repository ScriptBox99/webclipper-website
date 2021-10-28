import React from 'react';
import './index.scss';
import { ExtensionUrl } from '../../common';
import { withRouter } from 'next/router';
import { withTranslation } from '../../i18n';

const feature = ['Buy Me A Coffee', 'Save to Email', 'Send to Kindle', 'OCR'];

const data = [
  {
    active: false,
    title: 'Basic',
    price: '0',
    unit: 'month',
    feature: [],
    featureNotSupported: feature,
    button: 'Free',
    Href: ExtensionUrl,
  },
  {
    active: false,
    title: 'Monthly',
    price: '3',
    unit: 'month',
    feature: feature,
    featureNotSupported: [],
    button: 'Buy Now',
    product: 569447,
  },
  {
    active: true,
    title: 'Yearly',
    badge: 'Popular',
    price: '20',
    unit: 'year',
    feature: feature,
    featureNotSupported: [],
    button: 'Buy Now',
    product: 569491,
  },
];

const Price = (props) => {
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2>Buy the Web Clipper Powerpack</h2>
              <p>All prices listed below are in USD</p>
            </div>
          </div>
        </div>
        <div className="custom-tab-wrapper monthly" id="pricing-tab-7">
          <div className="row mb-d-30">
            {data.map((o) => (
              <div className="col-lg-4">
                <div className={`pricing-card ${o.active ? 'active' : ''}`}>
                  <div className="card-head">
                    <h6>{o.title}</h6>
                    {!!o.badge && <span className="card-badge">Popular</span>}
                    <h2>
                      <span className="small-title">$</span>
                      <span className="big-txt" data-monthly={o.price} data-yearly={14}>
                        {o.price}
                      </span>
                      <span className="month" data-monthly={`/${o.unit}`}>
                        /{o.unit}
                      </span>
                    </h2>
                    <p>{o.description}</p>
                  </div>
                  <div className="card-content">
                    <ul className="pricing-list">
                      {o.feature.map((fe) => (
                        <li>
                          <span>
                            <i className="icon icon-check-2" />
                          </span>
                          {fe}
                        </li>
                      ))}
                      {o.featureNotSupported.map((fe) => (
                        <li className="disable-opt">
                          <span>
                            <i className="icon icon-check-2" />
                          </span>
                          {fe}
                        </li>
                      ))}
                    </ul>
                    <div className="card-btn">
                      <a
                        onClick={() => {
                          if (o.Href) {
                            window.open(o.Href)
                            return
                          }
                          Paddle.Checkout.open({
                            product: o.product,
                            email: props.router.query.guest_email
                          });
                        }}
                        className="btn btn--primary"
                        target="_blank"
                      >
                        {o.button}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default withTranslation('common')(withRouter(Price));
