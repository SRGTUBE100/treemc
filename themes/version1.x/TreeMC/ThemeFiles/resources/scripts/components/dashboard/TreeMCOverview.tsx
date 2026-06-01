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
                    Server Overview
                </h2>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '180px',
                        color: '#A1A1AA',
                    }}
                >
                    <div style={{ fontSize: '60px' }}>📦</div>

                    <h3>No servers found</h3>

                    <p>Create your first server to get started.</p>
                </div>
            </div>
        </GlassCard>
    );
};
