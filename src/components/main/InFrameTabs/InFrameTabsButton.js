import styles from "./InFrameTabsButton.module.css";


export function InFrameTabsButton({ id, title, activeTab, setActiveTab }){

	const handleClick = () => {
		setActiveTab(id);
	};

	return(
		<button onClick={handleClick} className={activeTab === id ? styles.tabsBtn_Active: styles.tabsBtn}>{title}</button>
	)
}