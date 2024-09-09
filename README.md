
---

# VTU Calculator

## Overview

This project is a web-based application that calculates VTU (Visvesvaraya Technological University) results based on user input. The application is built using [Next.js](https://nextjs.org/), a React framework for server-rendered applications.

#### Collaborators
- [Nishanth K J](https://github.com/nishanthkj)

## Website
[VTU Calculator](https://nishanthkj.github.io/VTU-Calculator/)

## Project Structure

```
VTU_Calculator/
│
└───app/
    ├───components/
    │   ├─── NavBar.js
    │   └─── Footer.js
    │
    ├───custom/
    │   └─── page.js
    │
    ├───PAC/
    │   ├─── page.js
    │   └─── page.js
    │
    ├───Sem3/
    │   └─── page.js
    │
    ├───Sem4/
    │   └─── page.js
    │
    ├───Sem5/
    │   └─── page.js
    │
    ├───Sem6/
    │   └─── page.js
    ├───Sem7/
    │   └─── page.js
    │
    ├───Sem8/
    │   └─── page.js
    │
    ├───working/
        └─── page.js
    
```

## Files Description

- **components/**: Contains reusable components:

  - `NavBar.js`: Navigation bar component.
  - `Footer.js`: Footer component for the application.

- **Custom/**: Contains custom styles and content:
  - `Custom`: Custom Calculator.
  components.




  

- **PAC**,**Sem3/** to **Sem8/**: Contains components and logic for each semester:
  - `page.js`: Components for Semester 3.
  - `page.js`: Components for Semester 4.
  - `page.js`: Components for Semester 5.
  - `page.js`: Components for Semester 6.
  - `page.js`: Components for Semester 7.
  - `page.js`: Components for Semester 8.

- **working/**: Contains features and components currently in progress:
  - `page.js`: Features under development.

- **pages/**: Contains custom pages:
  - `page.js`: Custom page component for additional features or content.

## Setup Instructions

### Prerequisites

- Node.js (>= 18.0.0)
- npm, yarn, or another package manager

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/nishanthkj/VTU-Calculator
    cd VTU-Calculator
    ```

2. **Install the required packages**:
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Configure deployment settings** (if needed):
    Update `next.config.js` with the necessary settings for your environment.

## Usage

1. **Run the development server**:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

2. **Access the application**:
    Open your web browser and navigate to [http://localhost:3000](http://localhost:3000).

3. **Interact with the application**:
    Use the dropdowns and input fields to calculate VTU results. Access different semester components and PAC features as needed. View custom pages and content as defined in `CustomPage.js` and `CustomContent.js`.

## Conclusion

This documentation provides a comprehensive guide to setting up and running the VTU Calculator application. By following the steps outlined, you should be able to deploy the application and interact with its features. If you encounter any issues, ensure that all dependencies are installed and that the application is correctly configured.

---