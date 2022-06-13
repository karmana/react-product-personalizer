import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = ({ title, basePrice, colors, sizes, name }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrice = useMemo(() => {
    const sizePrice = sizes.find(element => element.name === currentSize);
    return basePrice + sizePrice.additionalPrice;
  },[sizes, basePrice, currentSize]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Summary');
    console.log('============');
    console.log('Name:', title);
    console.log('Price:', {getPrice});
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);
  }

  return (
    <article className={styles.product}>
      <ProductImage name={name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
       <ProductForm sizes={sizes} colors={colors} 
                    currentSize={currentSize} setCurrentSize={setCurrentSize}
                    currentColor={currentColor} setCurrentColor={setCurrentColor}
                    handleSubmit={handleSubmit}/>
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default Product;