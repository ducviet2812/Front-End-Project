import styles from './Slidebar.module.scss';

function Sliderbar({children}) {
    return (<div className={styles.wrapper}>
        {children}
    </div>);
}

export default Sliderbar;