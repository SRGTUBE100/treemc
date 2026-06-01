import React from 'react';
import TreeMCSidebar from './TreeMCSidebar';

interface Props {
    children: React.ReactNode;
}

export default ({ children }: Props) => {
    return (
        <div
            style={{
                minHeight: '100vh',

                backgroundImage:
                    "linear-gradient(rgba(3,7,18,.85), rgba(3,7,18,.92)), url('https://media.craiyon.com/2025-07-23/OAnQPJ7TSlS8qHvUXtugkQ.webp')",

                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',

                display: 'flex',
            }}
        >
            <TreeMCSidebar />

            <div
                style={{
                    flex: 1,
                    padding: '30px',
                    overflowY: 'auto',
                }}
            >
                {children}
            </div>
        </div>
    );
};
