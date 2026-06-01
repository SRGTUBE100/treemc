import React from 'react';

interface Props {
children: React.ReactNode;
}

export default ({ children }: Props) => {
return (
<button
style={{
background:
'linear-gradient(135deg,#7C3AED,#3B82F6,#06B6D4)',
backgroundSize: '300% 300%',
border: 'none',
borderRadius: '16px',
color: '#fff',
padding: '12px 22px',
cursor: 'pointer',
fontWeight: 700,
}}
>
{children} </button>
);
};
