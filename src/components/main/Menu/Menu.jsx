import styles from "../App.module.css";
import LinksButton from "../Links/LinksButton";
import Logo from "./Logo";
import File from "./MenuComponents/File";
import File2 from "./MenuComponents/File2";

const Menu = (props) => {
    return (
        <div>
            <div className={styles.header}>
                <Logo/>
                <ul className={styles.menu}><li>
                    <LinksButton
                        items={[
                            {title: 'Окно #1', callback: () => {props.callback(<File/>)}},
                            {title: 'Окно #2', callback: () => {props.callback(<File2/>)}},
                        ]}
                    >
                        Файл
                    </LinksButton>
                </li></ul>
                <ul className={styles.menu}>  <li>
                    <LinksButton
                        items={[
                            {title: 'Some title', callback: () => {console.log('one link')}},
                            {title: 'Second link', callback: () => {console.log('two link')}},
                        ]}
                    >
                        Инструменты
                    </LinksButton>
                </li></ul>
                <ul className={styles.menu}><li>
                    <LinksButton
                        items={[
                            {title: 'Some title', callback: () => {console.log('one link')}},
                            {title: 'Second link', callback: () => {console.log('two link')}},
                        ]}
                    >
                        Тесты
                    </LinksButton>
                </li></ul>
                <ul className={styles.menu}>
                    <li>
                        <LinksButton
                            items={[
                                {title: 'Some title', callback: () => {console.log('one link')}},
                                {title: 'Second link', callback: () => {console.log('two link')}},
                            ]}
                        >
                            О программе
                        </LinksButton>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;