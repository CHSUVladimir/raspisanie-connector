import Buildings from "../../src/Buildings"

const headers: HeadersInit = new Headers()
headers.set("Content-Type", "application/json")

const mockResponse: Response = {
   text: () =>
      Promise.resolve(
         `[
            {
              "id": 1471771374063195100,
              "title": "Учебно-лабораторный корпус № 6 (Советский, 10)"
            },
            {
              "id": 1471886253797414000,
              "title": "Учебно-лабораторный корпус № 3 (ул.М.Горького, 14)"
            },
            {
              "id": 1471886587531891700,
              "title": "Учебно-лабораторный корпус № 5 (Луначарского, 5А)"
            },
            {
              "id": 1484668639063839700,
              "title": "Учебно-лабораторный корпус № 1 (Советский, 8)"
            },
            {
              "id": 1484669119576937500,
              "title": "Учебно-лабораторный корпус № 2 (Победы, 12)"
            },
            {
              "id": 1484669348207400000,
              "title": "Учебно-лабораторный корпус № 4 (Дзержинского, 30)"
            },
            {
              "id": 1490439577620452400,
              "title": "Учебно-лабораторный корпус № 8 (Советский пр., 25)"
            },
            {
              "id": 1490442417495610400,
              "title": "Спортивный комплекс \"Университетский\" (ул. Труда, 3)"
            },
            {
              "id": 1490442763313878000,
              "title": "Учебный корпус № 3 (ул. М. Горького, 12)"
            },
            {
              "id": 1491457877710214100,
              "title": "Спортивно-оздоровительный комплекс (ул.Чкалова, 31А)"
            },
            {
              "id": 1492341337337369600,
              "title": "Гаражи (пр. Победы, 12)"
            },
            {
              "id": 1492634331675366400,
              "title": "Гаражи для спецмашин - учебная лаборатория диагностики автотранспорта 1 (Сов. 25)"
            },
            {
              "id": 1492634664559449000,
              "title": "Гаражи для спецмашин - учебная лаборатория диагностики автотранспорта 2 (Сов. 25)"
            },
            {
              "id": 1492901605554525200,
              "title": "Спортивный корпус (ул.Труда,д.3)"
            },
            {
              "id": 1492901989869163500,
              "title": "Стрелковый тир (ул.Труда, д.3)"
            },
            {
              "id": 1492902174144861200,
              "title": "Асфальтовые дороги стадиона (ул.Труда, д.3)"
            },
            {
              "id": 1492902298328765400,
              "title": "Асфальтовые дорожки стадиона (ул.Труда, д.3)"
            },
            {
              "id": 1492902413071291400,
              "title": "Футбольное поле (ул.Труда, д.3)"
            },
            {
              "id": 1492902731193521200,
              "title": "Спортивный комплекс \"Университетский\" (ул.Труда, д.3)"
            },
            {
              "id": 1492902926598804500,
              "title": "Гимнастическая площадка (ул.Труда,д.3)"
            },
            {
              "id": 1492903026366616600,
              "title": "Тенисный корт №2 (ул.Труда, д.3)"
            },
            {
              "id": 1492903124458804200,
              "title": "Тенисный корт №1 (ул.Труда,д.3)"
            },
            {
              "id": 1492903230370223000,
              "title": "Беговые дорожки (ул.Труда, д.3)"
            },
            {
              "id": 1492903330598360000,
              "title": "Баскетбольное, волейбольное поля (ул.Труда, д.3)"
            },
            {
              "id": 1492903415628436500,
              "title": "Футбольное поле с секторами (ул.Труда, д.3)"
            }
          ]`,
      ),
   headers: headers,
   ok: true,
   redirected: false,
   status: 200,
   statusText: "Ok",
   type: "default",
   url: "testURL",
   clone: () => {
      return mockResponse
   },
   body: null,
   bodyUsed: true,
   arrayBuffer: () =>
      new Promise<ArrayBuffer>((resolve) => {
         resolve(new ArrayBuffer(8))
      }),
   blob: () =>
      new Promise<Blob>((resolve) => {
         resolve(new Blob())
      }),
   formData: () =>
      new Promise<FormData>((resolve) => {
         let f: FormData = new FormData()
         resolve(f)
      }),
   json: () =>
      Promise.resolve([
         {
            id: 1471771374063195100,
            title: "Учебно-лабораторный корпус № 6 (Советский, 10)",
         },
         {
            id: 1471886253797414000,
            title: "Учебно-лабораторный корпус № 3 (ул.М.Горького, 14)",
         },
         {
            id: 1471886587531891700,
            title: "Учебно-лабораторный корпус № 5 (Луначарского, 5А)",
         },
         {
            id: 1484668639063839700,
            title: "Учебно-лабораторный корпус № 1 (Советский, 8)",
         },
         {
            id: 1484669119576937500,
            title: "Учебно-лабораторный корпус № 2 (Победы, 12)",
         },
         {
            id: 1484669348207400000,
            title: "Учебно-лабораторный корпус № 4 (Дзержинского, 30)",
         },
         {
            id: 1490439577620452400,
            title: "Учебно-лабораторный корпус № 8 (Советский пр., 25)",
         },
         {
            id: 1490442417495610400,
            title: 'Спортивный комплекс "Университетский" (ул. Труда, 3)',
         },
         {
            id: 1490442763313878000,
            title: "Учебный корпус № 3 (ул. М. Горького, 12)",
         },
         {
            id: 1491457877710214100,
            title: "Спортивно-оздоровительный комплекс (ул.Чкалова, 31А)",
         },
         {
            id: 1492341337337369600,
            title: "Гаражи (пр. Победы, 12)",
         },
         {
            id: 1492634331675366400,
            title: "Гаражи для спецмашин - учебная лаборатория диагностики автотранспорта 1 (Сов. 25)",
         },
         {
            id: 1492634664559449000,
            title: "Гаражи для спецмашин - учебная лаборатория диагностики автотранспорта 2 (Сов. 25)",
         },
         {
            id: 1492901605554525200,
            title: "Спортивный корпус (ул.Труда,д.3)",
         },
         {
            id: 1492901989869163500,
            title: "Стрелковый тир (ул.Труда, д.3)",
         },
         {
            id: 1492902174144861200,
            title: "Асфальтовые дороги стадиона (ул.Труда, д.3)",
         },
         {
            id: 1492902298328765400,
            title: "Асфальтовые дорожки стадиона (ул.Труда, д.3)",
         },
         {
            id: 1492902413071291400,
            title: "Футбольное поле (ул.Труда, д.3)",
         },
         {
            id: 1492902731193521200,
            title: 'Спортивный комплекс "Университетский" (ул.Труда, д.3)',
         },
         {
            id: 1492902926598804500,
            title: "Гимнастическая площадка (ул.Труда,д.3)",
         },
         {
            id: 1492903026366616600,
            title: "Тенисный корт №2 (ул.Труда, д.3)",
         },
         {
            id: 1492903124458804200,
            title: "Тенисный корт №1 (ул.Труда,д.3)",
         },
         {
            id: 1492903230370223000,
            title: "Беговые дорожки (ул.Труда, д.3)",
         },
         {
            id: 1492903330598360000,
            title: "Баскетбольное, волейбольное поля (ул.Труда, д.3)",
         },
         {
            id: 1492903415628436500,
            title: "Футбольное поле с секторами (ул.Труда, д.3)",
         },
      ]),
}

