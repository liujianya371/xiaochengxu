

const info = (value1, value2) => {
  if (false === true) {
    return;
  }

  if (!value1) {
    //一个参数都没有的情况
    console.log("测试日志打印");
    return;
  }
  if (value1 && !value2) {
    if ("object" === typeof arguments[0]) {
      console.log(value1);
    } else {
      console.log(value1);
    }

    return;
  }
  if (value1 && value2) {
    if ("object" === typeof arguments[1]) {
      // console.log(value1+ ":")
      console.log(value1 + ":", value2);
    } else {
      // console.log(value1 + ":" )
      console.log(value1 + ":", value2);
    }
  }
};

const error = value => {
  if (false === Conf.logSwitch) {
    return;
  }

  if (value) {
    console.error(value);
  } else {
    //一个参数都没有的情况
    console.error("有错误了");
  }
};

module.exports = {
  info: info,
  error: error
};
