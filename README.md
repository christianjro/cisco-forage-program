# Cisco Software Engineering Virtual Experience | Forage


## Task 1: Environment Setup and Project Initialization

### Hypothetical Scenario:

You work as a Junior Software Engineer at Cisco in a Research & Development team led by project manager Garrett. During a walk with your friend Erik, he expresses the need to streamline the work of field technicians who currently rely on multiple tools for collecting networking information. Inspired by this, you propose building a dashboard that can consolidate these tasks into a single platform. Excited about the idea, Erik shares his wishlist for the dashboard, and you pitch it to Garrett, who approves the project named Sextant. Your task as the frontend developer is to create an MVP of Sextant, focusing on IP and latency metrics, using React as the frontend framework. This summary highlights the beginning of your journey to develop the Sextant dashboard, aiming to provide field technicians with a concise and easy-to-understand overview of the systems they work on.


### Objective:

I have been assigned the task of developing the frontend for the Sextant dashboard. In this task, my objective is to set up my local development environment, initialize the project, and familiarize myself with the technologies required for Sextant. I will be using React as the frontend framework and creating the project structure using the create-react-app utility. By scaffolding the project and leveraging modern tooling, I can focus on building the content of the website rather than dealing with the underlying infrastructure. This task marks the initial steps towards developing the Sextant dashboard, which will provide field technicians with a comprehensive overview of their systems, with a particular focus on IP and latency metrics.


## Task 2: Design the Sextant Frontend

### Background: 

After successfully setting up the development environment in Task 1, it's time to focus on designing the frontend of the Sextant dashboard. Your aim is to create a user-friendly and visually appealing website that field technicians will find valuable. Your goal is to design a dashboard that presents networking metrics in a concise and organized manner, with a customizable layout that can accommodate future changes and additions.

### Objective:

To achieve my goal, I will carefully consider the colors, styles, and layout that best showcase the networking information. I will focus on creating reusable React components that can handle different data points, enhancing the system's extensibility. Additionally, I will make necessary housekeeping changes, such as updating the website's title and streamlining the workspace. By delivering a well-designed front-end, I aim to contribute to the development of the Sextant dashboard, which will provide field technicians with a comprehensive overview of their systems, with a particular emphasis on IP and latency metrics.

## Task 3: Display the User's Public IP

### Background: 
The Sextant dashboard development involves understanding two types of IP addresses: IPv4 and IPv6. IPv4 addresses are commonly used and obtained through dynamic allocation or static assignment. IPv6 addresses offer a larger address space and can be obtained through autoconfiguration or manual assignment. When displaying IP addresses in the dashboard, clarity and organization are key. 

### Objective: 
To accomplish the task, I utilized the ipify API in my solution. I created a component that makes an HTTP request to the ipify API immediately upon mounting. The component is designed to accept a prop that determines whether it should request an IPv4 address or an IPv6 address. By leveraging the Fetch API, I retrieved the necessary data from the ipify API and surfaced it to the user. The component effectively displays the user's public IP address based on the specified IP version. To integrate this component into the Sextant dashboard, I added two instances of the component to the website. Each instance is wrapped in one of the container components previously created, ensuring proper organization and presentation.