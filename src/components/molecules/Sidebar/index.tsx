import React from 'react';
import Link from 'next/link';
import { Bell, Home, LineChart, Package, Package2, ShoppingCart, Users } from 'lucide-react';
import { Avatar, AvatarImage } from '@/src/components/ui/avatar';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { useSession } from 'next-auth/react';

const Index = () => {
  const { data: session } = useSession(); // Obtener los datos de la sesión

  return (
    <div className='hidden border-r bg-muted/40 md:block'>
      <div className='flex h-full max-h-screen flex-col gap-2'>
        <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
          <Link href='/' className='flex items-center gap-2 font-semibold'>
            <Package2 className='h-6 w-6' />
            <span className=''>Gestion Tareas</span>
          </Link>
          <Button variant='outline' size='icon' className='ml-auto h-8 w-8'>
            <Bell className='h-4 w-4' />
            <span className='sr-only'>Toggle notifications</span>
          </Button>
        </div>
        <div className='flex-1'>
          <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
            <Link
              href='/'
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
            >
              <Home className='h-4 w-4' />
              Dashboard
            </Link>
            <Link
              href='/projects'
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
            >
              <ShoppingCart className='h-4 w-4' />
              Proyectos
            </Link>
            <Link
              href='/tasks'
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
            >
              <Package className='h-4 w-4' />
              Tareas{' '}
            </Link>
            {/* Mostrar el enlace de Usuarios solo si el rol no es USER */}
            {session?.user?.role !== 'USER' && (
              <Link
                href='/users'
                className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
              >
                <LineChart className='h-4 w-4' />
                Usuarios
              </Link>
            )}
          </nav>
        </div>
        <div className='mt-auto p-4'>
          <Card x-chunk='dashboard-02-chunk-0'>
            <CardHeader className='p-2 pt-0 md:p-4 flex flex-row gap-5 justify-center items-center'>
              <Avatar>
                <AvatarImage src={session?.user?.image} alt='@shadcn' />
              </Avatar>
              <div className='flex flex-col items-center justify-center'>
                <CardTitle>{session?.user?.name}</CardTitle>
                <CardContent className='p-2 pt-0 md:p-4 md:pt-0'>{session?.user?.role}</CardContent>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;