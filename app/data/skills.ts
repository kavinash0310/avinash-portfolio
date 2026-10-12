export interface Skill {
  name: string;
  icon: string;
}

export const backendSkills: Skill[] = [
  { name: 'Java 8+', icon: '☕' },
  { name: 'Spring Boot', icon: '🌱' },
  { name: 'Spring Security', icon: '🛡️' },
  { name: 'REST APIs', icon: '🔗' },
  { name: 'Microservices', icon: '🧩' },
  { name: 'JPA & Hibernate', icon: '🗃️' },
  { name: 'JWT & OAuth 2.0', icon: '🔐' },
  { name: 'Apache Kafka', icon: '📡' },
];

export const frontendSkills: Skill[] = [
  { name: 'JavaScript', icon: '⚡' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Angular', icon: '🅰️' },
  { name: 'HTML & CSS', icon: '🎨' },
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Tailwind CSS', icon: '🪄' },
];

export const databaseSkills: Skill[] = [
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'MongoDB', icon: '🍃' },
];

export const testingSkills: Skill[] = [
  { name: 'JUnit 5', icon: '🧪' },
  { name: 'Mockito', icon: '🎭' },
  { name: 'TestNG', icon: '✅' },
  { name: 'Swagger & OpenAPI', icon: '📖' },
  { name: 'SonarQube', icon: '🔎' },
];

export const toolsSkills: Skill[] = [
  { name: 'Git', icon: '📦' },
  { name: 'Maven', icon: '🧰' },
  { name: 'Jenkins', icon: '⚙️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Postman', icon: '📮' },
  { name: 'Jira', icon: '📋' },
  { name: 'IntelliJ IDEA', icon: '💡' },
];
