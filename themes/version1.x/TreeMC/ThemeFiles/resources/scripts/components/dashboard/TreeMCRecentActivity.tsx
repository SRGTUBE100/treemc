import React from 'react';
import GlassCard from '../treemc/GlassCard';

export default () => {
    return (
        <GlassCard>
            <div style={{ padding: '25px', minHeight: '280px' }}>
                <h2
                    style={{
                        color: '#FFFFFF',
                        fontSize: '22px',
                        marginBottom: '20px',
                    }}
                >
                    Recent Activity
                </h2>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '180px',
                        color: '#A1A1AA',
                    }}
                >
                    No recent activity.
                </div>
            </div>
        </GlassCard>
    );
};
