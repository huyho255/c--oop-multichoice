# Ôn tập Lớp trừu tượng - Quiz câu hỏi

Nguồn: `abstractclass.pdf` - 20 câu hỏi.

---

## Câu 1

**Lớp trừu tượng (Abstract Class) CÓ THỂ chứa Hàm khởi tạo (Constructor) không?**

A. Có, nhưng Hàm khởi tạo đó bắt buộc phải rỗng.  
B. Có, Hàm khởi tạo này được dùng để thiết lập "code chung" và sẽ được Lớp con gọi thông qua từ khóa `base(...)`.  
C. Không, vì nó không thể được dùng với từ khóa `new`.  
D. Có, nhưng chỉ được chứa Hàm khởi tạo mặc định (không tham số).

**Đáp án đúng:** B

---

## Câu 2

**Một Lớp trừu tượng (Abstract Class) CÓ ĐƯỢC PHÉP chứa các phương thức bình thường (đã có sẵn thân hàm và code xử lý) hay không?**

A. Có, nhưng các phương thức bình thường đó phải là `static`.  
B. Có, nhưng tối đa chỉ được chứa 1 phương thức bình thường.  
C. Có, lớp trừu tượng có thể chứa song song cả phương thức trừu tượng lẫn phương thức bình thường (code chung).  
D. Không, lớp trừu tượng chỉ được chứa phương thức trừu tượng.

**Đáp án đúng:** C

---

## Câu 3

**Sự khác biệt cốt lõi nhất giữa phương thức Ảo (`virtual`) và phương thức Trừu tượng (`abstract`) là gì?**

A. Không có sự khác biệt, hai từ khóa này có thể dùng thay thế cho nhau.  
B. `virtual` bắt buộc lớp con phải ghi đè, `abstract` thì không bắt buộc.  
C. `virtual` CÓ SẴN thân hàm (code mặc định), `abstract` KHÔNG có thân hàm.  
D. `abstract` dùng được từ khóa `override`, còn `virtual` thì không.

**Đáp án đúng:** C

---

## Câu 4

**Từ khóa nào BẮT BUỘC phải được sử dụng tại Lớp con khi muốn triển khai mã lệnh cho một Phương thức trừu tượng của Lớp cha?**

A. `implement`  
B. `virtual`  
C. `override`  
D. `new`

**Đáp án đúng:** C

---

## Câu 5

**Đặc điểm cốt lõi và quan trọng nhất của một Lớp trừu tượng (Abstract Class) là gì?**

A. Hệ thống nghiêm cấm sử dụng từ khóa `new` để tạo đối tượng trực tiếp từ lớp này.  
B. Nó bắt buộc phải chứa ít nhất một phương thức tĩnh (static method).  
C. Nó không thể có các trường dữ liệu (fields) và hàm khởi tạo.  
D. Nó tự động ẩn mọi dữ liệu khỏi các lớp khác.

**Đáp án đúng:** A

---

## Câu 6

**Đoạn mã Đa hình sau sẽ in ra kết quả gì?**

```csharp
public abstract class Staff
{
    public abstract decimal GetBonus();
}

public class Manager : Staff {
    public override decimal GetBonus() { return 500m; }
}

public class Teller : Staff {
    public override decimal GetBonus() { return 100m; }
}

class Program {
    static void Main() {
        Staff[] team = new Staff[] { new Manager(), new Teller() };
        decimal total = 0;
        foreach(var member in team) {
            total += member.GetBonus();
        }
        Console.WriteLine(total);
    }
}
```

A. 600  
B. Lỗi biên dịch.  
C. 100  
D. 500

**Đáp án đúng:** A

---

## Câu 7

**Về mặt cú pháp C#, điều kiện nào sau đây là ĐÚNG khi định nghĩa một Lớp chứa phương thức trừu tượng?**

A. Các phương thức trừu tượng trong lớp phải được để ở chế độ `private`.  
B. Nếu lớp có ít nhất 1 phương thức `abstract`, bản thân lớp đó bắt buộc phải được gắn từ khóa `abstract`.  
C. Lớp đó không được phép có Hàm khởi tạo (Constructor).  
D. Lớp đó phải là lớp tĩnh (static class).

**Đáp án đúng:** B

---

## Câu 8

**Lý do trình biên dịch báo lỗi trong đoạn mã Đa hình sau là gì?**

