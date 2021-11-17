import React from "react";

import UserCard from "../UserCard";
import styles from './Demo.module.scss';

export default {
    title: 'Demo'
}

export const Demo = () => <div className={styles.demo}>
    <div className={styles.links}>
        <a href='https://www.npmjs.com/package/react-ui-cards'>NPM package</a>
        <a href='https://github.com/nukeop/react-ui-cards'>See the source at Github</a>
    </div>

    <p>
        Use the links on the left to see the other components.
    </p>

    <div className={styles.cards}>
        <UserCard
            float
            href='https://github.com/nukeop'
            header='https://i.imgur.com/w5tX1Pn.jpg'
            avatar='https://i.imgur.com/uDYejhJ.jpg'
            name='Justin Case'
            positionName='Software Developer'
            stats={[
                {
                    name: 'followers',
                    value: 21
                },
                {
                    name: 'following',
                    value: 37
                },
                {
                    name: 'posts',
                    value: 117
                }
            ]}
        />

        <UserCard
            float
            href='https://github.com/nukeop'
            header='https://i.imgur.com/vRAtM3i.jpg'
            avatar='https://i.imgur.com/XJxqvsU.jpg'
            name='Frank Hepsfield'
            positionName='Software Engineering Manager'
        />

        <UserCard
            float
            href='https://github.com/nukeop'
            header='https://i.imgur.com/p5yXGQk.jpg'
            avatar='https://i.imgur.com/kFkyYkZ.jpg'
            name='Joseph Cheps'
            positionName='Firmware Engineer'
            stats={[
                {
                    name: 'commits',
                    value: 365
                },
                {
                    name: 'stars',
                    value: 110
                },
                {
                    name: 'repositories',
                    value: 54
                }
            ]}
        />
    </div>
</div>;