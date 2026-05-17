export const javaQA = [
  {
    category: 'Core Java',
    questions: [
      {
        q: 'What is the difference between String, StringBuilder, and StringBuffer?',
        a: 'String is immutable, StringBuffer is mutable and thread-safe, StringBuilder is mutable but not thread-safe. Use StringBuilder for single-threaded scenarios for better performance.',
      },
      {
        q: 'Explain the concept of generics in Java.',
        a: 'Generics enable type-safe collections and reduce casting. They allow you to write reusable code while catching type mismatches at compile time. Example: List<String> ensures only Strings can be added.',
      },
      {
        q: 'What are access modifiers in Java?',
        a: 'public (accessible everywhere), protected (same package + subclasses), default/package-private (same package only), private (class only).',
      },
      {
        q: 'What is the difference between checked and unchecked exceptions?',
        a: 'Checked exceptions must be caught or declared (IOException, SQLException). Unchecked exceptions extend RuntimeException and don\'t require explicit handling (NullPointerException, ArithmeticException).',
      },
    ],
  },
  {
    category: 'OOP Concepts',
    questions: [
      {
        q: 'Explain the four pillars of OOP.',
        a: 'Encapsulation (data hiding), Abstraction (hiding complexity), Inheritance (code reuse), Polymorphism (method overriding/overloading).',
      },
      {
        q: 'What is the difference between method overriding and overloading?',
        a: 'Overloading: same method name, different parameters, compile-time polymorphism. Overriding: same method signature in child class, runtime polymorphism.',
      },
      {
        q: 'What is an interface vs an abstract class?',
        a: 'Interface defines contracts (methods and constants). Abstract class provides partial implementation. A class can implement multiple interfaces but extend only one abstract class.',
      },
    ],
  },
  {
    category: 'Collections & Data Structures',
    questions: [
      {
        q: 'What is the difference between ArrayList and LinkedList?',
        a: 'ArrayList: backed by array, fast random access O(1), slow insertion/deletion O(n). LinkedList: fast insertion/deletion O(1) at ends, slow random access O(n).',
      },
      {
        q: 'How does HashMap work internally?',
        a: 'HashMap uses hash function to map keys to buckets. On collision, it uses chaining (linked list). Load factor determines when to resize. Time complexity: O(1) average, O(n) worst case.',
      },
      {
        q: 'What is the difference between HashSet and TreeSet?',
        a: 'HashSet: unordered, O(1) operations, allows null. TreeSet: ordered (sorted), O(log n) operations, no null, backed by TreeMap.',
      },
    ],
  },
  {
    category: 'Multithreading',
    questions: [
      {
        q: 'What is the difference between Thread and Runnable?',
        a: 'Thread is a class, Runnable is an interface. Prefer Runnable as Java supports single inheritance but multiple interfaces.',
      },
      {
        q: 'Explain synchronized keyword.',
        a: 'Synchronized ensures only one thread accesses a method/block at a time. Can be applied to methods or code blocks. Prevents race conditions and data inconsistency.',
      },
      {
        q: 'What is the volatile keyword?',
        a: 'Volatile ensures visibility of changes across threads. Prevents compiler optimizations and forces reading from main memory. Not a replacement for synchronization.',
      },
    ],
  },
];
