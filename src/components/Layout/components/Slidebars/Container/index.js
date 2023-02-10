import {Fragment} from 'react'
import styles from './Container.module.scss'
function Containersliderbar({children}) {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    );
}

export default Containersliderbar ;