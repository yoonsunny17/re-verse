import { useState } from "react";

import SelectCharacterBtn from "../atoms/SelectCharacterBtn";
import CharacterThree from "./CharacterThree";
// import "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80fDB8fHx8&auto=format&fit=crop&w=735&q=80" from "../../assets/new-moon.png";

function SelectCharacter() {
  const initialData = {
    name: "",
    imgUrl: "",
  };
  const [mine, setMine] = useState(initialData);
  const [selectNum, setSelectNum] = useState("2");
  const [ischecked, setIschecked] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSelectNum(e.target.value);
    // setMine(e.target.value);
    setMine((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setIschecked((prev) => !prev);
  };
  return (
    <div className="text-base2">
      {/* <div>select character!</div> */}
      <div className="flex justify-between">
        {/* 캐릭터 렌더링 */}
        <div className="bg-white rounded-3xl w-[calc(96%/3)] pt-5 pb-6">
          <CharacterThree characterNum={selectNum} />
        </div>
        <div className="flex flex-col w-[calc(96%/3*2)] items-end">
          {/* 캐릭터 선택 창 */}
          <div className="flex flex-col bg-white rounded-3xl pb-6 w-full">
            <div className="flex justify-center items-center w-full rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-main1 to-sub1 mb-4">
              <p className="text-2xl drop-shadow font-bold my-4 text-white">캐릭터 선택</p>
            </div>
            <div className="grid grid-cols-8 gap-3 justify-items-center mx-4">
              {/* // FIXME: 캐릭터 선택 라디오 버튼 */}
              {characters.map((character, idx) => (
                <label key={`character-${idx}`}>
                  {/* <label key={`character + ${idx}`}> */}
                  <input
                    type="radio"
                    name="character"
                    className="hidden"
                    value={character.name}
                    onChange={handleChange}
                    selected={ischecked}
                  />
                  <SelectCharacterBtn imgUrl={character.imgUrl} name={character.name} />
                </label>
              ))}
              {/* {characters.map((character, idx) => {
                return (
                  <label key={`character-${idx}`}>
                    <input
                      name="selected"
                      value={character.name + idx}
                      type="radio"
                      className="hidden"
                      checked={mine === `${character.name + idx}`}
                      // onChange={handleChange}
                      onChange={() => {
                        handleChange();
                        console.log(mine);
                      }}
                    />
                    <SelectCharacterBtn
                      imgUrl={character.imgUrl}
                      name={character.name}
                    />
                  </label>
                );
              })} */}
            </div>
          </div>
          <button className="text-white font-bold bg-gradient-to-t from-extra1 to-extra2 text-xl w-fit px-12 py-2 mt-4 border rounded-3xl">
            <span className="drop-shadow-xl">적용하기</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// TODO: 나중에 useEffect로 캐릭터 목록 가져다가 뿌려주기
const characters = [
  {
    name: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 2,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 3,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 4,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 5,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 6,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 7,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 8,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 9,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 10,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 11,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 12,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 13,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 14,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 15,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 16,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 17,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 18,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 19,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 20,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 21,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 22,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 23,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 24,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 25,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 26,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 27,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 28,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 29,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 30,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 31,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 32,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 33,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 34,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 35,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 36,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 37,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 38,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 39,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  {
    name: 40,
    imgUrl:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80",
  },
  // {
  //   name: 41,
  //   imgUrl: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=808fHx8&auto=format&fit=crop&w=735&q=80",
  // },
  // {
  //   name: 42,
  //   imgUrl: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=808fHx8&auto=format&fit=crop&w=735&q=80",
  // },
  // {
  //   name: 43,
  //   imgUrl: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=808fHx8&auto=format&fit=crop&w=735&q=80",
  // },
  // {
  //   name: 44,
  //   imgUrl: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=808fHx8&auto=format&fit=crop&w=735&q=80",
  // },
  // {
  //   name: 45,
  //   imgUrl: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=808fHx8&auto=format&fit=crop&w=735&q=80",
  // },
  // {
  //   name: 46,
  //   imgUrl: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=808fHx8&auto=format&fit=crop&w=735&q=80",
  // },
  // {
  //   name: 47,
  //   imgUrl: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=808fHx8&auto=format&fit=crop&w=735&q=80",
  // },
  // {
  //   name: 48,
  //   imgUrl: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=808fHx8&auto=format&fit=crop&w=735&q=80",
  // },
];

export default SelectCharacter;
