export interface Skill {
  name: string;
  icon: string;
}

export const backendSkills: Skill[] = [
  { name: 'Java 8+', icon: '☕' },
  { name: 'Object-Oriented Programming', icon: '🧱' },
  { name: 'Collections & Streams', icon: '🧺' },
  { name: 'Exception Handling', icon: '🛡️' },
  { name: 'Multithreading & Concurrency', icon: '🧵' },
  { name: 'Executors & CompletableFuture', icon: '⚡' },
  { name: 'Spring Boot', icon: '🌱' },
  { name: 'Spring Security', icon: '🔐' },
  { name: 'REST APIs', icon: '🔗' },
  { name: 'Microservices', icon: '🧩' },
  { name: 'JPA & Hibernate', icon: '🗃️' },
  { name: 'JWT & OAuth 2.0', icon: '🔑' },
  { name: 'Apache Kafka', icon: '📡' },
  { name: 'Kubernetes', icon: '☸️' },
];

export const frontendSkills: Skill[] = [
  { name: 'JavaScript', icon: '⚡' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Angular', icon: '🅰️' },
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'Tailwind CSS', icon: '🪄' },
  { name: 'Responsive UI', icon: '📱' },
  { name: 'REST API Integration', icon: '🔌' },
];

export const databaseSkills: Skill[] = [
  { name: 'SQL', icon: '🔎' },
  { name: 'SQL Query Optimization', icon: '⚡' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'MongoDB', icon: '🍃' },
];

export const testingSkills: Skill[] = [
  { name: 'JUnit', icon: '🧪' },
  { name: 'Mockito', icon: '🎭' },
  { name: 'TestNG', icon: '✅' },
  { name: 'Swagger & OpenAPI', icon: '📖' },
  { name: 'SonarQube', icon: '🔎' },
];

export const toolsSkills: Skill[] = [
  { name: 'Git', icon: '📦' },
  { name: 'Maven', icon: '🧰' },
  { name: 'Jenkins', icon: '⚙️' },
  { name: 'CI/CD', icon: '🚀' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Postman', icon: '📮' },
  { name: 'Jira', icon: '📋' },
  { name: 'IntelliJ IDEA', icon: '💡' },
  { name: 'VS Code', icon: '🧑‍💻' },
];
