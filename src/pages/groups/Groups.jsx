import { Link, useParams } from "react-router-dom";
import GitGroup from "../../Hooks/groups/GitGroup";
import { Skeleton, Stack } from "@chakra-ui/react";
const Groups = () => {
  const { id } = useParams();
  const [groupsLoading, groups] = GitGroup({ id: id });
  {
    groupsLoading ? null : console.log(groups);
  }
  if (groupsLoading) {
    return (
      <Stack className="w-[90%] m-auto my-9">
        <div className="flex justify-center mt-5">
          <div className="ribbon2">
            <h1 className="font-bold m-4 text-white text-center">
              {id == 1
                ? "مجموعات الصف الاول الثانوى "
                : id == 2
                ? "مجموعات الصف الثانى الثانوى  "
                : id == 3
                ? "مجموعات الصف الثالث اثانوى "
                : ""}
            </h1>
          </div>
        </div>
        <Skeleton height="20px" className="mt-5" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );
  }
  return (
    <div className="m-4">
      <div className="flex justify-center">
        <div className="ribbon2">
          <h1 className="font-bold m-4 text-white text-center">
            {id == 1
              ? "مجموعات الصف الاول الثانوى "
              : id == 2
              ? "مجموعات الصف الثانى الثانوى  "
              : id == 3
              ? "مجموعات الصف الثالث اثانوى "
              : ""}
          </h1>
        </div>
      </div>
      <div>
        {groups ? (
          <div className="my-[30px] flex flex-wrap justify-center">
            {groups.map((group) => {
              return (
                <Link key={group.id} to={`/group/${group.id}`}>
                  <div className="h-[50px] w-[250px] p-3 bg-white border shadow my-5 flex justify-center mx-2">
                    <h1 className="font-bold text-black">{group.group_name}</h1>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Groups;
