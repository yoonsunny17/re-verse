import { useEffect } from "react";

import { Avatar, AvatarGroup, Tooltip } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

import { BiLogIn } from "react-icons/bi";
import { RiVipCrownFill, RiVipCrownLine } from "react-icons/ri";
import EditArchiveModal from "./EditArchiveModal";
import SettingArchiveModal from "./SettingArchiveModal";
import { getArchiveList } from "../../api/archive";
import { imageForm, s3Path } from "../../api";
import { useSelector, useDispatch } from "react-redux";
import { setMyArchiveList } from "../../modules/archive";
import { editBestArchive, getUserInfo } from "../../api/user";
import { setLoginUser } from "../../modules/user";
function ArchiveMy() {
  const archiveList = useSelector((state) => state.archive.myArchiveList);
  const loginUser = useSelector((state) => state.user.loginUser);
  const dispatch = useDispatch();

  const enterArchive = (archiveId) => {
    window.location.href = `/reverse/${archiveId}`;
  };
  const changeBestArchive = (archive) => {
    editBestArchive(
      archive.archiveId,
      editBestArchiveSuccess,
      editBestArchiveFail
    );
  };
  const editBestArchiveSuccess = (res) => {
    getUserInfo(getUserInfoSuccess, getUserInfoFail);
  };
  const editBestArchiveFail = (error) => {
    console.log(error);
  };
  const getUserInfoSuccess = (res) => {
    dispatch(setLoginUser(res.data));
  };
  const getUserInfoFail = (error) => {
    console.log(error);
  };

  useEffect(() => {
    getList();
  }, []);
  const getList = async () => {
    await getArchiveList(0, getArchiveListSuccess, getArchiveListFail);
  };
  const getArchiveListSuccess = (res) => {
    dispatch(setMyArchiveList(res.data.archives));
  };
  const getArchiveListFail = (error) => {
    console.log(error);
  };

  return (
    <div className="text-base2">
      <div className="bg-white rounded-3xl w-full h-[calc(600px)] pt-5 pb-6 flex justify-center">
        <div className="xl:w-[calc(100%-50px)] lg:w-[calc(96%)] overflow-auto scrollbar-hide">
          {archiveList.map((archive, index) => {
            return (
              <div key={`archive-${index}`}>
                <div className="flex items-center justify-between px-2 py-1 mx-4">
                  <div className="flex">
                    {/* ?????????????????? ?????? */}
                    <button
                      disabled={loginUser.bestArchiveId === archive.archiveId}
                      onClick={() => {
                        changeBestArchive(archive);
                      }}
                      className="w-8 md:w-14 text-extra1"
                    >
                      {archive.archiveId === loginUser.bestArchiveId ? (
                        <RiVipCrownFill size={18} />
                      ) : (
                        <RiVipCrownLine size={18} />
                      )}
                    </button>
                    {/* ???????????? ?????? */}
                    <p className="text-sm font-bold overflow-hidden text-ellipsis line-clamp-1 lg:w-44 md:w-36 w-24">
                      {archive.title}
                    </p>
                  </div>
                  {/* ???????????? ?????? */}
                  <p className="text-sm text-zinc-500 overflow-hidden text-ellipsis line-clamp-1 lg:w-52 md:w-40 w-32 mr-2">
                    {archive.description}
                  </p>
                  {/* ??????????????? ?????? */}
                  <div className="w-32 md:w-36">
                    <AvatarGroup max={5} spacing="-2">
                      {archive.members.map((member, index) => {
                        return (
                          <Tooltip
                            label={`${member.nickname}`}
                            aria-label="A tooltip"
                            key={`avatar-${index}`}
                          >
                            <Avatar
                              size={{ base: "xs", md: "sm" }}
                              marginLeft={-1.5}
                              variant="avatarBorder"
                              name="profileImg"
                              src={s3Path + member.avatar + imageForm}
                              alt={index}
                            />
                          </Tooltip>
                        );
                      })}
                    </AvatarGroup>
                  </div>
                  {/* ????????? */}
                  <div className="w-32">
                    {/* ???????????? ?????? */}
                    <button
                      className="bg-main1 border-2 border-basic3 rounded-full"
                      onClick={() => {
                        enterArchive(archive.archiveId);
                      }}
                    >
                      <BiLogIn
                        size={18}
                        className="text-white m-0.5 -translate-x-0.5"
                      />
                    </button>
                    {/* ???????????? ?????? */}
                    <EditArchiveModal archive={archive} />
                    {/* ???????????? ?????? ?????? */}
                    <SettingArchiveModal archive={archive} />
                  </div>
                </div>
                <Divider />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ArchiveMy;
