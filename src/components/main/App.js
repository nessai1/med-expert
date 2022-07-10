import styles from './App.module.css'
import WorkFrame from "./WorkFrame";
import Menu from "./Menu/Menu";
import {useEffect, useState} from "react";
import MyModal from "./MyModal/MyModal";
import {VisualisationAnalysisFrame} from "../VisualisationAnalysisFrame/VisualisationAnalysisFrame";
import VisualisationResultFrame from "../VisualisationAnalysisFrame/VisualisationResultFrame";

function App() {

    const [modal, setModal] = useState(false);
    const [content, setContent] = useState('');
    const [frameState, setFrameState] = useState({opacity: 100});

    useEffect(
        () => {
            setFrameState(frameState);
        }, [frameState]
    )

    useEffect(
        () => {
            if(content!=='')
            setModal(true)
        },
        [content],
    );

    return (

            <div className={styles.App}>
            <Menu callback={setContent}> </Menu>
            <WorkFrame
                firstFrame={<VisualisationAnalysisFrame frameState={frameState} setFrameState={(frameData) => {
                    setFrameState({opacity: frameData.opacity});
                }} />}
                secondFrame={<VisualisationResultFrame frameState={frameState} />}
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
