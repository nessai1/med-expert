import styles from './App.module.css'
import WorkFrame from "./WorkFrame";
import Logo from "./Logo";
import LinksButton from "./Links/LinksButton";
import {InFrameTabs} from "./InFrameTabs/InFrameTabs";

function App() {
    return (
        <div className={styles.App}>
            <div className={styles.header}>
                <Logo/>
                <ul className={styles.menu}>
                    <li>
                        <LinksButton
                            items={[
                                {title: 'Some title', callback: () => {console.log('one link')}},
                                {title: 'Second link', callback: () => {console.log('two link')}},
                            ]}
                        >
                            Пресеты
                        </LinksButton>
                    </li>
                </ul>
            </div>
            <WorkFrame
                firstFrame={<InFrameTabs/>}
                secondFrame={<div>Hello you</div>}
                thirdFrame={<div>Hello friends</div>}
                fourthFrame={<div>Hello everyone</div>}
            />
        </div>
    );
}

export default App;