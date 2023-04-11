import { Link } from 'react-router-dom'

function ButtonMerge() {
  return (
    <Link to="/merge">
      <button className="bg-[#FFFFFF]  p-14 mr-8 mt-14 shadow-[0_4px_24px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-center mb-5">
          <img src="img/merge.png" />
          <p className="text-2xl font-bold ml-9">Merge PDF</p>
        </div>
        <p className="text-lg font-semibold text-[#9B9B9B]">
          Combine multiple PDFs into one unified document
        </p>
      </button>
    </Link>
  )
}

export default ButtonMerge
