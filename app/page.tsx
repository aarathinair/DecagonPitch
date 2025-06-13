"use client"

import { motion } from "framer-motion"
import { PieChart } from "react-minimal-pie-chart"
import {
  Download,
  CheckCircle,
  TrendingUp,
  FileText,
  MessageSquare,
  ArrowRight,
  Monitor,
  Calendar,
  User,
  ChevronRight,
  Shield,
  Clock,
  Target,
  BarChart3,
  Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const fadeUpVariants = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const agents = [
  {
    id: 1,
    icon: <FileText className="w-8 h-8" />,
    color: "bg-blue-500",
    name: "Evidence-Fetcher",
    shortDesc: "Automatically gathers transaction data and supporting evidence",
    detailedDesc:
      "Leverages APIs and data pipelines to collect comprehensive evidence including transaction logs, customer communications, shipping confirmations, and payment processor data. Uses ML to identify the most relevant evidence for each dispute type.",
  },
  {
    id: 2,
    icon: <MessageSquare className="w-8 h-8" />,
    color: "bg-emerald-500",
    name: "Response-Drafter",
    shortDesc: "Crafts compelling dispute responses using collected evidence",
    detailedDesc:
      "Generates persuasive, compliant responses tailored to specific chargeback reason codes. Incorporates card network guidelines and historical win patterns to maximize acceptance rates while maintaining regulatory compliance.",
  },
  {
    id: 3,
    icon: <ArrowRight className="w-8 h-8" />,
    color: "bg-purple-500",
    name: "Evaluator",
    shortDesc: "Decision engine: Auto-submit if confidence ≥ 0.7 & amount < $500",
    detailedDesc:
      "Advanced ML model that assesses dispute winability based on evidence quality, merchant history, and chargeback patterns. Implements configurable thresholds for automatic submission while flagging edge cases for human review.",
  },
  {
    id: 4,
    icon: <Monitor className="w-8 h-8" />,
    color: "bg-orange-500",
    name: "Monitor",
    shortDesc: "Tracks performance metrics and detects model drift",
    detailedDesc:
      "Continuous monitoring system that tracks key performance indicators, identifies model degradation, and triggers retraining when needed. Provides real-time dashboards and alerts for operational teams.",
  },
]

const faqs = [
  {
    question: "How does the system ensure data security and compliance?",
    answer:
      "Our system implements enterprise-grade security with end-to-end encryption, SOC 2 Type II compliance, and PCI DSS certification. All data is processed in secure, isolated environments with comprehensive audit trails and access controls.",
  },
  {
    question: "What happens if the AI makes an incorrect decision?",
    answer:
      "We maintain human oversight for all edge cases and provide a feedback loop system. Incorrect decisions are flagged, reviewed by experts, and used to continuously improve the AI models. Merchants can always override AI decisions when needed.",
  },
  {
    question: "How quickly can we scale beyond the 1k pilot cases?",
    answer:
      "After successful pilot validation (~1000 disputes), most merchants scale to full production within 4–6 weeks. Our plug-and-play Stripe adapter enables < 4 weeks to first value, and our cloud-native architecture supports seamless horizontal scaling. A dedicated APM and FDE team ensures rapid implementation with minimal engineering lift.",
  },
]

const claimsFramework = [
  {
    title: "Coverage & Compliance",
    description: "Ensures responses are complete and legally sound",
    icon: <Shield className="w-6 h-6" />,
    color: "text-blue-600",
  },
  {
    title: "Latency & Load Handling",
    description: "Measures responsiveness and scalability",
    icon: <Clock className="w-6 h-6" />,
    color: "text-green-600",
  },
  {
    title: "Alignment & Accuracy",
    description: "Evaluates content alignment and accuracy",
    icon: <Target className="w-6 h-6" />,
    color: "text-emerald-600",
  },
  {
    title: "Impact",
    description: "Assesses business outcomes and efficiency",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "text-yellow-600",
  },
  {
    title: "Monitoring & Drift",
    description: "Tracks consistency and performance over time",
    icon: <Eye className="w-6 h-6" />,
    color: "text-red-600",
  },
  {
    title: "Security & Safety",
    description: "Validates data protection and safety",
    icon: <Shield className="w-6 h-6" />,
    color: "text-pink-600",
  },
]

function AgentCard({ agent }: { agent: (typeof agents)[0] }) {
  return (
    <Card className="rounded-xl shadow-lg border-slate-200 h-64">
      <CardContent className="p-6 flex flex-col items-center text-center h-full justify-center">
        <div className={`${agent.color} text-white p-4 rounded-xl mb-4`}>{agent.icon}</div>
        <div className="text-sm text-slate-500 mb-2">Agent {agent.id}</div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{agent.name}</h3>
        <p className="text-slate-600 text-sm">{agent.shortDesc}</p>
      </CardContent>
    </Card>
  )
}

export default function HomePage() {
  return (
    <div className="bg-slate-50 text-slate-900 scroll-smooth">
      {/* Hero Section */}
      <motion.section
        {...fadeUpVariants}
        className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 snap-start text-center"
      >
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            Resolve Stripe disputes in <span className="text-purple-500">minutes</span>, not days
          </h1>
          <div className="text-2xl md:text-3xl font-semibold text-slate-600 mb-12">
            Automating chargebacks with Decagon's 4-Agent Stack
          </div>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-purple-500 hover:bg-purple-600 text-white rounded-xl shadow-lg px-8 py-4 text-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PRD
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Problem to Opportunity Section */}
      <motion.section
        {...fadeUpVariants}
        className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 snap-start"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">From Problem to Opportunity</h2>
            <p className="text-xl text-slate-500">Transforming dispute resolution with intelligent automation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Current Pain Points */}
            <Card className="bg-red-50 border-red-200 rounded-xl shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-2xl font-bold text-slate-900">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  Current Pain Points
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 font-medium">Ops Annual Dispute Expenses</span>
                    <span className="text-3xl font-bold text-red-600">~$1.1M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 font-medium">Annual analyst-hours for Dispute Resolution</span>
                    <span className="text-3xl font-bold text-red-600">12.5M+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 font-medium">MTTR impact</span>
                    <span className="text-3xl font-bold text-red-600">2-5 days</span>
                  </div>
                </div>
                <div className="bg-red-100 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center text-red-700 font-medium">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Higher fees & customer churn
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI-Powered Solution */}
            <Card className="bg-emerald-50 border-emerald-200 rounded-xl shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-2xl font-bold text-slate-900">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                  AI-Powered Solution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 font-medium">Evidence + response automation</span>
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 font-medium">Resolution SLA</span>
                    <span className="text-3xl font-bold text-emerald-600">&lt; 60 min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 font-medium">Monthly time savings</span>
                    <span className="text-3xl font-bold text-emerald-600">3.5 FTE</span>
                  </div>
                </div>
                <div className="bg-emerald-100 border border-emerald-200 rounded-lg p-4">
                  <div className="text-emerald-700 font-medium">Analyst hours saved per month</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* North Star Metric Section */}
      <motion.section
        {...fadeUpVariants}
        className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 snap-start"
      >
        <div className="max-w-4xl mx-auto w-full">
          <Card className="rounded-xl shadow-lg bg-white border-slate-200">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">North-Star Metric</h2>
                <p className="text-xl text-slate-500">Our primary success indicator</p>
              </div>

              {/* Donut Chart */}
              <div className="flex flex-col items-center mb-16">
                <div className="relative w-64 h-64 mb-8">
                  <PieChart
                    data={[
                      { title: "Automated", value: 75, color: "#7c6bff" },
                      { title: "Manual", value: 25, color: "#e2e8f0" },
                    ]}
                    lineWidth={20}
                    paddingAngle={2}
                    rounded
                    animate
                    animationDuration={1500}
                    startAngle={-90}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-5xl font-bold text-purple-500 mb-1">75%</div>
                    <div className="text-sm text-slate-500 font-medium">EAR Target</div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Effective Automation Rate</h3>
                  <p className="text-slate-500">Percentage of disputes resolved without human intervention</p>
                </div>
              </div>

              {/* Guardrails */}
              <div className="border-t border-slate-200 pt-12">
                <h3 className="text-2xl font-bold text-center mb-8">Guardrails & Quality Gates</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-500 mb-2">&lt; 60 min</div>
                    <div className="text-slate-500 font-medium">MTTR</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-500 mb-2">&gt; 85%</div>
                    <div className="text-slate-500 font-medium">Win Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-500 mb-2">&lt; 2%</div>
                    <div className="text-slate-500 font-medium">False Positives</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* 4-Agent Stack Section */}
      <motion.section
        {...fadeUpVariants}
        className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 snap-start"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">4-Agent Stack</h2>
            <p className="text-xl text-slate-500">Specialized AI agents working in harmony to resolve disputes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Comparison Section */}
      <motion.section
        {...fadeUpVariants}
        className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 snap-start"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Process Transformation</h2>
            <p className="text-xl text-slate-500">From manual workflows to intelligent automation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="rounded-xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Current Manual Process</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/images/manual-process.png"
                  alt="Customer Dispute Resolution Process - Manual workflow with 9 sequential steps"
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-1xl font-bold text-center">With Decagon AI Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src="/images/ai-process.png"
                  alt="Payment Dispute Management - AI-powered automation with 4-agent orchestration"
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Impact Metrics Section */}
      <motion.section
        {...fadeUpVariants}
        className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 snap-start"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Impact Metrics</h2>
            <p className="text-xl text-slate-500">Measurable improvements from AI automation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-xl shadow-lg text-center p-8">
              <CardContent className="p-0">
                <div className="text-6xl font-bold text-purple-500 mb-4">75%</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Effective Automation Rate</h3>
                <p className="text-slate-500">Disputes resolved without human intervention</p>
                <div className="w-full h-1 bg-purple-500 rounded-full mt-6"></div>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-lg text-center p-8">
              <CardContent className="p-0">
                <div className="text-6xl font-bold text-blue-500 mb-4">&lt; 60 min</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Mean Time to Resolution</h3>
                <p className="text-slate-500">Average time from dispute to resolution</p>
                <div className="w-full h-1 bg-blue-500 rounded-full mt-6"></div>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-lg text-center p-8">
              <CardContent className="p-0">
                <div className="text-6xl font-bold text-emerald-500 mb-4">95%</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Cost Reduction</h3>
                <p className="text-slate-500">Operational cost savings vs manual process</p>
                <div className="w-full h-1 bg-emerald-500 rounded-full mt-6"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* AI System Evaluation Section */}
      <motion.section
        {...fadeUpVariants}
        className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 snap-start"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">AI System Evaluation</h2>
            <p className="text-xl text-slate-500">Comprehensive assessment using the CLAIMS™ framework</p>
          </div>

          {/* Main CLAIMS Framework Image */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
              <img
                src="/images/claims-evaluation.png"
                alt="AI System Evaluation - CLAIMS™ Framework showing 6 interconnected evaluation criteria"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Framework Components Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {claimsFramework.map((component, index) => (
              <Card key={index} className="rounded-xl shadow-lg border-slate-200 hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`${component.color} mr-3`}>{component.icon}</div>
                    <h3 className="text-lg font-bold text-slate-900">{component.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{component.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Implementation Roadmap Section */}
      <motion.section
        {...fadeUpVariants}
        className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 snap-start"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-purple-500 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold">Implementation Roadmap</h2>
            </div>
            <p className="text-xl text-slate-500">Four-phase approach to full automation</p>
          </div>

          {/* Main Roadmap Image */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl w-full">
              <img
                src="/images/roadmap.png"
                alt="Dispute Automation Roadmap - 4-phase implementation plan"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Key Milestones */}
          <div className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-slate-900">Key Milestones & Success Metrics</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">50% → 75%</div>
                <div className="text-slate-600 font-medium">EAR Progression</div>
                <div className="text-sm text-slate-500 mt-1">Effective Automation Rate growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4hrs → 60min</div>
                <div className="text-slate-600 font-medium">MTTR Improvement</div>
                <div className="text-sm text-slate-500 mt-1">Mean Time to Resolution</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">16 weeks</div>
                <div className="text-slate-600 font-medium">Total Timeline</div>
                <div className="text-sm text-slate-500 mt-1">From discovery to full rollout</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        {...fadeUpVariants}
        className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 snap-start"
      >
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-500">Common questions about implementation and security</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="rounded-xl shadow-lg border-slate-200">
                <Accordion type="single" collapsible>
                  <AccordionItem value={`faq-${index}`} className="border-none">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
                      <div className="flex items-center justify-between w-full">
                        <span className="font-semibold text-slate-900">{faq.question}</span>
                        <ChevronRight className="w-5 h-5 text-slate-400" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        {...fadeUpVariants}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-slate-100 snap-start"
      >
        <div className="text-center px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Dispute Resolution?</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Get access to the detailed PRD, implementation guide, and connect with the team behind this solution.
          </p>

          {/* Email Address */}
          <div className="mb-12">
            <p className="text-lg text-slate-700 font-medium">Contact me directly:</p>
            <p className="text-xl text-purple-600 font-semibold">nairaarathi22@gmail.com</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <FileText className="w-8 h-8 text-purple-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">View Detailed PRD</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Complete product requirements and technical specifications
                </p>
                <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-lg">
                  <FileText className="w-4 h-4 mr-2" />
                  View PRD
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <User className="w-8 h-8 text-purple-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">My Resume</h3>
                <p className="text-sm text-slate-600 mb-4">Learn more about Aarathi Nair's background and experience</p>
                <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50 rounded-lg">
                  <User className="w-4 h-4 mr-2" />
                  View Resume
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Monitor className="w-8 h-8 text-purple-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">My Portfolio</h3>
                <p className="text-sm text-slate-600 mb-4">Explore other projects and case studies</p>
                <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50 rounded-lg">
                  <Monitor className="w-4 h-4 mr-2" />
                  View Portfolio
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <p className="text-slate-500 mb-4">Built by Aarathi Nair for Decagon</p>
            <p className="text-sm text-slate-400">© 2024 All rights reserved</p>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
