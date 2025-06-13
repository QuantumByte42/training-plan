export function Resources() {
  return (
    <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
      <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-200 shadow-sm">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">📚</span>
          </div>
          <h3 className="font-semibold text-gray-800">Official Documentation</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded border border-gray-200">
            <div className="text-sm font-medium text-blue-600 mb-2">Frontend</div>
            <ul className="text-xs space-y-1 text-gray-600">
              <li>• MDN Web Docs</li>
              <li>• React Documentation</li>
              <li>• Next.js Docs</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded border border-gray-200">
            <div className="text-sm font-medium text-green-600 mb-2">Backend</div>
            <ul className="text-xs space-y-1 text-gray-600">
              <li>• Node.js Documentation</li>
              <li>• Express.js Guide</li>
              <li>• MongoDB Docs</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border border-green-200 shadow-sm">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">🎮</span>
          </div>
          <h3 className="font-semibold text-gray-800">Interactive Learning</h3>
        </div>
        <div className="space-y-2">
          <div className="bg-white p-3 rounded border border-gray-200 flex items-center">
            <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
            <div>
              <div className="text-sm font-medium text-gray-800">freeCodeCamp</div>
              <div className="text-xs text-gray-600">Comprehensive web development curriculum</div>
            </div>
          </div>
          <div className="bg-white p-3 rounded border border-gray-200 flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
            <div>
              <div className="text-sm font-medium text-gray-800">Codecademy</div>
              <div className="text-xs text-gray-600">Interactive JavaScript and Node.js courses</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-white p-4 rounded-lg border border-purple-200 shadow-sm">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">🎥</span>
          </div>
          <h3 className="font-semibold text-gray-800">Video Courses</h3>
        </div>
        <div className="space-y-2">
          <div className="bg-white p-3 rounded border border-gray-200">
            <div className="text-sm font-medium text-purple-600">Academind</div>
            <div className="text-xs text-gray-600">React & Next.js Complete Guides</div>
          </div>
          <div className="bg-white p-3 rounded border border-gray-200">
            <div className="text-sm font-medium text-red-600">YouTube</div>
            <div className="text-xs text-gray-600">Project-based tutorials</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-white p-4 rounded-lg border border-orange-200 shadow-sm">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">🚀</span>
          </div>
          <h3 className="font-semibold text-gray-800">Future Learning Paths</h3>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white p-2 rounded border border-gray-200">
            <div className="text-xs font-medium text-orange-600">Advanced Next.js</div>
            <div className="text-xs text-gray-600">ISR, i18n, optimization</div>
          </div>
          <div className="bg-white p-2 rounded border border-gray-200">
            <div className="text-xs font-medium text-blue-600">Testing</div>
            <div className="text-xs text-gray-600">Jest, Cypress, RTL</div>
          </div>
          <div className="bg-white p-2 rounded border border-gray-200">
            <div className="text-xs font-medium text-green-600">DevOps</div>
            <div className="text-xs text-gray-600">Docker, CI/CD</div>
          </div>
          <div className="bg-white p-2 rounded border border-gray-200">
            <div className="text-xs font-medium text-purple-600">State Management</div>
            <div className="text-xs text-gray-600">Redux, Zustand</div>
          </div>
        </div>
      </div>
    </div>
  )
}
