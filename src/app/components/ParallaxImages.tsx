import ParallaxImg from "./ParallaxImg"

const ParallaxImages = () => {
  return (
    <div className="mx-auto relative z-10 max-w-7xl px-4 pt-[200px]">
      <ParallaxImg
        start={-200}
        end={200}
        className="w-1/3"
        alt="test_img"
        src="https://images.unsplash.com/photo-1546711076-85a7923432ab?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
      ></ParallaxImg>

      <ParallaxImg
        start={200}
        end={-250}
        className="mx-auto w-2/3"
        alt="test_img"
        src="https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></ParallaxImg>

      <ParallaxImg
        start={0}
        end={-500}
        className="ml-24 w-5/12"
        alt="test_img"
        src="https://images.unsplash.com/photo-1517438322307-e67111335449?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></ParallaxImg>

      <ParallaxImg
        start={-100}
        end={-900}
        className="ml-[60%] w-5/12"
        alt="test_img"
        src="https://images.unsplash.com/photo-1517438322307-e67111335449?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></ParallaxImg>
    </div>
  )
}

export default ParallaxImages
