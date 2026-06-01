import React from 'react';
import GlassCard from './GlassCard';

interface Props {
title: string;
value: string;
subtitle?: string;
}

export default ({ title, value, subtitle }: Props) => {
return ( <GlassCard>
<h3 style={{ color: '#9CA3AF', fontSize: '14px' }}>
{title} </h3>

```
        <h1
            style={{
                color: '#FFFFFF',
                fontSize: '34px',
                fontWeight: 700,
                marginTop: '10px',
            }}
        >
            {value}
        </h1>

        {subtitle && (
            <p
                style={{
                    color: '#9CA3AF',
                    marginTop: '6px',
                }}
            >
                {subtitle}
            </p>
        )}
    </GlassCard>
);
```

};