const mockErrResponse: Response = {
   text: () =>
      Promise.resolve(
         `{
            "code": 403,
            "status": "FORBIDDEN",
            "description": "Token is not valid"
          }`,
      ),
   headers: headers,
   ok: true,
   redirected: false,
   status: 200,
   statusText: "Ok",
   type: "default",
   url: "testURL",
   clone: () => {
      return mockErrResponse
   },
   body: null,
   bodyUsed: true,
   arrayBuffer: () =>
      new Promise<ArrayBuffer>((resolve) => {
         resolve(new ArrayBuffer(8))
      }),
   blob: () =>
      new Promise<Blob>((resolve) => {
         resolve(new Blob())
      }),
   formData: () =>
      new Promise<FormData>((resolve) => {
         let f: FormData = new FormData()
         resolve(f)
      }),
   json: () =>
      Promise.resolve({
         code: 403,
         status: "FORBIDDEN",
         description: "Token is not valid",
      }),
}

const mockUndResponse: Response = {
   text: () =>
      Promise.resolve(`<!DOCTYPE HTML>

    <html>
    
        <head>
    
            <meta charset="utf-8">
    
            <link href="/img/favicon.ico" rel="shortcut icon"/>
    
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
            <meta name="description" content="">
    
            <meta name="author" content="">
    
    
    
            <title>Авторизация</title>
    
    
    
            <link rel="stylesheet" type="text/css" href="/css/style.css"/>
    
            <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css"/>
    
    
    
        </head>
    
    
    
        <body><noscript><meta HTTP-EQUIV="refresh" content="0;url='http://api.chsu.ru/login?PageSpeed=noscript'" /><style><!--table,div,span,font,p{display:none} --></style><div style="display:block">Please click <a href="http://api.chsu.ru/login?PageSpeed=noscript">here</a> if you are not redirected within a few seconds.</div></noscript>
    
    
    
            <div class="container-flex">
    
                <div class="auth-container">
    
                    <div class="header">
    
                        <h1>Пожалуйста авторизуйтесь</h1>
    
                    </div>
    
                    <div class="inner">
    
                        <div class="form">
    
                            
    
                            <form action="perform_login" method="POST">
    
                                <div class="form-group">
    
                                    <input type="text" class="form-control" name="username" placeholder="Login"/>
    
                                </div>
    
                                <div class="form-group">
    
                                    <input type="password" class="form-control" name="password" placeholder="Password"/>
    
                                </div>
    
                                <button class="btn btn-lg btn-primary btn-sm" type="submit">Войти</button>
    
                            </form>
    
                        </div>
    
                    </div>
    
                </div>
    
            </div>
    
        </body>
    
    </html>`),
   headers: headers,
   ok: true,
   redirected: false,
   status: 200,
   statusText: "Ok",
   type: "default",
   url: "testURL",
   clone: () => {
      return mockErrResponse
   },
   body: null,
   bodyUsed: true,
   arrayBuffer: () =>
      new Promise<ArrayBuffer>((resolve) => {
         resolve(new ArrayBuffer(8))
      }),
   blob: () =>
      new Promise<Blob>((resolve) => {
         resolve(new Blob())
      }),
   formData: () =>
      new Promise<FormData>((resolve) => {
         let f: FormData = new FormData()
         resolve(f)
      }),
   json: () =>
      Promise.resolve(
         JSON.parse(`<!DOCTYPE HTML>

    <html>
    
        <head>
    
            <meta charset="utf-8">
    
            <link href="/img/favicon.ico" rel="shortcut icon"/>
    
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
            <meta name="description" content="">
    
            <meta name="author" content="">
    
    
    
            <title>Авторизация</title>
    
    
    
            <link rel="stylesheet" type="text/css" href="/css/style.css"/>
    
            <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css"/>
    
    
    
        </head>
    
    
    
        <body><noscript><meta HTTP-EQUIV="refresh" content="0;url='http://api.chsu.ru/login?PageSpeed=noscript'" /><style><!--table,div,span,font,p{display:none} --></style><div style="display:block">Please click <a href="http://api.chsu.ru/login?PageSpeed=noscript">here</a> if you are not redirected within a few seconds.</div></noscript>
    
    
    
            <div class="container-flex">
    
                <div class="auth-container">
    
                    <div class="header">
    
                        <h1>Пожалуйста авторизуйтесь</h1>
    
                    </div>
    
                    <div class="inner">
    
                        <div class="form">
    
                            
    
                            <form action="perform_login" method="POST">
    
                                <div class="form-group">
    
                                    <input type="text" class="form-control" name="username" placeholder="Login"/>
    
                                </div>
    
                                <div class="form-group">
    
                                    <input type="password" class="form-control" name="password" placeholder="Password"/>
    
                                </div>
    
                                <button class="btn btn-lg btn-primary btn-sm" type="submit">Войти</button>
    
                            </form>
    
                        </div>
    
                    </div>
    
                </div>
    
            </div>
    
        </body>
    
    </html>`),
      ),
}
const semafore: { [key: string]: { wait: Promise<void>; fetch: Promise<Response>; end: boolean; onEnd?: () => void } } =
   {}

