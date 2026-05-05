'use client';

import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, FileText, BarChart3, Bell, Settings, LogOut } from 'lucide-react';

const menuItems = [
  {
    title: 'Programas',
    description: 'Explora todos nuestros programas de bienestar y desarrollo.',
    icon: BookOpen,
    href: '/programas',
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Solicitudes',
    description: 'Gestiona y da seguimiento a tus solicitudes.',
    icon: FileText,
    href: '/solicitudes',
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    title: 'Dashboard',
    description: 'Visualiza tu progreso y estadísticas.',
    icon: BarChart3,
    href: '/dashboard',
    color: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    title: 'Notificaciones',
    description: 'Revisa tus notificaciones y mensajes.',
    icon: Bell,
    href: '/notificaciones',
    color: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    title: 'Configuración',
    description: 'Administra tu perfil y preferencias.',
    icon: Settings,
    href: '/configuracion',
    color: 'bg-slate-50',
    iconColor: 'text-slate-600',
  },
];

export default function MenuPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 bg-background py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Welcome Section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Menú Principal
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bienvenido a tu espacio personal en PaperEase. Accede a todas tus herramientas y programas desde aquí.
            </p>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link key={item.href} href={item.href}>
                  <Card className="p-8 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full flex flex-col">
                    <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center mb-4`}>
                      <IconComponent className={`${item.iconColor}`} size={24} />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm flex-grow">
                      {item.description}
                    </p>
                    
                    <div className="mt-6 flex items-center text-primary text-sm font-semibold group">
                      Ir
                      <span className="ml-2 group-hover:translate-x-1 transition">→</span>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-8 bg-primary/5 border-primary/20">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Últimas Novedades
              </h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Nuevo programa de liderazgo disponible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Taller de desarrollo profesional próxima semana</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Actualización de horarios de eventos</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-secondary/10 border-secondary/30">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Recursos Útiles
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-secondary hover:text-secondary/80 text-sm font-medium">
                    Guía de Solicitudes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-secondary hover:text-secondary/80 text-sm font-medium">
                    Preguntas Frecuentes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-secondary hover:text-secondary/80 text-sm font-medium">
                    Contacto de Soporte
                  </Link>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </main>

      {/* Logout Button */}
      <div className="border-t border-border bg-card py-4">
        <div className="container mx-auto px-4">
          <Button variant="outline" className="gap-2">
            <LogOut size={20} />
            Cerrar Sesión
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
