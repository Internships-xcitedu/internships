import "./jobconf.js"

const JobDescriptionPage = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col p-[53px_0px] box-border items-center justify-center text-left text-base text-gray-300 font-inter">
      <div className="relative w-[1512px] h-[125px] shrink-0 text-black">
        <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[1512px] h-[125px]" />
        <button className="cursor-pointer [border:none] p-[0] bg-gray-200 absolute top-[38px] left-[41px] w-[198px] h-[55px]" />
        <img
          className="absolute top-[23px] left-[1377px] w-[80px] h-[80px]"
          alt=""
          src="../ellipse-7.svg"
        />
        <div className="absolute top-[42px] left-[1137px] w-[216px] h-[47px]">
          <div className="absolute top-[0px] left-[0px] bg-gray-200 w-[216px] h-[47px]" />
          <img
            className="absolute top-[8px] left-[173px] w-[24px] h-[32px] overflow-hidden"
            alt=""
            src="../angleupsolid-2.svg"
          />
          <div className="absolute top-[8px] left-[9px] inline-block">
            applicants name
          </div>
        </div>
        <div className="absolute top-[43px] left-[905px] rounded-[20px] bg-gray-200 w-[147px] h-[48px]" />
        <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute top-[calc(50%_-_5.5px)] left-[calc(50%_+_176px)] text-base font-inter text-black text-left inline-block">
          Post a job
        </button>
        <div className="absolute top-[57px] left-[85px] inline-block">logo</div>
      </div>
      <img
        className="relative w-[133px] h-[134px] shrink-0 mt-[-16px]"
        alt=""
        src="../ellipse-10.svg"
      />
      <button className="cursor-pointer [border:none] p-[0] bg-[transparent] relative w-[182px] h-[76px] shrink-0 mt-[-16px]">
        <button className="cursor-pointer [border:none] p-[0] bg-gray-200 absolute top-[0px] left-[0px] w-[182px] h-[76px]" />
        <div className="absolute top-[14.83px] left-[48.03px] text-base font-inter text-black text-left inline-block w-[68.25px] h-[44.49px]">
          Apply
        </div>
      </button>
      <input
        className="[border:none] bg-gray-200 relative w-[438px] h-[71px] shrink-0 mt-[-16px]"
        type="text"
      />
      <div className="relative bg-gray-200 w-[438px] h-[26px] shrink-0 mt-[-16px]" />
      <div className="relative inline-block mt-[-16px]">About the company</div>
      <input
        className="[border:none] bg-gray-200 relative w-[685px] h-[161px] shrink-0 mt-[-16px]"
        type="text"
        required
      />
      <input
        className="[border:none] font-inter text-base bg-[transparent] relative w-[657px] h-[149px] shrink-0 mt-[-16px]"
        type="text"
        placeholder={`job description
`}
        required
      />
      <div className="relative w-[657px] h-[139px] shrink-0 mt-[-16px]">
        <input
          className="[border:none] bg-gray-200 absolute top-[0px] left-[0px] w-[657px] h-[139px]"
          type="text"
          required
        />
        <div className="absolute top-[21px] left-[44px] inline-block">
          Roles and responsiblities
        </div>
      </div>
      <input
        className="[border:none] font-inter text-base bg-[transparent] relative w-[660px] h-[93px] shrink-0 mt-[-16px]"
        type="text"
        placeholder="Qualifications"
        required
      />
      <input
        className="[border:none] font-inter text-base bg-[transparent] relative w-[657px] h-[139px] shrink-0 mt-[-16px]"
        type="text"
        placeholder="perks"
        required
      />
      <input
        className="[border:none] font-inter text-base bg-[transparent] relative w-[657px] h-[139px] shrink-0 mt-[-16px]"
        type="text"
        placeholder="Skill tags"
      />
      <button className="cursor-pointer [border:none] p-[0] bg-[transparent] relative w-[144px] h-[41px] shrink-0 mt-[-16px]">
        <button className="cursor-pointer [border:none] p-[0] bg-gray-200 absolute top-[0px] left-[0px] w-[144px] h-[41px]" />
        <div className="absolute top-[8px] left-[38px] text-base font-inter text-black text-left inline-block">
          Apply
        </div>
      </button>
    </div>
  );
};

export default JobDescriptionPage;
