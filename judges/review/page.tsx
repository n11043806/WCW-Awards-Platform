"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  Download,
  ExternalLink,
  Clock,
  User,
  Building,
  MapPin,
  Award,
  ChevronLeft,
  ChevronRight,
  Save,
} from "lucide-react"

export default function ReviewPage() {
  const [currentScore, setCurrentScore] = useState([8])
  const [comments, setComments] = useState("")

  const submission = {
    id: "WCW-2026-001",
    title: "Revolutionary AI Healthcare Platform",
    nominee: "Dr. Maria Rodriguez",
    category: "Technology Innovation",
    organization: "MedTech Solutions Inc.",
    location: "San Francisco, CA",
    submittedDate: "February 15, 2026",
    deadline: "March 15, 2026",
    priority: "high",
    description:
      "Dr. Rodriguez has developed an AI-powered healthcare platform that has revolutionized patient diagnosis and treatment planning, reducing diagnostic errors by 40% and improving patient outcomes across 200+ hospitals worldwide.",
    achievements: [
      "Led development of AI diagnostic tool used by 200+ hospitals",
      "Reduced diagnostic errors by 40% in clinical trials",
      "Published 15 peer-reviewed papers on AI in healthcare",
      "Recipient of the National Science Foundation Award 2025",
    ],
    documents: [
      { name: "Nomination Letter.pdf", size: "2.3 MB" },
      { name: "CV_Maria_Rodriguez.pdf", size: "1.8 MB" },
      { name: "Research_Publications.pdf", size: "5.2 MB" },
      { name: "Impact_Report.pdf", size: "3.1 MB" },
    ],
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Queue
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Review Submission</h1>
            <p className="text-gray-600">
              #{submission.id} • Due {submission.deadline}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant={submission.priority === "high" ? "destructive" : "default"}>
            {submission.priority} priority
          </Badge>
          <Button variant="outline" size="sm">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="text-sm text-gray-500">1 of 12</span>
          <Button variant="outline" size="sm">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Submission Details */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{submission.title}</CardTitle>
                  <CardDescription className="mt-2">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{submission.nominee}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Building className="w-4 h-4" />
                        <span>{submission.organization}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{submission.location}</span>
                      </div>
                    </div>
                  </CardDescription>
                </div>
                <Badge variant="secondary">{submission.category}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="achievements">Achievements</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-4">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed">{submission.description}</p>
                  </div>
                </TabsContent>

                <TabsContent value="achievements" className="mt-4">
                  <ul className="space-y-3">
                    {submission.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Award className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>

                <TabsContent value="documents" className="mt-4">
                  <div className="space-y-3">
                    {submission.documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                            <span className="text-xs font-medium text-red-700">PDF</span>
                          </div>
                          <div>
                            <p className="font-medium text-sm">{doc.name}</p>
                            <p className="text-xs text-gray-500">{doc.size}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="outline">
                            <Download className="w-3 h-3 mr-1" />
                            Download
                          </Button>
                          <Button size="sm" variant="outline">
                            <ExternalLink className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Scoring Panel */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>Score Submission</span>
              </CardTitle>
              <CardDescription>Rate this submission out of 10</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-base font-medium">Overall Score</Label>
                <div className="mt-3">
                  <Slider
                    value={currentScore}
                    onValueChange={setCurrentScore}
                    max={10}
                    min={1}
                    step={0.5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1</span>
                    <span className="font-medium text-lg text-gray-900">{currentScore[0]}</span>
                    <span>10</span>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="comments" className="text-base font-medium">
                  Comments & Feedback
                </Label>
                <Textarea
                  id="comments"
                  placeholder="Provide detailed feedback on this submission..."
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="mt-2 min-h-[120px]"
                />
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-pink-600 hover:bg-pink-700">
                  <Save className="w-4 h-4 mr-2" />
                  Submit Review
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Save as Draft
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Review Guidelines */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Review Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <h4 className="font-medium text-gray-900">Scoring Criteria:</h4>
                <ul className="mt-1 space-y-1 text-gray-600">
                  <li>• Innovation & Impact (40%)</li>
                  <li>• Leadership & Vision (30%)</li>
                  <li>• Results & Outcomes (20%)</li>
                  <li>• Sustainability (10%)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Score Range:</h4>
                <ul className="mt-1 space-y-1 text-gray-600">
                  <li>• 9-10: Exceptional</li>
                  <li>• 7-8: Strong</li>
                  <li>• 5-6: Good</li>
                  <li>• 1-4: Needs Improvement</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Submission Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Submission Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Submitted:</span>
                <span className="font-medium">{submission.submittedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Review Due:</span>
                <span className="font-medium text-orange-600">{submission.deadline}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time Remaining:</span>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-orange-500" />
                  <span className="font-medium text-orange-600">3 days</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