```csharp
public abstract class BankAccount { }
public class CheckingAccount : BankAccount
{
    public void WithdrawOverdraft() { /* ... */ }
}

class Program {
    static void Main() {
        BankAccount acc = new CheckingAccount();
        acc.WithdrawOverdraft();
    }
}
```

A. Biến `acc` mang kiểu `BankAccount` (Lớp cha), mà Lớp cha không hề có hàm `WithdrawOverdraft()`. Trình biên dịch chỉ nhìn vào kiểu của biến.  
B. Không thể sử dụng từ khóa `new` ở dòng 9.  
C. Không thể gán đối tượng `CheckingAccount` cho biến kiểu `BankAccount`.  
D. Lỗi do phương thức `WithdrawOverdraft()` không có từ khóa `override`.

**Đáp án đúng:** A

---

## Câu 9

**Trong C#, bạn CÓ THỂ khai báo Thuộc tính trừu tượng (Abstract Property) giống như Phương thức trừu tượng không?**

A. Có, nhưng không được dùng trong lớp `abstract`.  
B. Không, vì Thuộc tính phải luôn có biến hỗ trợ (backing field).  
C. Không, chỉ có Phương thức (Method) mới được trừu tượng hóa.  
D. Có, ví dụ: `public abstract decimal Tax { get; }`.

**Đáp án đúng:** D

---

## Câu 10

**Phương thức trừu tượng (Abstract Method) có được phép khai báo là `private` không?**

A. Có, vì đây là cách tốt nhất để đóng gói (Encapsulation).  
B. Không. Phương thức trừu tượng sinh ra để ép Lớp con ghi đè, nếu để `private` thì Lớp con không nhìn thấy để ghi đè, dẫn đến lỗi biên dịch.  
C. Có, nếu ta chỉ muốn dùng nó trong Lớp cha.  
D. Có, nhưng Lớp con phải dùng từ khóa `base` mới gọi được.

**Đáp án đúng:** B

---

## Câu 11

**Lỗi sai trong đoạn mã kế thừa đa hình sau là gì?**

```csharp
public abstract class Employee
{
    public abstract void Work();
}

public class Manager : Employee
{
    public void Work()
    {
        Console.WriteLine("Quản lý dự án");
    }
}
```

A. Hàm `Work()` trong `Manager` phải trả về `string`.  
B. Lớp `Manager` thiếu từ khóa `override` khi cung cấp code cho hàm `Work()`.  
C. Lớp `Manager` không được phép chứa hàm `Work()`.  
D. Lớp `Manager` bắt buộc phải là `abstract class`.

**Đáp án đúng:** B

---

## Câu 12

**Đoạn mã sau sẽ in ra kết quả gì?**

```csharp
public class Animal
{
    public virtual void Speak() => Console.WriteLine("Âm thanh động vật");
}

public class Dog : Animal
{
    // Cố tình không dùng override
}

class Program {
    static void Main() {
        Animal myDog = new Dog();
        myDog.Speak();
    }
}
```

A. Âm thanh động vật. (Vì lớp con không ghi đè, hệ thống lấy luôn code mặc định của lớp cha.)  
B. Lỗi biên dịch vì lớp `Dog` bắt buộc phải ghi đè hàm `Speak`.  
C. Gâu gâu.  
D. Không in ra gì cả.

**Đáp án đúng:** A

---

## Câu 13

**Bản chất của Tính Đa hình (Polymorphism) trong lập trình Hướng đối tượng là gì?**

A. Khả năng tạo ra nhiều đối tượng từ cùng một lớp.  
B. Phương thức có thể nhận vào nhiều kiểu dữ liệu tham số khác nhau.  
C. Một Lớp cha có thể kế thừa từ nhiều Lớp con cùng lúc.  
D. Nhiều đối tượng thuộc các Lớp con khác nhau có thể phản hồi cùng một lời gọi hàm theo những cách riêng biệt của chúng.

**Đáp án đúng:** D

---

## Câu 14

**Lỗi sai về phạm vi truy cập trong mã sau là gì?**

```csharp
public abstract class Document
{
    protected abstract void Print();
}

public class Invoice : Document
{
    private override void Print()
    {
        Console.WriteLine("In hóa đơn");
    }
}
```

