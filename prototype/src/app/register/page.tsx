'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, CheckCircle2 } from 'lucide-react';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    studentId: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-2xl">
          <Card className="p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Crear Cuenta</h1>
              <p className="text-muted-foreground">Únete a PaperEase y accede a todos nuestros programas</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-foreground">Nombre</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Juan"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="bg-input border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-foreground">Apellido</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Pérez"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="bg-input border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Correo Electrónico (Institucional)</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu.nombre@utp.ac.pa"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-input border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="studentId" className="text-foreground">Carné Estudiantil</Label>
                <Input
                  id="studentId"
                  name="studentId"
                  type="text"
                  placeholder="1234567"
                  value={formData.studentId}
                  onChange={handleChange}
                  className="bg-input border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">Contraseña</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="bg-input border-border pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-foreground">Confirmar Contraseña</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="bg-input border-border pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="bg-muted/30 border border-muted p-4 rounded-lg space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-secondary" />
                  <span className="text-sm text-muted-foreground">Mínimo 8 caracteres</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-secondary" />
                  <span className="text-sm text-muted-foreground">Una letra mayúscula</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-secondary" />
                  <span className="text-sm text-muted-foreground">Un número</span>
                </div>
              </div>

              <Button type="submit" className="w-full">
                Crear Cuenta
              </Button>
            </form>

            <div className="mt-8 border-t border-border pt-8">
              <p className="text-center text-muted-foreground">
                ¿Ya tienes cuenta?{' '}
                <Link href="/login" className="text-primary hover:text-primary/80 font-semibold">
                  Inicia sesión aquí
                </Link>
              </p>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
