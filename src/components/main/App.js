import styles from './App.module.css'
import WorkFrame from "./WorkFrame";

function App() {
    return (
        <div className={styles.App}>
            <WorkFrame
                firstFrame={<div style={{backgroundColor: '#add7f6'}}>Hello world</div>}
                secondFrame={<div style={{backgroundColor: '#87bfff'}}>Hello you</div>}
                thirdFrame={<div style={{backgroundColor: '#3f8efc'}}>Hello friends</div>}
                fourthFrame={<div style={{backgroundColor: '#2667ff'}}>Hello everyone</div>}
            />
        </div>
    );
}

export default App;
