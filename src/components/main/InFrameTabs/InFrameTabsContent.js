import styles from "./InFrameTabsContent.module.css";

export function InFrameTabsContent({id, activeTab, content}){

	return(
		<div className={activeTab === id ? styles.tabsPane_show: styles.tabsPane}>
			{content}
		</div>
	)
}