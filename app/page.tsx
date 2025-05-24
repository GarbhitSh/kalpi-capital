"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  Brain,
  BarChart3,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  Play,
  CheckCircle,
  Target,
  Cpu,
  Database,
  LineChart,
  PieChart,
  Activity,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import ScrollCards from "@/components/scroll-cards"

export default function KalpiCapitalLanding() {
  const [currentText, setCurrentText] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const animatedTexts = [
    "Systematic Quant Investing",
    "AI/ML Portfolio Management",
    "Data-Driven Strategies",
    "Statistical Arbitrage",
    "Alpha Generation",
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % animatedTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI/ML Models",
      description: "Advanced machine learning algorithms for portfolio optimization and risk management",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Backtesting Engine",
      description: "Comprehensive historical testing with real market data and transaction costs",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Execution",
      description: "Lightning-fast order execution across multiple asset classes and exchanges",
      color: "from-teal-500 to-cyan-600",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Management",
      description: "Sophisticated risk controls and portfolio monitoring systems",
      color: "from-emerald-600 to-green-700",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Markets",
      description: "Access to equities, crypto, and international markets worldwide",
      color: "from-green-600 to-teal-700",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Alpha Generation",
      description: "Proprietary algorithms designed to identify and capture market inefficiencies",
      color: "from-teal-600 to-emerald-700",
    },
  ]

  const stats = [
    { value: "500M+", label: "Assets Under Management", icon: <Database className="w-6 h-6" /> },
    { value: "15.2%", label: "Average Annual Return", icon: <TrendingUp className="w-6 h-6" /> },
    { value: "0.8", label: "Sharpe Ratio", icon: <LineChart className="w-6 h-6" /> },
    { value: "50+", label: "Active Strategies", icon: <PieChart className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
      {/* Floating Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
        <div className="bg-slate-900/95 backdrop-blur-lg rounded-2xl px-6 py-3 shadow-2xl border border-slate-800/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl">Kalpi Capital</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#platform" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Platform
              </Link>
              <Link href="#strategies" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Strategies
              </Link>
              <Link href="#research" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Research
              </Link>
              <Link href="#pricing" className="text-slate-300 hover:text-emerald-400 transition-colors">
                Pricing
              </Link>
              <Button
                variant="outline"
                size="sm"
                className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white"
              >
                Log in
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
              >
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 px-4 py-2">
                <Cpu className="w-4 h-4 mr-2" />
                AI-Enabled Quant Platform
              </Badge>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Democratize{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 block min-h-[1.2em]">
                    {animatedTexts[currentText]}
                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                  Create, backtest and deploy Quant AI/ML portfolios with Kalpi. Harness the power of data-driven
                  investments and systematic strategies across global markets.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-lg px-8 py-6"
                >
                  Start Building
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-6"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="text-emerald-600">{stat.icon}</div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 rounded-3xl blur-3xl"></div>
                <Card className="relative bg-white/80 backdrop-blur-lg border-0 shadow-2xl rounded-3xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-emerald-100 text-emerald-800">Live Portfolio</Badge>
                        <div className="flex items-center space-x-2 text-emerald-600">
                          <Activity className="w-4 h-4" />
                          <span className="text-sm font-medium">+12.4% Today</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4">
                          <div className="text-2xl font-bold text-slate-900">$2.4M</div>
                          <div className="text-sm text-slate-600">Portfolio Value</div>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4">
                          <div className="text-2xl font-bold text-slate-900">1.8</div>
                          <div className="text-sm text-slate-600">Sharpe Ratio</div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-600">AI Strategy Alpha</span>
                          <span className="text-sm font-medium text-emerald-600">+8.2%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2 rounded-full w-4/5"></div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-emerald-50 rounded-lg p-3">
                          <div className="text-lg font-bold text-emerald-600">15</div>
                          <div className="text-xs text-slate-600">Active Models</div>
                        </div>
                        <div className="bg-teal-50 rounded-lg p-3">
                          <div className="text-lg font-bold text-teal-600">98.2%</div>
                          <div className="text-xs text-slate-600">Uptime</div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3">
                          <div className="text-lg font-bold text-green-600">2.1ms</div>
                          <div className="text-xs text-slate-600">Latency</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Hub Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 px-4 py-2 mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              Integrated Ecosystem
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Your Complete{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Quant Trading Hub
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Kalpi seamlessly connects all aspects of quantitative investing into one powerful, integrated platform.
            </p>
          </div>

          <div className="relative flex items-center justify-center min-h-[600px]">
            {/* Central Hub */}
            <div className="relative z-10">
              <div className="w-48 h-48 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <div className="text-center text-white">
                  <Sparkles className="w-12 h-12 mx-auto mb-2" />
                  <div className="text-2xl font-bold">Kalpi</div>
                  <div className="text-sm opacity-90">Capital</div>
                </div>
              </div>

              {/* Orbital rings */}
              <div
                className="absolute inset-0 border-2 border-emerald-200/30 rounded-full animate-spin"
                style={{ animationDuration: "20s" }}
              ></div>
              <div
                className="absolute inset-[-50px] border border-emerald-200/20 rounded-full animate-spin"
                style={{ animationDuration: "30s", animationDirection: "reverse" }}
              ></div>
              <div
                className="absolute inset-[-100px] border border-emerald-200/10 rounded-full animate-spin"
                style={{ animationDuration: "40s" }}
              ></div>
            </div>

            {/* Floating Elements */}

            {/* Data Sources - Left Side */}
            <div
              className="absolute left-0 top-1/2 transform -translate-y-1/2 space-y-6 animate-float"
              style={{ animationDelay: "0s" }}
            >
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-lg rounded-full px-4 py-3 shadow-lg border border-slate-200/50">
                <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-slate-700">Market Data</span>
              </div>

              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-lg rounded-full px-4 py-3 shadow-lg border border-slate-200/50 ml-8">
                <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-slate-700">Global Exchanges</span>
              </div>

              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-lg rounded-full px-4 py-3 shadow-lg border border-slate-200/50">
                <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-slate-700">Real-time Feeds</span>
              </div>
            </div>

            {/* AI/ML Models - Top Right */}
            <div className="absolute right-8 top-8 space-y-4 animate-float" style={{ animationDelay: "1s" }}>
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Neural Networks
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg ml-6">
                Deep Learning
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Reinforcement Learning
              </div>
            </div>

            {/* Trading Strategies - Right Side */}
            <div
              className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-6 animate-float"
              style={{ animationDelay: "2s" }}
            >
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-lg rounded-full px-4 py-3 shadow-lg border border-emerald-200/50">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-slate-700">Momentum Strategies</span>
              </div>

              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-lg rounded-full px-4 py-3 shadow-lg border border-emerald-200/50 mr-8">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-slate-700">Mean Reversion</span>
              </div>

              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-lg rounded-full px-4 py-3 shadow-lg border border-emerald-200/50">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-slate-700">Statistical Arbitrage</span>
              </div>
            </div>

            {/* Risk Management - Bottom Right */}
            <div className="absolute right-8 bottom-8 space-y-4 animate-float" style={{ animationDelay: "3s" }}>
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Risk Controls
              </div>
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg ml-6">
                Portfolio Monitoring
              </div>
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Stress Testing
              </div>
            </div>

            {/* Execution - Bottom Left */}
            <div className="absolute left-8 bottom-8 space-y-4 animate-float" style={{ animationDelay: "4s" }}>
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Order Management
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg ml-6">
                Smart Routing
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Low Latency
              </div>
            </div>

            {/* Analytics - Top Left */}
            <div className="absolute left-8 top-8 space-y-4 animate-float" style={{ animationDelay: "5s" }}>
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Performance Analytics
              </div>
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg ml-6">
                Attribution Analysis
              </div>
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Backtesting Engine
              </div>
            </div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#10b981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Animated connecting lines */}
              <line
                x1="50%"
                y1="50%"
                x2="10%"
                y2="50%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                className="animate-pulse"
              />
              <line
                x1="50%"
                y1="50%"
                x2="90%"
                y2="50%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                className="animate-pulse"
                style={{ animationDelay: "1s" }}
              />
              <line
                x1="50%"
                y1="50%"
                x2="20%"
                y2="20%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                className="animate-pulse"
                style={{ animationDelay: "2s" }}
              />
              <line
                x1="50%"
                y1="50%"
                x2="80%"
                y2="20%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                className="animate-pulse"
                style={{ animationDelay: "3s" }}
              />
              <line
                x1="50%"
                y1="50%"
                x2="20%"
                y2="80%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                className="animate-pulse"
                style={{ animationDelay: "4s" }}
              />
              <line
                x1="50%"
                y1="50%"
                x2="80%"
                y2="80%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                className="animate-pulse"
                style={{ animationDelay: "5s" }}
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Scroll Cards Section */}
      <ScrollCards />

      {/* Research & Insights Section */}
      <section className="py-32 px-4 bg-gradient-to-br from-slate-50 to-emerald-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 px-4 py-2 mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Research & Insights
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Market Intelligence{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Powered by AI
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Get actionable insights from our proprietary research engine that analyzes millions of data points to
              identify market opportunities and risks in real-time.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Real-time Market Analysis</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Our AI continuously monitors global markets, news sentiment, and economic indicators to provide
                      instant analysis of market movements and their implications for your portfolio.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Predictive Modeling</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Advanced machine learning models predict market trends, identify emerging opportunities, and
                      forecast potential risks before they impact your investments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Research Reports</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Access comprehensive research reports combining quantitative analysis with expert insights from
                      our team of seasoned financial analysts and market researchers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-slate-900">Today's Market Pulse</h4>
                  <Badge className="bg-emerald-500 text-white">Live</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">+2.4%</div>
                    <div className="text-sm text-slate-600">Market Sentiment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600">87</div>
                    <div className="text-sm text-slate-600">Opportunities Found</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Dashboard */}
            <div className="relative">
              <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-0">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">Research Dashboard</h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span className="text-sm text-slate-300">Live Data</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-emerald-400">1,247</div>
                        <div className="text-xs text-slate-400">Stocks Analyzed</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-teal-400">94.2%</div>
                        <div className="text-xs text-slate-400">Accuracy Rate</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-400">$2.1B</div>
                        <div className="text-xs text-slate-400">Assets Tracked</div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-6">
                    {/* Top Picks */}
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-4">AI Top Picks</h4>
                      <div className="space-y-3">
                        {[
                          { symbol: "AAPL", name: "Apple Inc.", change: "+2.4%", score: "95", trend: "up" },
                          { symbol: "MSFT", name: "Microsoft Corp.", change: "+1.8%", score: "92", trend: "up" },
                          { symbol: "GOOGL", name: "Alphabet Inc.", change: "+3.1%", score: "89", trend: "up" },
                        ].map((stock, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                {stock.symbol.slice(0, 2)}
                              </div>
                              <div>
                                <div className="font-medium text-slate-900">{stock.symbol}</div>
                                <div className="text-sm text-slate-600">{stock.name}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-emerald-600 font-medium">{stock.change}</div>
                              <div className="text-xs text-slate-500">Score: {stock.score}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Market Signals */}
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-4">Market Signals</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-emerald-50 p-3 rounded-lg text-center">
                          <div className="text-emerald-600 font-bold">BUY</div>
                          <div className="text-sm text-slate-600">Tech Sector</div>
                        </div>
                        <div className="bg-yellow-50 p-3 rounded-lg text-center">
                          <div className="text-yellow-600 font-bold">HOLD</div>
                          <div className="text-sm text-slate-600">Energy</div>
                        </div>
                        <div className="bg-teal-50 p-3 rounded-lg text-center">
                          <div className="text-teal-600 font-bold">BUY</div>
                          <div className="text-sm text-slate-600">Healthcare</div>
                        </div>
                        <div className="bg-red-50 p-3 rounded-lg text-center">
                          <div className="text-red-600 font-bold">SELL</div>
                          <div className="text-sm text-slate-600">Utilities</div>
                        </div>
                      </div>
                    </div>

                    {/* Performance Chart */}
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-4">Portfolio Performance</h4>
                      <div className="h-24 bg-slate-100 rounded-lg flex items-end justify-center space-x-1 p-2">
                        {[...Array(20)].map((_, i) => (
                          <div
                            key={i}
                            className="bg-gradient-to-t from-emerald-500 to-teal-600 rounded-sm opacity-80"
                            style={{
                              width: "8px",
                              height: `${Math.random() * 80 + 20}%`,
                              animationDelay: `${i * 50}ms`,
                            }}
                          ></div>
                        ))}
                      </div>
                      <div className="flex justify-between text-xs text-slate-500 mt-2">
                        <span>1M</span>
                        <span>3M</span>
                        <span>6M</span>
                        <span>1Y</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
                <Brain className="w-8 h-8" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse">
                <Zap className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-20 grid md:grid-cols-4 gap-8">
            {[
              { value: "50M+", label: "Data Points Analyzed Daily", icon: <Database className="w-6 h-6" /> },
              { value: "99.9%", label: "System Uptime", icon: <Activity className="w-6 h-6" /> },
              { value: "15ms", label: "Average Response Time", icon: <Zap className="w-6 h-6" /> },
              { value: "24/7", label: "Market Monitoring", icon: <Globe className="w-6 h-6" /> },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section with Overlap Animation */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-600/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 px-4 py-2 mb-6">
              Platform Features
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Your Modern{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Quant Intelligence Hub
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Kalpi effortlessly transforms your investment ideas into systematic, data-driven strategies with
              cutting-edge AI/ML capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`group relative bg-white/80 backdrop-blur-lg border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <CardContent className="p-8 relative">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  <div className="mt-6 flex items-center text-emerald-600 group-hover:text-emerald-700 transition-colors">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 px-4 py-2 mb-6">Get Started Today</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Ready to Transform Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Investment Strategy?
            </span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Join leading institutions and quantitative researchers who trust Kalpi Capital for systematic investing
            excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-lg px-8 py-6"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-6"
            >
              Schedule Demo
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm text-slate-600">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
              No setup fees
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
              14-day free trial
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
              Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl">Kalpi Capital</span>
              </div>
              <p className="text-slate-400">
                Democratizing systematic quantitative investing through cutting-edge AI/ML technology.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <div className="space-y-2 text-slate-400">
                <div>Backtesting</div>
                <div>Live Trading</div>
                <div>Risk Management</div>
                <div>Analytics</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2 text-slate-400">
                <div>Documentation</div>
                <div>API Reference</div>
                <div>Research Papers</div>
                <div>Community</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-slate-400">
                <div>About Us</div>
                <div>Careers</div>
                <div>Contact</div>
                <div>Privacy Policy</div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Kalpi Capital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
