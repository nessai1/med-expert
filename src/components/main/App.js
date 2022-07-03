import styles from './App.module.css'
import WorkFrame from "./WorkFrame";
import Logo from "./Logo";

function App() {
    return (
        <div className={styles.App}>
            <div className={styles.header}>
                <Logo/>
                <ul className={styles.menu}>
                    <li>Пресеты</li>
                    <li>О программе</li>
                </ul>
            </div>
            <WorkFrame
                firstFrame={<div>Hello world</div>}
                secondFrame={<div>Hello you</div>}
                thirdFrame={<div>Hello friends</div>}
                fourthFrame={<div>Hello everyone</div>}
            />
        </div>
    );
}

export default App;
