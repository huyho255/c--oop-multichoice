# Ôn tập CK 2 - Toàn bộ câu hỏi quiz

Nguồn: `ck2.pdf`

## Câu 1
Khi sử dụng từ khóa `new` để che giấu phương thức (Method Hiding) như đoạn mã bên dưới, kết quả thực thi sẽ là gì?

```csharp
class A {
    public void Show() { Console.Write("A"); }
}
class B : A {
    public new void Show() { Console.Write("B"); }
}
class Program {
    static void Main() {
        A obj = new B();
        obj.Show();
    }
}
```

- A
- AB
- B
- Lỗi biên dịch

**Đáp án đúng:** A

## Câu 2
Trong xử lý ngoại lệ, khối lệnh `finally` có đặc điểm thực thi như thế nào?

- Chỉ được thực thi nếu khối `try` không xảy ra bất kỳ lỗi nào.
- Chỉ được thực thi khi có một ngoại lệ được bắt (catch).
- Luôn luôn được thực thi (để giải phóng tài nguyên) bất kể có xảy ra ngoại lệ hay không, trừ khi chương trình bị đóng đột ngột (crash hệ thống).
- Không bao giờ được thực thi nếu trong khối `try` có lệnh `return`.

**Đáp án đúng:** Luôn luôn được thực thi (để giải phóng tài nguyên) bất kể có xảy ra ngoại lệ hay không, trừ khi chương trình bị đóng đột ngột (crash hệ thống).

## Câu 3
Nếu một lớp (class) hoàn toàn không được khai báo bất kỳ constructor nào, điều gì sẽ xảy ra khi biên dịch?

- Trình biên dịch sẽ tự động tạo ra một constructor mặc định (không tham số).
- Lập trình viên bắt buộc phải tự định nghĩa ít nhất một constructor.
- Không thể khởi tạo đối tượng (object) từ lớp đó.
- Trình biên dịch sẽ báo lỗi do thiếu constructor.

**Đáp án đúng:** Trình biên dịch sẽ tự động tạo ra một constructor mặc định (không tham số).

## Câu 4
Cho đoạn mã minh họa đa hình nhiều tầng sau, kết quả thực thi là gì?

```csharp
class A {
    public virtual void Show() { Console.Write("A"); }
}
class B : A {
    public override void Show() { Console.Write("B"); }
}
class C : B {
    public override void Show() { Console.Write("C"); }
}
class Program {
    static void Main() {
        A obj = new C();
        obj.Show();
    }
}
```

- B
- C
- A
- Lỗi biên dịch

**Đáp án đúng:** C

## Câu 5
Hãy cho biết kết quả in ra màn hình của đoạn chương trình sau:

```csharp
class Test {
    public int X { get; set; }
}
class Program {
    static void Main() {
        Test t = new Test();
        t.X = 10;
        Console.Write(t.X);
    }
}
```

- Lỗi biên dịch
- 0
- Null
- 10

**Đáp án đúng:** 10

## Câu 6
Trong C#, từ khóa `virtual` và `override` được sử dụng để thể hiện nguyên lý nào của Lập trình hướng đối tượng?

- Đóng gói (Encapsulation)
- Kế thừa (Inheritance)
- Trừu tượng (Abstraction)
- Đa hình (Polymorphism)

**Đáp án đúng:** Đa hình (Polymorphism)

## Câu 7
Mục đích chính của Event trong C# là gì?

- Cung cấp cơ chế thông báo (notification) khi có một hành động hoặc sự kiện xảy ra.
- Xử lý các ngoại lệ (exception) một cách tự động.
- Khởi tạo trực tiếp một object.
- Lưu trữ dữ liệu cấu trúc dưới dạng bảng.

**Đáp án đúng:** Cung cấp cơ chế thông báo (notification) khi có một hành động hoặc sự kiện xảy ra.

## Câu 8
Thành phần đăng ký lắng nghe và xử lý Event được gọi là gì?

- Publisher
- Subscriber (Người nhận tin)
- Owner
- Sender

**Đáp án đúng:** Subscriber (Người nhận tin)

## Câu 9
Toán tử nào được sử dụng để một dịch vụ bên ngoài đăng ký lắng nghe một Sự kiện (Event)?

- `+=`
- `==`
- `=`
- `!`

**Đáp án đúng:** `+=`

## Câu 10
Lợi ích chính của Lambda expression (`=>`) trong C# là gì?

