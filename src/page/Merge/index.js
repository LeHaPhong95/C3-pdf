import Footer from '../../components/Footer'
import Header from '../../components/Header'

function Merge() {
  return (
    <>
      <Header />
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
            <img src="img/Group.png" alt="" />
          </div>
        </div>
        <div className="-mt-52 flex justify-start">
          <img className="-z-10" src="img/l.png" alt="" />
        </div>
        <div className="flex justify-end -mt-52">
          <img className="-z-10" src="img/r.png" alt="" />
        </div>
        <div className="text-center -mt-[450PX]">
          <p className="text-6xl font-bold ">Most Popular PDF Tools</p>
        </div>
        <div className=" z-10 text-center mb-44 shadow-[0_4px_24px_#F9C067] w-[1220px] bg-[#FFFFFF] m-auto mt-12">
          <div className="flex items-center justify-center mb-5 pt-12">
            <img src="img/merge.png" alt="" />
            <p className="text-2xl font-bold ml-9">Merge PDF</p>
          </div>
          <p className="text-lg font-semibold text-[#9B9B9B]">
            Combine multiple PDFs into one unified document
          </p>
          <div className="flex  justify-between px-3 pt-5 text-lg font-bold">
            <div>
              <img src="img/img1.png" alt="" />
              <p>File name abcxyz. pdf</p>
            </div>
            <div>
              <img src="img/img2.png" alt="" />
              <p>File name abcxyz. pdf</p>
            </div>
            <div>
              <img src="img/img3.png" alt="" />
              <p>File name abcxyz. pdf</p>
            </div>
            <div>
              <img src="img/img4.png" alt="" />
              <p>File name abcxyz. pdf</p>
            </div>
          </div>
          <div className="bg-[#F9C067] w-[519px] h-[150px] m-auto mt-14">
            <button className="flex items-center w-[300px] justify-between m-auto pt-7">
              <img src="img/file.png" alt="" />
              <p className="text-[#FFFFFF] text-2xl font-bold">Choose files</p>
              <div className="w-1 h-7 bg-[#FFFFFF] " />
              <img src="img/Down.png" alt="" />
            </button>
            <p className="text-lg font-semibold mt-6">
              Or drag and drop file in this space
            </p>
          </div>
          <button className="bg-[#2259C9] py-4 px-14 rounded text-[#FFFFFF] text-2xl font-bold mb-12 mt-5">
            Merge
          </button>
        </div>

        <div className="w-[500px] m-auto mb-40">
          <p className="text-2xl font-bold">
            PDF has merged your files into a single PDF
          </p>
          <div className="flex text-lg justify-center font-bold  border-dashed border-2 border-[#2259C9]  p-5 my-8">
            <img src="img/edit.png" alt="" />
            <p className="text-[#2259C9] ml-3">
              Loremipsumissimplytext_merged.pdf - 222.5KB
            </p>
          </div>
          <div className="flex justify-between">
            <button className="bg-[#2259C9] w-[153px] flex items-center rounded-full justify-center py-4">
              <img src="img/download.png" alt="" />
              <p className="ml-2 text-[#FFFFFF] text-sm font-bold">Download</p>
            </button>
            <button className="bg-[#22C96F] w-[153px] flex items-center rounded-full justify-center py-4">
              <img src="img/preview.png" alt="" />
              <p className="ml-2 text-[#FFFFFF] text-sm font-bold">Preview</p>
            </button>
            <button className="bg-[#C92268] w-[153px] flex items-center rounded-full justify-center py-4">
              <img src="img/restart.png" alt="" />
              <p className="ml-2 text-[#FFFFFF] text-sm font-bold">Restart</p>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Merge
