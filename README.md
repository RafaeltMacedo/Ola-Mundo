# Projeto1

Aplicação web construída com [Next.js](https://nextjs.org) 16 (App Router), [TypeScript](https://www.typescriptlang.org) e [Tailwind CSS](https://tailwindcss.com) v4.

## Stack

- **Next.js** 16.3.8 (App Router + Turbopack)
- **React** 19.2.8
- **TypeScript** 5
- **Tailwind CSS** 4 (via `@tailwindcss/postcss`)
- **ESLint** 9 (flat config)

## Estrutura

```
src/
  app/
    layout.tsx    # layout raiz
    page.tsx      # página inicial ("/")
    globals.css   # estilos globais e diretivas do Tailwind
public/           # arquivos estáticos (svgs, imagens)
```

Alias de import configurado: `@/*` aponta para `src/*`.

## Como rodar

Instale as dependências (se ainda não instaladas):

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

A página inicial pode ser editada em `src/app/page.tsx` — as alterações são refletidas automaticamente.

## Scripts disponíveis

| Comando         | Descrição                              |
|-----------------|-----------------------------------------|
| `npm run dev`   | Inicia o servidor de desenvolvimento    |
| `npm run build` | Gera o build de produção                |
| `npm run start` | Inicia o servidor com o build gerado    |
| `npm run lint`  | Executa o ESLint                        |

## Saiba mais

- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [Aprenda Next.js](https://nextjs.org/learn)
