export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full border-t border-border bg-card py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-foreground mb-4">PaperEase</h3>
            <p className="text-muted-foreground text-sm">
              Plataforma de gestión de bienestar estudiantil para la UTP.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/programas" className="text-muted-foreground hover:text-primary transition">Programas</a></li>
              <li><a href="/solicitudes" className="text-muted-foreground hover:text-primary transition">Solicitudes</a></li>
              <li><a href="/login" className="text-muted-foreground hover:text-primary transition">Ingresar</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <p className="text-muted-foreground text-sm">
              Departamento de Bienestar Estudiantil<br />
              Universidad Tecnológica de Panamá
            </p>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {currentYear} PaperEase. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
