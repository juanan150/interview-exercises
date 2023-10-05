import { expect, describe, it } from "vitest";

import continentesRepresentados, { devsEuropa, transformArray } from ".";

describe("continentesRepresentados", () => {
  it("debería devolver true si todos los continentes están representados", () => {
    expect(
      continentesRepresentados([
        {
          firstName: "Fatima",
          lastName: "A.",
          country: "Algeria",
          continent: "Africa",
          age: 25,
          language: "JavaScript",
        },
        {
          firstName: "Agustín",
          lastName: "M.",
          country: "Chile",
          continent: "Americas",
          age: 37,
          language: "C",
        },
        {
          firstName: "Jing",
          lastName: "X.",
          country: "China",
          continent: "Asia",
          age: 39,
          language: "Ruby",
        },
        {
          firstName: "Laia",
          lastName: "P.",
          country: "Andorra",
          continent: "Europe",
          age: 55,
          language: "Ruby",
        },
        {
          firstName: "Oliver",
          lastName: "Q.",
          country: "Australia",
          continent: "Oceania",
          age: 65,
          language: "PHP",
        },
      ])
    ).toBe(true);
  });

  it("debería devolver false si todos los continentes no están representados", () => {
    expect(
      continentesRepresentados([
        {
          firstName: "Fatima",
          lastName: "A.",
          country: "Algeria",
          continent: "Africa",
          age: 25,
          language: "JavaScript",
        },
      ])
    ).toBe(false);
  });

  it("debería devolver 1 dev europeo", () => {
    expect(
      devsEuropa([
        {
          firstName: "Fatima",
          lastName: "A.",
          country: "Algeria",
          continent: "Africa",
          age: 25,
          language: "JavaScript",
        },
        {
          firstName: "Agustín",
          lastName: "M.",
          country: "Chile",
          continent: "Americas",
          age: 37,
          language: "C",
        },
        {
          firstName: "Jing",
          lastName: "X.",
          country: "China",
          continent: "Asia",
          age: 39,
          language: "Ruby",
        },
        {
          firstName: "Laia",
          lastName: "P.",
          country: "Andorra",
          continent: "Europe",
          age: 55,
          language: "Ruby",
        },
        {
          firstName: "Oliver",
          lastName: "Q.",
          country: "Australia",
          continent: "Oceania",
          age: 65,
          language: "PHP",
        },
      ])
    ).toBe(1);
  });

  it("debería devolver 0 dev europeo", () => {
    expect(
      devsEuropa([
        {
          firstName: "Fatima",
          lastName: "A.",
          country: "Algeria",
          continent: "Africa",
          age: 25,
          language: "JavaScript",
        },
        {
          firstName: "Agustín",
          lastName: "M.",
          country: "Chile",
          continent: "Americas",
          age: 37,
          language: "C",
        },
        {
          firstName: "Jing",
          lastName: "X.",
          country: "China",
          continent: "Asia",
          age: 39,
          language: "Ruby",
        },
        {
          firstName: "Laia",
          lastName: "P.",
          country: "China",
          continent: "Asia",
          age: 55,
          language: "Ruby",
        },
        {
          firstName: "Oliver",
          lastName: "Q.",
          country: "Australia",
          continent: "Oceania",
          age: 65,
          language: "PHP",
        },
      ])
    ).toBe(0);
  });

  it("debería decir Fatima", () => {
    const newArr = transformArray([
      {
        firstName: "Fatima",
        lastName: "A.",
        country: "Algeria",
        continent: "Africa",
        age: 25,
        language: "JavaScript",
      },
      {
        firstName: "Agustín",
        lastName: "M.",
        country: "Chile",
        continent: "Americas",
        age: 37,
        language: "C",
      },
      {
        firstName: "Jing",
        lastName: "X.",
        country: "China",
        continent: "Asia",
        age: 39,
        language: "Ruby",
      },
      {
        firstName: "Laia",
        lastName: "P.",
        country: "China",
        continent: "Asia",
        age: 55,
        language: "Ruby",
      },
      {
        firstName: "Oliver",
        lastName: "Q.",
        country: "Australia",
        continent: "Oceania",
        age: 65,
        language: "PHP",
      },
    ]);
    expect(newArr[0].greeting()).toMatch(/Fatima/);
  });
});
