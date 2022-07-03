import styles from './App.module.css'
import WorkFrame from "./WorkFrame";
import Logo from "./Logo";
import LinksButton from "./Links/LinksButton";

function App() {
    return (
        <div className={styles.App}>
            <div className={styles.header}>
                <Logo/>
                <ul className={styles.menu}>
                    <li><LinksButton>Пресеты</LinksButton></li>
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
