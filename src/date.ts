//	====================================================================================
//	MAIN
//	====================================================================================

const ONE_MILLISECOND = 1;

const ONE_SECOND = 1000 * ONE_MILLISECOND;

const ONE_MINUTE = 60 * ONE_SECOND;

const ONE_HOUR = 60 * ONE_MINUTE;

const ONE_DAY = 24 * ONE_HOUR;

function second(value: number = 1) {
  return ONE_SECOND * value;
}

function minute(value: number = 1) {
  return ONE_MINUTE * value;
}

function hour(value: number = 1) {
  return ONE_HOUR * value;
}

function day(value: number = 1) {
  return ONE_DAY * value;
}

function getRelativeDateBySecond(value: number = 0) {
  return new Date(new Date().getTime() + second(value));
}

function getRelativeDateByMinute(value: number = 0) {
  return new Date(new Date().getTime() + minute(value));
}

function getRelativeDateByHour(value: number = 0) {
  return new Date(new Date().getTime() + hour(value));
}

function getRelativeDateByDay(value: number = 0) {
  return new Date(new Date().getTime() + day(value));
}

//	====================================================================================
//	EXPORTS
//	====================================================================================

export {
  ONE_SECOND,
  ONE_MINUTE,
  ONE_HOUR,
  ONE_DAY,
  second,
  minute,
  hour,
  day,
  getRelativeDateBySecond,
  getRelativeDateByMinute,
  getRelativeDateByHour,
  getRelativeDateByDay,
};
