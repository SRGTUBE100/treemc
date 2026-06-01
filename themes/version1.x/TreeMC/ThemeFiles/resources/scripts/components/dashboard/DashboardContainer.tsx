import React from 'react';
import PageContentBlock from '@/components/elements/PageContentBlock';
import TreeMCDashboard from './TreeMCDashboard';

export default () => {
    return (
        <PageContentBlock title={'Dashboard'}>
            <TreeMCDashboard />
        </PageContentBlock>
    );
};
