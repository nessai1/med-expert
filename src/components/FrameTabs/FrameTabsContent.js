import styles from "./FrameTabsContent.module.css";

export function FrameTabsContent({id, activeTab, content}){

	return(
		<div className={activeTab === id ? styles.tabsPane_show: styles.tabsPane}>
			{content}
		</div>
	)
}