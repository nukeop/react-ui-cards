/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import styles from './styles.module.scss';

export type CardContentProps = {
	thumbnail: string;
	title: string;
	description: string;
	tags: (string | (() => React.ReactNode))[];
};

const CardContent: React.FC<CardContentProps> = ({
	thumbnail,
	title,
	description,
	tags
}) => (
	<div
		className={styles['card-content']}
	>
		<div className={styles['thumbnail']}>
			<img src={thumbnail} />
		</div>

		<div className={styles['text']}>
			<div className={styles['title']}>
				{title}
			</div>
			<div className={styles['description']}>
				{description}
			</div>
			<div className={styles['tags']}>
				{tags.map((tag, i) => (
					<span
						key={i}
						className={styles['tag']}
					>
						{typeof tag === "function" ? tag() : tag}
					</span>
				))}
			</div>
		</div>
	</div>
)

export default CardContent;
