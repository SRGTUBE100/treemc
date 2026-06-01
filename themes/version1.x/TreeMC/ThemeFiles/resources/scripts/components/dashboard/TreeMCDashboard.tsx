import React from 'react';

import TreeMCLayout from '../treemc/TreeMCLayout';
import TreeMCHero from './TreeMCHero';
import TreeMCStats from './TreeMCStats';

interface Props {
    serverCount: number;
    children?: React.ReactNode;
}

export default ({ serverCount, children }: Props) => {
    return (
        <TreeMCLayout>
            <TreeMCHero />
            <TreeMCStats serverCount={serverCount} />

            <div style={{ marginTop: '30px' }}>
                {children}
            </div>
        </TreeMCLayout>
    );
};
