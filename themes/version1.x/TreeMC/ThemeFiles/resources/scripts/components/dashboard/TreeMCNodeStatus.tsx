import React from 'react';
import GlassCard from '../treemc/GlassCard';

export default () => {
    return (
        <GlassCard>
            <div style={{ padding: '25px' }}>
                <h2
                    style={{
                        color: '#FFFFFF',
                        fontSize: '22px',
                        marginBottom: '20px',
                    }}
                >
                    Node Status
                </h2>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(5,1fr)',
                        gap: '15px',
                    }}
                >
                    <div>
                        <h3 style={{ color: '#22C55E' }}>Online</h3>
                        <p>TreeMC Node</p>
                    </div>

                    <div>
                        <h3>1</h3>
                        <p>Node</p>
                    </div>

                    <div>
                        <h3>1</h3>
                        <p>Server</p>
                    </div>

                    <div>
                        <h3>0%</h3>
                        <p>CPU</p>
                    </div>

                    <div>
                        <h3>0%</h3>
                        <p>RAM</p>
                    </div>
                </div>
            </div>
        </GlassCard>
    );
};
