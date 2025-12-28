import { Request, Response } from "express";

// ============================================================================
// CONTROLLERS - Funções que processam as rotas definidas no HTML
// ============================================================================

// CONTROLLER DA ROTA HOME (/)
//
// ONDE É CHAMADO NO HTML:
// - <a href="/">PetDevShop</a>
// - <li class="active"><a href="/">Todos</a></li>
//
// COMO FUNCIONA:
// 1. Usuário clica em um link que aponta para "/"
// 2. O Express recebe a requisição GET para "/"
// 3. Chama esta função home()
// 4. res.render() renderiza o template "pages/page"
// 5. O HTML renderizado é enviado de volta ao navegador
//
// FLUXO: Link "/" → Express → home() → renderiza "pages/page" → navegador
export const home = (req: Request, res: Response) => {
  res.render("pages/page");
};

// CONTROLLER DA ROTA DOGS (/dogs)
//
// ONDE É CHAMADO NO HTML:
// - <li class=""><a href="/dogs">Cachorros</a></li>
//
// COMO FUNCIONA:
// 1. Usuário clica no link "Cachorros" que aponta para "/dogs"
// 2. O Express recebe a requisição GET para "/dogs"
// 3. Chama esta função dogs()
// 4. res.send() envia o texto simples "dogs" como resposta
// 5. O navegador exibe apenas a palavra "dogs"
//
// NOTA: Está enviando apenas texto, provavelmente será alterado para:
// res.render("pages/page", { pets: cachorrosDoDatabase })
//
// FLUXO: Link "/dogs" → Express → dogs() → envia "dogs" → navegador
export const dogs = (req: Request, res: Response) => {
  res.send("dogs");
};

// CONTROLLER DA ROTA CATS (/cats)
//
// ONDE É CHAMADO NO HTML:
// - <li class=""><a href="/cats">Gatos</a></li>
//
// COMO FUNCIONA:
// 1. Usuário clica no link "Gatos" que aponta para "/cats"
// 2. O Express recebe a requisição GET para "/cats"
// 3. Chama esta função cats()
// 4. res.send() envia o texto simples "cats"
//
// NOTA: Implementação temporária, depois deve filtrar apenas gatos
//
// FLUXO: Link "/cats" → Express → cats() → envia "cats" → navegador
export const cats = (req: Request, res: Response) => {
  res.send("cats");
};

// CONTROLLER DA ROTA FISHES (/fishes)
//
// ONDE É CHAMADO NO HTML:
// - <li class=""><a href="/fishes">Peixes</a></li>
//
// COMO FUNCIONA:
// 1. Usuário clica no link "Peixes" que aponta para "/fishes"
// 2. O Express recebe a requisição GET para "/fishes"
// 3. Chama esta função fishes()
// 4. res.send() envia o texto simples "fishes"
//
// NOTA: Mesma lógica das outras categorias, implementação temporária
//
// FLUXO: Link "/fishes" → Express → fishes() → envia "fishes" → navegador
export const fishes = (req: Request, res: Response) => {
  res.send("fishes");
};

/*
```

## 🔗 CONEXÃO HTML ↔️ CONTROLLERS:
```
┌─────────────────────────────────────────────────────────────┐
│                         HTML                                 │
├─────────────────────────────────────────────────────────────┤
│ <a href="/">PetDevShop</a>              → Controller: home  │
│ <a href="/">Todos</a>                   → Controller: home  │
│ <a href="/dogs">Cachorros</a>           → Controller: dogs  │
│ <a href="/cats">Gatos</a>               → Controller: cats  │
│ <a href="/fishes">Peixes</a>            → Controller: fishes│
└─────────────────────────────────────────────────────────────┘
```

## 📊 FLUXO COMPLETO DE UMA REQUISIÇÃO:
```
1. USUÁRIO clica em <a href="/dogs">Cachorros</a>

2. NAVEGADOR faz requisição: GET /dogs

3. EXPRESS procura a rota registrada para "/dogs"
   (provavelmente em um arquivo routes.ts)

4. CONTROLLER dogs() é executado

5. res.send("dogs") envia resposta

6. NAVEGADOR recebe e exibe "dogs"

*/
