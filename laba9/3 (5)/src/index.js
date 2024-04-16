const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("chai").assert;

async function mainPageTitleTest() {
  let driver = await new Builder().forBrowser("MicrosoftEdge").build();

  try {
    await driver.get("https://www.qatarairways.com/en/homepage.html");
    const title = await driver
      .findElement(By.className("planyourtrip-title"))
      .getText();
    assert.include(
      title,
      "Start planning your next trip",
      "Заголовок присутствует на главной странице"
    );
  } finally {
    await driver.quit();
  }
}

describe("NSV Tests", function () {
  this.timeout(30000);

  it("Main page should have the correct title", async () => {
    await mainPageTitleTest();
  });
});

async function contactPageTest() {
  let driver = await new Builder().forBrowser("MicrosoftEdge").build();

  try {
    await driver.get("https://www.qatarairways.com/en/homepage.html"); // Замените example.com на вашу URL
    await driver.findElement(By.getText("Agree")).click();
    await driver.findElement(By.id("loginMenuHeader")).click(); // Замените "formField" на идентификатор вашего поля формы
    await driver.findElement(By.id("qr-login")).click(); // Замените "submitButton" на идентификатор вашей кнопки отправки формы
    await driver.wait(
      until.urlIs("https://www.qatarairways.com/en/homepage.html")
    ); // Замените "https://example.com/success" на URL страницы успешной отправки формы
    assert.equal(
      await driver.getCurrentUrl(),
      "https://www.qatarairways.com/en/homepage.html",
      "Форма успешно отправлена"
    );
  } finally {
    await driver.quit();
  }
}

describe("NSV Tests", function () {
  this.timeout(30000);

  it("Data has been sent", async () => {
    await contactPageTest();
  });
});

// const { Builder, By, until } = require("selenium-webdriver");
// const assert = require("chai").assert;

// async function mainPageTitleTest() {
//   let driver = await new Builder().forBrowser("MicrosoftEdge").build();

//   try {
//     await driver.get("https://www.qatarairways.com/en/homepage.html");
//     const title = await driver.getTitle();
//     assert.include(
//       title,
//       "Start planning your next trip", // Замените "Expected Title" на ожидаемый заголовок
//       "Заголовок страницы соответствует ожидаемому на главной странице"
//     );
//   } finally {
//     await driver.quit();
//   }
// }

// describe("NSV Tests", function () {
//   this.timeout(30000);

//   it("Main page should have the correct title", async () => {
//     await mainPageTitleTest();
//   });
// });

// async function contactPageTest() {
//   let driver = await new Builder().forBrowser("MicrosoftEdge").build();

//   try {
//     await driver.get("https://www.qatarairways.com/en/homepage.html");
//     await driver.findElement(By.linkText("Contact us")).click();
//     await driver.wait(until.elementLocated(By.className("ga_ym_t")), 20000);
//     const phone = await driver.findElement(By.className("ga_ym_t")).getText();
//     assert.include(
//       phone,
//       "+31",
//       "Номер телефона отображается на странице контактов"
//     );
//   } finally {
//     await driver.quit();
//   }
// }

// describe("NSV Tests", function () {
//   this.timeout(30000);

//   it("Contact page should display a phone number", async () => {
//     await contactPageTest();
//   });
// });

// async function formSubmissionTest() {
//   let driver = await new Builder().forBrowser("MicrosoftEdge").build();

//   try {
//     await driver.get("https://example.com"); // Замените example.com на вашу URL
//     await driver.findElement(By.id("formField")).sendKeys("Input Data"); // Замените "formField" на идентификатор вашего поля формы
//     await driver.findElement(By.id("submitButton")).click(); // Замените "submitButton" на идентификатор вашей кнопки отправки формы
//     await driver.wait(until.urlIs("https://example.com/success")); // Замените "https://example.com/success" на URL страницы успешной отправки формы
//     assert.equal(
//       await driver.getCurrentUrl(),
//       "https://example.com/success",
//       "Форма успешно отправлена"
//     );
//   } finally {
//     await driver.quit();
//   }
// }

// describe("Form Submission Tests", function () {
//   this.timeout(30000);

//   it("Form should submit successfully", async () => {
//     await formSubmissionTest();
//   });
// });
