import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Icon from "@/components/ui/icon"

export function NextGenSection() {
  const waterLevels = [42, 45, 43, 47, 55, 62, 68, 65, 60, 58, 54, 50, 48, 46, 44, 43, 45, 47, 46, 44]

  return (
    <section className="container max-w-screen-xl py-20">
      <h2 className="text-3xl font-bold mb-4">Платформа нового поколения</h2>
      <p className="text-muted-foreground max-w-2xl mb-12">
        Полный цикл управления гидрологическим режимом — от сбора данных датчиков до автоматического управления насосами и шлюзами. Всё в одном интерфейсе, доступно с любого устройства.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card className="bg-card/50 border-border/40">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Icon name="Gauge" className="h-4 w-4" /> Уровень воды
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold mb-1">1.42 м</div>
            <div className="text-xs text-green-500 mb-4">▲ В норме (порог: 1.8 м)</div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Канал А-1</span><span className="text-green-400">1.42 м</span>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Канал Б-2</span><span className="text-yellow-400">1.71 м</span>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Поле №3</span><span className="text-green-400">1.35 м</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/40">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Icon name="Settings" className="h-4 w-4" /> Статус оборудования
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <PipelineItem label="Насос #1 (работает)" value={78} />
            <PipelineItem label="Насос #2 (резерв)" value={0} />
            <PipelineItem label="Затвор А (открыт)" value={100} />
            <PipelineItem label="Затвор Б (частично)" value={45} />
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/40">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Icon name="TrendingUp" className="h-4 w-4" /> Тренд уровня (24ч)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 flex items-end gap-1 pb-4">
              {waterLevels.map((h, i) => (
                <div
                  key={i}
                  className={`w-full rounded-t ${h > 60 ? "bg-yellow-500/60" : "bg-blue-500/40"}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="text-xs text-muted-foreground text-center">Пик 68 см — 8 часов назад</div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/40">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Icon name="CloudRain" className="h-4 w-4" /> Прогноз осадков
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Сегодня</span><span>3 мм</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Завтра</span><span className="text-yellow-400">18 мм ⚠</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Послезавтра</span><span className="text-red-400">34 мм ⛈</span></div>
            </div>
            <div className="mt-3 text-xs text-yellow-500">Рекомендован предварительный сброс воды</div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/40">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Icon name="ShieldCheck" className="h-4 w-4" /> Состояние системы
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 flex items-center justify-center">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20" />
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 opacity-20" />
                <div className="absolute inset-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-400 opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm font-bold text-green-400">Норма</div>
                    <div className="text-xs text-muted-foreground">все датчики</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

interface PipelineItemProps {
  label: string
  value: number
}

function PipelineItem({ label, value }: PipelineItemProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <Progress value={value} className="h-2 bg-muted/30" />
    </div>
  )
}