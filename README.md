# 📇 My Profile Card

**Developed by** **`Grace Chen Abudi`** 👩🏽‍💻

## 📣 Overview:

- [📇 My Profile Card](#-my-profile-card)
  - [📣 Overview:](#-overview)
  - [🔎 Intro:](#-intro)
  - [🧰 Tech Stack:](#-tech-stack)
  - [🏗️ Architecture Structure:](#️-architecture-structure)
  - [🧪 Comprehensive Testing:](#-comprehensive-testing)

---

## 🔎 Intro:

Welcome to my project showcasing a modern and organized approach to building a profile card with dynamic tabs using **Next.js**, **TypeScript**, and **Tailwind CSS**.

This project aims to provide a streamlined and modular structure for displaying profile information through a responsive and visually appealing UI.

**`Key features include`**:

- **Profile Card**: A visually appealing card displaying user information and a profile picture.

- **Dynamic Tabs**: Tabs for displaying different sections such as About Me, Experience, Tech Stack, and Contact information.

- **Reusable Components**: Utilizes reusable components like TabButtons for seamless navigation between tabs.

- **Organized Structure**: Follows a structured approach with components organized into **components**, **common**, and **styles** directories for clarity and maintainability.

- **Comprehensive Testing**: Ensures reliability and correctness with **_unit tests_** using **Jest** and **React Testing Library**. Test cover rendering and interaction for all major components, including dynamic tab navigation and individual tab content.

This project not only demonstrates proficiency in modern web development technologies but also emphasizes best practices in component-based architecture, user interface design, and comprehensive testing.

Whether you're exploring frontend development or looking for inspiration in organizing complex UI components, this project serves as a practical example of effective implementation.

---

## 🧰 Tech Stack:

- NextJS
- TypeScript
- TailwindCSS
- Responsive Layout
- Jest
- Unit Tests
- Mermaid Diagrams

---

## 🏗️ Architecture Structure:

```mermaid

flowchart TD
  A[HomePage] -->|imports| B[ProfileCard]
  B -->|imports| C[tabs]
  C -->|imports| D[Tabs]
  C -->|imports| E[AboutTab]
  C -->|imports| F[ExperienceTab]
  C -->|imports| G[TechStackTab]
  C -->|imports| H[ContactTab]
  B -->|imports| I[common]
  H -->|imports| J[TabButton]

```

```mermaid

flowchart TD
  subgraph app
    layout[layout.tsx]
    page[page.tsx]
  end

  subgraph styles
    globalcss[global.css]
  end

  subgraph assets
    image[Image]
  end

  subgraph __tests__
    subgraph Common
      tabbuttontest[TabButton.test.tsx]
    end

    subgraph components
      subgraph profile
        subgraph tabs
          tabstest[Tabs.test.tsx]
          abouttabtest[AboutTab.test.tsx]
          experiencetabtest[ExperienceTab.test.tsx]
        end
      end
    end
  end


```

---

## 🧪 Comprehensive Testing:

This project ensures reliability and correctness with unit tests using Jest and React Testing Library. Tests cover rendering and interaction for all major components, including dynamic tab navigation and individual tab content.

**Snapshot Testing**

Snapshot testing is used to ensure that the UI components render consistently between updates, preventing unintentional changes.

**Tabs Component**

The `Tabs` component uses snapshot testing to verify its rendering:

- **Initial Snapshot**: Captures the initial rendering of the **_Tabs_** component.

- **State Change Snapshot**: Captures the rendering after switching tabs to ensure the component's UI remains consistent with the expected output.

These tests capture the initial state and subsequent state changes (tab switches) of the **_Tabs_** component.

> [!NOTE]
> The snapshots are stored in a **`__snapshots__`** directory and are compared against future test runs to detect unexpected changes in the UI.
