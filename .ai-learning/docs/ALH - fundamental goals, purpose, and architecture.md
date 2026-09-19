# AI Learning Harness (ALH) — базовые цели, назначение и архитектура

> Базовое исходное техническое описание ALH.
> Нормативная runtime-семантика — в `.ai-learning/instructions/`
> (instruction set v2.1.0). При расхождении с этим документом
> нормативны instructions.

## 1. Назначение

**AI Learning Harness (ALH)** — образовательный и инженерный контрольный слой над AI coding-agent Host, который сопровождает разработчика от уровня **стажёра** до **Strong Middle / Senior** через совместную разработку реального веб-приложения.

Host — внешняя среда выполнения ALH. Он является конфигурируемым вариантом, а не фиксированной зависимостью: используемый kind хранится в `config/alh.json`; текущий вариант по умолчанию — Devin (`devin_cli`).

ALH должен одновременно:

* вести разработку по полному SDLC;
* обучать инженерным компетенциям в контексте проекта;
* выбирать степень самостоятельности агента для каждой конкретной активности (Automation Level в Execution Contract) на основе состояния компетенций и доказательств ученика;
* контролировать качество, тестирование, безопасность и документацию;
* хранить состояние проекта и обучения вне истории чата: каноническое durable-состояние находится в `.ai-learning/state/` и изменяется только через Persistence Manager.

---

## 2. Главная цель

Максимизировать **долгосрочную инженерную самостоятельность разработчика**, одновременно создавая приложение профессионального качества.

Успех = два результата:

* **Product Outcome:** работающее, тестируемое, безопасное, документированное и развёртываемое приложение.
* **Learning Outcome:** разработчик способен самостоятельно понимать, проектировать и реализовывать аналогичные решения.

---

## 3. Образовательная модель

Основной подход — **project-driven learning**:

`потребность проекта → инженерная проблема → необходимая компетенция → самостоятельная попытка → review → наводящие вопросы → исправление → объяснение → фиксация результата`

Обязательные фундаментальные темы проходят обязательно, даже если проект не вызывает их естественно: они трекуются как Learning Debt и закрываются Decision Engine в контексте реального проекта — как prerequisite preparation, когда проект требует, или через последующую релевантную активность. Искусственные учебные задачи, оторванные от реального проекта, не создаются.

Если практическая задача нецелесообразна — используются квизы, анализ кода, архитектурные задания, поиск ошибок и сценарные вопросы.

---

## 4. Компетенции, Learning Units, Automation Level, Learning Debt

Линейных уроков нет.

Базовая единица состояния — **Competency** (стабильная инженерная способность), например:

`TypeScript Generics`, `SOLID`, `HTTP caching`, `JWT`, `Git Rebase`, `Repository Pattern`.

Состояние компетенции определено для конкретной пары `(competency_id, scope)`, где scope — контекст применения (как правило, проект).

Канонические состояния:

* `unknown`
* `introduced`
* `learning`
* `practicing`
* `mastered`

Переходы между состояниями задаёт нормативная матрица из `30-persistence.md` (§7). Смена состояния фиксируется только через `Learning Assessment Proposal` на основе learner evidence и коммитится Persistence Manager.

**Learning Unit (LU)** — учебный объект (подготовка, материал, примеры, упражнение, review-задание), связанный с одной или несколькими компетенциями. LU не является ни самой компетенцией, ни носителем competency state: завершение LU само по себе не устанавливает mastery.

Для каждой компетенции в Learning State фиксируются:

* текущее состояние;
* связанные Learning Units;
* self-assessments (вход для подготовки и вмешательства, а не доказательство освоения);
* доказательства освоения (evidence — отдельный ledger в `state/evidence/`);
* Learning Debt, misconceptions, practice obligations;
* связанные проектные задачи и результаты review (через Project Graph).

**Automation Level** — не свойство LU и не свойство компетенции. Это параметр текущего Execution Contract: он выбирается для конкретной activity/transition, связан с learner-owned частью работы и целевой компетенцией и может пересматриваться для следующего перехода.

Уровни: `NONE`, `ASSISTED`, `SHARED`, `FULL`.

Фиксированные соответствия `learning → ASSISTED` и `mastered → FULL` запрещены: освоенная компетенция может осознанно отрабатываться на уровне `NONE` для практики, а по неустановленной компетенции агент может выполнить смежную работу на уровне `FULL`, если learner-owned target activity не обходится.

**Learning Debt** — незакрытое образовательное обязательство, связанное с компетенцией: gap, misconception, недостаточное evidence, потребность в reinforcement, обязательные фундаменты, reassessment. Статусы: `open` / `resolved`. Debt не является планировщиком: когда и как закрывать обязательство — решает Decision Engine. Закрытие требует релевантного learner evidence или assessment, а не только объяснения или AI-демонстрации.

Освоенная (`mastered`) компетенция reassess-ится по релевантным новым доказательствам (evidence-based, а не автоматически); при этом деградация состояния предлагается Assessor'ом и коммитится тем же proposal-путём, что и любые другие изменения состояния.

