
export default function TabTest(){
    return (
        <>
        <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
                <button type="button" className="hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 dark:hs-tab-active:bg-gray-800 dark:hs-tab-active:border-b-gray-800 dark:hs-tab-active:text-white -mb-px py-3 px-4 inline-flex items-center gap-x-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-t-lg hover:text-gray-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 active" id="card-type-tab-item-1" data-hs-tab="#card-type-tab-1" aria-controls="card-type-tab-1" role="tab">
                Tab 1
                </button>
                <button type="button" className="hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 dark:hs-tab-active:bg-gray-800 dark:hs-tab-active:border-b-gray-800 dark:hs-tab-active:text-white -mb-px py-3 px-4 inline-flex items-center gap-x-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-t-lg hover:text-gray-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" id="card-type-tab-item-2" data-hs-tab="#card-type-tab-2" aria-controls="card-type-tab-2" role="tab">
                Tab 2
                </button>
                <button type="button" className="hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-blue-600 dark:hs-tab-active:bg-gray-800 dark:hs-tab-active:border-b-gray-800 dark:hs-tab-active:text-white -mb-px py-3 px-4 inline-flex items-center gap-x-2 bg-gray-50 text-sm font-medium text-center border text-gray-500 rounded-t-lg hover:text-gray-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" id="card-type-tab-item-3" data-hs-tab="#card-type-tab-3" aria-controls="card-type-tab-3" role="tab">
                Tab 3
                </button>
            </nav>
            </div>

            <div className="mt-3">
            <div id="card-type-tab-1" role="tabpanel" aria-labelledby="card-type-tab-item-1">
                <p className="text-gray-500 dark:text-gray-400">
                This is the <em className="font-semibold text-gray-800 dark:text-gray-200">first</em> item's tab body.
                </p>
            </div>
            <div id="card-type-tab-2" className="hidden" role="tabpanel" aria-labelledby="card-type-tab-item-2">
                <p className="text-gray-500 dark:text-gray-400">
                This is the <em className="font-semibold text-gray-800 dark:text-gray-200">second</em> item's tab body.
                </p>
            </div>
            <div id="card-type-tab-3" className="hidden" role="tabpanel" aria-labelledby="card-type-tab-item-3">
                <p className="text-gray-500 dark:text-gray-400">
                This is the <em className="font-semibold text-gray-800 dark:text-gray-200">third</em> item's tab body.
                </p>
            </div>
        </div>
        </>
    );
}