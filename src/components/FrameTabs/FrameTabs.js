import styles from './FrameTabs.module.css';
import {FrameTabsButton} from "./FrameTabsButton";
import {FrameTabsContent} from "./FrameTabsContent";
import { useState } from "react";

export function FrameTabs({tabs}){
	const buttonList = [];
	const contentList = [];

	const [activeTab, setActiveTab] = useState(1);
	let i = 1;

	tabs.map((tab) =>{
		buttonList.push(
			<FrameTabsButton
				id = {i}
				key = {i}
				title = {tab.button.title}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>

		);

		contentList.push(
			<FrameTabsContent
				id ={i}
				key = {i}
				activeTab = {activeTab}
				content = {tab.content}
			/>
		);

		i++;
	});


	return(
		<div className={styles.inFrameTabs}>
			<div className={styles.tabsNav}>
				{buttonList}
			</div>
			<div className={styles.tabsContent}>
				{contentList}
			</div>
		</div>
	);
}