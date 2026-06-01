import React from 'react';
import GlassCard from '../treemc/GlassCard';

export default () => {
    return (
        <GlassCard>
            <div
                style={{
                    padding: '40px',
                    minHeight: '280px',
                    borderRadius: '24px',

                    backgroundImage:
                        "linear-gradient(rgba(5,10,25,.55), rgba(5,10,25,.80)), url('https://media.craiyon.com/2025-07-23/OAnQPJ7TSlS8qHvUXtugkQ.webp')",

                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',

                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <p
                    style={{
                        color: '#C4B5FD',
                        fontSize: '18px',
                        marginBottom: '10px',
                    }}
                >
                    Welcome back 👋
                </p>

                <h1
                    style={{
                        color: '#FFFFFF',
                        fontSize: '58px',
                        fontWeight: 800,
                        margin: 0,
                        textShadow: '0 0 30px rgba(0,176,255,.45)',
                    }}
                >
                    TreeMC Host
                </h1>

                <p
                    style={{
                        color: '#E4E4E7',
                        fontSize: '20px',
                        marginTop: '12px',
                        maxWidth: '650px',
                    }}
                >
                    Premium Minecraft Hosting • Fast • Secure • Reliable
                </p>

                <div
                    style={{
                        marginTop: '25px',
                    }}
                >
                    <button
                        style={{
                            background:
                                'linear-gradient(90deg,#8B5CF6,#06B6D4)',
                            color: '#fff',
                            border: 'none',
                            padding: '14px 28px',
                            borderRadius: '12px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            boxShadow:
                                '0 0 25px rgba(139,92,246,.45)',
                        }}
                    >
                        Create Server
                    </button>
                </div>
            </div>
        </GlassCard>
    );
};
