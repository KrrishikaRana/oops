// ===== CLASS MODEL =====
import "./App.css";
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  summary() {
    return `${this.name} • ${this.age} yrs`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  summary() {
    return `${this.name} is training in ${this.major}`;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  summary() {
    return `${this.name} teaches ${this.subject}`;
  }
}

// ===== DATA =====

const people = [
  new Person("Neel Patel", 28),
  new Student("Isha Verma", 21, "Machine Learning"),
  new Teacher("Dr. Arjun Sen", 52, "Statistics")
];

// ===== UI =====

function Card({ p }) {
  return (
    <div className="card">
      <div className="type">{p.constructor.name}</div>

      <h2>{p.name}</h2>
      <p className="age">{p.age} years</p>

      <p className="desc">{p.summary()}</p>

      {p instanceof Student && (
        <span className="tag">Major: {p.major}</span>
      )}

      {p instanceof Teacher && (
        <span className="tag">Subject: {p.subject}</span>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="page">
      <h1>OOP People Cards</h1>

      <div className="grid">
        {people.map((x, i) => (
          <Card key={i} p={x} />
        ))}
      </div>
    </div>
  );
}