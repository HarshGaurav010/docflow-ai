import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Sidebar } from '../Sidebar';
import { supabase } from '@/lib/supabase/client';
import { signOutUser } from '@/lib/supabase/auth';

// Mock Next.js navigation hooks
vi.mock('next/navigation', () => ({
  usePathname: () => '/dashboard',
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

// Mock Supabase client and auth functions
vi.mock('@/lib/supabase/client', () => ({
  supabase: {
    auth: {
      getUser: vi.fn(),
      onAuthStateChange: vi.fn(),
    },
  },
}));

vi.mock('@/lib/supabase/auth', () => ({
  signOutUser: vi.fn().mockResolvedValue({ error: null }),
}));

describe('Sidebar Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    // Default mock for onAuthStateChange
    vi.mocked(supabase.auth.onAuthStateChange).mockReturnValue({
      data: {
        subscription: {
          unsubscribe: vi.fn(),
          id: 'mock-sub-id',
          callback: vi.fn(),
        },
      },
    });
  });

  it('renders Sidebar navigation successfully', async () => {
    vi.mocked(supabase.auth.getUser).mockResolvedValue({
      data: {
        user: {
          id: 'user-123',
          email: 'test@example.com',
          user_metadata: { full_name: 'Test User' },
          app_metadata: {},
          aud: 'authenticated',
          created_at: '2026-01-01T00:00:00Z',
        },
      },
      error: null,
    });

    render(<Sidebar />);

    await waitFor(() => {
      expect(screen.getByText('DocFlow AI')).toBeInTheDocument();
    });

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Documents')).toBeInTheDocument();
    expect(screen.getByText('Upload')).toBeInTheDocument();
    expect(screen.getByText('Review Queue')).toBeInTheDocument();
    expect(screen.getByText('Approvals')).toBeInTheDocument();
    expect(screen.getByText('Analytics')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });

  it("displays authenticated user's name, email, and generated initials from mocked Supabase user", async () => {
    const mockUser = {
      id: 'usr-999',
      email: 'priya@techcorp.io',
      user_metadata: { full_name: 'Priya Sharma' },
      app_metadata: {},
      aud: 'authenticated',
      created_at: '2026-01-01T00:00:00Z',
    };

    vi.mocked(supabase.auth.getUser).mockResolvedValue({
      data: { user: mockUser },
      error: null,
    });

    render(<Sidebar />);

    // Wait for user state to be populated
    await waitFor(() => {
      expect(screen.getByText('Priya Sharma')).toBeInTheDocument();
    });

    // Check email display
    expect(screen.getByText('priya@techcorp.io')).toBeInTheDocument();

    // Check initials generation ("Priya Sharma" -> "PS")
    expect(screen.getByText('PS')).toBeInTheDocument();
  });

  it('does NOT use the old hardcoded Harsh Mehta / harsh@acme.com values when logged in as another user', async () => {
    const mockUser = {
      id: 'usr-888',
      email: 'sarah.connor@cyberdyne.org',
      user_metadata: { full_name: 'Sarah Connor' },
      app_metadata: {},
      aud: 'authenticated',
      created_at: '2026-01-01T00:00:00Z',
    };

    vi.mocked(supabase.auth.getUser).mockResolvedValue({
      data: { user: mockUser },
      error: null,
    });

    render(<Sidebar />);

    await waitFor(() => {
      expect(screen.getByText('Sarah Connor')).toBeInTheDocument();
    });

    // Ensure hardcoded values are completely absent
    expect(screen.queryByText('Harsh Mehta')).toBeNull();
    expect(screen.queryByText('harsh@acme.com')).toBeNull();
    expect(screen.queryByText('HM')).toBeNull();
  });

  it('generates initials correctly from email when full_name is not available', async () => {
    const mockUser = {
      id: 'usr-777',
      email: 'alex.rover@exploration.co',
      user_metadata: {},
      app_metadata: {},
      aud: 'authenticated',
      created_at: '2026-01-01T00:00:00Z',
    };

    vi.mocked(supabase.auth.getUser).mockResolvedValue({
      data: { user: mockUser },
      error: null,
    });

    render(<Sidebar />);

    await waitFor(() => {
      expect(screen.getByText('alex.rover@exploration.co')).toBeInTheDocument();
    });

    // "alex.rover" -> initials "AR"
    expect(screen.getByText('AR')).toBeInTheDocument();
  });

  it('has a logout button that calls signOutUser on click', async () => {
    vi.mocked(supabase.auth.getUser).mockResolvedValue({
      data: {
        user: {
          id: 'user-123',
          email: 'test@example.com',
          user_metadata: { full_name: 'Test User' },
          app_metadata: {},
          aud: 'authenticated',
          created_at: '2026-01-01T00:00:00Z',
        },
      },
      error: null,
    });

    render(<Sidebar />);

    await waitFor(() => {
      expect(screen.getByTitle('Log Out')).toBeInTheDocument();
    });

    const logoutButton = screen.getByTitle('Log Out');
    fireEvent.click(logoutButton);

    await waitFor(() => {
      expect(signOutUser).toHaveBeenCalledTimes(1);
    });
  });
});
