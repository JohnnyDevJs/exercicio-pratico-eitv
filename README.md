# Streaming UI – Mock de Catálogo 🎬

Interface de streaming mockada para testes de UX, performance e navegação por foco, inspirada em plataformas reais de Web e Smart TV.

Este projeto contém **dados mockados e componentes** para simular uma interface de streaming (web / Smart TV), com foco em **performance, navegação por controle remoto e UX semelhante a plataformas reais**.



---

## ✨ Objetivo

Fornecer uma base de dados e estrutura de UI para:

* Testar **listas horizontais** de filmes
* Simular categorias como *Assistir mais tarde* e *Continuar assistindo*
* Validar **navegação por foco** (D‑pad / teclado)
* Trabalhar com **lazy loading e otimização de renderização**

---

## 📂 Estrutura de Dados

Cada seção representa uma categoria do streaming:

* `id`: identificador da categoria
* `title`: título exibido na UI
* `items`: lista de filmes

Cada filme contém:

* `id`: identificador único
* `title`: título do filme
* `poster`: URL do poster (TMDB)
* `focusedIndex`: índice usado para controle de foco

---

## 📌 Categorias Disponíveis

### ▶️ Assistir mais tarde

Lista de filmes salvos pelo usuário para ver futuramente.

### ⏯️ Continuar assistindo

Filmes que já foram iniciados e podem ser retomados rapidamente.

> 💡 Ideal para testar **ordenação dinâmica**, **barra de progresso** e **estado persistido**.

---

## 🎨 UI / UX (Tailwind CSS)

### Título em uma linha

```html
<p class="truncate whitespace-nowrap overflow-hidden">
  Título do Filme Muito Longo
</p>
```

### Recomendações

* Use `w-40` ou `w-48` para cards
* Prefira posters `w185` ou `w300` (TMDB)
* Destaque o item focado com `scale` + `ring`

---

## 📺 Foco em Smart TV

Boas práticas adotadas:

* Renderização horizontal otimizada
* Evitar re-renders desnecessários
* Navegação previsível por índice
* Layout consistente para D‑pad

Sugestões:

* Virtualização de listas grandes (200+ itens)
* Lazy load de imagens
* Memoização de componentes

---

## 🚀 Possíveis Evoluções

* Adicionar `progress` (% assistido)
* Persistência em `localStorage`
* Integração com API real (TMDB)
* Suporte a múltiplos perfis
* Skeleton loading

---

## 🛠️ Tecnologias Sugeridas

* React / Next.js
* Tailwind CSS
* TypeScript
* Embla Carousel ou navegação custom

---

## 📄 Licença

Este projeto é apenas para **fins educacionais e prototipagem**.

Posters e títulos pertencem aos seus respectivos detentores de direitos.

---

Feito para testes de **UI de Streaming e Smart TV** 📺🔥
# Streaming UI – Mock de Catálogo 🎬

Este projeto contém **dados mockados e componentes** para simular uma interface de streaming (web / Smart TV), com foco em **performance, navegação por controle remoto e UX semelhante a plataformas reais**.

---

## ✨ Objetivo

Fornecer uma base de dados e estrutura de UI para:

* Testar **listas horizontais** de filmes
* Simular categorias como *Assistir mais tarde* e *Continuar assistindo*
* Validar **navegação por foco** (D‑pad / teclado)
* Trabalhar com **lazy loading e otimização de renderização**

---

## 📂 Estrutura de Dados

Cada seção representa uma categoria do streaming:

* `id`: identificador da categoria
* `title`: título exibido na UI
* `items`: lista de filmes

Cada filme contém:

* `id`: identificador único
* `title`: título do filme
* `poster`: URL do poster (TMDB)
* `focusedIndex`: índice usado para controle de foco

---

## 📌 Categorias Disponíveis

### ▶️ Assistir mais tarde

Lista de filmes salvos pelo usuário para ver futuramente.

### ⏯️ Continuar assistindo

Filmes que já foram iniciados e podem ser retomados rapidamente.

> 💡 Ideal para testar **ordenação dinâmica**, **barra de progresso** e **estado persistido**.

---

## 📺 Foco em Smart TV

Boas práticas adotadas:

* Renderização horizontal otimizada
* Evitar re-renders desnecessários
* Navegação previsível por índice
* Layout consistente para D‑pad

Sugestões:

* Virtualização de listas grandes (200+ itens)
* Lazy load de imagens
* Memoização de componentes

---

## 🚀 Possíveis Evoluções

* Adicionar `progress` (% assistido)
* Persistência em `localStorage`
* Integração com API real (TMDB)
* Suporte a múltiplos perfis
* Skeleton loading

---

## 🛠️ Tecnologias Sugeridas

* React / Next.js
* Tailwind CSS
* TypeScript
* Embla Carousel ou navegação custom

---

## 📦 Instalação e Execução (pnpm)

Este projeto utiliza **pnpm** como gerenciador de pacotes, garantindo instalações mais rápidas e eficientes.

### 1️⃣ Pré-requisitos

Certifique-se de ter instalado:

* **Node.js** (versão 18 ou superior)
* **pnpm**

Para instalar o pnpm globalmente:

```bash
npm install -g pnpm
```

---

### 2️⃣ Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

---

### 3️⃣ Instalar dependências

```bash
pnpm install
```

---

### 4️⃣ Rodar o projeto em ambiente de desenvolvimento

```bash
pnpm dev
```

O projeto estará disponível em:

```
http://localhost:5173
```

---

### 5️⃣ Build para produção

```bash
pnpm build
pnpm start
```

---

### 💡 Dicas

* Utilize `pnpm store prune` para limpar o cache
* Prefira `pnpm add` para novas dependências
* Em Smart TVs, sempre teste o **build de produção**

---

* React / Next.js
* Tailwind CSS
* TypeScript
* Embla Carousel ou navegação custom

---

## 📄 Licença

Este projeto é apenas para **fins educacionais e prototipagem**.

Posters e títulos pertencem aos seus respectivos detentores de direitos.

---

Feito para testes de **UI de Streaming e Smart TV** 📺🔥
