export const blocks=[
{name:"Mercado e público",desc:"Defina o comprador e o contexto.",qs:[["Qual é o nicho ou mercado do seu produto?","Ex.: serviços para clínicas."],["Quem é o público específico que você deseja atender?","Profissão, estágio, rotina e situação."],["Qual é o principal problema que esse público enfrenta?","Seja específico."],["Qual é o principal resultado que seu produto promete entregar?","Descreva a transformação."]]},
{name:"Resultado e obstáculos",desc:"Entenda o caminho até o resultado.",qs:[["Em quanto tempo o cliente pode alcançar esse resultado?","Somente prazos fundamentados."],["O que seu cliente já tentou e por que não funcionou?","Alternativas e dificuldades reais."],["Qual é o nome do produto e o que ele é?","Nome e formato."],["Como o cliente utiliza seu produto para alcançar o resultado?","Etapas práticas."]]},
{name:"Entrega e diferenciação",desc:"Descreva a solução que já existe.",qs:[["O que exatamente o cliente recebe ao comprar?","Módulos, aulas, ferramentas, suporte."],["O que torna sua solução diferente ou mais vantajosa?","Diferencial demonstrável."],["Quais são as principais dúvidas, objeções ou medos que podem impedir a compra?","Use as palavras dos clientes, se possível."],["Quais provas você já possui de que sua solução funciona?","Casos, dados, depoimentos verificáveis."]]},
{name:"Execução e preço",desc:"Avalie esforço e viabilidade.",qs:[["Quais dificuldades o cliente enfrenta para usar o produto e obter o resultado?","Barreiras e tempo necessário."],["Qual é o preço atual ou pretendido do produto?","Preço e parcelas, se houver."]]},
{name:"Condições atuais",desc:"Separe o que já oferece do que ainda é ideia.",qs:[["Quais bônus você oferece atualmente?","Diga expressamente se não oferece nenhum."],["Qual é a garantia atual?","Prazo e condições reais."],["Quais condições especiais, urgência ou escassez existem hoje?","Vagas, datas e justificativas reais."]]}
];
export const pillars=["Público faminto","Antes e depois","Mapa de objeções","Equação de valor","Mecanismo único","Entregáveis","Vitória rápida","Promessa (Método ÉPICO)","Nome do produto","Prova social","Bônus mata-objeção","Bônus de urgência","Bônus de escassez e diagnóstico","Garantia 3x","Motivo real","Custo de não agir","Ancoragem","Empilhamento","Preço","Condição de pagamento","Primeiros passos"];
export const instructions=`Você é um estrategista rigoroso de criação de ofertas. AUDITE e OTIMIZE a oferta usando EXATAMENTE os 21 pilares na ordem fornecida. Use o briefing como ÚNICA fonte de fatos sobre o produto. Nunca invente números, provas, escassez, garantias, resultados, concorrentes ou itens já existentes. Pesquisa externa só se a IA tiver acesso real: forneça fontes e distinga pesquisa de hipótese.

Para CADA pilar apresente, nesta ordem:
1. O QUE VOCÊ TEM HOJE — cite ou resuma apenas fatos do briefing;
2. STATUS — FORTE, FRACO, AUSENTE CONFIRMADO (somente se o aluno afirmou ausência), ou INFORMAÇÃO INSUFICIENTE (quando não informou);
3. O QUE ESTÁ FALTANDO — lacuna específica;
4. SUGESTÃO PRONTA — proposta personalizada com texto e estrutura concretos;
5. POR QUE MELHORA — vínculo com valor percebido e conversão;
6. O QUE CRIAR, VALIDAR OU EXECUTAR — passos operacionais e prioridade.

No pilar 3 enumere objeções CONFIRMADAS e separe HIPÓTESES A VALIDAR. No pilar 11, proponha até 3 bônus mata-objeção, vinculando CADA UM a uma objeção numerada do pilar 3. Para cada bônus: nome comercial, objeção exata, conteúdo detalhado, como resolve a objeção, modo de uso, implementação e prioridade. Se faltarem objeções confirmadas, identifique claramente as hipóteses; nunca atribua hipóteses ao aluno. Acrescente um bônus separado de EXCESSO DE RESULTADO, se houver justificativa estratégica.

Para cada novo módulo, bônus, ferramenta ou entregável: diagnostique a lacuna; proponha nome comercial específico; benefício; conteúdo, formato e etapas; exemplo de uso no nicho; impacto em probabilidade de sucesso, tempo, esforço ou risco; produção e entrega viáveis; prioridade ESSENCIAL, RECOMENDÁVEL ou OPCIONAL. Diferencie MÓDULO PRINCIPAL, BÔNUS MATA-OBJEÇÃO, BÔNUS DE EXCESSO DE RESULTADO e FERRAMENTA DE IMPLEMENTAÇÃO. Não empilhe itens apenas para inflar valor. Marque propostas como SUGESTÃO NÃO IMPLEMENTADA.

Na equação de valor, avalie (resultado dos sonhos × probabilidade percebida de conquista) ÷ (tempo até resultado × esforço/sacrifício), separando quatro fatores e melhorias concretas. Para garantias, urgência, escassez, provas e ancoragem, nunca crie alegações falsas. Diferencie preço de condição de pagamento. Explique primeiros passos após a compra.

Depois dos 21 pilares, entregue: DIAGNÓSTICO EXECUTIVO; OFERTA RECONSTRUÍDA (promessa, mecanismo, entregáveis, bônus, garantias condicionais, preço e CTA, distinguindo o que existe do que é proposta); PLANO DE EXPANSÃO DA OFERTA em tabela com todos os novos componentes, pilar, objeção vinculada, justificativa, prioridade e status; CHECKLIST DE EXECUÇÃO priorizado; PERGUNTAS QUE PRECISAM SER VALIDADAS. Seja profundamente específico e aplicável ao nicho, não genérico. Não faça perguntas antes de entregar a auditoria possível.

Se puder gerar arquivos, crie PDF com capa, resumo, 21 pilares e plano de ação, e forneça link real. Se não puder, entregue relatório completo em Markdown pronto para exportar como PDF, sem fingir que criou um arquivo.`;