function configureSemafore() {
   semafore.normalConn = {
      wait: new Promise((resolve) => {
         resolve()
      }),
      fetch: Promise.resolve(mockResponse),
      end: false,
   }
   semafore.ErrCon = {
      wait: new Promise((resolve) => {
         if (semafore.normalConn) {
            semafore.normalConn.onEnd = () => {
               resolve()
            }
         } else {
            resolve()
         }
      }),
      fetch: Promise.resolve(mockErrResponse),
      end: false,
   }
   semafore.UndCon = {
      wait: new Promise((resolve) => {
         if (semafore.ErrCon) {
            semafore.ErrCon.onEnd = () => {
               resolve()
            }
         } else {
            resolve()
         }
      }),
      fetch: Promise.resolve(mockUndResponse),
      end: false,
   }
}

describe("Buildings", () => {
   configureSemafore()

   test("normal load", async () => {
      await semafore.normalConn.wait
      global.fetch = jest.fn(() => semafore.normalConn.fetch.then())
      await Buildings.Load()
      semafore.normalConn.end = true
      if (semafore.normalConn.onEnd) semafore.normalConn.onEnd()
      expect(Buildings.Buildings.length).toBe(25)
   })

   test("error connection", async () => {
      await semafore.ErrCon.wait
      global.fetch = jest.fn(() => semafore.ErrCon.fetch)
      try {
         await Buildings.Load()
         semafore.ErrCon.end = true
         if (semafore.ErrCon.onEnd) semafore.ErrCon.onEnd()
         throw new Error("test be are incorrect!")
      } catch (er) {
         const err = er as any
         semafore.ErrCon.end = true
         if (semafore.ErrCon.onEnd) semafore.ErrCon.onEnd()
         expect(err.message).toBe("Unauthorized (Token is not valid)")
         expect(err["cause"]).toStrictEqual({ code: 403, description: "Token is not valid", status: "FORBIDDEN" })
      }
   })

   test("error udefinded", async () => {
      await semafore.UndCon.wait
      global.fetch = jest.fn(() => semafore.UndCon.fetch)
      try {
         await Buildings.Load()
         semafore.UndCon.end = true
         if (semafore.UndCon.onEnd) semafore.UndCon.onEnd()
         throw new Error("test be are incorrect!")
      } catch (er) {
         const err = er as any
         semafore.UndCon.end = true
         if (semafore.UndCon.onEnd) semafore.UndCon.onEnd()
         expect(err.message).toBe("Unauthorized or connection lost!")
      }
   })
})
