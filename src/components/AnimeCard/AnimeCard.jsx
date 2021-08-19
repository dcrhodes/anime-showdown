import React, { Component } from 'react'


class AnimeCard extends Component {
  state = {
    
  }

  render() {
    const { title, image, synopsis, score, rated, episodes} = this.props
    return (
      <>
        {/* <div className="min-h-full py-6 flex flex-col justify-center sm:py-12"> */}
          <div className="py-3 max-w-xl">
            <div className="bg-white shadow-2xl border-gray-100 max-h-80 border sm:rounded-3xl p-8 flex space-x-8">
              <div className="h-48 overflow-visible w-1/2">
                <img className="rounded-3xl shadow-2xl animate__animated animate__fadeInLeft" src={image} alt=""/>
              </div>
              <div className="flex flex-col w-1/2 space-y-4">
                <div className="flex justify-between items-start">
                  <h2 className="text-3xl font-bold">{title}</h2>
                  <div className="bg-yellow-400 font-bold rounded-xl p-2 animate-bounce">
                    {score}
                  </div>
                </div>
                <div className="flex justify-evenly">
                  <div className="">
                    <div className="text-sm text-gray-400">Rated</div>
                    <div className="text-lg text-gray-800 text-center">{rated}</div>
                  </div>
                  <div className="">
                    <div className="text-sm text-gray-400">Episodes</div>
                    <div className="text-lg text-gray-800 text-center">{episodes}</div>
                  </div>
                </div>
                {/* <p className=" text-gray-400 max-h-40 overflow-y-hidden">{synopsis}</p> */}
            <div className="relative pt-1  border">
              <div>
                <div className="relative overflow-hidden h-3 mb-3 text-xs flex rounded bg-indigo-200 mt-2 shadow-2xl">
                  <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500 animate-pulse" id="violence-bar">
                    Violence
                  </div>
                </div>
                <div className="relative overflow-hidden h-3 mb-3 text-xs flex rounded bg-indigo-200 shadow-2xl">
                  <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500 animate-pulse" id="sexual-bar">
                    Sex
                  </div>
                </div>
                <div className="relative overflow-hidden h-3 mb-3 text-xs flex rounded bg-indigo-200 shadow-2xl ">
                  <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500 animate-pulse" id="psych-bar">
                    Psychology
                  </div>
                </div>
              </div>
            </div>
              </div>
            </div>
{/* progress bars below */}
            <div className="relative pt-1 ml-72 flex justify-evenly">
              <button className="w-2/5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Choose</button>
              <button className="w-2/5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Synopsis</button>
            </div>
            {/* <div className="relative pt-1 ml-72">
              <div>
                <div className="relative overflow-hidden h-3 mb-3 text-xs flex rounded bg-indigo-200 mt-2 shadow-2xl">
                  <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500 animate-pulse" id="violence-bar">
                    Violence
                  </div>
                </div>
                <div className="relative overflow-hidden h-3 mb-3 text-xs flex rounded bg-indigo-200 shadow-2xl">
                  <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500 animate-pulse" id="sexual-bar">
                    Sex
                  </div>
                </div>
                <div className="relative overflow-hidden h-3 mb-3 text-xs flex rounded bg-indigo-200 shadow-2xl ">
                  <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500 animate-pulse" id="psych-bar">
                    Psychology
                  </div>
                </div>
              </div>
            </div> */}
{/* progress bars above */}
          </div>
        {/* </div> */}
      </>
    )
  }
}

export default AnimeCard