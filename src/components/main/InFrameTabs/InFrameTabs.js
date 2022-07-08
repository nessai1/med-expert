import styles from './InFrameTabs.module.css';
import {InFrameTabsButton} from "./InFrameTabsButton";
import {InFrameTabsContent} from "./InFrameTabsContent";
import { useState } from "react";

export function InFrameTabs(){
	function setActive(e)
	{
		e.preventDefault();
		alert()
		this.active = true;
	}
	const [activeTab, setActiveTab] = useState("1");
	return(
		<div className={styles.inFrameTabs}>
			<div className={styles.tabsNav}>
				<InFrameTabsButton
					id = '1'
					title = 'Визуализация'
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
				<InFrameTabsButton
					id = '2'
					title= 'Анализ'
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
			</div>
			<div className={styles.tabsContent}>
				<InFrameTabsContent
					id = '1'
					activeTab = {activeTab}
					content = '1'
				/>
				<InFrameTabsContent
					id = '2'
					activeTab = {activeTab}
					content = '2'
				/>
			</div>
		</div>
	);
}