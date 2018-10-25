import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Slider from "react-slick";
import renderHTML from 'react-render-html';
import classNames from 'classnames';

import css from './inventory-item.scss';

Modal.setAppElement('#__next')

class InventoryItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const {
      title,
      metadata: {
        description,
        detailed_specs,
        featured_image,
        list_price,
        new_or_used,
        product_images,
        location_of_item
      }
    } = this.props.product;

    const sliderSettings = {
      centerMode: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      dotsClass: `${css.sliderDots} slick-dots`
    };
    
    return (
      <div className={css.productItem}>
        <div
          className={css.productImg}
          style={{
            backgroundImage: `url(${featured_image.imgix_url}?w=600)`
          }}
        >
          {list_price !== "" ? (
            <p>${ list_price }</p>
          ) : (
            <p>Call for Price</p>
          )}
        </div>
        <div className={css.productInfo}>
          <h3>
            { title }
            {new_or_used === "Used" && (
              <span> (Preowned)</span>
            )}
          </h3>
          <p className={css.productLocation}>
            Current Location: { location_of_item }
          </p>
          <div className={css.productDescription}>
            { renderHTML(description) }
            <button onClick={this.openModal}>View Details</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              contentLabel={`${title} Details`}
              style={{
                bodyOpen: {
                  overflow: 'hidden'
                },
                overlay: {
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  zIndex: 1000
                },
                content: {
                  padding: 0,
                  border: 'none'
                }
              }}
            >
              <button
                className={classNames('symbol', css.closeBtn)}
                onClick={this.closeModal}
              >
                <svg><use xlinkHref="#close" /></svg>
              </button>
              <div className={css.topModalContent}>
                <h2>{ title }</h2>
                <div className={css.sliderContainer}>
                  <Slider {...sliderSettings}>
                    <div>
                      <img
                        src={`${featured_image.imgix_url}?w=600`}
                        alt={`${title} Image 1`}
                      />
                    </div>
                    {product_images.map((img, i) => (
                      <div key={i}>
                        <img
                          src={`${img.product_image.imgix_url}?w=600`}
                          alt={`${title} Image ${i + 2}`}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
};

export default InventoryItem;