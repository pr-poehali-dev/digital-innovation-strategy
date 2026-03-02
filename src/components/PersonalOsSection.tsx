import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export function PersonalOsSection() {
  return (
    <section className="container max-w-screen-xl py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Полный контроль
            <br />
            над водным балансом
          </h2>
          <p className="text-muted-foreground mb-8">
            Система объединяет датчики, исполнительные устройства, метеоданные и журнал событий в единый диспетчерский пункт — для операторов и руководителей.
          </p>

          <Card className="bg-card/50 border-border/40 mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Аварийное оповещение</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">SMS, email и панель тревоги при превышении критического уровня — реакция менее 30 секунд</p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureItem title="Мониторинг датчиков 24/7" />
            <FeatureItem title="Ручное управление устройствами" />
            <FeatureItem title="Журнал инцидентов и аудит" />
            <FeatureItem title="Экспорт отчётов и балансов" />
          </div>
        </div>

        <div className="space-y-6">
          <Card className="bg-card/50 border-border/40">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div> Системный журнал
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs font-mono">
              <div className="text-green-500 mb-1">[08:42] Насос #1 — включён автоматически</div>
              <div className="text-yellow-500 mb-1">[09:15] Канал Б-2 — уровень 1.71 м (порог предупреждения)</div>
              <div className="text-blue-400">[09:16] Оператор уведомлён (SMS + email)</div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <FeatureCheck title="Карта польдера с зонами" />
            <FeatureCheck title="Прогнозные изолинии уровня" />
            <FeatureCheck title="Самодиагностика датчиков" />
            <FeatureCheck title="Резервные каналы связи" />
          </div>
        </div>
      </div>
    </section>
  )
}

interface FeatureItemProps {
  title: string
}

function FeatureItem({ title }: FeatureItemProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
        <Check className="h-3 w-3 text-primary-foreground" />
      </div>
      <span className="text-sm">{title}</span>
    </div>
  )
}

interface FeatureCheckProps {
  title: string
}

function FeatureCheck({ title }: FeatureCheckProps) {
  return (
    <div className="flex items-center gap-2 bg-accent/50 rounded-md p-2">
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
        <Check className="h-3 w-3 text-primary-foreground" />
      </div>
      <span className="text-xs">{title}</span>
    </div>
  )
}