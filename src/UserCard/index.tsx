import React, { Children } from 'react';

import Card from '../Card';
import UserCardHeader from './UserCardHeader';
import UserCardAvatar from './UserCardAvatar';
import UserCardBody from './UserCardBody';
import UserCardStats from './UserCardStats';

import styles from './styles.module.scss';

export type UserCardProps = {
	className?: string;
	href: string;
	header: string;
	avatar: string;
	name: string;
	positionName: string;
	stats: {
		name: string;
		value: number | string;
	}[];
};

const UserCard: React.FC<UserCardProps> = ({
	className,
	href,
	header,
	avatar,
	name,
	positionName,
	stats,
	children,
	...rest
}) => <a className={styles['card-link']} href={href}>
		<Card className={className}>
			<UserCardHeader
				src={header}
			/>
			<UserCardAvatar
				src={avatar}
			/>
			<UserCardBody
				name={name}
				positionName={positionName}
			>
				{children}
			</UserCardBody>
			{
				stats !== undefined
				&& <UserCardStats
					stats={stats}
				/>
			}
		</Card>
	</a>;

export default UserCard;