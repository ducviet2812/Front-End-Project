 import styles from './Header.module.scss'

function HeaderSilebar({children}) {
    return (  
        <div className={styles.wrapper}>
            {children}
        </div>
    );
}

export default HeaderSilebar;