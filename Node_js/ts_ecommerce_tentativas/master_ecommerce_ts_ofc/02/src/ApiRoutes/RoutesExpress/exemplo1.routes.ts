import { Router, Request, Response } from "express"

export default (routerExemplo1: Router): void => {
  routerExemplo1.get("/exemplo1-get", async (req: Request, res: Response) => {
    res.json({ tester: "Rota Exemplo1" })
  })

  routerExemplo1.post("/exemplo1-post", async (req: Request, res: Response) => {
    const { prop1, prop2 } = await req.body
    return res.status(200).json({ prop1, prop2 })
  })
}
