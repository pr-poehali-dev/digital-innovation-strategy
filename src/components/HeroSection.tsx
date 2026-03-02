import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="container max-w-screen-xl py-20 text-center">
      <div className="flex justify-center mb-6">
        <Badge variant="outline" className="px-4 py-1 text-sm rounded-full border-neutral-700">
          Версия 2.0 — Расширенная гидрологическая аналитика
        </Badge>
      </div>
      <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl mb-6">
        Умное управление
        <br />
        польдерами
      </h1>
      <p className="mx-auto max-w-2xl text-muted-foreground mb-8">
        Автоматизированная система контроля гидрологического режима. Мониторинг уровня воды, управление насосами и затворами, прогноз паводков — в режиме реального времени.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" className="px-8">
          Запросить демо
        </Button>
        <Button size="lg" variant="outline" className="px-8">
          Возможности
        </Button>
        <Button size="lg" variant="outline" className="px-8">
          Документация
        </Button>
        <Button size="lg" variant="outline" className="px-8">
          Кейсы
        </Button>
        <Button size="lg" variant="outline" className="px-8">
          Поддержка
        </Button>
      </div>
    </section>
  )
}