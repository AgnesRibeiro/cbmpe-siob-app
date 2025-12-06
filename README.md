## 📌 Sobre o Projeto

O **SIOB (Sistema Integrado de Ocorrências de Bombeiros)** é uma solução digital completa desenvolvida para **modernizar e otimizar o processo de coleta e gestão de dados de ocorrências em campo** para o **Corpo de Bombeiros Militar de Pernambuco (CBMPE)**.

A plataforma substitui o preenchimento manual de formulários em papel por um sistema **digital eficiente e responsivo**, que funciona **tanto online quanto offline**, garantindo a integridade e agilidade das informações.

## O sistema é composto por duas frentes principais:

### 📱 Aplicativo de Campo (PWA / Mobile)
Ferramenta robusta para os militares em atendimento, permitindo o **registro padronizado de ocorrências em tempo real**, com captura de mídias (fotos, vídeos), **geolocalização e assinaturas digitais**.

### 💻 Painel Administrativo (Web)
Plataforma central para o comando e analistas, oferecendo **dashboards, relatórios, gestão de usuários e visão geral das operações registradas**.

> Este projeto está sendo desenvolvido pela equipe de alunas do **3º período do curso de Análise e Desenvolvimento de Sistemas (2025.2)** da **Faculdade Senac Pernambuco**.

---

## ✨ Funcionalidades Principais

### 💻 Painel Administrativo (Web)
- 🔑 **Autenticação e Perfis:** múltiplos níveis de acesso (admin, analista, chefe).  
- 🔎 **Listagem e Filtro de Ocorrências:** busca por período, tipo, região e status.  
- 📄 **Visualização de Detalhes:** acesso completo às informações e mídias da ocorrência.  
- 📊 **Relatórios e Exportação:** relatórios em CSV e PDF.  
- 👤 **Gestão de Usuários:** CRUD, redefinição de senha e controle de perfis.  
- 🛡️ **Auditoria e Logs:** rastreabilidade de ações críticas.  
- 📈 **Dashboard Operacional:** KPIs e gráficos dinâmicos sobre as ocorrências.  

### 📱 Aplicativo de Campo (Mobile)
- 🔒 **Autenticação Segura:** login com credenciais institucionais.  
- 📝 **Registro de Ocorrência:** formulários padronizados (Básico, Incêndio, APH, etc.).  
- 📴 **Modo Offline:** registro de dados sem conexão, com sincronização posterior.  
- 📍 **Captura de GPS:** localização automática da ocorrência.  
- 📸 **Captura de Fotos:** anexos diretamente da câmera.  
- ✍️ **Assinatura Digital:** coleta de assinaturas de testemunhas/vítimas.  
- 🔄 **Edição Offline:** ajustes antes da sincronização.  

---

## 🛠️ Ferramentas e Tecnologias

| Categoria | Ferramenta / Tecnologia |
|------------|--------------------------|
| **Frontend Web** | React.js, TypeScript, React Router (PWA) |
| **Estilização** | CSS com Variáveis Globais (Temas) |
| **Backend** | Node.js com Express *(sugerido)* |
| **Banco de Dados** | PostgreSQL |
| **Mobile** | React Native + Expo Go |
| **Controle de Versão** | Git & GitHub |

---

## 🚀 Como Executar o Projeto

Para executar o projeto do painel web em seu ambiente de desenvolvimento local, siga os passos abaixo.

1. **Clone o Repositório**

git clone [https://github.com/Vanessa-Matias/cbmpe-siob-app](https://github.com/Vanessa-Matias/cbmpe-siob-app)
```

2. **Executando o Painel Web (React)** 💻

cd web-app
```

3. **Instale as dependências**

npm install
```

4. **Execute a aplicação**

npm start
```

Após executar o comando start, abra seu navegador e acesse http://localhost:3000 para ver a aplicação em execução.
**Nota PWA:** Para testar a instalação e o modo offline, é necessário gerar a build de produção: npm run build seguido de npx serve -s build.

5. **Executando o App Mobile (React Native)** 📱

# Acesse a pasta do projeto mobile (a partir da raiz)
cd mobile-app

```

# Instale as dependências
npm install

````

# Inicie o projeto Expo
npx expo start

````

Certifique-se de ter o aplicativo Expo Go instalado no seu celular ou um emulador configurado. Escaneie o QR Code exibido no terminal com o app Expo Go (Android/iOS).

**Troubleshooting Mobile:** Caso encontre problemas com o cache, execute: 

npx expo start -c
```

---

## 👩‍💻 Equipe

| Membro             | Responsabilidade(s)                               | GitHub                                                     | LinkedIn                                                              |
| :----------------- | :------------------------------------------------ | :--------------------------------------------------------- | :-------------------------------------------------------------------- |
| **Vanessa Matias** | Desenvolvimento Front-End             | [Vanessa-Matias](https://github.com/Vanessa-Matias)        | [Perfil](https://www.linkedin.com/in/vanessamatiasdev/)               |
| **Wedja Souza** | Gestão de Projetos, Documentação & UX/UI Designer | [WedjaSousa](https://github.com/WedjaSousa)                | [Perfil](https://www.linkedin.com/in/wedja-sousa-43639b19b/)           |
| **Marcela Negrão** | UX/UI Designer & Banco de Dados                   | `(adicionar)`                                              | [Perfil](https://www.linkedin.com/in/marcela-negrão-0974582a5/)        |
| **Wslany Amorim** | Banco de Dados & Back-End                                    | [wslanyl](https://github.com/wslanyl)                      | [Perfil](https://www.linkedin.com/in/wslanylima/)                 |
| **Sophia Santos** | UX/UI Designer & Back-End                                   | [sophiasousaa](https://github.com/sophiasousaa)            | [Perfil](https://www.linkedin.com/in/santos-sophia/)                  |
| **Agnes Ribeiro** | App- Mobile & Documentação                                      | [AgnesRibeiro](https://github.com/AgnesRibeiro) | [Perfil](https://www.linkedin.com/in/agnes-ribeiro-6446392ab/)        |

---

<p align="center">
  Projeto desenvolvido sob a orientação dos professores
  <b><a href="https://www.linkedin.com/in/geraldogomes/" target="_blank">Geraldo Gomes</a></b>,
  <b><a href="https://www.linkedin.com/in/dansoaresfarias/" target="_blank">Danilo Farias</a></b>,
  <b><a href="https://www.linkedin.com/in/marcos-tenorio/" target="_blank">Marcos Roberto</a></b> e
  <b><a href="https://www.linkedin.com/in/weltondionisio/" target="_blank">Welton Dionísio</a></b>.<br>
  <b>Faculdade SENAC Pernambuco</b> — Disciplina de Projeto Integrador.
</p>