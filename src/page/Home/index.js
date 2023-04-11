import ButtonMerge from '../../components/ButtonMerge'
import ButtonConvert from '../../components/ButtonConvert'

function Home() {
  return (
    <div className="w-full">
      <div className="w-[1440px] m-auto px-[78px]">
        <div className="mt-[165px] w-[627px]">
          <p className="text-6xl font-bold mb-3">We make PDF easy.</p>
          <span className="text-2xl font-medium">
            All the tools you’ll need to be more productive and work smarter
            with documents.
          </span>
        </div>
        <div className="flex justify-end -mt-[280px]">
          <img src="img/Group.png" />
        </div>
      </div>
      <div className=" -mt-52 ">
        <img src="img/l.png" />
      </div>
      <div className="flex justify-end  -mt-52 ">
        <img src="img/r.png" />
      </div>
      <div className="text-center -mt-[450PX]">
        <p className="text-6xl font-bold ">Most Popular PDF Tools</p>
      </div>
      <div className="text-center mb-44">
        <ButtonMerge />
        <ButtonConvert />
      </div>
    </div>
  )
}

export default Home
