function ButtonConvert() {
  return (
    <button className="bg-[#FFFFFF] w-[627px] p-14 mr-8 mt-14 shadow-[0_4px_24px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-center mb-5">
        <img src="img/convert.png" />
        <p className="text-2xl font-bold ml-9">Convert PDF</p>
      </div>
      <p className="text-lg font-semibold text-[#9B9B9B]">
        Convert image to editable PDF
      </p>
    </button>
  )
}

export default ButtonConvert
