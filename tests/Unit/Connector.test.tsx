import {RaspisanieConnector, RaspisanieSettings} from '../../src';


export const URLS={
    main:'main/',
    Signin:'Signin',
    Validation:'Validation',
    Building:'Building',
    Auditorium:'Auditorium',
    TimeTable:'TimeTable'
}

export const Auth={
    username:'TestUser',
    password:'UserPwd'
}

const headers: HeadersInit = new Headers();
headers.set('Content-Type', 'application/json');

const mockResponse: Response = {
    text: () =>
      Promise.resolve(
        `{
            "data": "sessionIdOfmanywords",
            "error": null
        }`,
      ),
    headers: headers,
    ok: true,
    redirected: false,
    status: 200,
    statusText: 'Ok',
    type: 'default',
    url: 'testURL',
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
    json: () => Promise.resolve(
        {
            data: "sessionIdOfmanywords",
            error: null
        }
    ),
  }

  const mockErrResponse: Response = {
    text: () =>
      Promise.resolve(
        `{
            "data": null,
            "error": {
              "code": 401,
              "status": "UNAUTHORIZED",
              "description": "Не корректные данные для авторизации"
            }
          }`,
      ),
    headers: headers,
    ok: true,
    redirected: false,
    status: 200,
    statusText: 'Ok',
    type: 'default',
    url: 'testURL',
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
    json: () => Promise.resolve(
        {
            data: null,
            error: {
              code: 401,
              status: "UNAUTHORIZED",
              description: "Не корректные данные для авторизации"
            }
          }
    ),
  }

  const mockVTResponse: Response = {
    text: () =>
      Promise.resolve(
        `true`,
      ),
    headers: headers,
    ok: true,
    redirected: false,
    status: 200,
    statusText: 'Ok',
    type: 'default',
    url: 'testURL',
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
    json: () => Promise.resolve(true),
  }

  const mockVFResponse: Response = {
    text: () =>
      Promise.resolve(
        `false`,
      ),
    headers: headers,
    ok: true,
    redirected: false,
    status: 200,
    statusText: 'Ok',
    type: 'default',
    url: 'testURL',
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
    json: () => Promise.resolve(false),
  }
  const semafore:{[key:string]:{wait:Promise<void>, fetch:Promise<Response>, end:boolean, onEnd?:()=>void}}={};

  describe('Connector', ()=>{   
    RaspisanieSettings.URLS=URLS;
    RaspisanieSettings.Auth=Auth;
    semafore.normalConn={
      wait:new Promise(resolve=>{
        resolve();
      }),
      fetch:Promise.resolve(mockResponse),
      end:false
    };
    semafore.ErrCon={
      wait:new Promise(resolve=>{
        if(semafore.normalConn){
          semafore.normalConn.onEnd=()=>{
            resolve();
          }
          
        }else{
          resolve();
        }
      }),
      fetch:Promise.resolve(mockErrResponse),
      end:false
    };
    semafore.ValidT={
      wait:new Promise(resolve=>{
        if(semafore.ErrCon){
          semafore.ErrCon.onEnd=()=>{
            resolve();
          }
        }else{
          resolve();
        }
      }),
      fetch:Promise.resolve(mockVTResponse),
      end:false
    };
    semafore.ValidF={
      wait:new Promise(resolve=>{
        if(semafore.ValidT){
          semafore.ValidT.onEnd=()=>{
            resolve();
          }
        }else{
          resolve();
        }
      }),
      fetch:Promise.resolve(mockVFResponse),
      end:false
    }
    
    test('normal connection', async ()=>{
      await semafore.normalConn.wait.then();
       global.fetch =jest.fn(() =>semafore.normalConn.fetch.then());        
        const con = new RaspisanieConnector();
        await con.Connect();
        expect(RaspisanieConnector.SesionId).toBe('sessionIdOfmanywords');
        semafore.normalConn.end=true;
        if(semafore.normalConn.onEnd)semafore.normalConn.onEnd();
    });
    
    test('error connection', async ()=>{        
        await semafore.ErrCon.wait;        
        global.fetch = jest.fn(() => semafore.ErrCon.fetch)                    
                    const con = new RaspisanieConnector();
                    try{
                        await con.Connect();
                        expect(RaspisanieConnector.SesionId).toBe('');
                    }catch(er){                        
                        expect(RaspisanieConnector.SesionId).toBe('');
                        const err=er as any;
                        expect(err.message).toBe("Не корректные данные для авторизации");
                        expect(err['cause']).toStrictEqual({data: null, error:{"code": 401, "description": "Не корректные данные для авторизации","status": "UNAUTHORIZED"}});
                    } 
                    semafore.ErrCon.end=true; 
                    if(semafore.ErrCon.onEnd)semafore.ErrCon.onEnd();
    });

    test('Validate true', async()=>{
      await semafore.ValidT.wait;
      global.fetch = jest.fn(() => semafore.ValidT.fetch)
      const con = new RaspisanieConnector();
      const res = await con.Validate();
      expect(res).toBeTruthy();
      semafore.ValidT.end=true; 
      if(semafore.ValidT.onEnd)semafore.ValidT.onEnd();
    });

    test('Validate false', async()=>{
      await semafore.ValidF.wait;
      global.fetch = jest.fn(() => semafore.ValidF.fetch)
      const con = new RaspisanieConnector();
      const res = await con.Validate();
      expect(res).toBeFalsy();
      semafore.ValidF.end=true; 
      if(semafore.ValidF.onEnd)semafore.ValidF.onEnd();
    });
            
})