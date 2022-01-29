const TailwindGrid = () => {
    return (
      <>
        <div className="grid grid-cols-3 grid-flow-row gap-2 ">
          <div style={{height:'100px'}} className="h-4 bg-teal-400"></div>
          <div style={{height:'100px'}} className="h-4 bg-teal-400"></div>
          <div style={{height:'100px'}} className="h-4 bg-teal-400"></div>
          <div style={{height:'100px'}} className="h-4 bg-teal-400"></div>
          <div style={{height:'100px'}} className="h-4 bg-teal-400"></div>

        </div>
        <div className="grid grid-cols-3 gap-4 mt-3 justify-items-center">
          <div className="w-100 col-span-3 h-4 bg-teal-400">a</div>
          <div className="w-100 col-span-1 h-4 bg-teal-400">b</div>
          <div className="w-100 col-span-2 h-4 bg-teal-400">c</div>
          <div className="w-100 col-span-1 h-4 bg-teal-400">d</div>
          <div className="w-100 col-span-1 h-4 bg-teal-400">e</div>
          <div className="w-100 col-span-1 h-4 bg-teal-400">f</div>
        </div>
        <p>レスポンシブ</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 mt-3">
          <div style={{height:'100px'}} className="h-4 bg-teal-400"></div>
          <div style={{height:'100px'}} className="h-4 bg-teal-400"></div>
          <div style={{height:'100px'}} className="h-4 bg-teal-400"></div>
          <div style={{height:'100px'}} className="h-4 bg-teal-400"></div>
          <div style={{height:'100px'}} className="h-4 bg-teal-400"></div>
          <div style={{height:'100px'}} className="h-4 bg-teal-400"></div>
        </div>
        <p>auto-fit</p>

        <div className="grid gap-1 mt-3" style={{height:'500px', gridTemplateColumns:'repeat(auto-fit,minmax(400px,1fr))'}}>
          <div  className="h-100 bg-teal-400"></div>
          <div  className="h-100 bg-teal-400"></div>
          <div  className="h-100 bg-teal-400"></div>
          <div  className="h-100 bg-teal-400"></div>
          <div  className="h-100 bg-teal-400"></div>
          <div  className="h-100 bg-teal-400"></div>
        </div>
        <div className="grid place-items-center w-full" style={{height:'500px'}}>
          <div  className="h-100 bg-teal-400 p-5">Place items center</div>
        </div>
      </>

    )
}

export default TailwindGrid
