import React from 'react';
import GlassCard from '../treemc/GlassCard';

export default () => {
return ( <GlassCard>
<div style={{ padding: '10px' }}>
<p
style={{
color: '#C4B5FD',
fontSize: '18px',
}}
>
Welcome back 👋 </p>


            <h1
                style={{
                    color: '#FFFFFF',
                    fontSize: '52px',
                    fontWeight: 800,
                    marginTop: '10px',
                }}
            >
                TreeMC Host
            </h1>

            <p
                style={{
                    color: '#A1A1AA',
                    marginTop: '10px',
                }}
            >
                Here's what's happening with your servers today.
            </p>
        </div>
    </GlassCard>
);


};
