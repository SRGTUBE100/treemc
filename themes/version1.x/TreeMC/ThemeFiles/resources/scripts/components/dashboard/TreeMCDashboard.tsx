import React from 'react';

import TreeMCLayout from '../treemc/TreeMCLayout';
import TreeMCHero from './TreeMCHero';
import TreeMCStats from './TreeMCStats';

import TreeMCOverview from './TreeMCOverview';
import TreeMCRecentActivity from './TreeMCRecentActivity';
import TreeMCNodeStatus from './TreeMCNodeStatus';

interface Props {
    serverCount: number;
    children?: React.ReactNode;
}

export default ({ serverCount, children }: Props) => {
    return (
        <TreeMCLayout>
            <TreeMCHero />

            <TreeMCStats serverCount={serverCount} />

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr',
                    gap: '20px',
                    marginTop: '20px',
                }}
            >
                <TreeMCOverview />
                <TreeMCRecentActivity />
            </div>

            <div style={{ marginTop: '20px' }}>
                <TreeMCNodeStatus />
            </div>

            <div style={{ marginTop: '20px' }}>
                {children}
            </div>
        </TreeMCLayout>
    );
};
