import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="container max-w-screen-xl py-24 text-center">
      <h2 className="text-3xl font-bold mb-4">Готовы взять паводки под контроль?</h2>
      <p className="text-muted-foreground max-w-xl mx-auto mb-8">
        Подключите вашу польдерную систему и получите полный мониторинг, автоматическое управление и прогнозирование в едином интерфейсе. Первый объект — бесплатно в течение 30 дней.
      </p>
      <Button size="lg" className="px-8">
        Запросить демо
      </Button>
    </section>
  )
}