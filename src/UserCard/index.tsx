import React from 'react';

import Card, { CardProps } from '../Card';
import UserCardHeader, { UserCardHeaderProps } from './UserCardHeader';
import UserCardAvatar, { UserCardAvatarProps } from './UserCardAvatar';
import UserCardBody, { UserCardBodyProps } from './UserCardBody';
import UserCardStats, { UserCardStatsProps } from './UserCardStats';

import styles from './styles.module.scss';

export type UserCardProps = CardProps & {
	href: string;
	header: UserCardHeaderProps['src'];
	avatar: UserCardAvatarProps['src'];
	name: UserCardBodyProps['name'];
	positionName: UserCardBodyProps['positionName'];
	stats?: UserCardStatsProps['stats'];
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
}) => <a
	className={styles['card-link']}
	href={href}
>
		<Card
			className={className}
			{...rest}
		>
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