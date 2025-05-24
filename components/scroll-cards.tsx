"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, BarChart3, Target, Zap, TrendingUp, Shield, ArrowRight, CheckCircle, Smartphone } from "lucide-react"

const investmentSteps = [
  {
    id: 1,
    title: "Connect & Analyze",
    description: "Link your portfolio and let our AI analyze your current positions and risk profile.",
    icon: <Brain className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Strategy Selection",
    description: "Choose from our curated quant strategies or build custom models with our tools.",
    icon: <Target className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 3,
    title: "Backtest & Deploy",
    description: "Test your strategy against historical data and deploy with confidence.",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
  },
]

const quantStrategies = [
  {
    title: "AI/ML Models",
    description: "Neural networks and deep learning for alpha generation",
    icon: <Brain className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
    performance: "+18.2%",
  },
  {
    title: "Statistical Arbitrage",
    description: "Market-neutral strategies exploiting price inefficiencies",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
    performance: "+15.7%",
  },
  {
    title: "Risk Parity",
    description: "Balanced risk allocation across asset classes",
    icon: <Shield className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    performance: "+12.4%",
  },
  {
    title: "Momentum Strategies",
    description: "Trend-following algorithms with dynamic rebalancing",
    icon: <Zap className="w-8 h-8" />,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
    performance: "+21.3%",
  },
]

export default function ScrollCards() {
  const [currentStep, setCurrentStep] = useState(0)
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !cardsRef.current) return

      const sectionRect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = sectionRect.height
      const windowHeight = window.innerHeight

      // Calculate scroll progress within the section
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionRect.top) / (sectionHeight + windowHeight)))

      // Update current step based on scroll progress
      const stepProgress = scrollProgress * (investmentSteps.length + 1)
      setCurrentStep(Math.floor(stepProgress))

      // Update visible cards based on scroll progress
      const cardProgress = scrollProgress * quantStrategies.length
      const newVisibleCards: number[] = []
      for (let i = 0; i < Math.ceil(cardProgress); i++) {
        newVisibleCards.push(i)
      }
      setVisibleCards(newVisibleCards)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-32 px-4 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-12 sticky top-32">
            <div className="space-y-6">
              <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 px-4 py-2">
                <Smartphone className="w-4 h-4 mr-2" />
                Build in a few clicks
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Your perfect quant strategy is just{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  3 easy steps away
                </span>
              </h2>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {investmentSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex items-start space-x-4 transition-all duration-500 ${
                    currentStep >= index ? "opacity-100 translate-x-0" : "opacity-50 translate-x-4"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white flex-shrink-0 transition-transform duration-300 ${
                      currentStep >= index ? "scale-110" : "scale-100"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{step.description}</p>
                  </div>
                  {currentStep > index && (
                    <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 animate-in fade-in duration-300" />
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-6 pt-8">
              <h3 className="text-3xl font-bold text-white">Smart Quant Investing Made Easy</h3>
              <p className="text-xl text-slate-300 leading-relaxed">
                Accelerate your wealth creation with our data-driven, expertly curated quantitative strategies and
                AI-powered portfolio optimization.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-lg px-8 py-6"
              >
                Start Building
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Cards */}
          <div ref={cardsRef} className="relative">
            <div className="space-y-6">
              {quantStrategies.map((strategy, index) => (
                <Card
                  key={index}
                  className={`relative transition-all duration-700 ease-out transform ${
                    visibleCards.includes(index)
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95"
                  } ${strategy.bgColor} border-0 shadow-2xl overflow-hidden`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                    zIndex: quantStrategies.length - index,
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${strategy.color} opacity-10`}></div>
                  <CardContent className="p-8 relative">
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${strategy.color} flex items-center justify-center text-white shadow-lg`}
                      >
                        {strategy.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-slate-800">{strategy.performance}</div>
                        <div className="text-sm text-slate-600">Annual Return</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-slate-800">{strategy.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{strategy.description}</p>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          <span className="text-sm text-slate-600">Active</span>
                        </div>
                        <div className="text-sm text-slate-600">
                          <span className="font-medium">1.2K</span> investors
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-300 text-slate-700 hover:bg-slate-100"
                      >
                        Learn More
                      </Button>
                    </div>

                    {/* Performance Chart Placeholder */}
                    <div className="mt-6 h-16 bg-slate-100 rounded-lg flex items-end justify-center space-x-1 p-2">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className={`bg-gradient-to-t ${strategy.color} rounded-sm opacity-70`}
                          style={{
                            width: "6px",
                            height: `${Math.random() * 80 + 20}%`,
                            animationDelay: `${i * 100}ms`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Phone Mockup */}
            <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 opacity-20">
              <div className="w-48 h-96 bg-slate-700 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-slate-800 rounded-2xl flex items-center justify-center">
                  <div className="text-slate-500">
                    <Smartphone className="w-16 h-16" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}
