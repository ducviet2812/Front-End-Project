import { useEffect, useRef, useState } from 'react'
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'
import styles from'./SiderbarOnlyTH.module.scss'

import Siderbar from '../components/Sliderbar'
import Header from '../components/Slidebars/Header';
import Container from '../components/Slidebars/Container';
function SliderBarOnly({children}) {
    const underline = useRef();
    
    useEffect(()=>{
        console.log(underline.current)
    })
    return (  
        <div className={styles.wrapper} >
            <Siderbar>
                <Header>
                    <div className={styles.logo}>
                        TINHER
                    </div>
                    <div className={styles.infomation}>
                        
                        <img  className={styles.avatar} src="https://toanthaydinh.com/wp-content/uploads/2020/04/hinh-nen-dien-thoai-1-1-1.jpg"></img>
                        <div className={styles.Chat}>
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </div>
                    </div>
                </Header>

                <Container>
                    <div className={styles.GroupAction}>
                        <div className={styles.GroupActionChildren}>
                            <button className={styles.active}> Các Tương Hợp</button>
                            <button>Tin Nhắn</button>
                            <div ref={underline} className={styles.underline}></div>
                        </div>
                       
                    </div>
                    
                    <div className={styles.GroupContent}>
                        <div className={styles['GroupContent_TH']}>

                        </div>
                        {/* <div className={styles['GroupContent_messrnger']}>

                        </div> */}
                    </div>
                </Container>
            </Siderbar>

            <div>
                {children}
            </div>
        </div>
    );
}

export default SliderBarOnly;