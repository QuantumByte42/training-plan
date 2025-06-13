interface WeekOverviewProps {
  week: number
}

export function WeekOverview({ week }: WeekOverviewProps) {
  const weekContent = {
    1: {
      title: "Building Modern Front-Ends with React and Next.js",
      color: "cyan",
      emoji: "⚛️",
      topics: [
        {
          title: "React Fundamentals",
          color: "blue",
          items: [
            "Components (functional approach)",
            "JSX syntax and compilation",
            "Props for data flow",
            "State management with useState",
            "Event handling",
            "useEffect for side effects",
          ],
        },
        {
          title: "Next.js Introduction",
          color: "indigo",
          items: [
            "Setup with create-next-app",
            "File-system routing",
            "Rendering strategies (SSR, SSG, CSR)",
            "Built-in optimizations",
            "API routes capability",
          ],
        },
        {
          title: "UI Development",
          color: "purple",
          items: [
            "Creating reusable components",
            "Styling methods (CSS Modules, Tailwind)",
            "Navigation with Link component",
            "Basic data fetching patterns",
          ],
        },
        {
          title: "Collaborative Task",
          color: "pink",
          items: [
            "Next.js project setup",
            "Component scaffolding",
            "Static UI implementation",
            "Basic styling application",
            "Git repository setup",
          ],
        },
      ],
    },
    2: {
      title: "Developing Robust Back-Ends with Node.js and Express.js",
      color: "green",
      emoji: "🚀",
      topics: [
        {
          title: "Node.js Essentials",
          color: "green",
          items: [
            "Non-blocking I/O and event loop",
            "Module system (CommonJS vs ES Modules)",
            "Asynchronous programming",
            "Built-in modules (http, fs, path)",
          ],
        },
        {
          title: "Express.js Framework",
          color: "emerald",
          items: [
            "Server setup and configuration",
            "Routing and HTTP methods",
            "Middleware functions",
            "Request/Response objects",
            "Error handling strategies",
          ],
        },
        {
          title: "Database Integration",
          color: "teal",
          items: [
            "MongoDB basics and document model",
            "Mongoose ODM setup",
            "Schema and model definition",
            "CRUD operations implementation",
          ],
        },
        {
          title: "Collaborative Task",
          color: "cyan",
          items: [
            "Node.js/Express project setup",
            "MongoDB connection configuration",
            "Task schema/model creation",
            "RESTful API endpoints",
            "API testing with Postman",
          ],
        },
      ],
    },
    3: {
      title: "Full-Stack Integration and Capstone Project",
      color: "purple",
      emoji: "🎯",
      topics: [
        {
          title: "Frontend-Backend Integration",
          color: "purple",
          items: [
            "Making API calls with fetch",
            "Handling responses and errors",
            "State management with API data",
            "CORS configuration",
          ],
        },
        {
          title: "Capstone Project Features",
          color: "violet",
          items: [
            "Read tasks (GET /api/tasks)",
            "Create tasks (POST /api/tasks)",
            "Update tasks (PUT /api/tasks/:id)",
            "Delete tasks (DELETE /api/tasks/:id)",
            "Loading and error states",
          ],
        },
        {
          title: "Testing & Deployment",
          color: "fuchsia",
          items: [
            "Manual testing strategies",
            "Deployment considerations",
            "Vercel for Next.js",
            "Platform options for Node.js",
          ],
        },
        {
          title: "Project Completion",
          color: "pink",
          items: [
            "Full CRUD functionality",
            "UI polishing and consistency",
            "Error handling implementation",
            "Project showcase preparation",
          ],
        },
      ],
    },
  }

  const content = weekContent[week as keyof typeof weekContent]

  return (
    <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
      <div
        className={`bg-gradient-to-r from-${content.color}-50 to-white p-4 rounded-lg border border-${content.color}-200 shadow-sm`}
      >
        <div className="flex items-center">
          <div className="text-2xl mr-3">{content.emoji}</div>
          <h2 className="font-semibold text-lg text-gray-800">{content.title}</h2>
        </div>
      </div>

      {content.topics.map((topic, index) => (
        <div
          key={index}
          className={`bg-gradient-to-r from-${topic.color}-50 to-white p-4 rounded-lg border border-${topic.color}-200 shadow-sm`}
        >
          <div className="flex items-center mb-3">
            <div
              className={`w-8 h-8 bg-gradient-to-br from-${topic.color}-500 to-${topic.color}-600 rounded-full flex items-center justify-center mr-3`}
            >
              <span className="text-white font-bold text-sm">{index + 1}</span>
            </div>
            <h3 className="font-semibold text-gray-800">{topic.title}</h3>
          </div>
          <ul className="text-sm space-y-2">
            {topic.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-center text-gray-700">
                <div className={`w-2 h-2 bg-${topic.color}-500 rounded-full mr-3`}></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
