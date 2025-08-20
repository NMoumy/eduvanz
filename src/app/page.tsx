import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Welcome to Eduvanz!</h1>
          <ThemeToggle />
        </div>

        <div className="grid gap-6">
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Mode sombre activé !</h2>
            <p className="text-muted-foreground">
              Utilisez le bouton en haut à droite pour basculer entre le mode clair et sombre. Le thème s&apos;adapte
              automatiquement selon les préférences système par défaut.
            </p>
          </div>

          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Test de typographie</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-bold">Police Outfit appliquée</h4>
                <p className="text-sm text-muted-foreground">Taille de police normale avec Outfit</p>
              </div>
              <div>
                <p className="text-base">Paragraphe en taille normale</p>
                <p className="text-sm">Paragraphe en petite taille</p>
                <p className="text-lg">Paragraphe en grande taille</p>
              </div>
              <div>
                <span className="font-light">Léger</span> |<span className="font-normal">Normal</span> |
                <span className="font-medium">Moyen</span> |<span className="font-semibold">Semi-gras</span> |
                <span className="font-bold">Gras</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Couleurs du thème</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="p-4 rounded bg-primary text-primary-foreground text-center">Primary</div>
              <div className="p-4 rounded bg-secondary text-secondary-foreground text-center">Secondary</div>
              <div className="p-4 rounded bg-accent text-accent-foreground text-center">Accent</div>
              <div className="p-4 rounded bg-muted text-muted-foreground text-center">Muted</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
