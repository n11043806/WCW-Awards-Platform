import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Award, Calendar, Clock, Star, TrendingUp, Users, CheckCircle, AlertCircle, ClipboardList } from "lucide-react"

export default function JudgesDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Judge Sarah</h1>
          <p className="text-gray-600 mt-1">Here's your judging overview for the 2026 WCW Awards</p>
        </div>
        <div className="flex items-center space-x-3">
          <Badge variant="outline" className="text-green-700 border-green-200 bg-green-50">
            <CheckCircle className="w-3 h-3 mr-1" />
            Active Judge
          </Badge>
          <Button className="bg-pink-600 hover:bg-pink-700">Start Reviewing</Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Assignments</CardTitle>
            <ClipboardList className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">+3 from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
            <Clock className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">12</div>
            <p className="text-xs text-muted-foreground">Due by March 15th</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">33</div>
            <p className="text-xs text-muted-foreground">73% completion rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <Star className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.4</div>
            <p className="text-xs text-muted-foreground">Out of 10 points</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Assignments */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-pink-600" />
              <span>Recent Assignments</span>
            </CardTitle>
            <CardDescription>Your latest submissions to review</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: "WCW-2026-001",
                  title: "Tech Innovation Leadership",
                  nominee: "Dr. Maria Rodriguez",
                  category: "Technology",
                  deadline: "March 15, 2026",
                  status: "pending",
                  priority: "high",
                },
                {
                  id: "WCW-2026-002",
                  title: "Healthcare Breakthrough",
                  nominee: "Dr. Aisha Patel",
                  category: "Healthcare",
                  deadline: "March 18, 2026",
                  status: "in-progress",
                  priority: "medium",
                },
                {
                  id: "WCW-2026-003",
                  title: "Environmental Sustainability",
                  nominee: "Prof. Lisa Chen",
                  category: "Environment",
                  deadline: "March 20, 2026",
                  status: "pending",
                  priority: "low",
                },
              ].map((assignment) => (
                <div
                  key={assignment.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium text-gray-900">{assignment.title}</h4>
                      <Badge
                        variant={
                          assignment.priority === "high"
                            ? "destructive"
                            : assignment.priority === "medium"
                              ? "default"
                              : "secondary"
                        }
                        className="text-xs"
                      >
                        {assignment.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{assignment.nominee}</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                      <span>#{assignment.id}</span>
                      <span>{assignment.category}</span>
                      <span>Due: {assignment.deadline}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={assignment.status === "pending" ? "outline" : "secondary"}>
                      {assignment.status === "pending" ? "Pending" : "In Progress"}
                    </Badge>
                    <Button size="sm" variant="outline">
                      Review
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Progress & Deadlines */}
        <div className="space-y-6">
          {/* Progress Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Review Progress</CardTitle>
              <CardDescription>Your completion status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Overall Progress</span>
                  <span>73%</span>
                </div>
                <Progress value={73} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>This Week</span>
                  <span>45%</span>
                </div>
                <Progress value={45} className="h-2" />
              </div>

              <div className="pt-2 border-t">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Target: 80% by March 20</span>
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Deadlines */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-orange-500" />
                <span>Upcoming Deadlines</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { date: "Mar 15", count: 5, label: "High Priority" },
                  { date: "Mar 18", count: 3, label: "Medium Priority" },
                  { date: "Mar 20", count: 4, label: "Standard" },
                ].map((deadline) => (
                  <div key={deadline.date} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">{deadline.date}</p>
                      <p className="text-xs text-gray-500">{deadline.label}</p>
                    </div>
                    <Badge variant="outline">{deadline.count} reviews</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full justify-start bg-transparent" variant="outline">
                <Star className="w-4 h-4 mr-2" />
                Start Next Review
              </Button>
              <Button className="w-full justify-start bg-transparent" variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                View Schedule
              </Button>
              <Button className="w-full justify-start bg-transparent" variant="outline">
                <Users className="w-4 h-4 mr-2" />
                Judge Guidelines
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
