const toPersianNumber = (num) => {
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    return num
        .toString()
        .replace(/\d/g, (d) => persianDigits[parseInt(d)]);
};

export default toPersianNumber;
