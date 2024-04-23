const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

async function runTest() {
  let driver = await new Builder().forBrowser("chrome").build();
  //let TestResult = false;
  try {
    await driver.get("https://www.aviasales.by/?params=MSQ1");

    await driver.manage().setTimeouts({ implicit: 5000 });

    await driver.findElement(By.className("s__To9mtJ4hfX3P2uQY3VJ2")).click();

    await driver.findElement(By.className("s__pYAhaCkOP9mPTxKVg5Qi")).click();

    await driver
      .findElement(
        By.className(
          "s__pYAhaCkOP9mPTxKVg5Qi s__cQ6neS4ccCunOu9Ydn0k s__zSP50jyzjUujJHLXoQTv s__eEClvAD7BnPrQbwBW5zC s__p0epgEYgBbKyjc8MfJPw s__TUdVliOmtbp7_LIhzKiv s__HwTb5X6L7z4nYKZUc1JL s__as8afAOIALrrFQENKabF"
        )
      )
      .click();
    //await driver.findElement(By.id("loginMenuHeader")).click();

    // Ожидание открытия нового окна
    // await driver.wait(until.windowIsOpen());

    // // Получить список всех открытых окон
    // let windows = await driver.getAllWindowHandles();

    // // Переключиться на последнее (новое) окно
    // await driver.switchTo().window(windows[windows.length - 1]);

    let newWindow = await driver.wait(async () => {
      let windows = await driver.getAllWindowHandles();
      return windows.length > 1 ? windows[windows.length - 1] : null;
    }, 10000); // Таймаут ожидания в миллисекундах (10 секунд)

    // Переключиться на новое окно
    await driver.switchTo().window(newWindow);

    //await driver.findElement(By.className("VV3oRb YZVTmd SmR8"));

    //await driver.manage().setTimeouts({ implicit: 25000 });

    let elem = await driver.findElement(By.name("identifier"));
    await elem.sendKeys("palaznika608@gmail.com");

    await driver
      .findElement(
        By.className(
          "VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 BqKGqe Jskylb TrZEUc lw1w4b"
        )
      )
      .click();

    // await driver.findElement(
    //   By.className(
    //     "VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 BqKGqe Jskylb TrZEUc lw1w4b"
    //   )
    // );

    let elem2 = await driver.findElement(By.name("Passwd"));
    await elem2.sendKeys("K508a178y271");

    await driver.findElement(
      By.className(
        "VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 BqKGqe Jskylb TrZEUc lw1w4b"
      )
    );

    //.sendKeys("meow@gmail.com");

    // try {
    //   let elem = await driver.findElement(By.id("qr-login-password"));
    //   await elem.sendKeys("meow123", Key.RETURN);

    //   if (elem) {
    //     TestResult = true;
    //   }
    // } catch {}

    // Нажатие на кнопку "Accept All" для куки
    // const cardCategories = await driver.findElements(By.css(".card-category"));
    // console.log(cardCategories);

    // Выполняем клик на первых девяти элементах
    // for (let i = 0; i < Math.min(cardCategories.length, 9); i++) {
    //   await cardCategories[i].click();
    // }

    // Ввод места отправления и прибытия
    // await driver
    //   .findElement(By.xpath("//*[@id='bw-from']"))
    //   .sendKeys("Barcelona");
    // await driver
    //   .findElement(By.xpath("//*[@id='bw-to']"))
    //   .sendKeys("Adana", Key.RETURN);

    // Пауза для ожидания загрузки результатов
    // await driver.sleep(2000);

    // Нажатие на кнопку "Показать результаты"
    // await driver
    //   .findElement(
    //     By.xpath(
    //       "/html/body/div[8]/main/div/div/div/hero-component/div[3]/div/div/div/div/div[1]/div/div/div[5]/div[3]/div/button"
    //     )
    //   )
    //   .click();

    // // Пауза для ожидания загрузки результатов
    // await driver.sleep(2000);

    // // Нажатие на кнопку выбора даты вылета
    // await driver
    //   .findElement(
    //     By.xpath(
    //       "/html/body/div[8]/main/div/div/div/hero-component/div[3]/div/div/div/div/div[1]/div/div/div[5]/div[4]/div[4]/div/div[2]/div[2]/div[1]/table/tbody/tr[4]/td[1]"
    //     )
    //   )
    //   .click();

    // // Пауза для ожидания загрузки результатов
    // await driver.sleep(2000);

    // // Нажатие на кнопку выбора даты возврата
    // await driver
    //   .findElement(
    //     By.xpath(
    //       "//*[@id='flights-search-from']/div[4]/div[4]/div/div[2]/div[2]/div[1]/table/tbody/tr[3]/td[6]"
    //     )
    //   )
    //   .click();

    // // Нажатие на кнопку "Найти билеты"
    // await driver
    //   .findElement(
    //     By.xpath(
    //       "//*[@id='flights-search-from']/div[4]/div[4]/div/div[2]/div[3]/div[2]/button[2]"
    //     )
    //   )
    //   .click();

    // // Пауза для ожидания загрузки результатов
    // await driver.sleep(15000);

    // // Нажатие на первый результат
    // await driver
    //   .findElement(
    //     By.xpath(
    //       "/html/body/app-root/div/booking-flight-selection-page/div/booking-flight-result-card[1]/div/div/div[3]/div/div[1]/a"
    //     )
    //   )
    //   .click();

    // // Пауза для ожидания загрузки страницы с деталями
    // await driver.sleep(2000);

    // // Нажатие на кнопку выбора тарифа
    // await driver
    //   .findElement(
    //     By.css(
    //       "#fare-details-swiper-0001 > div > booking-fare-card:nth-child(1) > div > div:nth-child(4) > button"
    //     )
    //   )
    //   .click();

    // // Проверка URL страницы
    // assert.strictEqual(
    //   await driver.getCurrentUrl(),
    //   "https://booking.qatarairways.com/nsp/views/passenger.xhtml"
    // );
  } finally {
    await driver.quit();
    //return TestResult;
  }
}

