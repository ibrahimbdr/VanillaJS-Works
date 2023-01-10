//Get Cookie///////////////////////////////////////////

export function getCookie(cookieName) {
  try {
    let cookieList = [];
    document.cookie
      .split(";")
      .forEach(
        (element) =>
          (cookieList[element.split("=")[0].trim()] = element
            .split("=")[1]
            .trim())
      );
    return cookieList[cookieName];
  } catch (error) {
    console.warn(error.message);
  }
}

//Set Cookie///////////////////////////////////////////

export function setCookie(cookieName, cookieValue, expiryDate) {
  try {
    document.cookie = `${cookieName}=${cookieValue};expires=${expiryDate}`;
  } catch (error) {
    console.warn(error.message);
  }
}

//Delete Cookie///////////////////////////////////////////

export function deleteCookie(cookieName) {
  try {
    var d = new Date();
    d.setMonth(d.getMonth() - 3);
    document.cookie = `${cookieName}=;expires=${d}`;
  } catch (error) {
    console.warn(error.message);
  }
}

//All Cookie///////////////////////////////////////////

export function allCookieList() {
  try {
    let cookieList = [];
    const cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
      var cookieElementArr = cookieArr[i].split("=");
      cookieElementArr[0].trim();
      cookieElementArr[1].trim();
      cookieList[cookieElementArr[0]] = cookieElementArr[1];
    }
    return cookieList;
  } catch (error) {
    console.warn(error.message);
  }
}

//Has Cookie///////////////////////////////////////////

export function hasCookie(cookieName) {
  try {
    var nameArr = [];
    if (document.cookie == "") {
      return false;
    } else {
      document.cookie
        .split(";")
        .forEach(
          (element) =>
            (nameArr[element.split("=")[0].trim()] = element
              .split("=")[1]
              .trim())
        );

      return nameArr.hasOwnProperty(cookieName);
    }
  } catch (error) {
    console.warn(error.message);
  }
}
