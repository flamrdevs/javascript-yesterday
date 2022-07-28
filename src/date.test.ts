import { describe, expect, it } from "vitest";

import {
  second,
  minute,
  hour,
  day,
  getRelativeDateBySecond,
  getRelativeDateByMinute,
  getRelativeDateByHour,
  getRelativeDateByDay,
} from "./date";

describe("Second", () => {
  it("Typeof number", async () => {
    expect(second()).toBeTypeOf("number");
  });

  it("One second", async () => {
    expect(second()).toBe(1000);
  });

  it("Two seconds", async () => {
    expect(second(2)).toBe(2000);
  });
});

describe("Minute", () => {
  it("Typeof number", async () => {
    expect(minute()).toBeTypeOf("number");
  });

  it("One minute", async () => {
    expect(minute()).toBe(1000 * 60);
  });

  it("Two minutes", async () => {
    expect(minute(2)).toBe(2000 * 60);
  });
});

describe("Hour", () => {
  it("Typeof number", async () => {
    expect(hour()).toBeTypeOf("number");
  });

  it("One hour", async () => {
    expect(hour()).toBe(1000 * 60 * 60);
  });

  it("Two hours", async () => {
    expect(hour(2)).toBe(2000 * 60 * 60);
  });
});

describe("Hour", () => {
  it("Typeof number", async () => {
    expect(day()).toBeTypeOf("number");
  });

  it("One day", async () => {
    expect(day()).toBe(1000 * 60 * 60 * 24);
  });

  it("Two days", async () => {
    expect(day(2)).toBe(2000 * 60 * 60 * 24);
  });
});

describe("Get relative date by second", () => {
  it("Instance of Date", async () => {
    expect(getRelativeDateBySecond()).toBeInstanceOf(Date);
  });

  it("Now +1 second", async () => {
    expect(getRelativeDateBySecond(1).getTime()).toBe(new Date().getTime() + second(1));
  });

  it("Now -1 second", async () => {
    expect(getRelativeDateBySecond(-1).getTime()).toBe(new Date().getTime() + second(-1));
  });
});

describe("Get relative date by minute", () => {
  it("Instance of Date", async () => {
    expect(getRelativeDateByMinute()).toBeInstanceOf(Date);
  });

  it("Now +1 minute", async () => {
    expect(getRelativeDateByMinute(1).getTime()).toBe(new Date().getTime() + minute(1));
  });

  it("Now -1 minute", async () => {
    expect(getRelativeDateByMinute(-1).getTime()).toBe(new Date().getTime() + minute(-1));
  });
});

describe("Get relative date by hour", () => {
  it("Instance of Date", async () => {
    expect(getRelativeDateByHour()).toBeInstanceOf(Date);
  });

  it("Now +1 hour", async () => {
    expect(getRelativeDateByHour(1).getTime()).toBe(new Date().getTime() + hour(1));
  });

  it("Now -1 hour", async () => {
    expect(getRelativeDateByHour(-1).getTime()).toBe(new Date().getTime() + hour(-1));
  });
});

describe("Get relative date by day", () => {
  it("Instance of Date", async () => {
    expect(getRelativeDateByDay()).toBeInstanceOf(Date);
  });

  it("Now +1 day", async () => {
    expect(getRelativeDateByDay(1).getTime()).toBe(new Date().getTime() + day(1));
  });

  it("Now -1 day", async () => {
    expect(getRelativeDateByDay(-1).getTime()).toBe(new Date().getTime() + day(-1));
  });
});
