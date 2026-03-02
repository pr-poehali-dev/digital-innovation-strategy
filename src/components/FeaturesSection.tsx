import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function FeaturesSection() {
  return (
    <section className="container max-w-screen-xl py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Ключевые возможности</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          number={1}
          title="Мониторинг в реальном времени"
          description="Данные с датчиков уровня воды, расхода и давления обновляются каждые 1–15 минут. Автоматическая фильтрация и проверка достоверности показателей."
        />
        <FeatureCard
          number={2}
          title="Интеллектуальное управление"
          description="Система автоматически включает насосы и регулирует затворы в зависимости от уровня воды. Три режима: норма, предупреждение и аварийный — с мгновенными уведомлениями."
        />
        <FeatureCard
          number={3}
          title="Прогноз паводков до 72 часов"
          description="Интеграция с метеосервисами: прогноз осадков, ветра и приливов. Гидрологическое моделирование позволяет заранее сбросить лишнюю воду до начала шторма."
        />
      </div>
    </section>
  )
}

interface FeatureCardProps {
  number: number
  title: string
  description: string
}

function FeatureCard({ number, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-accent/50 border-dashed border-border/60">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-medium text-sm">
            {number}
          </span>
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}