import React from 'react';
import styles from './File.module.css'
const File = (props) => {
    return (
        <div>
            <h1 style={{marginBottom: '25px'}}>Dicom</h1>
            <h3 style={{marginBottom: '50px'}}>DICOMDIR файл найден. Использовать его?</h3>
            <button className={styles.myButton} style={{marginRight: '45px'}}>Да</button>
            <button className={styles.myButton} style={{background: '#f44336'}}>Нет</button>
        </div>
    );
};

export default File;