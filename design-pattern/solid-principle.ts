// 單一職責原則 (Single Responsibility Principle)
/* 
：一個類應該只有一個改變的原因。這意味著一個類應該只負責一項職責。 */

// Bad
class User {
  constructor(private name: string, private email: string) {}

  save() {
    // Save user
  }

  sendEmail() {
    // Send email
  }
}

// Good
class User {
  constructor(private name: string, private email: string) {}

  save() {
    // Save user
  }
}

class EmailService {
  sendEmail(user: User) {
    // Send email
  }
}

// 開放封閉原則 (Open-Closed Principle)
/* 軟件實體（類、模塊、函數等等）應該對擴展開放，對修改封閉。這意味著應該能夠在不修改現有代碼的情況下，增加新的功能。

 */

// Bad
class Rectangle {
  constructor(public width: number, public height: number) {}
}

class AreaCalculator {
  calculate(rectangle: Rectangle) {
    return rectangle.width * rectangle.height;
  }
}

// Good
interface Shape {
  calculateArea(): number;
}

class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}

  calculateArea() {
    return this.width * this.height;
  }
}

class AreaCalculator {
  // interface
  calculate(shape: Shape) {
    return shape.calculateArea();
  }
}

// 里氏替換原則 (Liskov Substitution Principle)
/* 如果 S 是 T 的子類型，那麼在不改變程序正確性的前提下，任何 T 的實例都可以被 S 替換（也就是可以用 S 的實例來替換 T 的實例）。 */
// Bad
class Bird {
  fly() {
    // Fly
  }
}

class Penguin extends Bird {}

// Good
class Bird {
  fly() {
    // Fly
  }
}

class FlightlessBird {
  walk() {
    // Walk
  }
}

class Penguin extends FlightlessBird {}

// 介面隔離原則 (Interface Segregation Principle)
/* 客戶端不應該被迫依賴於它不使用的接口。這意味著一個類不應該被迫實現它不需要的方法。 */

// Bad
interface Worker {
  work(): void;
  eat(): void;
}

// Good
interface Worker {
  work(): void;
}

interface Eater {
  eat(): void;
}

// 依賴反轉原則 (Dependency Inversion Principle)
/* 高層模塊不應該依賴於低層模塊，兩者都應該依賴於抽象。抽象不應該依賴於細節，細節應該依賴於抽象。這意味著要依賴於抽象（接口或抽象類），不要依賴於具體的實現（具體的類）。 */

// Bad
class MySQLDatabase {
  insert() {
    // Insert data
  }
}

class UserRepository {
  constructor(private database: MySQLDatabase) {}

  save() {
    this.database.insert();
  }
}

// Good
interface Database {
  insert(): void;
}

class MySQLDatabase implements Database {
  insert() {
    // Insert data
  }
}

class UserRepository {
    // parameter 使用interface 而不是直接使用class
  constructor(private database: Database) {}

  save() {
    this.database.insert();
  }
}
