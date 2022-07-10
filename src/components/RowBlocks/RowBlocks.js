import styles from './RowBlocks.module.css';
import {RowBlock} from "./RowBlock";


export function RowBlocks({blocks})
{

	const blockList = [];
	let i = 1;
	blocks.map((block) => {
		blockList.push(
			<RowBlock
				key={i}
				title= {block.title}
				content= {block.content}
			/>
		);

		i++;
	});

	return(
		<div className={styles.RowBlocks}>
			{blockList}
		</div>
	)
}