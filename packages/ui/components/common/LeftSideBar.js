import React from "react";
import Image from "next/image";

export const LeftSideBar = () => {
    return (
        <>
            <div className="px-6 py-5 w-64 border-r border-gray-E0E3EB h-screen overflow-auto fixed top-0 left-0">
                <div className="px-2">
                    <Image src="https://cdn.sweply.com/user-assets/images/logo-sweply-new-black.svg" width={145} height={32} alt="" />
                </div>
                <div className="">
                    <ul className="h-[calc(100vh-88px)] flex flex-col">
                        <li>
                            <ul>
                                <li>
                                    <p className="text-gray-C5C9D5 pl-4 mt-4 mb-1">Overview</p>
                                    <ul>
                                        <li>
                                            <a className="w-full flex items-center px-4 py-3 hover:bg-gray-eef0f5 rounded-lg font-medium" href="">
                                                <span className="mr-3">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6684 4.125C11.8574 3.95833 12.1409 3.95833 12.3299 4.125L19.829 10.7388C19.9367 10.8337 19.9983 10.9703 19.9983 11.1138V19.5008C19.9983 19.7769 19.7745 20.0008 19.4983 20.0008H16.0001V20H15.9459V13.7313C15.9459 12.3506 14.8266 11.2313 13.4459 11.2313H10.4408C9.06009 11.2313 7.9408 12.3506 7.9408 13.7313V20.0008H4.5C4.22386 20.0008 4 19.7769 4 19.5008V11.1138C4 10.9703 4.06165 10.8337 4.16928 10.7388L11.6684 4.125ZM13.9459 20V13.7313C13.9459 13.4552 13.722 13.2313 13.4459 13.2313H10.4408C10.1647 13.2313 9.9408 13.4552 9.9408 13.7313V20H13.9459ZM9.9408 22V22.0008H8.9408H4.5C3.11929 22.0008 2 20.8815 2 19.5008V11.1138C2 10.3963 2.30827 9.71335 2.84639 9.23877L10.3455 2.62502C11.2905 1.79166 12.7079 1.79166 13.6528 2.62501L21.1519 9.23877C21.69 9.71335 21.9983 10.3963 21.9983 11.1138V19.5008C21.9983 20.8815 20.879 22.0008 19.4983 22.0008H14.9459H13.9459V22H9.9408Z" fill="#6F7582"></path>
                                                    </svg>
                                                </span>
                                                <span>Dashboard</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <p className="text-gray-C5C9D5 pl-4 mt-4 mb-1">Ads launcher</p>
                                    <ul>
                                        <li>
                                            <a className="w-full flex items-center px-4 py-3 hover:bg-gray-eef0f5 rounded-lg font-medium" href="">
                                                <span className="mr-3">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16 18C16 17.4477 15.4963 17 14.875 17H8.125C7.50368 17 7 17.4477 7 18V18C7 18.5523 7.50192 19 8.12324 19C9.95216 19 13.177 19 14.8777 19C15.499 19 16 18.5523 16 18V18Z" fill="#6F7582"></path>
                                                        <path d="M16 21C16 20.4477 15.4963 20 14.875 20H8.125C7.50368 20 7 20.4477 7 21V21C7 21.5523 7.50192 22 8.12324 22C9.95216 22 13.177 22 14.8777 22C15.499 22 16 21.5523 16 21V21Z" fill="#6F7582"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0488 4.14721C18.2444 4.04797 18.4583 3.99944 18.6703 4C18.8825 4.00057 19.0963 4.05029 19.2916 4.15083C19.4873 4.25154 19.6646 4.40379 19.7945 4.60392C19.9251 4.80523 20 5.04421 20 5.29586L20 12.7061C19.9996 12.9577 19.9243 13.1965 19.7935 13.3975C19.6636 13.5973 19.4862 13.7492 19.2907 13.8496C19.0955 13.95 18.8818 13.9995 18.6698 14C18.458 14.0005 18.2443 13.952 18.0489 13.8528L14.8721 12H13.531L13.734 12.8214C13.8325 13.3649 13.4718 13.8852 12.9284 13.9838C12.385 14.0823 11.8646 13.7217 11.766 13.1782L11.4983 12H11.2222C10.4037 12 9.59811 11.7126 8.98717 11.1705C8.37235 10.625 8 10.1275 8 9C8 8.17064 8.37235 7.37506 8.98717 6.82954C9.59811 6.28747 10.4037 6.00003 11.2222 6.00003H14.872L18.0488 4.14721ZM14 8H11.2222C10.6665 8 10 8.2279 10 9C10 9.7721 10.7348 10 11.2222 10H14V8ZM16 10.3859L18 11.5857V6.41445L16 7.61408V10.3859Z" fill="#6F7582"></path>
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.07362 4.05034C7.39704 2.73756 9.19203 2 11.0637 2C11.9905 2 12.9082 2.18107 13.7644 2.53288C14.484 2.82856 15.1484 3.23998 15.7311 3.74964L14.0128 4.74276C13.151 4.15529 12.124 3.83448 11.0637 3.83448C9.68279 3.83448 8.35836 4.37865 7.38181 5.34734C6.40526 6.31605 5.85659 7.62994 5.85659 9V9.0071L5.85617 9.01419C5.81132 9.76909 5.95376 10.5234 6.27099 11.211C6.58822 11.8986 7.07057 12.4985 7.67576 12.9582L7.68432 12.9647L7.69226 12.9719C8.07738 13.3221 8.37497 13.6899 8.57371 14.1424C8.77208 14.5941 8.86487 15.1139 8.86487 15.7586V16H7.41346V15.7586C7.41346 15.2608 7.14238 14.9733 6.44863 14.333C5.64608 13.698 5.00642 12.8836 4.58197 11.9564C4.15699 11.028 3.95989 10.0129 4.00677 8.9944C4.00826 7.13998 4.75154 5.36179 6.07362 4.05034ZM14.3141 13.0806L16 14.055C15.8961 14.1487 15.789 14.2392 15.6788 14.3263C14.9789 14.9727 14.7106 15.2605 14.7106 15.7586V16H13.2492V15.7586C13.2492 15.1063 13.3456 14.5877 13.5469 14.1383C13.728 13.7341 13.9879 13.3996 14.3141 13.0806Z" fill="#6F7582"></path>
                                                    </svg>
                                                </span>
                                                <span>Create ads</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="w-full flex items-center px-4 py-3 hover:bg-gray-eef0f5 rounded-lg font-medium" href="">
                                                <span className="mr-3">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9 16V8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8V16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16Z" fill="#6F7582"></path>
                                                        <path d="M13 11V8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V11C11 11.5523 11.4477 12 12 12C12.5523 12 13 11.5523 13 11Z" fill="#6F7582"></path>
                                                        <path d="M17 14V8C17 7.44772 16.5523 7 16 7C15.4477 7 15 7.44772 15 8V14C15 14.5523 15.4477 15 16 15C16.5523 15 17 14.5523 17 14Z" fill="#6F7582"></path>
                                                        <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" fill="#6F7582"></path>
                                                    </svg>
                                                </span>
                                                <span>Manage ads </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="w-full flex items-center px-4 py-3 hover:bg-gray-eef0f5 rounded-lg font-medium" href="">
                                                <span className="mr-3">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="3" y="3" width="18" height="18" rx="1" stroke="#6F7582" stroke-width="2"></rect>
                                                        <rect x="6" y="7" width="12" height="2" rx="1" fill="#6F7582"></rect>
                                                        <path d="M17 12.75L14.1672 16.353C13.9616 16.6144 13.5629 16.6061 13.3685 16.3363L11.1428 13.2481C10.9575 12.9911 10.5829 12.969 10.3687 13.2025L7 16.875" stroke="#6F7582" stroke-width="2" stroke-linecap="round"></path>
                                                    </svg>
                                                </span>
                                                <span>Reports </span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <p className="text-gray-C5C9D5 pl-4 mt-4 mb-1">Media & Desgin</p>
                                    <ul>
                                        <li>
                                            <a className="w-full flex items-center px-4 py-3 hover:bg-gray-eef0f5 rounded-lg font-medium" href="">
                                                <span className="mr-3">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.74009 21C4.16972 21 3.68162 20.7799 3.27579 20.3396C2.86927 19.8986 2.66602 19.3688 2.66602 18.75V5.25C2.66602 4.63125 2.86927 4.10137 3.27579 3.66037C3.68162 3.22012 4.16972 3 4.74009 3H9.06972C9.34626 3 9.61002 3.05625 9.86098 3.16875C10.1113 3.28125 10.3314 3.44063 10.5216 3.64688L11.9993 5.25H19.2586C19.829 5.25 20.3174 5.4705 20.7239 5.9115C21.1298 6.35175 21.3327 6.88125 21.3327 7.5V18.75C21.3327 19.3688 21.1298 19.8986 20.7239 20.3396C20.3174 20.7799 19.829 21 19.2586 21H4.74009ZM4.74009 18.75H19.2586V7.5H11.1438L9.06972 5.25H4.74009V18.75ZM7.8512 15.375H16.1475C16.3549 15.375 16.5105 15.2719 16.6142 15.0656C16.7179 14.8594 16.7006 14.6625 16.5623 14.475L14.0993 10.9031C13.9956 10.7531 13.8574 10.6781 13.6845 10.6781C13.5117 10.6781 13.3734 10.7531 13.2697 10.9031L10.9623 14.25L9.69194 12.3938C9.58824 12.2438 9.44997 12.1687 9.27713 12.1687C9.10429 12.1687 8.96602 12.2438 8.86231 12.3938L7.43639 14.475C7.29812 14.6625 7.28083 14.8594 7.38453 15.0656C7.48824 15.2719 7.64379 15.375 7.8512 15.375Z" fill="#6F7582"></path>
                                                    </svg>
                                                </span>
                                                <span>My Library</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="w-full flex items-center px-4 py-3 hover:bg-gray-eef0f5 rounded-lg font-medium" href="">
                                                <span className="mr-3">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8782 4.11068C19.6511 4.01766 19.4078 3.97077 19.1624 3.97271C18.9169 3.97466 18.6744 4.02542 18.4488 4.12204C18.2232 4.21865 18.019 4.35919 17.8483 4.53546L17.8367 4.54722L9.7667 12.6072C9.37593 12.9975 8.74277 12.9971 8.35249 12.6063C7.9622 12.2156 7.9626 11.5824 8.35336 11.1921L16.4179 3.13754C16.7721 2.77367 17.1947 2.48342 17.6614 2.28353C18.1309 2.08247 18.6357 1.97683 19.1465 1.97278C19.6572 1.96872 20.1636 2.06632 20.6362 2.2599C21.1089 2.45347 21.5383 2.73915 21.8994 3.1003C22.2606 3.46144 22.5462 3.89083 22.7398 4.36346C22.9334 4.83609 23.031 5.34252 23.0269 5.85324C23.0229 6.36396 22.9172 6.86877 22.7162 7.33826C22.5163 7.80493 22.2262 8.22743 21.8625 8.58148L13.808 16.6559C13.418 17.0469 12.7848 17.0477 12.3938 16.6577C12.0028 16.2676 12.002 15.6344 12.392 15.2434L20.452 7.16344L20.4642 7.15142C20.6405 6.98066 20.7811 6.77654 20.8777 6.55094C20.9743 6.32533 21.025 6.08276 21.027 5.83735C21.0289 5.59194 20.982 5.3486 20.889 5.12149C20.796 4.89438 20.6587 4.68804 20.4852 4.51451C20.3117 4.34097 20.1053 4.2037 19.8782 4.11068ZM3.07003 17.9588C3.07051 15.7434 4.85156 13.9397 7.07003 13.9397H7.07335C7.59995 13.9414 8.12105 14.0469 8.6069 14.25C9.09275 14.4531 9.53382 14.75 9.90495 15.1236C10.2761 15.4972 10.57 15.9402 10.7699 16.4274C10.9696 16.9141 11.0715 17.4352 11.07 17.9612L11.07 17.963L11.07 17.9597V17.9612C11.0692 20.7463 8.82827 22.9997 6.07003 22.9997C4.16394 22.9997 2.51068 21.8558 1.35647 20.6803C1.35863 20.6825 1.36078 20.6846 1.36292 20.6868L1.35647 20.6803C1.25244 20.5748 1.1264 20.4131 1.05595 20.1885C0.977879 19.9397 0.990661 19.6845 1.07411 19.4581C1.21324 19.0806 1.51404 18.8764 1.61854 18.807C1.76256 18.7114 1.92433 18.6308 2.0484 18.5709C2.11936 18.5367 2.17534 18.5103 2.22875 18.4852C2.29566 18.4537 2.35852 18.4242 2.44171 18.3833C2.709 18.2521 2.89138 18.1416 3.00284 18.0369C3.04861 17.994 3.0654 17.9672 3.07003 17.9588ZM7.06842 15.9397C5.96792 15.9405 5.07003 16.836 5.07003 17.9597C5.07003 18.6483 4.73277 19.1562 4.37159 19.4952C4.13451 19.7177 3.86386 19.8906 3.62176 20.0241C4.41021 20.6263 5.25428 20.9997 6.07003 20.9997C7.71128 20.9997 9.07003 19.6539 9.07003 17.9597L9.07004 17.9563C9.07091 17.6924 9.01979 17.4308 8.91959 17.1866C8.81939 16.9424 8.67207 16.7204 8.48605 16.5331C8.30002 16.3458 8.07893 16.197 7.8354 16.0952C7.59239 15.9936 7.3318 15.9408 7.06842 15.9397Z" fill="#6F7582"></path>
                                                    </svg>
                                                </span>
                                                <span>Design tool</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <p className="text-gray-C5C9D5 pl-4 mt-4 mb-1">Wallet</p>
                                    <ul>
                                        <li>
                                            <a className="w-full flex items-center px-4 py-3 hover:bg-gray-eef0f5 rounded-lg font-medium relative" href="">
                                                <span className="mr-3">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_3184_2400)">
                                                            <path d="M21 7.28V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V16.72C21.59 16.37 22 15.74 22 15V9C22 8.26 21.59 7.63 21 7.28ZM20 9V15H13V9H20ZM5 19V5H19V7H13C11.9 7 11 7.9 11 9V15C11 16.1 11.9 17 13 17H19V19H5Z" fill="#6F7582"></path>
                                                            <path d="M16 13.5C16.8284 13.5 17.5 12.8284 17.5 12C17.5 11.1716 16.8284 10.5 16 10.5C15.1716 10.5 14.5 11.1716 14.5 12C14.5 12.8284 15.1716 13.5 16 13.5Z" fill="#6F7582"></path>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_3184_2400">
                                                                <rect width="24" height="24" fill="white"></rect>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                                <span>Overview</span>
                                                <span className="absolute right-0 text-xs text-sweply-blue-500 font-medium px-2 h-6 flex items-center bg-sweply-blue-400 rounded-2xl">New</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="w-full flex items-center px-4 py-3 hover:bg-gray-eef0f5 rounded-lg font-medium" href="">
                                                <span className="mr-3">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_3184_2400)">
                                                            <path d="M21 7.28V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V16.72C21.59 16.37 22 15.74 22 15V9C22 8.26 21.59 7.63 21 7.28ZM20 9V15H13V9H20ZM5 19V5H19V7H13C11.9 7 11 7.9 11 9V15C11 16.1 11.9 17 13 17H19V19H5Z" fill="#6F7582"></path>
                                                            <path d="M16 13.5C16.8284 13.5 17.5 12.8284 17.5 12C17.5 11.1716 16.8284 10.5 16 10.5C15.1716 10.5 14.5 11.1716 14.5 12C14.5 12.8284 15.1716 13.5 16 13.5Z" fill="#6F7582"></path>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_3184_2400">
                                                                <rect width="24" height="24" fill="white"></rect>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                                <span>Transactions</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <p className="text-gray-C5C9D5 pl-4 mt-4 mb-1">Optimization</p>
                                    <ul>
                                        <li>
                                            <a className="w-full flex items-center px-4 py-3 hover:bg-gray-eef0f5 rounded-lg font-medium relative" href="">
                                                <span className="mr-3">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_7452_21389)">
                                                            <path d="M8 17C8 16.4477 8.44772 16 9 16H15C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18H9C8.44772 18 8 17.5523 8 17ZM8 13C8 12.4477 8.44772 12 9 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H9C8.44772 14 8 13.5523 8 13ZM14.5858 2.58579C14.2107 2.21071 13.702 2 13.1716 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8.82843C20 8.29799 19.7893 7.78929 19.4142 7.41421L14.5858 2.58579ZM18 20H6V4H13V7C13 8.10457 13.8954 9 15 9H18V20Z" fill="#6F7582"></path>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_7452_21389">
                                                                <rect width="24" height="24" fill="white"></rect>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                                <span>Snapchat</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className=" mt-auto">
                            <p className="text-gray-C5C9D5 pl-4 mt-4 mb-1">Tools</p>
                            <ul>
                                <li>
                                    <a className="w-full flex items-center px-4 py-3 hover:bg-gray-eef0f5 rounded-lg font-medium relative" href="">
                                        <span className="mr-3">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_12118_26373)">
                                                    <path d="M19.4298 12.98C19.4698 12.66 19.4998 12.34 19.4998 12C19.4998 11.66 19.4698 11.34 19.4298 11.02L21.5398 9.37C21.7298 9.22 21.7798 8.95 21.6598 8.73L19.6598 5.27C19.5698 5.11 19.3998 5.02 19.2198 5.02C19.1598 5.02 19.0998 5.03 19.0498 5.05L16.5598 6.05C16.0398 5.65 15.4798 5.32 14.8698 5.07L14.4898 2.42C14.4598 2.18 14.2498 2 13.9998 2H9.99984C9.74984 2 9.53984 2.18 9.50984 2.42L9.12984 5.07C8.51984 5.32 7.95984 5.66 7.43984 6.05L4.94984 5.05C4.88984 5.03 4.82984 5.02 4.76984 5.02C4.59984 5.02 4.42984 5.11 4.33984 5.27L2.33984 8.73C2.20984 8.95 2.26984 9.22 2.45984 9.37L4.56984 11.02C4.52984 11.34 4.49984 11.67 4.49984 12C4.49984 12.33 4.52984 12.66 4.56984 12.98L2.45984 14.63C2.26984 14.78 2.21984 15.05 2.33984 15.27L4.33984 18.73C4.42984 18.89 4.59984 18.98 4.77984 18.98C4.83984 18.98 4.89984 18.97 4.94984 18.95L7.43984 17.95C7.95984 18.35 8.51984 18.68 9.12984 18.93L9.50984 21.58C9.53984 21.82 9.74984 22 9.99984 22H13.9998C14.2498 22 14.4598 21.82 14.4898 21.58L14.8698 18.93C15.4798 18.68 16.0398 18.34 16.5598 17.95L19.0498 18.95C19.1098 18.97 19.1698 18.98 19.2298 18.98C19.3998 18.98 19.5698 18.89 19.6598 18.73L21.6598 15.27C21.7798 15.05 21.7298 14.78 21.5398 14.63L19.4298 12.98ZM17.4498 11.27C17.4898 11.58 17.4998 11.79 17.4998 12C17.4998 12.21 17.4798 12.43 17.4498 12.73L17.3098 13.86L18.1998 14.56L19.2798 15.4L18.5798 16.61L17.3098 16.1L16.2698 15.68L15.3698 16.36C14.9398 16.68 14.5298 16.92 14.1198 17.09L13.0598 17.52L12.8998 18.65L12.6998 20H11.2998L11.1098 18.65L10.9498 17.52L9.88984 17.09C9.45984 16.91 9.05984 16.68 8.65984 16.38L7.74984 15.68L6.68984 16.11L5.41984 16.62L4.71984 15.41L5.79984 14.57L6.68984 13.87L6.54984 12.74C6.51984 12.43 6.49984 12.2 6.49984 12C6.49984 11.8 6.51984 11.57 6.54984 11.27L6.68984 10.14L5.79984 9.44L4.71984 8.6L5.41984 7.39L6.68984 7.9L7.72984 8.32L8.62984 7.64C9.05984 7.32 9.46984 7.08 9.87984 6.91L10.9398 6.48L11.0998 5.35L11.2998 4H12.6898L12.8798 5.35L13.0398 6.48L14.0998 6.91C14.5298 7.09 14.9298 7.32 15.3298 7.62L16.2398 8.32L17.2998 7.89L18.5698 7.38L19.2698 8.59L18.1998 9.44L17.3098 10.14L17.4498 11.27ZM11.9998 8C9.78984 8 7.99984 9.79 7.99984 12C7.99984 14.21 9.78984 16 11.9998 16C14.2098 16 15.9998 14.21 15.9998 12C15.9998 9.79 14.2098 8 11.9998 8ZM11.9998 14C10.8998 14 9.99984 13.1 9.99984 12C9.99984 10.9 10.8998 10 11.9998 10C13.0998 10 13.9998 10.9 13.9998 12C13.9998 13.1 13.0998 14 11.9998 14Z" fill="#6F7582"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_12118_26373">
                                                         <rect width="24" height="24" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        <span>Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="w-full flex items-center px-4 py-3 hover:bg-gray-eef0f5 rounded-lg font-medium relative" href="">
                                        <span className="mr-3">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_4354_4454)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5242 3.50524C3.52101 3.50837 3.51784 3.51151 3.51467 3.51467C3.51151 3.51784 3.50837 3.52101 3.50525 3.5242C1.26073 5.77373 0 8.82187 0 12C0 13.5759 0.310389 15.1363 0.913446 16.5922C1.51478 18.044 2.39537 19.3634 3.50519 20.4757C3.50833 20.4789 3.51149 20.4821 3.51467 20.4853C3.51786 20.4885 3.52105 20.4917 3.52426 20.4948C4.63657 21.6046 5.95605 22.4852 7.4078 23.0866C8.86371 23.6896 10.4241 24 12 24C13.5759 24 15.1363 23.6896 16.5922 23.0866C18.0439 22.4852 19.3634 21.6047 20.4756 20.4949C20.4789 20.4917 20.4821 20.4885 20.4853 20.4853C20.4885 20.4821 20.4917 20.4789 20.4949 20.4756C21.6047 19.3634 22.4852 18.0439 23.0866 16.5922C23.6896 15.1363 24 13.5759 24 12C24 8.82191 22.7393 5.77381 20.4948 3.52429C20.4917 3.52107 20.4885 3.51786 20.4853 3.51467C20.4821 3.51148 20.4789 3.50831 20.4757 3.50516C18.2262 1.2607 15.1781 0 12 0C8.82187 0 5.77373 1.26073 3.5242 3.50524ZM17.8865 4.41646C16.2116 3.11636 14.1427 2.4 12 2.4C9.85725 2.4 7.78836 3.11636 6.11352 4.41646L8.69159 6.99453C9.66577 6.35066 10.8148 6 12 6C13.1852 6 14.3342 6.35066 15.3084 6.99453L17.8865 4.41646ZM14.5197 9.42881C14.528 9.43761 14.5365 9.44632 14.5451 9.45493C14.5537 9.46354 14.5624 9.47199 14.5712 9.48028C15.2303 10.1528 15.6 11.0574 15.6 12C15.6 12.9426 15.2303 13.8472 14.5712 14.5197C14.5624 14.528 14.5537 14.5365 14.5451 14.5451C14.5365 14.5537 14.528 14.5624 14.5197 14.5712C13.8472 15.2303 12.9426 15.6 12 15.6C11.0574 15.6 10.1528 15.2303 9.48028 14.5712C9.47199 14.5624 9.46354 14.5537 9.45493 14.5451C9.44632 14.5365 9.43761 14.528 9.42881 14.5197C8.7697 13.8472 8.4 12.9426 8.4 12C8.4 11.0574 8.7697 10.1528 9.42881 9.48028C9.43761 9.47199 9.44632 9.46354 9.45493 9.45493C9.46354 9.44632 9.47199 9.43761 9.48028 9.42881C10.1528 8.7697 11.0574 8.4 12 8.4C12.9426 8.4 13.8472 8.7697 14.5197 9.42881ZM6.99453 8.69159L4.41646 6.11352C3.11636 7.78836 2.4 9.85725 2.4 12C2.4 13.2607 2.64831 14.509 3.13076 15.6738C3.45935 16.4671 3.89218 17.211 4.41649 17.8865L6.99453 15.3084C6.35066 14.3342 6 13.1852 6 12C6 10.8148 6.35066 9.66577 6.99453 8.69159ZM8.69159 17.0055L6.11355 19.5835C6.78901 20.1078 7.53294 20.5406 8.32624 20.8692C9.49096 21.3517 10.7393 21.6 12 21.6C13.2607 21.6 14.509 21.3517 15.6738 20.8692C16.4671 20.5406 17.211 20.1078 17.8865 19.5835L15.3084 17.0055C14.3342 17.6493 13.1852 18 12 18C10.8148 18 9.66577 17.6493 8.69159 17.0055ZM17.0055 15.3084C17.6493 14.3342 18 13.1852 18 12C18 10.8148 17.6493 9.66577 17.0055 8.69159L19.5835 6.11352C20.8836 7.78836 21.6 9.85725 21.6 12C21.6 13.2607 21.3517 14.509 20.8692 15.6738C20.5406 16.4671 20.1078 17.211 19.5835 17.8865L17.0055 15.3084Z" fill="#6F7582"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_4354_4454">
                                                        <rect width="24" height="24" fill="white"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        <span>Help & Support</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

