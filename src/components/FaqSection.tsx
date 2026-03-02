import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="container max-w-screen-xl py-20">
      <h2 className="text-3xl font-bold mb-12">Частые вопросы</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        <div>
          <p className="text-muted-foreground mb-6">
            Не нашли ответ? Свяжитесь с нашей службой поддержки.
          </p>
          <Accordion type="single" collapsible className="w-full">
            <FaqItem
              question="С какими датчиками работает система?"
              answer="Система совместима с большинством промышленных датчиков уровня воды, расхода, давления и осадков через протоколы Modbus, MQTT и REST API. Поддерживается резервирование датчиков с автоматическим переключением."
            />
            <FaqItem
              question="Что происходит при потере связи с датчиком?"
              answer="Система автоматически фиксирует событие в журнале инцидентов, уведомляет оператора и переключается на резервный датчик (если предусмотрен). При критических зонах активируется защитный режим."
            />
            <FaqItem
              question="Как быстро система реагирует на аварийную ситуацию?"
              answer="Время реакции — менее 30 секунд с момента превышения критического порога до отправки команды насосам и оповещения оператора по SMS и email."
            />
          </Accordion>
        </div>

        <div>
          <Accordion type="single" collapsible className="w-full">
            <FaqItem
              question="Можно ли управлять системой вручную?"
              answer="Да, режим ручного управления позволяет оператору принудительно включать/выключать насосы и задавать положение затворов. Критические действия требуют двойного подтверждения для безопасности."
            />
            <FaqItem
              question="Откуда берётся метеопрогноз?"
              answer="Система интегрируется с внешними метеосервисами и загружает прогнозы осадков, ветра и приливов на горизонт 12–72 часа. На основе этих данных строится гидрологическая модель для упреждающего управления."
            />
            <FaqItem
              question="Какие отчёты формирует система?"
              answer="Автоматически формируются: суточный баланс воды (приход/расход), статистика наработки оборудования (часы работы насосов), журнал аварийных ситуаций и действий оператора с временными метками."
            />
            <FaqItem
              question="Что происходит при отключении питания?"
              answer="Система сохраняет текущее состояние и при восстановлении питания автоматически перезапускается с восстановлением режима работы. Поддерживается подключение к ИБП."
            />
          </Accordion>
        </div>
      </div>
    </section>
  )
}

interface FaqItemProps {
  question: string
  answer: string
}

function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <AccordionItem value={question}>
      <AccordionTrigger className="text-left">{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  )
}