- Khai báo một lớp (class) mới trực tiếp trong hàm.
- Cung cấp cú pháp ngắn gọn để viết các phương thức ẩn danh (anonymous methods).
- Tạo ra các ngoại lệ (exception) tùy chỉnh.
- Định nghĩa một Event toàn cục.

**Đáp án đúng:** Cung cấp cú pháp ngắn gọn để viết các phương thức ẩn danh (anonymous methods).

## Câu 11
Toán tử nào được sử dụng để hủy đăng ký (unsubscribe) một phương thức khỏi một Sự kiện (Event)?

- `==`
- `-=`
- `!=`
- `+=`

**Đáp án đúng:** `-=`

## Câu 12
Toán tử `as` trong C# mang lại ưu điểm gì khi thực hiện ép kiểu (type casting) đối tượng tham chiếu?

- Tự động chuyển đổi qua lại giữa các kiểu dữ liệu nguyên thủy (như từ `int` sang `string`).
- Bắt buộc ép kiểu đối tượng và lập tức ném ngoại lệ `InvalidCastException` nếu quá trình ép kiểu thất bại.
- Kiểm tra xem đối tượng có thuộc một kiểu cụ thể hay không và trả về giá trị boolean (True/False).
- Cố gắng ép kiểu đối tượng một cách an toàn; nếu thất bại, nó sẽ trả về giá trị `null` thay vì ném ra ngoại lệ làm chương trình bị crash.

**Đáp án đúng:** Cố gắng ép kiểu đối tượng một cách an toàn; nếu thất bại, nó sẽ trả về giá trị `null` thay vì ném ra ngoại lệ làm chương trình bị crash.

## Câu 13
Nếu một Property chỉ được khai báo bộ truy cập `get`; mà không có `set`; đặc tính của Property đó là gì?

- Là thuộc tính chỉ đọc (Read-only property).
- Không thể biên dịch được.
- Lỗi NullReferenceException khi chạy chương trình.
- Là thuộc tính chỉ ghi (Write-only property).

**Đáp án đúng:** Là thuộc tính chỉ đọc (Read-only property).

## Câu 14
Phát biểu nào sau đây là ĐÚNG khi nói về Lớp trừu tượng (Abstract class)?

- Không thể thực thi (implement) các Interface.
- Có thể dùng từ khóa `new` để khởi tạo đối tượng trực tiếp từ nó.
- Không được phép chứa bất kỳ phương thức nào có phần thân (body).
- Nó có thể chứa các constructor để khởi tạo các trạng thái nội bộ, mặc dù không thể khởi tạo trực tiếp.

**Đáp án đúng:** Nó có thể chứa các constructor để khởi tạo các trạng thái nội bộ, mặc dù không thể khởi tạo trực tiếp.

## Câu 15
Cho biết kết quả in ra màn hình của hàm sau:

```csharp
try {
    return;
}
finally {
    Console.Write("End");
}
```

- End
- Ngoại lệ NullReferenceException.
- Chương trình kết thúc ngay, không in ra gì.
- Lỗi biên dịch do khối `finally` đi sau lệnh `return`.

**Đáp án đúng:** End

## Câu 16
Lệnh `throw;` (không có biến exception đi kèm) bên trong khối `catch` có tác dụng gì?

- Xóa hoàn toàn ngoại lệ hiện tại để chương trình chạy tiếp.
- Gây ra lỗi biên dịch vì lệnh `throw` bắt buộc phải luôn đi kèm một đối tượng Exception.
- Ném lại ngoại lệ hiện tại và giữ nguyên thông tin StackTrace (dấu vết ngăn xếp) ban đầu để dễ dàng debug.
- Ném lại ngoại lệ nhưng làm mới thông tin StackTrace, làm mất nguồn gốc gây ra lỗi.

**Đáp án đúng:** Ném lại ngoại lệ hiện tại và giữ nguyên thông tin StackTrace (dấu vết ngăn xếp) ban đầu để dễ dàng debug.

## Câu 17
Trong kiến trúc Hướng sự kiện, thành phần chịu trách nhiệm phát ra (kích hoạt) Event được gọi là gì?

- Sender
- Receiver
- Subscriber
- Publisher (Người phát tin)

**Đáp án đúng:** Publisher (Người phát tin)

## Câu 18
Để phương thức ở lớp cha có thể bị ghi đè (override) ở lớp con, điều kiện tiên quyết là gì?

