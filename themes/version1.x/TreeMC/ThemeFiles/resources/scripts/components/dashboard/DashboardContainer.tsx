import React, { useEffect, useState } from 'react';
import { Server } from '@/api/server/getServer';
import getServers from '@/api/getServers';
import ServerRow from '@/components/dashboard/ServerRow';
import PageContentBlock from '@/components/elements/PageContentBlock';
import Spinner from '@/components/elements/Spinner';
import useSWR from 'swr';
import { PaginatedResult } from '@/api/http';

import TreeMCDashboard from './TreeMCDashboard';

export default () => {
    const [page] = useState(1);

    const { data: servers } = useSWR<PaginatedResult<Server>>(
        ['/api/client/servers', page],
        () => getServers({ page })
    );

    return (
        <PageContentBlock title={'Dashboard'}>
            {!servers ? (
                <Spinner centered size={'large'} />
            ) : (
                <TreeMCDashboard serverCount={servers.items.length}>
                    {servers.items.map((server) => (
                        <ServerRow
                            key={server.uuid}
                            server={server}
                        />
                    ))}
                </TreeMCDashboard>
            )}
        </PageContentBlock>
    );
};
