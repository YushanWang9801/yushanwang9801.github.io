import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div
      style={{
        marginTop: '72px',
        width: '100%',
        height: 'calc(100vh - 72px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-background, #0a0a0a)',
        textAlign: 'center',
        padding: '2rem'
      }}
    >
      <div
        className="font-mono text-[12vw] md:text-[10vw] font-bold tracking-tighter leading-none opacity-20 mb-8"
        style={{ color: 'var(--color-secondary, #e5e5e5)' }}
      >
        404
      </div>
      
      <div
        className="text-sm md:text-base tracking-[0.15em] uppercase opacity-60 mb-12"
        style={{ color: 'var(--color-secondary, #e5e5e5)' }}
      >
        Every link has but one destiny...<br />
        and this one has met its end.
      </div>
      
      <Link
        to="/"
        className="text-xs tracking-[0.2em] uppercase hover:opacity-100 opacity-40 transition-all duration-300"
        style={{ color: 'var(--color-secondary, #e5e5e5)' }}
      >
        ← Back to home
      </Link>
    </div>
  );
};

export default NotFoundPage;
