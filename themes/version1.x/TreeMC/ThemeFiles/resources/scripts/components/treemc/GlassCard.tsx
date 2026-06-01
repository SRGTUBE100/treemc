import React from 'react';

interface Props {
children: React.ReactNode;
className?: string;
}

export default ({ children, className }: Props) => {
return (
<div
className={className}
style={{
background: 'rgba(255,255,255,0.06)',
backdropFilter: 'blur(20px)',
WebkitBackdropFilter: 'blur(20px)',
border: '1px solid rgba(255,255,255,0.08)',
borderRadius: '24px',
boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
padding: '20px',
}}
>
{children} </div>
);
};
