function linkChecker(inputText) {
    console.log("::: Running linkChecker :::", inputText);
    const URL_REGEX = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;

    return URL_REGEX.test(inputText);
}

export { linkChecker }
