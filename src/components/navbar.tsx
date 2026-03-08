import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/theme-toggle';
import { Layers3 } from 'lucide-react';

interface NavbarProps {
  title?: string;
  subtitle?: string;
  showStatus?: boolean;
  statusText?: string;
  statusVariant?: 'default' | 'secondary' | 'destructive' | 'outline';
}

export function Navbar({
  title = 'Electron + Tanstack Router',
  subtitle = 'Development Server Running',
  showStatus = true,
  statusText = 'Ready',
  statusVariant = 'secondary',
}: NavbarProps) {
  return (
    <header className='border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='w-8 h-8 bg-primary rounded-lg flex items-center justify-center'>
            <Layers3 className='w-5 h-5 text-primary-foreground' />
          </div>
          <div>
            <h1 className='text-lg font-semibold text-foreground'>{title}</h1>
            <p className='text-xs text-muted-foreground'>{subtitle}</p>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          {showStatus && (
            <Badge
              variant={statusVariant}
              className='bg-green-500/20 text-green-400 border-green-500/30'
            >
              <div className='w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse' />
              {statusText}
            </Badge>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