---

## 5. Project Graph

**Project Graph** (`state/project-graph.json`) — персистентная структурная модель связей между project entities, activities, компетенциями, Learning Units и evidence.

Типы отношений: `REQUIRES`, `DEPENDS_ON`, `PRODUCES`, `APPLIES`, `PRACTICES`, `ASSESSES`, `EVIDENCED_BY`.

Граф должен отвечать на вопросы:

* что сейчас изучается;
* зачем это нужно проекту;
* от чего зависит;
* где уже применялось.

Насколько компетенция освоена — определяется Learning State (состояние пары `(competency_id, scope)`), а не графом. Какую работу агент может выполнять самостоятельно — определяет текущий Execution Contract (Automation Level), а не графом. То есть Project Graph — это не «граф компетенций»: он не хранит competency state.

Граф может информировать Decision Engine, но не выбирает переходы самостоятельно. Обновляется только через `Graph Mutation Proposal` и не обязан меняться после каждой активности.

---

## 6. Контрольный цикл вместо фиксированного пайплайна

Пользователь взаимодействует с одним агентом, внутри которого действует ALH control layer по правилу:

```text
Decision Engine → Pipeline → выбранная роль
```

* **Decision Engine** — единственная власть, выбирающая следующий переход ALH-процесса.
* **Pipeline** — выполняет уже выбранный переход; не выбирает и не переопределяет его.
* **Роли** — выполняют присвоенную работу и не выбирают следующие переходы сами.

Фиксированной линейной цепочки ролей не существует. Стадии Project Manager, Memory Manager и Response Generator не являются архитектурными стадиями: роль Memory Manager заменена Persistence Manager и state-записями, а формирование ответа — результат исполнения перехода, а не отдельная стадия.

Для каждого нового запроса или продолжения выполняется Mandatory Control Cycle из 13 шагов (до первого запроса — однократная стадия `Initialize`):

```text
Restore
→ Observe
→ Resolve Intent
→ Establish Engineering Position
→ Resolve Blockers
→ Select Real Engineering Activity
→ Determine Learning Relevance
→ Build Execution Contract
→ Execute Through Pipeline
→ Verify
→ Assess Learner Evidence
→ Persist
→ Re-enter Decision Loop
```

Переход выбирается на основе:

* текущего состояния проекта;
* блокеров и незавершённой работы;
* выбранной реальной инженерной активности;
* её learning-релевантности;
* состояния релевантных компетенций;
* Learning Debt (Debt не планировщик — Decision Engine решает, когда его закрывать);
* Definition of Done.

Существенная работа выполняется только в рамках текущего Execution Contract.

Роли с фиксированным операционным смыслом: Intent Analyzer, Interaction Manager, Teacher, Assessor, Security Auditor, State Reconciliation; инженерные роли (Architect, Developer, Reviewer) выполняют инженерную работу в пределах контракта.

После каждого существенного перехода — обязательное возвращение:

```text
Verify → Assess (если есть learner evidence) → Persist (если есть authorized proposals) → Decision Engine
```

---

## 7. Правила обучения

Уровень помощи выбирается адаптивно — минимально достаточный для текущего learner-owned target activity. Задавать вопрос перед каждым ответом не требуется.

Лестница эскалации помощи:

`вопрос → уточнение → намёк → более конкретный намёк → ограниченная частичная помощь → shared assistance → полное решение`

Полное решение допустимо после осмысленной learner-попытки и исчерпанного или непродуктивного пути помощи, либо когда этого требует safety/integrity.

Освоенная (`mastered`) компетенция не автоматически означает FULL автоматизацию: Automation Level выбирается для каждой активности. Если агент выполняет работу по освоенной компетенции, он объясняет решение и при необходимости ссылается на прошлые задачи.

---

## 8. Полный охват разработки

ALH должен охватывать:

```text
Discovery
→ Requirements
→ Stack Selection
→ Architecture
→ Design
→ Implementation
→ Testing
→ Security
→ Documentation
→ CI/CD
→ Deployment
→ Operation / Evolution
```

Обязательные области обучения:

* JavaScript / TypeScript;
* frontend и backend;
* Git;
* тестирование;
* архитектура;
* ООП;
* SOLID;
* design patterns;
* алгоритмы и структуры данных;
* Event Loop, V8, память;
* HTTP, TCP/IP, DNS, TLS;
* базы данных, индексы, транзакции, ACID, CAP;
* caching, queues, distributed systems;
* Docker, Linux, CI/CD;
* security;
* observability;
* эксплуатация и deployment.

---

## 9. Стек по умолчанию

Исходный набор:

**Frontend:** TypeScript, React/Next.js, Vue/Nuxt, Tailwind/Bootstrap, Zustand или Redux Toolkit/RTK Query, TanStack Query, React Hook Form, Zod.

