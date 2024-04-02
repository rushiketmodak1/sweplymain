"use client";

import React from "react";
import Image from "next/image";
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { users } from "./data";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
  User,
} from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react";

export const UserHeader = () => {
  const { data: session, status } = useSession();

  const logOut = async () => {
    signOut({
      callbackUrl: "http://localhost:3000/signin",
    });
  };

  return (
    <>
      <div className="fixed top-0 right-0 left-64 flex justify-between items-center px-7 py-3 border-b border-gray-E0E3EB">
        <div className="flex items-center">
          <div className="">Workspace</div>
          <div className="ml-2 selectWorkSpace">
            {/* <Select
              disableAnimation={true}
              items={users}
              placeholder="Select a workspace"
              classNames={{
                base: "w-48",
                trigger: "bg-transparent !p0 shadow-none hover:!bg-transparent",
              }}
              renderValue={(items) => {
                return items.map((item) => (
                  <div key={item.key} className="flex items-center gap-2">
                    <Avatar
                      alt={item.data.name}
                      className="flex-shrink-0"
                      size="sm"
                      src={item.data.avatar}
                    />
                    <div className="flex flex-col">
                      <span>{item.data.name}</span>
                    </div>
                  </div>
                ));
              }}
            >
              {(user) => (
                <SelectItem key={user.id} textValue={user.name}>
                  <div className="flex gap-2 items-center">
                    <Avatar
                      alt={user.name}
                      className="flex-shrink-0"
                      size="sm"
                      src={user.avatar}
                    />
                    <div className="flex flex-col">
                      <span className="text-small">{user.name}</span>
                    </div>
                  </div>
                </SelectItem>
              )}
            </Select> */}
          </div>
        </div>
        <div className="">
          <Dropdown
            radius="sm"
            classNames={{
              base: "before:bg-default-200", // change arrow background
              content: "p-0 border-small border-divider bg-background",
            }}
          >
            <DropdownTrigger>
              <Button
                variant="ghost"
                className="!p0 min-w-max px-0 w-8 h-8 rounded-full overflow-hidden border-0"
                disableRipple
              >
                Submit
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Custom item styles"
              disabledKeys={["profile"]}
              className="p-3"
              itemClasses={{
                base: [
                  "rounded-md",
                  "text-gary-500",
                  "data-[hover=true]:text-foreground",
                  "data-[hover=true]:bg-default-100",
                  "dark:data-[hover=true]:bg-default-50",
                  "data-[selectable=true]:focus:bg-default-50",
                  "data-[focus-visible=true]:ring-default-500",
                ],
              }}
            >
              <DropdownSection aria-label="Profile & Actions" showDivider>
                <DropdownItem
                  isReadOnly
                  key="profile"
                  className="h-14 gap-2 opacity-100 bg-gray-E0E3EB mb-2"
                >
                  <User
                    name={session?.user?.name}
                    description={session?.user?.email}
                    classNames={{
                      name: "!text-15px font-semibold mb-1",
                      description: "text-default-500",
                    }}
                    avatarProps={{
                      isBordered: true,
                      src: session?.user?.picture,
                    }}
                  />
                </DropdownItem>
                <DropdownItem
                  startContent={
                    <Image
                      height={20}
                      width={20}
                      src="https://cdn.sweply.com/user-assets/images/setting-icon.svg"
                      alt=""
                    />
                  }
                  className=" h-10"
                  key="settings"
                >
                  Account settings
                </DropdownItem>
              </DropdownSection>

              <DropdownSection className="m-0" aria-label="Help & Feedback">
                <DropdownItem
                  startContent={
                    <Image
                      height={18}
                      width={18}
                      src="https://cdn.sweply.com/user-assets/images/logout-icon.svg"
                      alt=""
                    />
                  }
                  className=" h-10"
                  key="logout"
                  onClick={logOut}
                >
                  Log Out
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div className="h-16"></div>
    </>
  );
};
