export function Fundamentals() {
  return (
    <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
      <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border border-blue-200 shadow-sm">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">🌐</span>
          </div>
          <h3 className="font-semibold text-gray-800">Client-Server Model</h3>
        </div>
        <p className="text-sm mb-3 text-gray-700">
          At its core, the internet operates on a client-server model where clients request resources/services from
          servers following a request-response pattern.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded border border-gray-200">
            <strong className="text-blue-600 text-sm">Client-side:</strong>
            <ul className="text-xs mt-1 space-y-1 text-gray-600">
              <li>• UI/UX design</li>
              <li>• User interactions</li>
              <li>• Visual elements</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded border border-gray-200">
            <strong className="text-green-600 text-sm">Server-side:</strong>
            <ul className="text-xs mt-1 space-y-1 text-gray-600">
              <li>• Business logic</li>
              <li>• Data management</li>
              <li>• Authentication</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-white p-4 rounded-lg border border-green-200 shadow-sm">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">📡</span>
          </div>
          <h3 className="font-semibold text-gray-800">HTTP/HTTPS Protocols</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded border border-gray-200">
            <strong className="text-green-600 text-sm">HTTP Methods:</strong>
            <ul className="text-xs mt-1 space-y-1 text-gray-600">
              <li>• GET - Retrieve resources</li>
              <li>• POST - Submit/create data</li>
              <li>• PUT - Update resources</li>
              <li>• DELETE - Remove resources</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded border border-gray-200">
            <strong className="text-orange-600 text-sm">Status Codes:</strong>
            <ul className="text-xs mt-1 space-y-1 text-gray-600">
              <li>• 200 OK, 201 Created</li>
              <li>• 400 Bad Request</li>
              <li>• 404 Not Found</li>
              <li>• 500 Server Error</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-white p-4 rounded-lg border border-purple-200 shadow-sm">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">🔗</span>
          </div>
          <h3 className="font-semibold text-gray-800">RESTful APIs</h3>
        </div>
        <p className="text-sm mb-3 text-gray-700">
          REST (Representational State Transfer) is an architectural style for designing scalable web services.
        </p>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white p-2 rounded border border-gray-200">
            <div className="text-xs font-medium text-purple-600">Uniform Interface</div>
            <div className="text-xs text-gray-600">Consistent resource interaction</div>
          </div>
          <div className="bg-white p-2 rounded border border-gray-200">
            <div className="text-xs font-medium text-purple-600">Statelessness</div>
            <div className="text-xs text-gray-600">Self-contained requests</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-white p-4 rounded-lg border border-orange-200 shadow-sm">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">💻</span>
          </div>
          <h3 className="font-semibold text-gray-800">Core Web Languages</h3>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white p-3 rounded border border-gray-200 text-center">
            <div className="text-lg mb-1">🏗️</div>
            <strong className="text-orange-600 text-sm">HTML</strong>
            <p className="text-xs text-gray-600 mt-1">Structure & content</p>
          </div>
          <div className="bg-white p-3 rounded border border-gray-200 text-center">
            <div className="text-lg mb-1">🎨</div>
            <strong className="text-blue-600 text-sm">CSS</strong>
            <p className="text-xs text-gray-600 mt-1">Styling & layout</p>
          </div>
          <div className="bg-white p-3 rounded border border-gray-200 text-center">
            <div className="text-lg mb-1">⚡</div>
            <strong className="text-yellow-600 text-sm">JavaScript</strong>
            <p className="text-xs text-gray-600 mt-1">Interactivity</p>
          </div>
        </div>
      </div>
    </div>
  )
}
