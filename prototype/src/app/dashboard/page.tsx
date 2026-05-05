'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Clock, AlertCircle, TrendingUp, Award, Users } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const stats = [
    {
      label: 'Solicitudes Aprobadas',
      value: '12',
      icon: CheckCircle2,
      color: 'text-emerald-600 bg-emerald-50',
    },
    {
      label: 'En Revisión',
      value: '3',
      icon: Clock,
      color: 'text-amber-600 bg-amber-50',
    },
    {
      label: 'Programas Activos',
      value: '5',
      icon: TrendingUp,
      color: 'text-blue-600 bg-blue-50',
    },
    {
      label: 'Horas Completadas',
      value: '24',
      icon: Award,
      color: 'text-purple-600 bg-purple-50',
    },
  ];

  const recentActivities = [
    {
      type: 'approved',
      title: 'Tu solicitud a Counseling fue aprobada',
      date: 'Hace 2 días',
    },
    {
      type: 'pending',
      title: 'Nueva solicitud: Desarrollo de Carrera',
      date: 'Hace 5 días',
    },
    {
      type: 'completed',
      title: 'Completaste el programa de Bienestar Físico',
      date: 'Hace 1 semana',
    },
  ];

  const upcomingEvents = [
    {
      date: '15 Feb',
      time: '14:00',
      title: 'Taller de Preparación para Entrevistas',
      program: 'Desarrollo de Carrera',
    },
    {
      date: '18 Feb',
      time: '10:00',
      title: 'Sesión de Orientación Personal',
      program: 'Counseling',
    },
    {
      date: '22 Feb',
      time: '16:00',
      title: 'Actividad Deportiva Semanal',
      program: 'Bienestar Físico',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 bg-background py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Welcome Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              ¡Hola, Juan!
            </h1>
            <p className="text-lg text-muted-foreground">
              Aquí está tu resumen de actividades en PaperEase
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center mb-4`}>
                    <IconComponent size={24} />
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activities */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Actividades Recientes</h2>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-4 pb-4 border-b border-border last:border-0">
                      <div className="mt-1">
                        {activity.type === 'approved' && (
                          <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                        )}
                        {activity.type === 'pending' && (
                          <div className="w-2 h-2 rounded-full bg-amber-600"></div>
                        )}
                        {activity.type === 'completed' && (
                          <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        )}
                      </div>
                      <div className="flex-grow">
                        <p className="text-foreground font-medium">{activity.title}</p>
                        <p className="text-muted-foreground text-sm mt-1">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/solicitudes">
                  <Button variant="outline" className="w-full mt-6">
                    Ver Todas las Actividades
                  </Button>
                </Link>
              </Card>
            </div>

            {/* Upcoming Events */}
            <div>
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Próximos Eventos</h2>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="pb-4 border-b border-border last:border-0">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="text-primary font-bold text-sm">{event.date}</div>
                        <div className="flex-grow">
                          <p className="text-foreground font-semibold text-sm">{event.title}</p>
                          <p className="text-muted-foreground text-xs mt-1">{event.time}</p>
                        </div>
                      </div>
                      <p className="text-secondary text-xs font-medium">{event.program}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="p-8 mt-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Acciones Rápidas</h3>
                <div className="space-y-3 flex flex-col">
                  <Link href="/solicitudes/new">
                    <Button variant="outline" className="w-full">
                      Nueva Solicitud
                    </Button>
                  </Link>
                  <Link href="/programas">
                    <Button variant="outline" className="w-full">
                      Explorar Programas
                    </Button>
                  </Link>
                  <Link href="/perfil">
                    <Button variant="outline" className="w-full">
                      Mi Perfil
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
