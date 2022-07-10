import styles from './App.module.css'
import WorkFrame from "./WorkFrame";
import Menu from "./Menu/Menu";
import {useEffect, useState} from "react";
import MyModal from "./MyModal/MyModal";

function App() {

    const [modal, setModal] = useState(false);
    const [content, setContent] = useState('');

    useEffect(
        () => {
            setModal(true)
        },
        [content],
    );

    return (

            <div className={styles.App}>
            <Menu callback={setContent}> </Menu>
            <WorkFrame
                firstFrame={<div>Hello</div>}
                secondFrame={<div>Hi</div>}
                thirdFrame={<div>Hello friends</div>}
                fourthFrame={<div>Hello everyone</div>}
            />
                <MyModal visible={modal} setVisible = {setModal}>
                    {content}
                </MyModal>
        </div>
    );
}

export default App;
