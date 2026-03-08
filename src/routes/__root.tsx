import { createRootRoute, Outlet } from '@tanstack/react-router';
import { ThemeProvider } from '@/components/theme-provider';
import { QueryProvider } from '@/components/providers/query-provider';

export const Route = createRootRoute({
  component: () => (
    <QueryProvider>
      <ThemeProvider
        attribute='class'
        defaultTheme='dark'
        enableSystem
        disableTransitionOnChange
      >
        <div className='min-h-screen'>
          <Outlet />
        </div>
      </ThemeProvider>
    </QueryProvider>
  ),
});
