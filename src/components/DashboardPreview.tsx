import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

export function DashboardPreview() {
  const waterData = [38, 40, 42, 45, 43, 47, 55, 62, 68, 65, 60, 58, 54, 50, 48, 46, 44, 43, 45, 47]

  return (
    <div className="container max-w-screen-xl pb-16">
      <Tabs defaultValue="tab1" className="w-full">
        <div className="border-b border-border/40 pb-2">
          <TabsList className="bg-transparent border-b-0">
            <TabsTrigger
              value="tab1"
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
              Обзор
            </TabsTrigger>
            <TabsTrigger
              value="tab2"
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
              Датчики
            </TabsTrigger>
            <TabsTrigger
              value="tab3"
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
              Оборудование
            </TabsTrigger>
            <TabsTrigger
              value="tab4"
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
              Журнал событий
            </TabsTrigger>
            <TabsTrigger
              value="tab5"
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
              Настройки
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="tab1" className="mt-0 pt-6 border border-border/40 rounded-md bg-card/20">
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatBlock icon="Waves" label="Ср. уровень воды" value="1.42 м" color="text-blue-400" status="Норма" statusColor="green" />
              <StatBlock icon="Wind" label="Насосы активны" value="1 из 3" color="text-cyan-400" status="Рабочий режим" statusColor="green" />
              <StatBlock icon="CloudRain" label="Осадки (прогноз)" value="34 мм" color="text-yellow-400" status="Завтра +2 дня" statusColor="yellow" />
              <StatBlock icon="AlertTriangle" label="Активных тревог" value="1" color="text-red-400" status="Канал Б-2" statusColor="red" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-card/40 border-border/40 col-span-2">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Icon name="TrendingUp" className="h-4 w-4 text-blue-400" />
                    Уровень воды — последние 20 часов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-40 flex items-end gap-1">
                    {waterData.map((h, i) => (
                      <div
                        key={i}
                        className={`w-full rounded-t transition-all ${h >= 65 ? "bg-red-500/60" : h >= 55 ? "bg-yellow-500/60" : "bg-blue-500/40"}`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>20ч назад</span>
                    <span className="text-yellow-400">⚠ Пик 1.68 м (8ч назад)</span>
                    <span>Сейчас</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/40 border-border/40">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Icon name="Bell" className="h-4 w-4 text-red-400" />
                    Активные тревоги
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <AlertRow level="warn" text="Канал Б-2: 1.71 м (порог 1.80 м)" time="09:15" />
                  <AlertRow level="info" text="Прогноз: сильные осадки через 36ч" time="08:00" />
                  <AlertRow level="ok" text="Насос #1 запущен автоматически" time="08:42" />
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tab2" className="mt-0 pt-6 border border-border/40 rounded-md bg-card/20">
          <div className="p-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-muted-foreground border-b border-border/40">
                  <th className="text-left pb-3 font-medium">Датчик</th>
                  <th className="text-left pb-3 font-medium">Расположение</th>
                  <th className="text-left pb-3 font-medium">Значение</th>
                  <th className="text-left pb-3 font-medium">Статус</th>
                  <th className="text-left pb-3 font-medium">Обновлён</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                {[
                  { name: "Уровень воды Д-01", loc: "Канал А-1", val: "1.42 м", status: "norm", time: "2 мин назад" },
                  { name: "Уровень воды Д-02", loc: "Канал Б-2", val: "1.71 м", status: "warn", time: "1 мин назад" },
                  { name: "Расход насоса Н-01", loc: "Насосная ст. №1", val: "0.85 м³/с", status: "norm", time: "1 мин назад" },
                  { name: "Осадки О-01", loc: "Метеостанция", val: "0.3 мм/ч", status: "norm", time: "5 мин назад" },
                  { name: "Давление П-01", loc: "Дамба сев.", val: "0.12 МПа", status: "norm", time: "3 мин назад" },
                  { name: "Уровень Д-03", loc: "Поле №3", val: "1.35 м", status: "norm", time: "2 мин назад" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border/20">
                    <td className="py-3">{row.name}</td>
                    <td className="py-3 text-muted-foreground">{row.loc}</td>
                    <td className="py-3 font-mono">{row.val}</td>
                    <td className="py-3">
                      <Badge variant="outline" className={row.status === "warn" ? "border-yellow-500/50 text-yellow-400" : "border-green-500/50 text-green-400"}>
                        {row.status === "warn" ? "Предупреждение" : "Норма"}
                      </Badge>
                    </td>
                    <td className="py-3 text-muted-foreground text-xs">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="tab3" className="mt-0 pt-6 border border-border/40 rounded-md bg-card/20">
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Насос #1", type: "Основной", status: "on", load: "78%", hours: "1 240 ч" },
              { name: "Насос #2", type: "Резервный", status: "off", load: "0%", hours: "340 ч" },
              { name: "Насос #3", type: "Аварийный", status: "off", load: "0%", hours: "85 ч" },
              { name: "Затвор А", type: "Сбросной", status: "open", load: "100%", hours: "—" },
              { name: "Затвор Б", type: "Регулирующий", status: "partial", load: "45%", hours: "—" },
              { name: "Клапан Д-1", type: "Дренажный", status: "off", load: "0%", hours: "—" },
            ].map((eq, i) => (
              <Card key={i} className="bg-card/40 border-border/40">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Icon name="Settings" className="h-4 w-4" />
                      {eq.name}
                    </span>
                    <Badge variant="outline" className={
                      eq.status === "on" || eq.status === "open" ? "border-green-500/50 text-green-400" :
                      eq.status === "partial" ? "border-yellow-500/50 text-yellow-400" :
                      "border-border text-muted-foreground"
                    }>
                      {eq.status === "on" ? "Работает" : eq.status === "open" ? "Открыт" : eq.status === "partial" ? "Частично" : "Выключен"}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground space-y-1">
                  <div className="flex justify-between"><span>Тип</span><span>{eq.type}</span></div>
                  <div className="flex justify-between"><span>Нагрузка</span><span className="font-mono">{eq.load}</span></div>
                  <div className="flex justify-between"><span>Наработка</span><span className="font-mono">{eq.hours}</span></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tab4" className="mt-0 pt-6 border border-border/40 rounded-md bg-card/20">
          <div className="p-6 space-y-2 font-mono text-xs">
            {[
              { time: "09:15", level: "warn", msg: "Канал Б-2: уровень 1.71 м — достигнут порог предупреждения (1.70 м)" },
              { time: "09:16", level: "info", msg: "Оператор Захаров П.В. уведомлён (SMS + email)" },
              { time: "08:42", level: "ok", msg: "Насос #1 включён автоматически (уровень > 1.60 м)" },
              { time: "08:00", level: "info", msg: "Загружен прогноз осадков: завтра 18 мм, послезавтра 34 мм" },
              { time: "08:01", level: "warn", msg: "Рекомендован предварительный сброс воды (прогноз сильных осадков)" },
              { time: "07:30", level: "ok", msg: "Самодиагностика датчиков: все 6 датчиков в норме" },
              { time: "06:10", level: "ok", msg: "Затвор А полностью открыт — команда оператора" },
              { time: "02:15", level: "info", msg: "Уровень воды нормализовался: 1.42 м (ниже порога предупреждения)" },
            ].map((log, i) => (
              <div key={i} className={`flex gap-3 py-2 border-b border-border/20 ${log.level === "warn" ? "text-yellow-400" : log.level === "ok" ? "text-green-400" : "text-muted-foreground"}`}>
                <span className="shrink-0 text-muted-foreground">[{log.time}]</span>
                <span>{log.msg}</span>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tab5" className="mt-0 pt-6 border border-border/40 rounded-md bg-card/20">
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card/40 border-border/40">
              <CardHeader><CardTitle className="text-sm">Пороговые уровни</CardTitle></CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between items-center"><span className="text-muted-foreground">Порог предупреждения</span><span className="font-mono text-yellow-400">1.70 м</span></div>
                <div className="flex justify-between items-center"><span className="text-muted-foreground">Критический порог</span><span className="font-mono text-red-400">1.90 м</span></div>
                <div className="flex justify-between items-center"><span className="text-muted-foreground">Порог пересушивания</span><span className="font-mono text-orange-400">0.80 м</span></div>
              </CardContent>
            </Card>
            <Card className="bg-card/40 border-border/40">
              <CardHeader><CardTitle className="text-sm">Интервалы опроса</CardTitle></CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between items-center"><span className="text-muted-foreground">Датчики уровня</span><span className="font-mono">1 мин</span></div>
                <div className="flex justify-between items-center"><span className="text-muted-foreground">Метеопрогноз</span><span className="font-mono">6 ч</span></div>
                <div className="flex justify-between items-center"><span className="text-muted-foreground">Самодиагностика</span><span className="font-mono">30 мин</span></div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface StatBlockProps {
  icon: string
  label: string
  value: string
  color: string
  status: string
  statusColor: "green" | "yellow" | "red"
}

function StatBlock({ icon, label, value, color, status, statusColor }: StatBlockProps) {
  const statusClass = statusColor === "green" ? "text-green-400" : statusColor === "yellow" ? "text-yellow-400" : "text-red-400"
  return (
    <Card className="bg-card/40 border-border/40">
      <CardContent className="pt-4">
        <div className="flex items-center gap-2 mb-1">
          <Icon name={icon} className={`h-4 w-4 ${color}`} />
          <span className="text-xs text-muted-foreground">{label}</span>
        </div>
        <div className={`text-2xl font-bold ${color}`}>{value}</div>
        <div className={`text-xs mt-1 ${statusClass}`}>{status}</div>
      </CardContent>
    </Card>
  )
}

interface AlertRowProps {
  level: "warn" | "info" | "ok"
  text: string
  time: string
}

function AlertRow({ level, text, time }: AlertRowProps) {
  const color = level === "warn" ? "text-yellow-400" : level === "ok" ? "text-green-400" : "text-blue-400"
  const icon = level === "warn" ? "AlertTriangle" : level === "ok" ? "CheckCircle" : "Info"
  return (
    <div className="flex items-start gap-2">
      <Icon name={icon} className={`h-3.5 w-3.5 mt-0.5 shrink-0 ${color}`} />
      <div>
        <p className={`text-xs ${color}`}>{text}</p>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
    </div>
  )
}
