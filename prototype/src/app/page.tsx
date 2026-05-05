'use client';

import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, FileText, BarChart3, Users, CheckCircle2, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="flex-1 bg-gradient-to-b from-primary/10 via-background to-background py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Bienvenido a <span className="text-primary">PaperEase</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Tu plataforma integral para gestionar solicitudes y acceder a programas de bienestar estudiantil en la Universidad Tecnológica de Panamá.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login">
                <Button size="lg" className="w-full sm:w-auto">
                  Ingresar
                </Button>
              </Link>
              <Link href="/programas">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Explorar Programas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Características Principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Programas Diversos</h3>
              <p className="text-muted-foreground">
                Acceso a una amplia variedad de programas de bienestar y desarrollo personal diseñados para ti.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                <FileText className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Solicitudes Fáciles</h3>
              <p className="text-muted-foreground">
                Crea, gestiona y realiza seguimiento de tus solicitudes de forma rápida y sencilla.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Dashboard Personal</h3>
              <p className="text-muted-foreground">
                Visualiza tu actividad, estadísticas y progreso en un solo lugar.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                <Clock className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Seguimiento en Tiempo Real</h3>
              <p className="text-muted-foreground">
                Obtén actualizaciones instantáneas sobre el estado de tus solicitudes.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Gestión Integral</h3>
              <p className="text-muted-foreground">
                Todas las herramientas que necesitas para gestionar tu vida estudiantil.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                <Users className="text-secondary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Soporte Dedicado</h3>
              <p className="text-muted-foreground">
                Equipo de bienestar estudiantil disponible para ayudarte en todo momento.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para empezar?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Crea tu cuenta hoy y accede a todos los programas y servicios de bienestar que PaperEase tiene para ofrecerte.
          </p>
          <Link href="/login">
            <Button size="lg" variant="secondary" className="font-semibold">
              Crear Cuenta o Ingresar
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
