import styles from './LinksList.module.css';

export default function LinksList(props)
{
    const list = props.items.map((item, index) =>
        <li key={index} onClick={() => {props.callback(index)}}>
            {item.title}
        </li>);
    return (
        <ul className={styles.list}>
            {list}
        </ul>
    );
}