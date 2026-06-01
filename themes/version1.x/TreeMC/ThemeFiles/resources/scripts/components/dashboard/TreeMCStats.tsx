import React from 'react';
import StatCard from '../treemc/StatCard';

export default () => {
return (
<div
style={{
display: 'grid',
gridTemplateColumns: 'repeat(4,1fr)',
gap: '20px',
marginTop: '25px',
}}
> <StatCard
             title="Servers"
             value="0"
             subtitle="Online Servers"
         />

```
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
```

};