- Phương thức ở lớp cha phải là `static`.
- Phương thức ở lớp cha phải trả về kiểu `void`.
- Phương thức ở lớp cha không được có tham số.
- Phương thức ở lớp cha phải được đánh dấu bằng từ khóa `virtual` hoặc `abstract`.

**Đáp án đúng:** Phương thức ở lớp cha phải được đánh dấu bằng từ khóa `virtual` hoặc `abstract`.

## Câu 19
Phát biểu nào sau đây mô tả chính xác về phương thức tĩnh (Static method)?

- Không thể nhận các tham số đầu vào.
- Chỉ được khai báo với phạm vi truy cập là `private`.
- Bắt buộc phải khởi tạo đối tượng (object) thông qua từ khóa `new` mới có thể gọi được phương thức này.
- Có thể gọi trực tiếp thông qua `TênLớp.TênPhươngThức` mà không cần tạo đối tượng, vì nó thuộc về chính lớp đó chứ không thuộc về thực thể.

**Đáp án đúng:** Có thể gọi trực tiếp thông qua `TênLớp.TênPhươngThức` mà không cần tạo đối tượng, vì nó thuộc về chính lớp đó chứ không thuộc về thực thể.

## Câu 20
Cho biết thứ tự thực thi của các constructor trong đoạn mã sau:

```csharp
class A {
    public A() { Console.Write("A"); }
}
class B : A {
    public B() { Console.Write("B"); }
}
class Program {
    static void Main() {
        B obj = new B();
    }
}
```

- BA
- B
- AB
- A

**Đáp án đúng:** AB

## Câu 21
Phân tích đoạn mã sau và cho biết kết quả in ra màn hình là gì?

```csharp
class A {
    public virtual void Show() { Console.Write("A"); }
}
class B : A {
    public override void Show() { Console.Write("B"); }
}
class Program {
    static void Main() {
        A obj = new B();
        obj.Show();
    }
}
```

- Lỗi biên dịch
- AB
- B
- A

**Đáp án đúng:** B

## Câu 22
Từ khóa `base` khi được sử dụng trong constructor của lớp con có tác dụng gì?

- Tạo ra một đối tượng (object) mới từ lớp cha.
- Ghi đè phương thức của lớp cha.
- Gọi một phương thức tĩnh (static method) của lớp hiện tại.
- Gọi phương thức khởi tạo (constructor) tương ứng của lớp cha.

**Đáp án đúng:** Gọi phương thức khởi tạo (constructor) tương ứng của lớp cha.

## Câu 23
Nguyên lý Kế thừa (Inheritance) mang lại lợi ích cốt lõi nào trong lập trình?

- Ngăn chặn việc ghi đè các phương thức.
- Cho phép một lớp kế thừa trực tiếp từ nhiều lớp cha cùng lúc.
- Tái sử dụng lại mã nguồn (code) và cấu trúc từ lớp cha, giúp dễ dàng bảo trì và mở rộng hệ thống.
- Hủy bỏ tính chất đa hình của hệ thống.

**Đáp án đúng:** Tái sử dụng lại mã nguồn (code) và cấu trúc từ lớp cha, giúp dễ dàng bảo trì và mở rộng hệ thống.

## Câu 24
Thuộc tính tự động (Auto-implemented Property) mang lại ưu điểm gì trong mã nguồn?

- Giúp property trở thành abstract.
- Bắt buộc property phải có từ khóa static.
- Giúp viết code ngắn gọn hơn do trình biên dịch tự động sinh ra một trường ẩn (backing field) để lưu trữ dữ liệu mà không cần lập trình viên tự khai báo.
- Không cho phép người dùng đọc dữ liệu.

**Đáp án đúng:** Giúp viết code ngắn gọn hơn do trình biên dịch tự động sinh ra một trường ẩn (backing field) để lưu trữ dữ liệu mà không cần lập trình viên tự khai báo.

## Câu 25
Cho đoạn code gộp Delegate sau, kết quả chương trình là gì?

```csharp
Action myAction = () => Console.Write("A");
myAction += () => Console.Write("B");
myAction();
```

- B
- AB
- A
- BA

**Đáp án đúng:** AB

## Câu 26
Từ khóa `sealed` khi đặt trước khai báo của một lớp (class) mang ý nghĩa gì?

