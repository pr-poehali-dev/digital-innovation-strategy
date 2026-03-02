import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const SCROLL_SPEED = 30 // seconds to complete one loop

export function TestimonialsSection() {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollHeight, setScrollHeight] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      setScrollHeight(containerRef.current.scrollHeight / 2)
    }
  }, [])

  const testimonials = [
    {
      name: "Андрей Соколов",
      role: "Главный гидролог, Северо-Западное управление",
      quote: "Система предупредила нас о паводке за 18 часов — успели заранее сбросить воду. Это спасло урожай на 400 га.",
      rating: 5,
    },
    {
      name: "Татьяна Кравцова",
      role: "Оператор ГТС, Волжский польдер",
      quote: "Раньше ночами вручную проверяли датчики. Теперь система сама всё контролирует и будит только при реальной угрозе.",
      rating: 5,
    },
    {
      name: "Игорь Белов",
      role: "Начальник службы эксплуатации",
      quote: "Отчёты о наработке насосов и аварийных событиях экономят часы ежемесячной работы. Всё автоматически.",
      rating: 5,
    },
    {
      name: "Наталья Громова",
      role: "Инженер-гидротехник",
      quote: "Самодиагностика датчиков — отличная функция. Система сразу сигнализирует об обрыве и переходит на резерв.",
      rating: 4,
    },
    {
      name: "Пётр Захаров",
      role: "Директор мелиоративного предприятия",
      quote: "Внедрили на трёх польдерах — потребление электроэнергии насосных станций снизилось на 22% за счёт умного управления.",
      rating: 5,
    },
    {
      name: "Светлана Миронова",
      role: "Агроном, Приморское хозяйство",
      quote: "Функция контроля пересушивания не менее важна, чем защита от паводков. Наши поля получают воду именно тогда, когда нужно.",
      rating: 5,
    },
    {
      name: "Василий Орлов",
      role: "Технический директор, Агрохолдинг Юг",
      quote: "Интеграция с метеосервисами и прогноз на 72 часа — это именно то, чего не хватало в старых системах SCADA.",
      rating: 5,
    },
    {
      name: "Людмила Фёдорова",
      role: "Руководитель отдела охраны природы",
      quote: "Журнал событий с временными метками упрощает проверки и согласование с регуляторами. Всё прозрачно и документировано.",
      rating: 4,
    },
  ]

  return (
    <section className="container max-w-screen-xl py-20 overflow-hidden">
      <h2 className="text-3xl font-bold mb-12 text-center">Отзывы клиентов</h2>

      <div
        className="relative h-[400px] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={containerRef}
          className="testimonial-scroll"
          style={{
            animationPlayState: isHovered ? "paused" : "running",
            animationDuration: `${SCROLL_SPEED}s`,
            transform: `translateY(-${scrollHeight}px)`,
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} {...testimonial} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i + testimonials.length} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  name: string
  role: string
  quote: string
  rating: number
}

function TestimonialCard({ name, role, quote, rating }: TestimonialCardProps) {
  return (
    <Card className="bg-accent/20 border-border/40 transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <CardContent className="pt-6">
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"}`}
            />
          ))}
        </div>
        <p className="text-sm mb-4 text-muted-foreground">{quote}</p>
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={`https://i.pravatar.cc/32?u=${name}`} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium text-sm">{name}</div>
            <div className="text-xs text-muted-foreground">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}