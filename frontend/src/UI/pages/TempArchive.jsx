// my archive

import { useState, useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { BiLogIn, BiPencil } from "react-icons/bi";

function ArchiveMy() {
  const [archiveList, setArchiveList] = useState([]);
  // TODO: 이미지 저장용 변수 나중에 지우기
  const [image] = useState(
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5f2b4e0f-cd21-46d7-a5c3-b392a363d398/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221028%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221028T014603Z&X-Amz-Expires=86400&X-Amz-Signature=5cfd5ce99324a5c83710ee8d825ca12caa1c23a33835352bb9d5fe12fa2a2d0c&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject"
  );
  // TODO:
  const enterArchive = (archiveId) => {
    // TODO: 아카이브로 이동
    console.log(archiveId, "이동");
  };
  const editArchive = (archiveId) => {
    // TODO: 아카이브 이름 설정 변겅
    console.log(archiveId, "수정");
  };
  const settingArchive = (archiveId) => {
    // TODO: 아카이브 공유 관리
    console.log(archiveId, "관리");
  };

  useEffect(() => {
    // TODO: 내 아카이브 목록 가져오기
    console.log("아카이브 목록 가져옴");
    setArchiveList((list) => [
      {
        archiveId: "a1",
        title: "zl존윤sun의 메인 아카이브",
        description: "지존윤선의 아카이브에 초대하노라",
        level: 1,
        bookmarks: false,
        members: [
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
        ],
      },
      {
        archiveId: "a3",
        title: "나의 여행 일지 (1)",
        description: "제주도 한 달 살기 기록 아카이브",
        level: 1,
        bookmarks: false,
        members: [
          {
            nickname: "name",
            avatar: image,
          },
        ],
      },
      {
        archiveId: "a2",
        title: "나의 여행 일지 (2)",
        description: "놀러가요 동물의 숲",
        level: 1,
        bookmarks: true,
        members: [
          {
            nickname: "String",
            avatar: image,
          },
        ],
      },
      {
        archiveId: "a1",
        title: "zl존윤sun의 메인 아카이브",
        description: "지존윤선의 아카이브에 초대하노라",
        level: 1,
        bookmarks: false,
        members: [
          {
            nickname: "name",
            avatar: image,
          },
        ],
      },
      {
        archiveId: "a3",
        title: "나의 여행 일지 (1)",
        description: "제주도 한 달 살기 기록 아카이브",
        level: 1,
        bookmarks: false,
        members: [
          {
            nickname: "name",
            avatar: image,
          },
        ],
      },
      {
        archiveId: "a2",
        title: "나의 여행 일지 (2)",
        description: "놀러가요 동물의 숲",
        level: 1,
        bookmarks: true,
        members: [
          {
            nickname: "String",
            avatar: image,
          },
        ],
      },
      {
        archiveId: "a1",
        title: "zl존윤sun의 메인 아카이브",
        description: "지존윤선의 아카이브에 초대하노라",
        level: 1,
        bookmarks: false,
        members: [
          {
            nickname: "name",
            avatar: image,
          },
        ],
      },
      {
        archiveId: "a3",
        title: "나의 여행 일지 (1)",
        description: "제주도 한 달 살기 기록 아카이브",
        level: 1,
        bookmarks: false,
        members: [
          {
            nickname: "name",
            avatar: image,
          },
        ],
      },
      {
        archiveId: "a2",
        title: "나의 여행 일지 (2)",
        description: "놀러가요 동물의 숲",
        level: 1,
        bookmarks: true,
        members: [
          {
            nickname: "String",
            avatar: image,
          },
        ],
      },
      {
        archiveId: "a1",
        title: "zl존윤sun의 메인 아카이브",
        description: "지존윤선의 아카이브에 초대하노라",
        level: 1,
        bookmarks: false,
        members: [
          {
            nickname: "name",
            avatar: image,
          },
        ],
      },
      {
        archiveId: "a1",
        title: "zl존윤sun의 메인 아카이브",
        description: "지존윤선의 아카이브에 초대하노라",
        level: 1,
        bookmarks: false,
        members: [
          {
            nickname: "name",
            avatar: image,
          },
        ],
      },
      {
        archiveId: "a1",
        title: "zl존윤sun의 메인 아카이브",
        description: "지존윤선의 아카이브에 초대하노라",
        level: 1,
        bookmarks: false,
        members: [
          {
            nickname: "name",
            avatar: image,
          },
        ],
      },
    ]);
  }, []);

  return (
    <div className="bg-white rounded-3xl p-3 h-[500px] overflow-y-scroll">
      {archiveList.map((archive, index) => {
        return (
          <div
            key={index}
            className="my-1 py-1.5 shadow flex items-center gap-2"
          >
            <div className="max-w-[50px] w-1/12"></div>
            <div className="w-1/5 text-sm font-bold whitespace-nowrap overflow-hidden text-ellipsis">
              {archive.title}
            </div>
            <div className="w-2/5 text-sm whitespace-nowrap overflow-hidden text-ellipsis">
              {archive.description}
            </div>
            <div className="w-1/4 text-sm flex">
              {archive.members.map((member, index) => {
                if (index < 5) {
                  return (
                    <img
                      className="w-7 h-7 mr-[-6px] rounded-full border border-[#F0F0F0]"
                      src={member.avatar}
                      alt={index}
                      key={index}
                    />
                  );
                } else if (index === 5) {
                  return (
                    <div
                      key={index}
                      className="w-7 h-7 rounded-full border border-[#F0F0F0] bg-[#F1F5FF] flex items-center justify-center"
                    >
                      +{archive.members.length - index}
                    </div>
                  );
                }
              })}
            </div>
            <div className="w-7 h-7">
              <button
                className="w-full h-full bg-[#15B9F1] rounded-3xl border-4 border-[#B7C6E7]"
                onClick={() => {
                  enterArchive(archive.archiveId);
                }}
              >
                <BiLogIn className="text-white w-4 h-4" />
              </button>
            </div>
            <div className="w-7 h-7">
              <button
                className="w-full h-full bg-[#C940E4] rounded-3xl border-4 border-[#B7C6E7] flex items-center justify-center"
                onClick={() => {
                  editArchive(archive.archiveId);
                }}
              >
                <BiPencil className="text-white w-4 h-4" />
              </button>
            </div>
            <div className="w-7 h-7 mr-2">
              <button
                className="w-full h-full bg-[#757575] rounded-3xl border-4 border-[#B7C6E7] flex items-center justify-center"
                onClick={() => {
                  settingArchive(archive.archiveId);
                }}
              >
                <FiSettings className="text-white w-4 h-4" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ArchiveMyTemp;





// friend archive
import { useState, useEffect } from "react";
import { BiLogIn } from "react-icons/bi";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";

function ArchiveFriend() {
  const [archiveList, setArchiveList] = useState([]);
  // TODO: 이미지 저장용 변수 나중에 지우기
  const [image] = useState(
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5f2b4e0f-cd21-46d7-a5c3-b392a363d398/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221028%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221028T014603Z&X-Amz-Expires=86400&X-Amz-Signature=5cfd5ce99324a5c83710ee8d825ca12caa1c23a33835352bb9d5fe12fa2a2d0c&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject"
  );
  // TODO:
  const enterArchive = (archiveId) => {
    // TODO: 아카이브로 이동
    console.log(archiveId, "이동");
  };
  const deleteArchive = (archiveId) => {
    // TODO: 아카이브 공유 삭제
    console.log(archiveId, "나가기");
  };
  const bookmarkTrigger = (archive, index) => {
    // TODO: 즐겨찾기 상태 변경 보내기
    setArchiveList((list) => {
      return [...list].filter((item, idx) => {
        if (idx === index) {
          item.bookmarks = !item.bookmarks;
        }
        return item;
      });
    });
  };

  useEffect(() => {
    // TODO: 친구들의 아카이브 목록 가져오기
    console.log("아카이브 목록 가져옴");
    setArchiveList((list) => [
      {
        archiveId: "a1",
        user: {
          nickname: "KIN거운KAN쵸",
          message: "칸쵸",
        },
        title: "KIN거운KAN쵸의 꿀사탕 여행",
        description: "울면 꿀사탕소매넣기 산타가 다녀간대요",
        level: 1,
        bookmarks: false,
        members: [
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
        ],
      },
      {
        archiveId: "a3",
        user: {
          nickname: "zl존도ㅂlz",
          message: "도비",
        },
        title: "zl존도ㅂlz VLOG 모음",
        description: "도비의 대학원 브이로그",
        level: 1,
        bookmarks: false,
        members: [
          {
            nickname: "name",
            avatar: image,
          },
        ],
      },
    ]);
  }, []);

  return (
    <div className="bg-white rounded-3xl p-3 h-[500px] overflow-y-scroll">
      {archiveList.map((archive, index) => {
        return (
          <div
            key={index}
            className="my-1 py-1.5 shadow flex items-center gap-2"
          >
            <div className="max-w-[50px] w-1/12 text-[#FACC04] flex items-center justify-center">
              <button
                onClick={() => {
                  bookmarkTrigger(archive, index);
                }}
              >
                {archive.bookmarks ? (
                  <AiTwotoneStar className="h-6 w-6" />
                ) : (
                  <AiOutlineStar className="h-6 w-6" />
                )}
              </button>
            </div>
            <div className="max-w-[140px] w-1/6 text-sm font-bold whitespace-nowrap overflow-hidden text-ellipsis">
              {archive.user.nickname}
            </div>
            <div className="w-1/5 text-sm font-bold whitespace-nowrap overflow-hidden text-ellipsis">
              {archive.title}
            </div>
            <div className="w-[36%] text-sm whitespace-nowrap overflow-hidden text-ellipsis">
              {archive.description}
            </div>
            <div className="w-1/5 text-sm flex">
              {archive.members.map((member, index) => {
                if (index < 5) {
                  return (
                    <img
                      className="w-7 h-7 mr-[-6px] rounded-full border border-[#F0F0F0]"
                      src={member.avatar}
                      alt={index}
                      key={index}
                    />
                  );
                } else if (index === 5) {
                  return (
                    <div
                      key={index}
                      className="w-7 h-7 rounded-full border border-[#F0F0F0] bg-[#F1F5FF] flex items-center justify-center"
                    >
                      +{archive.members.length - index}
                    </div>
                  );
                }
              })}
            </div>
            <div className="w-7 h-7">
              <button
                className="w-full h-full bg-[#15B9F1] rounded-3xl border-4 border-[#B7C6E7]"
                onClick={() => {
                  enterArchive(archive.archiveId);
                }}
              >
                <BiLogIn className="text-white w-4 h-4" />
              </button>
            </div>
            <div className="w-7 h-7 mr-2">
              <button
                className="w-full h-full bg-[#FF7067] rounded-3xl border-4 border-[#B7C6E7] flex items-center justify-center"
                onClick={() => {
                  deleteArchive(archive.archiveId);
                }}
              >
                <HiOutlineTrash className="text-white w-4 h-4" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ArchiveFriend;





// archivelike
import { useState, useEffect } from "react";
import { BiLogIn } from "react-icons/bi";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";

function ArchiveLike() {
  const [archiveList, setArchiveList] = useState([]);
  // TODO: 이미지 저장용 변수 나중에 지우기
  const [image] = useState(
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5f2b4e0f-cd21-46d7-a5c3-b392a363d398/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221028%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221028T014603Z&X-Amz-Expires=86400&X-Amz-Signature=5cfd5ce99324a5c83710ee8d825ca12caa1c23a33835352bb9d5fe12fa2a2d0c&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject"
  );
  // TODO:
  const enterArchive = (archiveId) => {
    // TODO: 아카이브로 이동
    console.log(archiveId, "이동");
  };
  const deleteArchive = (archiveId) => {
    // TODO: 아카이브 공유 삭제
    console.log(archiveId, "나가기");
  };
  const bookmarkTrigger = (archive, index) => {
    // TODO: 즐겨찾기 상태 변경 보내기
    setArchiveList((list) => {
      return [...list].filter((item, idx) => {
        if (idx === index) {
          item.bookmarks = !item.bookmarks;
        }
        return item;
      });
    });
  };

  useEffect(() => {
    // TODO: 즐겨찾는 아카이브 목록 가져오기
    console.log("아카이브 목록 가져옴");
    setArchiveList((list) => [
      {
        archiveId: "a3",
        user: {
          nickname: "zl존도ㅂlz",
          message: "도비",
        },
        title: "zl존도ㅂlz VLOG 모음",
        description: "도비의 대학원 브이로그",
        level: 1,
        bookmarks: false,
        members: [
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
          {
            nickname: "name",
            avatar: image,
          },
        ],
      },
    ]);
  }, []);

  return (
    <div className="bg-white rounded-3xl p-3 h-[500px] overflow-y-scroll">
      {archiveList.map((archive, index) => {
        return (
          <div
            key={index}
            className="my-1 py-1.5 shadow flex items-center gap-2"
          >
            <div className="max-w-[50px] w-1/12 text-[#FACC04] flex items-center justify-center">
              <button
                onClick={() => {
                  bookmarkTrigger(archive, index);
                }}
              >
                {archive.bookmarks ? (
                  <AiTwotoneStar className="h-6 w-6" />
                ) : (
                  <AiOutlineStar className="h-6 w-6" />
                )}
              </button>
            </div>
            <div className="max-w-[140px] w-1/6 text-sm font-bold whitespace-nowrap overflow-hidden text-ellipsis">
              {archive.user.nickname}
            </div>
            <div className="w-1/5 text-sm font-bold whitespace-nowrap overflow-hidden text-ellipsis">
              {archive.title}
            </div>
            <div className="w-[36%] text-sm whitespace-nowrap overflow-hidden text-ellipsis">
              {archive.description}
            </div>
            <div className="w-1/5 text-sm flex">
              {archive.members.map((member, index) => {
                if (index < 5) {
                  return (
                    <img
                      className="w-7 h-7 mr-[-6px] rounded-full border border-[#F0F0F0]"
                      src={member.avatar}
                      alt={index}
                      key={index}
                    />
                  );
                } else if (index === 5) {
                  return (
                    <div
                      key={index}
                      className="w-7 h-7 rounded-full border border-[#F0F0F0] bg-[#F1F5FF] flex items-center justify-center"
                    >
                      +{archive.members.length - index}
                    </div>
                  );
                }
              })}
            </div>
            <div className="w-7 h-7">
              <button
                className="w-full h-full bg-[#15B9F1] rounded-3xl border-4 border-[#B7C6E7]"
                onClick={() => {
                  enterArchive(archive.archiveId);
                }}
              >
                <BiLogIn className="text-white w-4 h-4" />
              </button>
            </div>
            <div className="w-7 h-7 mr-2">
              <button
                className="w-full h-full bg-[#FF7067] rounded-3xl border-4 border-[#B7C6E7] flex items-center justify-center"
                onClick={() => {
                  deleteArchive(archive.archiveId);
                }}
              >
                <HiOutlineTrash className="text-white w-4 h-4" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ArchiveLike;