- Cho phép lớp đó có thể đa kế thừa.
- Chuyển đổi lớp đó thành một static class.
- Yêu cầu lớp đó bắt buộc phải được thực thi như một Interface.
- Khóa lớp đó lại, không cho phép bất kỳ lớp nào khác kế thừa từ nó.

**Đáp án đúng:** Khóa lớp đó lại, không cho phép bất kỳ lớp nào khác kế thừa từ nó.

## Câu 27
Cho đoạn code sau, kết quả in ra màn hình là gì?

```csharp
Predicate<int> p = x => x > 5;
Console.Write(p(10));
```

- Lỗi biên dịch
- 10
- True
- False

**Đáp án đúng:** True

## Câu 28
Trong C#, bạn có thể sử dụng Interface để:

- Thay thế hoàn toàn cho abstract class.
- Lưu trữ các biến cục bộ cho đối tượng.
- Khởi tạo trực tiếp đối tượng bằng từ khóa `new`.
- Định nghĩa một hợp đồng (contract) bao gồm danh sách các hành vi mà các lớp (class) hoặc cấu trúc (struct) thực thi nó bắt buộc phải tuân theo.

**Đáp án đúng:** Định nghĩa một hợp đồng (contract) bao gồm danh sách các hành vi mà các lớp (class) hoặc cấu trúc (struct) thực thi nó bắt buộc phải tuân theo.

## Câu 29
Đoạn mã dưới đây vi phạm quy tắc nào của Abstract class?

```csharp
abstract class A {
    public abstract void Run();
}
class B : A { }
```

- Không có lỗi, chương trình biên dịch bình thường.
- Abstract class không được phép khai báo phương thức abstract.
- Lớp con (B) khi kế thừa lớp trừu tượng (A) bắt buộc phải ghi đè (override) tất cả các phương thức abstract, hoặc bản thân lớp B cũng phải là abstract.
- Tên lớp abstract bắt buộc phải bắt đầu bằng chữ "Base".

**Đáp án đúng:** Lớp con (B) khi kế thừa lớp trừu tượng (A) bắt buộc phải ghi đè (override) tất cả các phương thức abstract, hoặc bản thân lớp B cũng phải là abstract.

## Câu 30
Multicast delegate có đặc điểm cơ bản nào sau đây?

- Không cho phép truyền tham số.
- Chỉ trỏ được tới duy nhất 1 hàm.
- Không hỗ trợ kiểu trả về (bắt buộc phải là void).
- Có thể trỏ đến và thực thi một danh sách nhiều phương thức cùng lúc.

**Đáp án đúng:** Có thể trỏ đến và thực thi một danh sách nhiều phương thức cùng lúc.

## Câu 31
Điều gì sẽ xảy ra nếu một ngoại lệ (Exception) phát sinh nhưng không có bất kỳ khối `catch` nào xử lý nó?

- Ngoại lệ sẽ bị ném ngược lên (propagate) các hàm gọi nó, và nếu không ai xử lý, chương trình sẽ bị ngắt đột ngột (Crash).
- Chương trình tự động bỏ qua dòng lỗi và chạy tiếp dòng lệnh bên dưới.
- Trình biên dịch sẽ tự động chèn khối try-catch rỗng.
- Hệ điều hành sẽ khởi động lại ứng dụng.

**Đáp án đúng:** Ngoại lệ sẽ bị ném ngược lên (propagate) các hàm gọi nó, và nếu không ai xử lý, chương trình sẽ bị ngắt đột ngột (Crash).

## Câu 32
Điểm khác biệt cơ bản nhất giữa Lớp trừu tượng (Abstract class) và Giao diện (Interface) trong C# (phiên bản truyền thống) là gì?

- Abstract class không thể đóng vai trò là lớp cha.
- Interface không cho phép khai báo phương thức.
- Abstract class có thể chứa các trường dữ liệu (fields) và các phương thức đã có thân hàm, còn Interface thì không thể chứa fields.
- Abstract class bắt buộc phải có constructor tĩnh.

**Đáp án đúng:** Abstract class có thể chứa các trường dữ liệu (fields) và các phương thức đã có thân hàm, còn Interface thì không thể chứa fields.

## Câu 33
Thuộc tính (Property) trong C# được thiết kế với mục đích chính là gì?

