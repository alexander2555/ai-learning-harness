# AI Learning Harness (ALH) — базовые цели, назначение и архитектура

## 1. Назначение

**AI Learning Harness (ALH)** — образовательная и инженерная надстройка над IDE-агентом, которая сопровождает разработчика от уровня **стажёра** до **Strong Middle / Senior** через совместную разработку реального веб-приложения.

ALH должен одновременно:

* вести разработку по полному SDLC;
* обучать инженерным компетенциям в контексте проекта;
* адаптировать объём самостоятельной работы агента к уровню освоения компетенций;
* контролировать качество, тестирование, безопасность и документацию;
* хранить состояние проекта и обучения вне истории чата.

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

Фундаментальные темы проходят обязательно, даже если проект не вызывает их естественно.

Если практическая задача нецелесообразна — используются квизы, анализ кода, архитектурные задания, поиск ошибок и сценарные вопросы.

---

## 4. Learning Units и граф компетенций

Линейных уроков нет.

Базовая единица — **Learning Unit (LU)**, например:

`TypeScript Generics`, `SOLID`, `HTTP caching`, `JWT`, `Git Rebase`, `Repository Pattern`.

Для каждой LU фиксируются:

* `Competency Status`

  * `unknown`
  * `introduced`
  * `learning`
  * `practicing`
  * `mastered`

* `Automation Level`

  * `NONE`
  * `ASSISTED`
  * `SHARED`
  * `FULL`

* `Learning Debt`

* зависимости;

* связанные технологии;

* связанные проектные задачи;

* результаты review;

* доказательства освоения.

Освоенная компетенция не возвращается в учебный режим без новых проблем или явного запроса пользователя.

---

## 5. Единый граф системы

Используется многослойный граф:

```text
Learning Units
      ↕
Technologies
      ↕
Architecture Concepts
      ↕
Project Artifacts
```

Граф должен отвечать на вопросы:

* что сейчас изучается;
* зачем это нужно проекту;
* от чего зависит;
* где уже применялось;
* насколько освоено;
* какую работу агент может выполнять самостоятельно.

---

## 6. Agent Pipeline

Пользователь взаимодействует с одним агентом, внутри которого действует динамический pipeline:

```text
User Request
    ↓
Intent Analyzer
    ↓
Project Manager
    ↓
Architect
    ↓
Teacher
    ↓
Developer
    ↓
Reviewer
    ↓
Security Auditor
    ↓
Assessor
    ↓
Memory Manager
    ↓
Response Generator
```

Не все стадии запускаются для каждого запроса.

Pipeline выбирается на основе:

* текущей задачи;
* стадии проекта;
* затронутых компетенций;
* их статуса;
* Learning Debt;
* Automation Level;
* Definition of Done.

---

## 7. Правила обучения

Для новой или проблемной компетенции агент не сообщает решение сразу.

Лестница помощи:

`вопрос → уточнение → намёк → более конкретный намёк → частичное решение → полное объяснение`

Если компетенция освоена, агент выполняет соответствующую работу самостоятельно, но объясняет решение и при необходимости ссылается на прошлые задачи.

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
* обновление графа компетенций;
* обновление проектной памяти.

---

## 12. Superpowers

Superpowers используется как основной внешний workflow foundation.

Подключение:

```text
.superpowers/   ← git submodule, неизменяемая внешняя зависимость
```

ALH не модифицирует Superpowers, а накладывает поверх него:

* образовательную модель;
* граф компетенций;
* адаптивную автоматизацию;
* assessment;
* memory;
* дополнительные ограничения.

---

## 13. Структура репозитория

```text
project-root/
├── .superpowers/          # внешний workflow engine
├── .ai-learning/          # AI Learning Harness
├── src/                   # код приложения
├── tests/                 # тесты приложения
├── docs/                  # документация приложения
├── infra/                 # инфраструктура приложения
└── ...
```

Внутри ALH:

```text
.ai-learning/
├── architecture/          # Этап 1
├── methodology/           # Этап 2
├── development/           # Этап 3
├── prompts/               # Этап 4
├── system/
├── knowledge/
├── memory/
├── project/
├── templates/
├── commands/
├── logs/
├── config/
└── validation/            # Этап 6
```

---

## 14. Этапы разработки ALH

```text
1. Architecture Specification
2. Educational Methodology
3. Development Methodology
4. Prompt Architecture
5. Harness Implementation
6. Validation
```

Текущий этап: **1 — Architecture Specification**.

---

## 15. Документы Этапа 1

```text
.ai-learning/architecture/

00-Vision.md
01-Goals.md
02-Core-Principles.md
03-System-Architecture.md
04-Agent-Pipeline.md
05-State-Machine.md
06-Knowledge-Graph.md
07-Competency-Model.md
08-Memory-Model.md
09-Decision-Engine.md
10-Superpowers-Integration.md
11-Repository-Structure.md
12-ADR/
13-Glossary.md
```

После появления этих документов именно они и ADR становятся **Single Source of Truth** вместо истории чатов или Architecture Snapshot.

---

## 16. Ключевые нерешённые вопросы

На Этапе 1 необходимо формализовать:

* State Machine;
* схему хранения графа;
* модель Memory;
* правила изменения Learning Debt;
* переходы Competency Status;
* переходы Automation Level;
* Decision Engine;
* выбор следующей Learning Unit;
* контракты Agent Pipeline;
* контракт ALH ↔ Superpowers;
* ADR/LDR;
* механизм восстановления контекста между IDE-сессиями.
