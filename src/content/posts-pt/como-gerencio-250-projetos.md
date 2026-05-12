---
title: "Como gerencio 250 projetos de design sem perder o detalhe"
subtitle: "Uma nota de método sobre coordenar uma equipe de seis pessoas — e o aplicativo de gestão que construí quando nenhuma outra ferramenta dava uma resposta direta para a minha diretoria."
description: "Uma nota de método sobre coordenar uma equipe de seis pessoas em 250 projetos ativos por ano — e o aplicativo de gestão que construí quando nenhuma outra ferramenta dava uma resposta direta para a minha diretoria."
category: "method-notes"
publishDate: 2026-05-12T11:00:00-03:00
readingTime: 8
tags:
  - method-notes
  - project-management
  - issa-project
  - design-process
  - workflow
cover: "/images/posts/issa-project-cover.jpg"
coverAlt: "ISSA Project — aplicativo de gestão construído para estúdios de design."
draft: false
translationSlug: "how-i-run-250-design-projects"
---

Por dois anos, toda vez que a diretoria da empresa onde coordeno fazia uma pergunta de verdade, eu respondia com algum tipo de achismo educado.

Como está a produtividade da equipe? *Mais ou menos bem.* Onde está o gargalo este mês? *Acho que no handoff.* Devemos contratar? Devemos desligar alguém? *Te respondo amanhã.*

Eu coordenava uma equipe de seis pessoas tocando cerca de 250 projetos ativos por ano, entre residencial, comercial, hotelaria e corporativo. Conhecia o pipeline bem o suficiente para sentir onde apertava. Não conseguia medir nada. E as perguntas que estavam sendo feitas para mim — exatamente as perguntas que uma coordenadora deveria responder com dado, não com sensibilidade — eram do tipo em que errar custa caro para a empresa. Contratação. Desligamento. Capacidade. Previsão para cliente.

Tentei resolver da forma que quase todo mundo na minha posição tenta resolver. Asana. Trello. Notion. ClickUp. Planilhas que eu mesma desenhava, ensinava a equipe a alimentar, e via envelhecer em três semanas. Dois anos testando. Nenhuma me dava o que eu precisava.

Esse é o preâmbulo honesto de uma história mais longa, e a razão pela qual em algum momento eu construí uma ferramenta minha. Existe um produto de software no fim desta nota. O produto não é o ponto. O ponto é a lacuna que produziu o produto — e essa lacuna, eu acredito, qualquer operação de design encontra mais cedo ou mais tarde, independentemente do tamanho.

## O que ninguém tinha me avisado sobre design

Ferramentas genéricas de gestão de projeto são construídas sobre uma suposição plana: tarefas têm responsáveis, responsáveis têm prazos, prazos têm status. Funciona para uma equipe de marketing. Não funciona para um pipeline de projeto.

Um projeto de design real não é uma lista de tarefas. É um briefing que muda. Uma especificação que entra em value engineering três semanas depois. Uma reunião de cliente que aprova metade da entrega e contesta a outra metade. Um handoff para o time comercial, que tem um pipeline próprio rodando num relógio próprio. Uma luminária que sai de linha do fornecedor e desencadeia quatro decisões a jusante.

Nada disso encaixa no modelo de dados do Asana. Dá para forçar. Tentamos. O que sobra é uma ferramenta que a equipe alimenta no primeiro mês e abandona devagar até o terceiro, porque traduzir o trabalho real para o vocabulário da ferramenta toma mais tempo do que o próprio trabalho.

Vi isso acontecer na minha equipe atual. Já tinha visto acontecer anos antes, em outro contexto — fui co-fundadora de um estúdio de arquitetura de interiores que rodou por alguns anos, e a mesma lacuna nos quebrou em escala menor lá. Os valores eram menores. A textura do problema era a mesma. **A maior parte dos estúdios brasileiros sérios que conheço é tecnicamente bem feita e operacionalmente frágil.** Já estive dos dois lados dessa frase. Estou escrevendo do lado que finalmente tem dado.

## A constatação que demorou mais do que devia

O que eu precisava não era um Asana melhor. Era uma ferramenta que *soubesse* o que é um pipeline de design. Que entendesse, no próprio modelo de dados, a diferença entre um projeto, uma fase, um entregável, uma especificação, uma aprovação de cliente e um handoff para o comercial. Que registrasse as variáveis que de fato mexem o ponteiro neste setor — e não as variáveis que uma SaaS qualquer decidiu que eram universais.

Quando enquadrei assim, construir virou consequência. Não por ambição de virar fundadora de software. Por ambição de conseguir dar uma resposta direta para a minha diretoria.

## O que o aplicativo descobriu, no primeiro mês de operação

Não vou listar funcionalidades aqui. Este post não é release. Mas duas descobertas dos primeiros meses merecem ser contadas, porque são exatamente o tipo de informação que as planilhas estavam silenciosamente escondendo.

**Descoberta um: havia um gargalo de produtividade concentrado em pessoas específicas, não na equipe.** Por dois anos, a diretoria tinha sido informada de que a equipe era, de modo geral, produtiva. Os dados, uma vez visíveis, mostraram outra coisa — uma fatia significativa do atrito de pipeline vinha de poucas pessoas carregando uma carga desproporcional de fricção. Essa conversa não tinha sido possível antes. Passou a ser possível no instante em que o dado existiu.

**Descoberta dois: um problema de conversão que vínhamos atribuindo à qualidade do projeto era, na verdade, problema de outra equipe.** O comercial reclamava havia meses de projetos "que não convertiam". A leitura interna era de que o trabalho de design fosse a variável. Os dados, uma vez legíveis, mostraram que o gargalo estava antes da fase de projeto, não dentro dela. Estávamos perdendo negociações antes de a equipe de projeto encostar nelas.

As duas descobertas reorganizaram conversas que a empresa vinha tendo havia anos. Nenhuma delas exigiu genialidade. Exigiram um sistema que captasse as variáveis certas e se recusasse a perdê-las entre uma reunião e outra.

## A tese silenciosa

A coisa que quero deixar registrada é esta:

**A habilidade mais subdesenvolvida em design em escala não é o ofício. É a operação.**

Toda coordenadora, toda fundadora, todo designer sênior que admiro — o tipo que constrói uma prática que dura — em algum ponto da própria evolução fez a passagem de designer para operador. Sem abandonar o ofício. Adicionando a ele. Tratando os sistemas que permitem ao ofício acontecer em escala como um problema de projeto, merecedor da mesma atenção que um detalhe de marcenaria.

Esse movimento é pouco glamouroso. É o que ninguém te conta. E é a diferença entre um estúdio que entrega trabalho bonito por dois anos e uma prática que entrega trabalho bonito por vinte.

O aplicativo que construí é a versão desse movimento que venho desenvolvendo para a minha equipe. Está em uso diário, acompanhando esses duzentos e cinquenta projetos ativos em todas as fases. Comunica-se com o nosso comercial e com os clientes automaticamente — de forma profissional, nos canais que eles já usam. Dá para a diretoria os dados que vinham sendo pedidos havia tempo, com uma confiança que eu não tinha antes do aplicativo existir.

Se o seu estúdio chegou ao ponto em que o tecido conjuntivo entre projeto, comercial e cliente está começando a se romper — e as perguntas que te fazem exigem respostas que você não consegue dar com honestidade — me escreve. Tenho prazer em conversar.

A ferramenta em si, incluindo como ela se adapta ao workflow de estúdios que operam de forma diferente da minha, está em [ISSA Project](https://iarasantos.com/issaproject).
