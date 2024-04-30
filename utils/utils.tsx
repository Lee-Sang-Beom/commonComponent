import { AuthMenuTreeResponse } from "@/types/common/MenuType";

export const curMenuDepth = (pathname: string) => {
  const curUrl = pathname.split("/");
  const depth1Url = curUrl[1];
  const depth2Url = curUrl[2];
  const depth3Url = curUrl[3];

  return { depth1Url, depth2Url, depth3Url };
};

export const menuByDepth = (menus: AuthMenuTreeResponse[]) => {
  const depth1Menu = menus.filter(
    (menu: AuthMenuTreeResponse) =>
      menu.level === 1 &&
      menu.menuNm !== "로그인" &&
      menu.menuTypeEnu.type === "PORTAL" &&
      menu.menuNm !== "통합검색"
    //&& menu.mainDisplayYn === "Y"
  );
  const depth2Menu = menus.filter(
    (menu: AuthMenuTreeResponse) =>
      menu.level === 2 &&
      menu.mainDisplayYn === "Y" &&
      menu.menuTypeEnu.type === "PORTAL"
  );
  const depth3Menu = menus.filter(
    (menu: AuthMenuTreeResponse) =>
      menu.level === 3 &&
      menu.mainDisplayYn === "Y" &&
      menu.menuTypeEnu.type === "PORTAL"
  );

  return { depth1Menu, depth2Menu, depth3Menu };
};

export function makeHostUrl(headers: Headers) {
  const protocol = headers.get("x-url")?.split("://")[0];
  let host = headers.get("host");
  if (host?.includes("localhost")) {
    host = host?.replace(/localhost/g, "127.0.0.1");
  }
  const hostUrl = protocol + "://" + host;

  return hostUrl;
}

export function getQueryParams<T>(query: string): T {
  const params = query.split("?")[1].split("&");
  let obj: T = {} as T;
  for (let i = 0; i < params.length; i++) {
    const [key, value] = params[i].split("=");

    // @ts-ignore
    // obj[key] = value;
    obj[key] =
      key === "conditions"
        ? JSON.parse(decodeURIComponent(value).replaceAll("+", " "))
        : value;
  }
  return obj;
}

export function makeUrlQuery(params: any) {
  const keys = Object.keys(params);
  let url = "";
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = params[keys[i]];

    url += key;
    url += "=";
    if (Array.isArray(value)) {
      url += JSON.stringify(value);
    } else {
      url += value;
    }
    if (keys.length - 1 !== i) {
      url += "&";
    }
  }
  return url;
}

export function addrToArea(addr: string) {
  const arr = addr.split(" ");
  let result: string = arr[0] + " " + arr[1];
  const checkArr = arr[2].split("");
  if (checkArr[checkArr.length - 1] === "구") {
    result = result + " " + arr[2];
  }
  return result;
}