**Backend:** Node.js, NestJS, PostgreSQL, Prisma, Redis, OpenAPI.

**Testing / Quality / Infra:** Vitest, Playwright, Supertest, ESLint, Prettier, Husky, lint-staged, Docker, Docker Compose, GitHub Actions, Nginx, Linux.

Стек не является обязательным. Его выбор под конкретный проект — отдельная обучающая задача.

---

## 10. Архитектурный принцип

Изучать архитектуру глубоко, но не допускать overengineering.

Допустимы:

* SOLID;
* Dependency Injection;
* Repository;
* MVC;
* Clean Architecture;
* Hexagonal;
* Vertical Slice;
* DDD;
* CQRS;
* Event Sourcing.

Главное правило:

> Архитектурная сложность должна быть пропорциональна реальной задаче.

---

## 11. Quality / Security / Testing

Качество — часть разработки, а не отдельная фаза.

**Security by Design** применяется на каждом релевантном этапе.

**Функциональность не считается завершённой без необходимых тестов.**

Definition of Done учитывает:

* корректность;
* тесты;
* review;
* документацию;
* безопасность;
* сопровождаемость;
* понимание разработчиком обучаемой части;
* обновление релевантного ALH durable state (Learning State / Evidence / Project Graph / Engineering Continuation / Project Context) через авторизованные typed proposals, если это требуется текущим переходом.

---

## 12. Superpowers

Superpowers используется как основной внешний engineering workflow foundation.

```text
.superpowers/   ← git submodule, неизменяемая внешняя зависимость, зафиксированная в `config/alh.json`
```

ALH не модифицирует Superpowers, а накладывает поверх него:

* образовательную модель;
* контроль компетенций и Learning Debt;
* адаптивную автоматизацию (Automation Level);
* assessment;
* persistence (durable state);
* дополнительные ограничения.

---

## 13. Структура репозитория

Фактическая v2-структура:

```text
project-root/              # проект под управлением ALH
├── AGENTS.md              # агентский operating contract
├── USER-GUIDE.md          # гайд разработчика
├── .superpowers/          # внешний workflow foundation (immutable)
├── src/                   # код приложения
├── tests/                 # тесты приложения
├── docs/                  # документация приложения
├── infra/                 # инфраструктура приложения
└── .ai-learning/
    ├── config/
    │   └── alh.json       # host, версия instruction set, superpowers
    ├── docs/
    │   └── ALH - fundamental goals, purpose, and architecture.md
    ├── instructions/      # нормативный v2 runtime contract
    │   ├── instruction-set.json
    │   ├── 00-orchestration.md
    │   ├── 10-learning.md
    │   ├── 20-engineering.md
    │   ├── 30-persistence.md
    │   ├── 40-verification.md
    │   └── 50-learning-participation.md
    └── state/             # каноническое durable-состояние (изменяет только Persistence Manager)
        ├── manifest.json
        ├── learning-state.json
        ├── engineering-continuation.json
        ├── project-context.json
        ├── project-graph.json
        ├── evidence/
        ├── proposals/
        └── journal.jsonl
```

Концепция `memory/` и «проектной памяти» заменена каноническим `state/` + Persistence Manager + typed proposals.

---

## 14. Статус формализации и источник истины

Single Source Of Truth runtime-семантики — instruction set v2 в `.ai-learning/instructions/` (текущая версия 2.1.0), а не история чатов или Architecture Snapshot. Этот документ описывает исходное намерение; при расхождении нормативны instructions.

**Уже являются каноническими runtime-контрактами:**

* control loop и власть над переходами: Decision Engine / Pipeline / роли, Mandatory Control Cycle, Execution Contract — `00-orchestration.md`;
* competency states и полная матрица переходов — `30-persistence.md` §7, `10-learning.md` §3;
* модель Learning Unit, Automation Level, Learning Debt, Socratic assistance, mastery — `10-learning.md`;
* durable state: схемы записей, typed proposals, bootstrap, load-time validation, reconciliation, journal, atomic commit — `30-persistence.md`;
* инженерное качество, Definition of Done, работа с Superpowers — `20-engineering.md`;
* verification, routing learner-оценки, completion gates, mandatory return — `40-verification.md`;
* восстановление контекста между сессиями — Restore + load-time validation + Engineering Continuation / Project Context (`00-orchestration.md`, `30-persistence.md` §11–13);
* выбор следующей учебной активности — как часть Mandatory Control Cycle (шаги 6–7: реальная инженерная активность + learning relevance), без отдельного планировщика Learning Units.

**Пока не формализовано (open):**

* каталог компетенций: стабильные `competency_id` и competency-specific mastery criteria;
* схемы entity/relationship Project Graph (`entities` / `relationships` — открытые списки);
* таксономия типов Learning Debt (поле `type` не перечислено);
* процесс ADR/LDR;
* контракт ALH ↔ Superpowers сверх «учитывать применимые практики» (в конфигурации зафиксированы только source и tested identity);
* политика версионирования instruction set.
