'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle2, Clock, AlertCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const mockRequests = [
  {
    id: 'SOL-001',
    program: 'Counseling y Orientación',
    status: 'approved',
    date: '2024-01-15',
    dueDate: '2024-02-15',
  },
  {
    id: 'SOL-002',
    program: 'Desarrollo de Carrera',
    status: 'pending',
    date: '2024-02-01',
    dueDate: '2024-02-20',
  },
  {
    id: 'SOL-003',
    program: 'Bienestar Físico',
    status: 'rejected',
    date: '2024-01-20',
    dueDate: '2024-02-10',
  },
];

const statusConfig = {
  approved: {
    label: 'Aprobado',
    icon: CheckCircle2,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
  },
  pending: {
    label: 'En Revisión',
    icon: Clock,
    color: 'text-amber-600 bg-amber-50 border-amber-200',
  },
  rejected: {
    label: 'Rechazado',
    icon: AlertCircle,
    color: 'text-red-600 bg-red-50 border-red-200',
  },
};

export default function SolicitudesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredRequests = mockRequests.filter((request) => {
    const matchesSearch = request.program.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         request.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || request.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 bg-background py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Mis Solicitudes
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Gestiona y realiza seguimiento de tus solicitudes de participación en programas.
            </p>
            <Link href="/solicitudes/new">
              <Button size="lg" className="gap-2">
                Nueva Solicitud
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>

          {/* Search and Filter */}
          <Card className="p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="search" className="text-foreground mb-2 block">
                  Buscar
                </Label>
                <Input
                  id="search"
                  type="text"
                  placeholder="Buscar por nombre o ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Label htmlFor="filter" className="text-foreground mb-2 block">
                  Estado
                </Label>
                <select
                  id="filter"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground hover:bg-muted/50"
                >
                  <option value="all">Todos</option>
                  <option value="approved">Aprobado</option>
                  <option value="pending">En Revisión</option>
                  <option value="rejected">Rechazado</option>
                </select>
              </div>
            </div>
          </Card>

          {/* Requests List */}
          <div className="space-y-4">
            {filteredRequests.length > 0 ? (
              filteredRequests.map((request) => {
                const config = statusConfig[request.status as keyof typeof statusConfig];
                const IconComponent = config.icon;

                return (
                  <Card key={request.id} className="p-6 hover:shadow-lg transition">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div className="flex-grow">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">
                            {request.program}
                          </h3>
                          <div className={`flex items-center gap-1 px-3 py-1 rounded-full border ${config.color}`}>
                            <IconComponent size={16} />
                            <span className="text-sm font-medium">{config.label}</span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                          <span>ID: {request.id}</span>
                          <span>Solicitado: {new Date(request.date).toLocaleDateString('es-ES')}</span>
                          <span>Vencimiento: {new Date(request.dueDate).toLocaleDateString('es-ES')}</span>
                        </div>
                      </div>
                      <Button variant="outline">Ver Detalles</Button>
                    </div>
                  </Card>
                );
              })
            ) : (
              <Card className="p-12 text-center">
                <AlertCircle size={48} className="mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No se encontraron solicitudes
                </h3>
                <p className="text-muted-foreground mb-6">
                  Intenta ajustar los filtros de búsqueda o crea una nueva solicitud.
                </p>
                <Link href="/solicitudes/new">
                  <Button>Crear Nueva Solicitud</Button>
                </Link>
              </Card>
            )}
          </div>

          {/* Info Section */}
          <Card className="mt-12 p-8 bg-primary/5 border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              ¿Necesitas ayuda?
            </h3>
            <p className="text-muted-foreground mb-6">
              Si tienes preguntas sobre tus solicitudes o necesitas más información, contacta al departamento de bienestar estudiantil.
            </p>
            <Link href="/contacto">
              <Button variant="outline">Contáctanos</Button>
            </Link>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
