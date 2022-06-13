import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import shortid from "shortid";


const OptionColor = ({colors, currentColor, setCurrentColor}) => {
    
    const prepareColorClassName = color => {
        return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
      }
      
    return(
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
                {colors.map(color => 
                <li key={shortid()}>
                <button 
                    type="button" 
                    onClick={() => setCurrentColor(color)} 
                    className={clsx(prepareColorClassName(color), currentColor === color && styles.active)}>{color.name}
                </button>
                </li>)}
            </ul>
        </div>
    );
};

OptionColor.propTypes={
    currentColor: PropTypes.string,
    setCurrentColor: PropTypes.func,
  };


export default OptionColor;