import Link from 'next/link';

const AppFooter = () => {
    return(
        <div className="app-footer bg-gradient-to-b from-blue-50 to-blue-200 border border-dashed border-l-0 border-r-0 border-b-0 border-blue-400 shadow-inner">
          <footer className="wrapper py-6 lg:py-8 flex items-center justify-between">
            <div className="flex justify-between md:items-center flex-col md:flex-row gap-6">
              <div className="max-w-96 flex flex-col gap-4">
                <div>
                  <h1 className="font-extrabold text-xl lg:text-2xl leading-tight txt-shadow text-transparent bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text mb-2">We Code</h1>
                  <span className="text-sm">Coding is a journey of creating, testing, refining, <br/>and repeating. Let us be your guide.</span>
                </div>
                <ul className="flex gap-2 mt-2">
                  <li className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600">
                    <a href=""></a>
                  </li>
                  <li className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600">
                    <a href=""></a>
                  </li>
                  <li className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600">
                    <a href=""></a>
                  </li>
                </ul>
              </div>
              {/* <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <input type="text" id="request-component" placeholder="Request a component" className="px-4 py-2 rounded-full outline-none border-2 border-blue-300 shadow-inner focus:border-blue-400"/>
                  <label htmlFor="request-component" className="px-5 py-2 bg-gradient-to-br from-blue-400 to-blue-700 text-blue-50 rounded-full cursor-pointer shadow-lg flex items-center justify-center"><span>Request</span></label>
                </div>
                <div>
                  <p>Consider contributing</p>
                </div>
              </div> */}
            <div className="">
              <ul className="flex flex-col gap-2">
                <li className="text-sm">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-sm">
                  <Link href="/components">Components</Link>
                </li>
                <li className="text-sm">
                  <Link href="/blogs">Blogs <span>Coming soon</span></Link>
                </li>
              </ul>
            </div>
            </div>
          </footer>
        </div>
    );
}

export default AppFooter;

