import React from 'react';
import StatCard from '../treemc/StatCard';

interface Props {
    serverCount: number;
}

export default ({ serverCount }: Props) => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4,1fr)',
                gap: '20px',
                marginTop: '25px',
            }}
        >
            <StatCard
                title="Servers"
                value={String(serverCount)}
                subtitle="Your Servers"
            />

            <StatCard
                title="Players"
                value="0"
                subtitle="Connected Players"
            />

            <StatCard
                title="CPU Usage"
                value="0%"
                subtitle="All Nodes"
            />

            <StatCard
                title="RAM Usage"
                value="0%"
                subtitle="All Nodes"
            />
        </div>
    );
};
