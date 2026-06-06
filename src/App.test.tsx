import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders an application root', () => {
    render(<App />);
    expect(screen.getByTestId('setfarm-app-root')).toBeInTheDocument();
  });

  it('exposes window.app with state and actions', () => {
    render(<App />);
    expect(window.app).toBeDefined();
    expect(typeof window.app.getState).toBe('function');
    expect(typeof window.app.dispatch).toBe('function');
    expect(typeof window.app.reset).toBe('function');
    const s = window.app.getState();
    expect(s).toHaveProperty('game');
    expect(s).toHaveProperty('screen');
  });
});