// runTest().catch(console.error);

// describe("NSV Tests", function () {
//   this.timeout(30000);

//   it("Main page should have the correct title", async () => {
//     await runTest();
//   });
// });

// const { Builder, By, Key, until } = require("selenium-webdriver");
// const assert = require("chai").assert;

// async function contactPageTest() {
//   let driver = await new Builder().forBrowser("MicrosoftEdge").build();

//   try {
//     await driver.get(
//       "https://www.qatarairways.com/en/hia-hamad-international-airport.html?iid=ALL99782350"
//     );

//     // Ждем, пока элемент появится
//     await driver.sleep(10000);

//     const cookieAcceptAll = await driver
//       .findElement(By.id("cookie-accept-all"))
//       .catch(() => null);
//     if (cookieAcceptAll) {
//       // Если элемент найден, кликаем на него
//       await cookieAcceptAll.click();
//     }

//     // Находим элемент по атрибуту href и кликаем на него
//     await driver
//       .findElement(By.css("a[href='https://www.facebook.com/qatarairways']"))
//       .click();

//     // Проверяем, есть ли элемент с id "cookie-accept-all"
//   } finally {
//     await driver.quit();
//   }
// }

// describe("NSV Tests", function () {
//   this.timeout(600000);

//   it("Clicks on Facebook icon", async () => {
//     await contactPageTest();
//   });
// });

// async function mainPageTitleTest() {
//   let driver = await new Builder().forBrowser("MicrosoftEdge").build();

//   try {
//     await driver.get("https://www.qatarairways.com/en/homepage.html");

//     // const acceptBtn = await driver.findElement(By.id("acceptAll"));
//     // setTimeout(() => {
//     //   acceptBtn.click();
//     // }, 30000);

//     const title = await driver
//       .findElement(By.className("planyourtrip-title"))
//       .getText();
//     assert.include(
//       title,
//       "Start planning your next trip",
//       "Заголовок присутствует на главной странице"
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

async function runTest2() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://www.aviasales.by/?params=MSQ1");

    await driver.findElement(By.className("s__YlNPz3wu9X6GcpqSC9fj")).click();

    await driver.findElement(By.className("s__GpXZPGffa2DSeC3vCoSG")).click();

    //await driver.manage().setTimeouts({ implicit: 1500000 });
    await driver
      .findElement(
        By.className(
          "s__pYAhaCkOP9mPTxKVg5Qi s__cQ6neS4ccCunOu9Ydn0k s__tkvB9amX28GXeWxPcrad s__eEClvAD7BnPrQbwBW5zC s__p0epgEYgBbKyjc8MfJPw s__VtKkhjd_g3s0MVyvRx1g"
        )
      )
      .click();
  } finally {
    await driver.quit();
  }
}

describe("Aviasales Tests", function () {
  this.timeout(85000); // Установите допустимый таймаут

  // it("Authorization complete", async () => {
  //   await runTest();
  // });

  it("Change theme", async () => {
    await runTest2();
  });
});
