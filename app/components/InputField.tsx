import React from "react";

const InputField = () => {
  return (
    <div className="flex justify-center bg-background font-title">
      <div className="container  h-screen w-screen flex justify-center items-center">
        <div className="form-box w-1/4 bg-white p-10  rounded-xl hover:shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] transition  text-background drop-shadow-md">
          <p className=" font-bold mb-6 text-xl text-center bg-background p-4 rounded-lg text-white drop-shadow-md">
            - สมัครสมาชิก -
          </p>
          <p className="text-black font-bold mb-2 text-lg">ชื่อ: </p>
          <input
            type="text"
            placeholder="กรุณากรอกชื่อของคุณ"
            className="transition input w-full max-w-xs mb-4 bg-text text-lg text-background  drop-shadow-md placeholder-zinc-800 "
          />
          <p className="text-black font-bold mb-2 text-lg">นามสกุล: </p>
          <input
            type="text"
            placeholder="กรุณากรอกนามสกุลของคุณ"
            className="input w-full max-w-xs mb-4 bg-text text-lg text-background drop-shadow-md placeholder-zinc-800 "
          />
          <p className="text-black font-bold mb-2 text-lg">เบอร์โทรศัพท์: </p>
          <input
            type="text"
            placeholder="กรุณากรอกเบอร์โทรศัพท์ของคุณ"
            className="input w-full max-w-xs mb-4 bg-text text-lg text-background drop-shadow-md placeholder-zinc-800 "
          />
          <p className="text-black font-bold mb-2 text-lg">เลขบัตรประชาชน: </p>
          <input
            type="text"
            placeholder="กรุณากรอกเลขบัตรประชาชนของคุณ"
            className="input w-full max-w-xs mb-4 bg-text text-lg text-background drop-shadow-md placeholder-zinc-800 "
          />
          <p className="text-black font-bold mb-2 text-lg">ที่อยู่: </p>
          <input
            type="text"
            placeholder="กรุณากรอกที่อยู่ของคุณ"
            className="input w-full max-w-xs mb-4 bg-text text-lg text-background drop-shadow-md placeholder-background"
          />
          <button className="font-bold text-lg btn btn-neutral mt-4 bg-background text-white text-background font-bold border-none hover:shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] hover:bg-white hover:text-background drop-shadow-md">
            สมัครสมาชิก
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputField;
