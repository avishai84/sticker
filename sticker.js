
import React from 'react';
import styles from './sticker.scss';

const data_options = {
  imgSrc : './image.jpg',
  altName: 'my image',
  localStorageKey : 'test_one',
  localStorageVal : 'test_one_present'
};


class MktSticker extends React.Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      modalEnabled: false,
      isStickyWasSeen: false
    };
  }

  componentDidMount() {

    const isStickerInLocalStrg = localStorage.getItem(data_options.localStorageKey);
    // Check if localStorage value exist
    if (isStickerInLocalStrg) {
      // if this.state is false, setState to make them true and not to show again
      // When true, the sticker should remain hidden upon page refresh.
      if (!this.state.isStickyWasSeen) {
        this.setState(prevState => ({
          isStickyWasSeen: true
        }));
      }
    }
  }

  close() {
    this.setState(() => ({
      isStickyWasSeen: true
    }));
    localStorage.setItem(data_options.localStorageKey, data_options.localStorageVal);
  }

  render() {

    return (
    <div className="sticker">
        <div className="sticky_container">
            <button
            onKeyUp={this.handleKeyPress}
            tabIndex={0}
            onClick={this.close}
            />
            <img src={data_options.largeImg} alt={data_options.altText} />
        </div>
    </div>
    );
}


export default MktSticker;
