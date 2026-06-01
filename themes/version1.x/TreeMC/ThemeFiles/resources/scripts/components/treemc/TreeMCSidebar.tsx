import React from 'react';

export default () => {
    return (
        <div
            style={{
                width: '280px',
                minHeight: '100vh',

                background: 'rgba(10,15,30,.85)',

                backdropFilter: 'blur(20px)',

                borderRight: '1px solid rgba(255,255,255,.08)',

                padding: '25px',

                boxSizing: 'border-box',
            }}
        >
            <h1
                style={{
                    color: '#FFFFFF',
                    fontSize: '28px',
                    fontWeight: 800,
                    marginBottom: '35px',
                }}
            >
                TreeMC Host
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <SidebarItem text="🏠 Dashboard" active />
                <SidebarItem text="🖥 Servers" />
                <SidebarItem text="🗄 Databases" />
                <SidebarItem text="👥 Users" />
                <SidebarItem text="💾 Backups" />
                <SidebarItem text="🌐 Networks" />
                <SidebarItem text="⚙ Settings" />
            </div>

            <div
                style={{
                    marginTop: '40px',
                    padding: '20px',

                    background:
                        'linear-gradient(135deg,#7C3AED,#06B6D4)',

                    borderRadius: '20px',

                    color: 'white',
                }}
            >
                <h3 style={{ marginTop: 0 }}>
                    TreeMC Host
                </h3>

                <p>
                    Premium Minecraft Hosting
                </p>
            </div>
        </div>
    );
};

const SidebarItem = ({
    text,
    active,
}: {
    text: string;
    active?: boolean;
}) => (
    <div
        style={{
            padding: '14px 18px',

            borderRadius: '14px',

            background: active
                ? 'linear-gradient(90deg,#8B5CF6,#06B6D4)'
                : 'transparent',

            color: '#FFFFFF',

            cursor: 'pointer',
        }}
    >
        {text}
    </div>
);