A. Lớp cha không được dùng `protected` cho hàm trừu tượng.  
B. Hàm `Print()` không thể sử dụng `Console.WriteLine`.  
C. Khi `override`, lớp con không được phép thu hẹp phạm vi truy cập. Hàm ở cha là `protected`, hàm ở con không thể là `private`.  
D. `Invoice` thiếu từ khóa `abstract`.

**Đáp án đúng:** C

---

## Câu 15

**Nếu bạn có một Lớp cha `Vehicle` và Lớp con `Car`. Bạn định nghĩa một mảng `Vehicle[] list = new Vehicle[5];` Mảng này có thể chứa những đối tượng nào?**

A. Chỉ chứa được đối tượng sinh ra từ `Vehicle`.  
B. Chứa được các đối tượng khởi tạo từ `Vehicle`, `Car`, và bất kỳ lớp nào kế thừa từ `Vehicle`.  
C. Chỉ chứa được đối tượng sinh ra từ `Car`.  
D. Không thể chứa đối tượng, mảng này chỉ chứa các kiểu dữ liệu cơ bản như `int`, `string`.

**Đáp án đúng:** B

---

## Câu 16

**Nếu Lớp con kế thừa từ một Lớp trừu tượng, nhưng Lớp con KHÔNG ghi đè (`override`) tất cả các phương thức trừu tượng của Lớp cha, điều gì sẽ xảy ra?**

A. Chương trình tự động bỏ qua phương thức đó và chạy bình thường.  
B. Trình biên dịch báo lỗi, HOẶC bản thân Lớp con cũng phải được khai báo là Lớp trừu tượng (`abstract`).  
C. Trình biên dịch sẽ tự động tạo một hàm rỗng cho phương thức đó.  
D. Trình biên dịch báo lỗi trừ khi bạn xóa phương thức đó ở Lớp cha.

**Đáp án đúng:** B

---

## Câu 17

**Lỗi sai trong đoạn mã sau là gì?**

```csharp
public abstract class BankAccount
{
    public abstract decimal CalculateFee()
    {
        return 0m;
    }
}
```

A. Phương thức trừu tượng không được phép trả về kiểu `decimal`.  
B. Lớp `BankAccount` thiếu Hàm khởi tạo.  
C. Từ khóa `abstract` ở dòng 3 phải được thay bằng `virtual`.  
D. Phương thức trừu tượng (abstract method) KHÔNG ĐƯỢC có phần thân hàm `{ ... }`.

**Đáp án đúng:** D

---

## Câu 18

**Mục đích chính của việc gộp nhiều đối tượng con (`Savings`, `Checking`) vào chung một mảng kiểu Lớp cha (`BankAccount[]`) là gì?**

A. Để ngăn chặn việc thay đổi số dư của các tài khoản đó.  
B. Để giải phóng bộ nhớ RAM.  
C. Để gọi phương thức tính lãi.  
D. Để duyệt qua mảng bằng vòng lặp và gọi hàm chung một cách đồng loạt (Đa hình) mà không cần dùng lệnh `if` kiểm tra từng loại.

**Đáp án đúng:** D

---

## Câu 19

**Phương thức trừu tượng (Abstract Method) có đặc điểm nhận dạng nào sau đây?**

A. Được viết sẵn code để tất cả các lớp con dùng chung.  
B. Luôn trả về giá trị `null`.  
C. Chỉ có phần khai báo, hoàn toàn KHÔNG có thân hàm `{ }`.  
D. Bắt buộc phải có từ khóa `private`.

**Đáp án đúng:** C

---

## Câu 20

**Giả sử biến `obj` mang kiểu dữ liệu là Lớp cha (`BaseClass`), nhưng thực tế nó đang lưu trữ vùng nhớ của đối tượng Lớp con (`DerivedClass`). Khi ta gọi một phương thức đã được ghi đè (`override`), làm sao hệ thống biết cần chạy mã lệnh của Lớp con chứ không phải Lớp cha?**

A. Nhờ cơ chế Phân giải động (Dynamic Dispatch) ở thời điểm thực thi (Runtime). Dựa vào kiểu đối tượng thực sự nằm trong bộ nhớ Heap.  
B. Lập trình viên phải truyền thêm tham số vào hàm để chỉ định.  
C. Do Lớp cha không có code nên nó tự động nhảy xuống Lớp con.  
D. Trình biên dịch C# đoán ngẫu nhiên.

**Đáp án đúng:** A
