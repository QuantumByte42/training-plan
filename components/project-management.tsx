export function ProjectManagement() {
  return (
    <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
      <div className="bg-gradient-to-r from-indigo-50 to-white p-4 rounded-lg border border-indigo-200 shadow-sm">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">📊</span>
          </div>
          <h3 className="font-semibold text-gray-800">Linear Project Management</h3>
        </div>
        <p className="text-sm text-gray-700">
          Linear is a project management tool designed for modern software teams, emphasizing speed, efficiency, and
          structured workflow.
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-200 shadow-sm">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">⚙️</span>
          </div>
          <h3 className="font-semibold text-gray-800">Setup & Configuration</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded border border-gray-200">
            <div className="text-sm font-medium text-blue-600 mb-1">Workspace</div>
            <div className="text-xs text-gray-600">Training program setup</div>
          </div>
          <div className="bg-white p-3 rounded border border-gray-200">
            <div className="text-sm font-medium text-blue-600 mb-1">Team</div>
            <div className="text-xs text-gray-600">Students + instructors</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border border-green-200 shadow-sm">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">🔄</span>
          </div>
          <h3 className="font-semibold text-gray-800">Issues & Workflows</h3>
        </div>
        <div className="space-y-3">
          <div className="bg-white p-3 rounded border border-gray-200">
            <strong className="text-green-600 text-sm">Issue Best Practices:</strong>
            <ul className="text-xs mt-1 space-y-1 text-gray-600">
              <li>• Clear, action-oriented titles</li>
              <li>• Detailed descriptions with acceptance criteria</li>
              <li>• Proper assignee designation</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded border border-gray-200">
            <strong className="text-orange-600 text-sm">Workflow Statuses:</strong>
            <div className="flex items-center mt-2 space-x-2 text-xs">
              <span className="bg-gray-200 px-2 py-1 rounded">Triage</span>
              <span>→</span>
              <span className="bg-blue-200 px-2 py-1 rounded">Todo</span>
              <span>→</span>
              <span className="bg-yellow-200 px-2 py-1 rounded">In Progress</span>
              <span>→</span>
              <span className="bg-green-200 px-2 py-1 rounded">Done</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-white p-4 rounded-lg border border-purple-200 shadow-sm">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">📈</span>
          </div>
          <h3 className="font-semibold text-gray-800">Cycles & Progress Tracking</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded border border-gray-200">
            <div className="text-sm font-medium text-purple-600 mb-1">Weekly Cycles</div>
            <div className="text-xs text-gray-600">Time-boxed sprints</div>
          </div>
          <div className="bg-white p-3 rounded border border-gray-200">
            <div className="text-sm font-medium text-purple-600 mb-1">Progress Views</div>
            <div className="text-xs text-gray-600">Custom filtering & visualization</div>
          </div>
        </div>
      </div>
    </div>
  )
}
