import React, { useEffect, useState } from "react";

const UseEffectApi = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    setUsers(await response.json());
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div className="w-full mx-auto justify-between">
        <p className="text-4xl text-center">List of Github users</p>
        <div className="w-full mt-6 px-5 m-auto h-[250px]">
          <div className=" grid grid-cols-3 ">
            {users.map((curElem) => {
              return (
                <>
                  <div className="flex border-2 justify-between px-5 py-6 mx-2 my-2">
                    <div>
                      <img src={curElem.avatar_url} alt="logo" />
                    </div>
                    <div>
                      <div className="">
                        <p className="font-semibold px-3">
                          {curElem.login}
                          <br />
                          <span className="px-3">Web developer</span>
                        </p>
                      </div>
                      <div className="flex">
                        <div>
                          <span>Article</span>
                          <span>38</span>
                        </div>
                        <div>
                          <span>Followers</span>
                          <span></span>
                        </div>
                        <div>
                          <span>Rating</span>
                          <span>8.9</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default UseEffectApi;
