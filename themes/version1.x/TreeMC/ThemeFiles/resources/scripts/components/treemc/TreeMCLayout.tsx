import React from 'react';

interface Props {
children: React.ReactNode;
}

export default ({ children }: Props) => {
return (
<div
style={{
minHeight: '100vh',
padding: '30px',
maxWidth: '1600px',
margin: '0 auto',
}}
>
{children} </div>
);
};
