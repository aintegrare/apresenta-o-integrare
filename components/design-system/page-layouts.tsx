export default function PageLayouts() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-3">Layout de Página Inicial</h3>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-[#4b7bb5] text-white p-4">
            <div className="h-8 flex items-center justify-between">
              <div className="w-32 h-6 bg-white bg-opacity-20 rounded"></div>
              <div className="flex space-x-4">
                <div className="w-16 h-4 bg-white bg-opacity-20 rounded"></div>
                <div className="w-16 h-4 bg-white bg-opacity-20 rounded"></div>
                <div className="w-16 h-4 bg-white bg-opacity-20 rounded"></div>
                <div className="w-16 h-4 bg-white bg-opacity-20 rounded"></div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-[#E6EEF7]">
            <div className="max-w-4xl mx-auto">
              <div className="h-64 bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-center">
                <div className="w-3/4 h-8 bg-gray-200 rounded mb-4"></div>
                <div className="w-2/3 h-4 bg-gray-200 rounded mb-2"></div>
                <div className="w-2/3 h-4 bg-gray-200 rounded mb-6"></div>
                <div className="flex space-x-4">
                  <div className="w-32 h-10 bg-[#4b7bb5] rounded"></div>
                  <div className="w-32 h-10 bg-white border border-[#4b7bb5] rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <div className="w-48 h-6 bg-gray-200 rounded mb-6"></div>
              <div className="grid grid-cols-3 gap-6">
                <div className="h-48 bg-gray-100 rounded-lg p-4 flex flex-col">
                  <div className="w-12 h-12 bg-[#4b7bb5] rounded-full mb-4"></div>
                  <div className="w-3/4 h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
                  <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
                  <div className="w-2/3 h-3 bg-gray-200 rounded"></div>
                </div>
                <div className="h-48 bg-gray-100 rounded-lg p-4 flex flex-col">
                  <div className="w-12 h-12 bg-[#4b7bb5] rounded-full mb-4"></div>
                  <div className="w-3/4 h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
                  <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
                  <div className="w-2/3 h-3 bg-gray-200 rounded"></div>
                </div>
                <div className="h-48 bg-gray-100 rounded-lg p-4 flex flex-col">
                  <div className="w-12 h-12 bg-[#4b7bb5] rounded-full mb-4"></div>
                  <div className="w-3/4 h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
                  <div className="w-full h-3 bg-gray-200 rounded mb-1"></div>
                  <div className="w-2/3 h-3 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto flex justify-between">
              <div className="w-32 h-8 bg-gray-300 rounded"></div>
              <div className="flex space-x-8">
                <div className="w-24 h-4 bg-gray-300 rounded"></div>
                <div className="w-24 h-4 bg-gray-300 rounded"></div>
                <div className="w-24 h-4 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Layout de Página Interna</h3>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-[#4b7bb5] text-white p-4">
            <div className="h-8 flex items-center justify-between">
              <div className="w-32 h-6 bg-white bg-opacity-20 rounded"></div>
              <div className="flex space-x-4">
                <div className="w-16 h-4 bg-white bg-opacity-20 rounded"></div>
                <div className="w-16 h-4 bg-white bg-opacity-20 rounded"></div>
                <div className="w-16 h-4 bg-white bg-opacity-20 rounded"></div>
                <div className="w-16 h-4 bg-white bg-opacity-20 rounded"></div>
              </div>
            </div>
          </div>
          <div className="flex min-h-[400px]">
            <div className="w-64 bg-gray-50 p-4 border-r border-gray-200">
              <div className="w-full h-6 bg-gray-200 rounded mb-4"></div>
              <div className="space-y-2">
                <div className="w-full h-8 bg-[#4b7bb5] bg-opacity-10 rounded p-2 flex items-center">
                  <div className="w-3/4 h-3 bg-[#4b7bb5] rounded"></div>
                </div>
                <div className="w-full h-8 rounded p-2 flex items-center">
                  <div className="w-3/4 h-3 bg-gray-300 rounded"></div>
                </div>
                <div className="w-full h-8 rounded p-2 flex items-center">
                  <div className="w-3/4 h-3 bg-gray-300 rounded"></div>
                </div>
                <div className="w-full h-8 rounded p-2 flex items-center">
                  <div className="w-3/4 h-3 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
            <div className="flex-1 p-6">
              <div className="mb-6">
                <div className="w-1/3 h-8 bg-gray-200 rounded mb-4"></div>
                <div className="w-2/3 h-4 bg-gray-200 rounded"></div>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 mb-6">
                <div className="flex justify-between mb-4">
                  <div className="w-1/4 h-6 bg-gray-200 rounded"></div>
                  <div className="w-32 h-8 bg-[#4b7bb5] rounded"></div>
                </div>
                <div className="space-y-4">
                  <div className="w-full h-12 bg-gray-100 rounded"></div>
                  <div className="w-full h-12 bg-gray-100 rounded"></div>
                  <div className="w-full h-12 bg-gray-100 rounded"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="w-1/2 h-5 bg-gray-200 rounded mb-3"></div>
                  <div className="w-full h-32 bg-gray-100 rounded"></div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="w-1/2 h-5 bg-gray-200 rounded mb-3"></div>
                  <div className="w-full h-32 bg-gray-100 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
