'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, BookOpen, Briefcase, Dumbbell, Users, Trophy } from 'lucide-react';
import Link from 'next/link';

const programs = [
  {
    id: 1,
    title: 'Counseling y Orientación',
    description: 'Acceso a servicios de orientación profesional y apoyo emocional para estudiantes.',
    category: 'Salud Mental',
    icon: Heart,
    participants: 245,
    color: 'bg-red-50',
    iconColor: 'text-red-600',
  },
  {
    id: 2,
    title: 'Programas Académicos',
    description: 'Talleres y programas diseñados para mejorar tu rendimiento académico.',
    category: 'Académico',
    icon: BookOpen,
    participants: 189,
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    id: 3,
    title: 'Desarrollo de Carrera',
    description: 'Preparación para el mundo laboral, entrevistas y desarrollo profesional.',
    category: 'Carrera',
    icon: Briefcase,
    participants: 156,
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    id: 4,
    title: 'Bienestar Físico',
    description: 'Actividades deportivas y programas de salud para mantener una vida activa.',
    category: 'Deportes',
    icon: Dumbbell,
    participants: 312,
    color: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    id: 5,
    title: 'Integración Social',
    description: 'Eventos y actividades para fortalecer comunidad y relaciones interpersonales.',
    category: 'Social',
    icon: Users,
    participants: 428,
    color: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    id: 6,
    title: 'Liderazgo y Desarrollo',
    description: 'Programas de liderazgo y desarrollo personal para potenciar tus habilidades.',
    category: 'Desarrollo',
    icon: Trophy,
    participants: 198,
    color: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
];

export default function ProgramasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-gradient-to-b from-primary/10 via-background to-background py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nuestros Programas
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Accede a una amplia variedad de programas diseñados para tu bienestar integral como estudiante de la UTP.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-12 md:py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program) => {
                const IconComponent = program.icon;
                return (
                  <Card
                    key={program.id}
                    className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col"
                  >
                    <div className={`w-12 h-12 rounded-lg ${program.color} flex items-center justify-center mb-4`}>
                      <IconComponent className={`${program.iconColor}`} size={24} />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {program.title}
                    </h3>
                    
                    <p className="text-sm text-secondary font-medium mb-3">
                      {program.category}
                    </p>
                    
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">
                      {program.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">
                        {program.participants} participantes
                      </span>
                      <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                        Ver Más
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Interesado en participar?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Regístrate en PaperEase para solicitar tu participación en cualquiera de nuestros programas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" variant="secondary" className="font-semibold">
                  Crear Cuenta
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline" className="font-semibold border-white text-white hover:bg-white/10">
                  Ya tengo cuenta
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
