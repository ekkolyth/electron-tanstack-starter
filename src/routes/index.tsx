import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/navbar';
import { Plus, Minus, RotateCcw, Zap, Code2, CoffeeIcon } from 'lucide-react';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const [count, setCount] = useState(0);

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Navbar />

      {/* Main Content */}
      <main className='flex-1 flex items-center justify-center p-8 lg:p-12'>
        <div className='max-w-4xl mx-auto text-center space-y-16'>
          {/* Welcome Section */}
          <div className='space-y-8'>
            <div className='flex justify-center'>
              <Badge
                variant='outline'
                className='bg-primary/10 text-primary border-primary/30 px-4 py-2'
              >
                <Zap className='size-4 mr-2' />
                App Started Successfully
              </Badge>
            </div>
            <div className='space-y-6'>
              <h1 className='text-5xl lg:text-6xl font-bold text-balance leading-tight'>
                Welcome to your <span className='text-primary'>Electron App</span>
              </h1>
              <p className='flex flex-row justify-center gap-2 items-center text-xl text-muted-foreground text-pretty max-w-2xl mx-auto'>
                Let's build something amazing! <CoffeeIcon className='size-5' />
              </p>
            </div>
          </div>

          {/* Interactive Counter Demo */}
          <div className='max-w-lg mx-auto'>
            <Card className='bg-card/50 border-border/50 backdrop-blur-sm shadow-lg'>
              <CardHeader className='pb-6'>
                <CardTitle className='flex items-center justify-center gap-2 text-xl'>
                  <Code2 className='size-6 text-primary' />
                  Interactive Demo
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-8 px-8 pb-8'>
                <div className='text-center'>
                  <div className='text-8xl font-bold text-primary mb-6 font-mono'>{count}</div>
                </div>

                <div className='flex items-center justify-center gap-4'>
                  <Button
                    variant='outline'
                    size='lg'
                    onClick={() => setCount(count - 1)}
                    className='size-14 p-0 hover:scale-105 transition-transform'
                  >
                    <Minus className='size-5' />
                  </Button>
                  <Button
                    variant='outline'
                    size='lg'
                    onClick={() => setCount(0)}
                    className='px-8 py-3 hover:scale-105 transition-transform'
                  >
                    <RotateCcw className='size-5 mr-2' />
                    Reset
                  </Button>
                  <Button
                    variant='outline'
                    size='lg'
                    onClick={() => setCount(count + 1)}
                    className='size-14 p-0 hover:scale-105 transition-transform'
                  >
                    <Plus className='size-5' />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Next Steps */}
          <div className='text-center space-y-4 max-w-2xl mx-auto'>
            <p className='text-base text-muted-foreground leading-relaxed'>
              Ready to start building? Edit{' '}
              <code className='bg-muted px-3 py-1.5 rounded-md text-sm font-mono border mx-2'>
                app/page.tsx
              </code>{' '}
              to get started.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