- Thay thế hoàn toàn cho các phương thức thông thường.
- Khai báo các biến cục bộ trong một phương thức.
- Đóng gói dữ liệu (Encapsulation) bằng cách kiểm soát quyền truy cập đọc/ghi (getter/setter) cho các trường dữ liệu (fields) private.
- Xử lý các ngoại lệ (Exception) phát sinh trong lớp.

**Đáp án đúng:** Đóng gói dữ liệu (Encapsulation) bằng cách kiểm soát quyền truy cập đọc/ghi (getter/setter) cho các trường dữ liệu (fields) private.

## Câu 34
C# xử lý tình huống Đa kế thừa Interface như thế nào nếu hai Interface có cùng một tên phương thức?

- Cho phép sử dụng cơ chế Thực thi giao diện tường minh (Explicit Interface Implementation) bằng cách chỉ định rõ `TênInterface.TênPhươngThức()` trong lớp thực thi.
- Trình biên dịch tự động trộn hai phương thức làm một.
- Báo lỗi biên dịch không cho phép thực thi đa giao diện.
- Lập trình viên phải đổi tên phương thức ở một trong hai Interface.

**Đáp án đúng:** Cho phép sử dụng cơ chế Thực thi giao diện tường minh (Explicit Interface Implementation) bằng cách chỉ định rõ `TênInterface.TênPhươngThức()` trong lớp thực thi.

## Câu 35
Thành phần tĩnh (static field/property) có đặc trưng lưu trữ dữ liệu như thế nào?

- Dữ liệu bị xóa ngay sau khi phương thức kết thúc.
- Chỉ lưu trữ được các hằng số (const).
- Dữ liệu tĩnh được chia sẻ chung duy nhất cho tất cả các đối tượng (objects) được tạo ra từ lớp đó.
- Mỗi đối tượng (object) được tạo ra sẽ sở hữu một bản sao dữ liệu tĩnh riêng biệt.

**Đáp án đúng:** Dữ liệu tĩnh được chia sẻ chung duy nhất cho tất cả các đối tượng (objects) được tạo ra từ lớp đó.

## Câu 36
Điểm khác biệt quan trọng giữa phương thức `virtual` và phương thức `abstract` là gì?

- `abstract` chỉ dùng được trong Interface.
- Phương thức `virtual` đã có sẵn phần thân hàm (body) mặc định, trong khi phương thức `abstract` chỉ có chữ ký hàm và bắt buộc lớp con phải triển khai.
- Cả hai đều không có phần thân hàm.
- `virtual` bắt buộc phải được override, `abstract` thì không.

**Đáp án đúng:** Phương thức `virtual` đã có sẵn phần thân hàm (body) mặc định, trong khi phương thức `abstract` chỉ có chữ ký hàm và bắt buộc lớp con phải triển khai.

## Câu 37
Phát biểu nào sau đây mô tả chính xác nhất về Phương thức khởi tạo (Constructor) trong một lớp?

- Bắt buộc phải khai báo ít nhất một tham số truyền vào.
- Có kiểu trả về là `void`.
- Không có kiểu trả về và tên bắt buộc phải trùng với tên lớp.
- Có thể sử dụng từ khóa `override` để ghi đè.

**Đáp án đúng:** Không có kiểu trả về và tên bắt buộc phải trùng với tên lớp.

## Câu 38
Cú pháp hiện đại và an toàn nhất (tránh lỗi Null Reference) để gọi/kích hoạt một Event tên là `E` là gì?

- `throw E;`
- `E?.Invoke();`
- `try { E(); } catch {}`
- `E();`

**Đáp án đúng:** `E?.Invoke();`

## Câu 39
Sự kết hợp giữa `override` và `new` trong chuỗi kế thừa sau sẽ cho ra kết quả nào?

```csharp
class A {
    public virtual void Show() { Console.Write("A"); }
}
class B : A {
    public override void Show() { Console.Write("B"); }
}
class C : B {
    public new void Show() { Console.Write("C"); }
}
class Program {
    static void Main() {
        B obj = new C();
        obj.Show();
    }
}
```

- Lỗi biên dịch
- C
- B
- A

**Đáp án đúng:** B

## Câu 40
Trong ngôn ngữ C#, một lớp (class) có thể kế thừa trực tiếp tối đa bao nhiêu lớp khác (class)?

- Không giới hạn số lượng.
- Hai lớp.
- Chỉ duy nhất một lớp.
- Nhiều lớp.

**Đáp án đúng:** Chỉ duy nhất một lớp.
