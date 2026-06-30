# Ôn tập CK - Quiz Questions

**Nguồn:** `ck1.pdf`  
**Số câu:** 40

---

## Câu 1

Khi thiết kế một ứng dụng, bạn muốn tạo một ngoại lệ riêng biệt `InvalidLicenseException`. Lớp này nên kế thừa từ đâu?

- System.Error
- System.Exception
- System.SystemException
- Không cần kế thừa, chỉ cần thêm hậu tố "Exception".

**Đáp án đúng:** System.Exception

---

## Câu 2

Trong C#, Event thực chất được xây dựng dựa trên nền tảng của thành phần nào?

- Interface
- Struct
- Enum
- Delegate

**Đáp án đúng:** Delegate

---

## Câu 3

Khi bắt nhiều loại ngoại lệ khác nhau, thứ tự sắp xếp các khối `catch` phải như thế nào?

- Bắt các ngoại lệ cụ thể (Exception dẫn xuất) trước, ngoại lệ chung sau.
- Bảng chữ cái của tên lớp ngoại lệ.
- Thứ tự nào cũng được.
- Bắt các ngoại lệ chung (Exception cơ sở) trước, ngoại lệ cụ thể sau.

**Đáp án đúng:** Bắt các ngoại lệ cụ thể (Exception dẫn xuất) trước, ngoại lệ chung sau.

---

## Câu 4

Khối lệnh nào sau đây luôn luôn được thực thi dù có xảy ra ngoại lệ (exception) hay không?

- try
- catch
- finally
- throw

**Đáp án đúng:** finally

---

## Câu 5

Khi một Event được khai báo dạng `static`, phương thức lắng nghe (Subscriber) bắt buộc phải là phương thức tĩnh (static method) đúng không?

- Đúng, phương thức tĩnh chỉ có thể đăng ký bởi phương thức tĩnh.
- Đúng, nếu không sẽ bị Memory Leak ngay lập tức.
- Sai, phương thức instance (đối tượng) vẫn có thể đăng ký lắng nghe một static event.
- C# không cho phép khai báo static event.

**Đáp án đúng:** Sai, phương thức instance (đối tượng) vẫn có thể đăng ký lắng nghe một static event.

---

## Câu 6

Để hủy đăng ký (unsubscribe) một phương thức khỏi một Event, ta dùng toán tử nào?

- `!=`
- `--`
- `-=`
- `Remove()`

**Đáp án đúng:** `-=`

---

## Câu 7

Khi một lớp triển khai (implement) hai interface có chứa cùng một phương thức `LogData()`, cách giải quyết nào là đúng trong C#?

- Sử dụng Explicit Interface Implementation (Triển khai giao diện tường minh).
- Lớp đó chỉ cần viết hàm `LogData()` một lần và thêm từ khóa `static`.
- Đổi tên phương thức trong một interface.
- Trình biên dịch sẽ báo lỗi, không thể biên dịch.

**Đáp án đúng:** Sử dụng Explicit Interface Implementation (Triển khai giao diện tường minh).

---

## Câu 8

Thuộc tính nào của đối tượng `Exception` cung cấp thông tin chi tiết về nguyên nhân gây ra lỗi dưới dạng chuỗi?

- InnerException
- TargetSite
- Message
- StackTrace

**Đáp án đúng:** Message

---

## Câu 9

Lớp `PTZCamera` kế thừa từ interface `ICamera`. Điều kiện bắt buộc là gì?

- `PTZCamera` phải dùng từ khóa `override` trước các phương thức của `ICamera`.
- `PTZCamera` không được kế thừa thêm bất kỳ lớp nào khác.
- `PTZCamera` phải định nghĩa lại tất cả các phương thức có trong `ICamera`.
- `PTZCamera` phải là một abstract class.

**Đáp án đúng:** `PTZCamera` phải định nghĩa lại tất cả các phương thức có trong `ICamera`.

---

## Câu 10

Điền vào chỗ trống `[X]` để đoạn code sau hợp lệ:

```csharp
public interface IDevice { void TurnOn(); }
public interface INetwork { void Connect(); }
public class IoTGateway : [X]
{
    public void TurnOn() { }
    public void Connect() { }
}
```

- Không thể kế thừa nhiều interface cùng lúc.
- IDevice : INetwork
- IDevice, INetwork
- class IDevice, class INetwork

**Đáp án đúng:** IDevice, INetwork

---

## Câu 11

Delegate tích hợp sẵn nào của C# đại diện cho một phương thức **không trả về giá trị** (`void`) và có thể nhận từ 0 đến 16 tham số?

- Action
- Predicate
- EventHandler
- Func

**Đáp án đúng:** Action

---

## Câu 12

Đặc điểm nào sau đây là **sai** khi nói về Abstract Class trong C#?

- Có thể chứa các trường dữ liệu (fields) và thuộc tính (properties).
- Có thể chứa các phương thức đã được triển khai (có thân hàm).
- Có thể khởi tạo trực tiếp đối tượng từ Abstract Class bằng từ khóa `new`.
- Lớp con kế thừa phải ghi đè (override) tất cả các phương thức abstract.

**Đáp án đúng:** Có thể khởi tạo trực tiếp đối tượng từ Abstract Class bằng từ khóa `new`.

---

## Câu 13

Một Abstract class có thể kế thừa từ một Interface không?

- Không, Interface chỉ dành cho các class thông thường (concrete class).
- Có, và nó bắt buộc phải triển khai tất cả các phương thức của Interface.
- Không, Abstract class chỉ kế thừa được Abstract class khác.
- Có, và nó có thể đánh dấu các phương thức của Interface là `abstract` để lớp con triển khai.

**Đáp án đúng:** Có, và nó có thể đánh dấu các phương thức của Interface là `abstract` để lớp con triển khai.

---

## Câu 14

Từ khóa nào được dùng để ngăn một lớp không cho lớp khác kế thừa?

- readonly
- static
- abstract
- sealed

**Đáp án đúng:** sealed

---

## Câu 15

Lớp cơ sở (base class) của tất cả các ngoại lệ trong C# là gì?

- System.ApplicationException
- System.SystemException
- System.Exception
- System.Error

**Đáp án đúng:** System.Exception

---

## Câu 16

Tìm lỗi sai trong đoạn code sau:

```csharp
public abstract class BuzzerSystem
{
    public abstract void Ring() { Console.WriteLine("Beep!"); } // Dòng 3
}
```

- Phương thức abstract không được phép có phần thân (body).
- Abstract class không được chứa phương thức public.
- Thiếu từ khóa `virtual` ở Dòng 3.
- Tên lớp không được chứa từ "System".

**Đáp án đúng:** Phương thức abstract không được phép có phần thân (body).

---

## Câu 17

Tìm lỗi sai trong đoạn code xử lý ngoại lệ sau:

```csharp
try {
    // some code
}
catch (Exception ex) { }
catch (ArgumentNullException ex) { } // Lỗi ở đây
```

- Thiếu khối finally.
- Khối catch của `ArgumentNullException` không bao giờ được chạm tới vì `Exception` đã bắt mọi thứ trước đó.
- Khối catch không được để trống.
- Không được phép có hai khối catch cùng tham số `ex`.

**Đáp án đúng:** Khối catch của `ArgumentNullException` không bao giờ được chạm tới vì `Exception` đã bắt mọi thứ trước đó.

---

## Câu 18

`Predicate<T>` delegate luôn luôn trả về kiểu dữ liệu gì?

- int
- T
- void
- bool

**Đáp án đúng:** bool

---

## Câu 19

Mục đích chính của từ khóa `event` khi khai báo trong một lớp là gì?

- Để tăng tốc độ thực thi của Delegate.
- Để cho phép lớp khác kế thừa.
- Không có tác dụng gì, chỉ để code dễ đọc.
- Để đóng gói (encapsulate) Delegate, ngăn chặn các lớp bên ngoài gán đè trực tiếp (sử dụng toán tử `=`) hoặc gọi trực tiếp Delegate đó.

**Đáp án đúng:** Để đóng gói (encapsulate) Delegate, ngăn chặn các lớp bên ngoài gán đè trực tiếp (sử dụng toán tử `=`) hoặc gọi trực tiếp Delegate đó.

---

## Câu 20

Chọn lệnh đúng để kiểm tra và kích hoạt sự kiện `OnBuzzerPressed` trong lớp `Buzzer`:

```csharp
public event EventHandler OnBuzzerPressed;
// ... trong một phương thức:
```

- `if (OnBuzzerPressed != null) OnBuzzerPressed(this, EventArgs.Empty);`
- `OnBuzzerPressed(this, EventArgs.Empty);`
- `if (OnBuzzerPressed != null) OnBuzzerPressed(this, EventArgs.Empty);` và `OnBuzzerPressed?.Invoke(this, EventArgs.Empty);` đều đúng.
- `OnBuzzerPressed?.Invoke(this, EventArgs.Empty);`

**Đáp án đúng:** `if (OnBuzzerPressed != null) OnBuzzerPressed(this, EventArgs.Empty);` và `OnBuzzerPressed?.Invoke(this, EventArgs.Empty);` đều đúng.

---

## Câu 21

Delegate trong C# có thể được hiểu như khái niệm nào trong C/C++?

- Con trỏ hàm (Function pointer)
- Biến toàn cục (Global variable)
- Tham chiếu bộ nhớ (Memory reference)
- Lớp trừu tượng (Abstract class)

**Đáp án đúng:** Con trỏ hàm (Function pointer)

---

## Câu 22

Từ khóa nào dùng để chủ động phát sinh một ngoại lệ trong C#?

- catch
- raise
- throw
- generate

**Đáp án đúng:** throw

---

## Câu 23

Delegate `Func<int, string, bool>` đại diện cho hàm có cấu trúc như thế nào?

- Nhận vào 3 tham số (int, string, bool) và trả về void.
- Nhận vào kiểu bool, trả về int và string.
- Nhận vào một tham số kiểu int, trả về string.
- Nhận vào tham số thứ nhất kiểu int, tham số thứ hai kiểu string, và trả về bool.

**Đáp án đúng:** Nhận vào tham số thứ nhất kiểu int, tham số thứ hai kiểu string, và trả về bool.

---

## Câu 24

Để khai báo một delegate nhận vào một tham số kiểu `string` và trả về `int`, cú pháp nào sau đây đúng?

- `public delegate string MyDel(int x);`
- `public int delegate MyDel(string x);`
- `public delegate int MyDel(string x);`
- `public delegate void MyDel(int x, string y);`

**Đáp án đúng:** `public delegate int MyDel(string x);`

---

## Câu 25

Điền vào chỗ trống `[X]` để gán một phương thức ẩn danh (anonymous method) cho delegate:

```csharp
Func<int, int, int> add = [X](int a, int b) { return a + b; };
```

- function
- method
- delegate
- Action

**Đáp án đúng:** delegate

---

## Câu 26

Trong bài toán theo dõi Camera, khi phát hiện đối tượng, Camera cần truyền thêm tọa độ (X, Y) cho hệ thống nhận. Thiết kế nào sau đây là chuẩn nhất trong C#?

- Tạo `public event Action<int, int> OnObjectDetected;`
- Gộp tọa độ thành chuỗi và dùng `public event EventHandler<string> OnObjectDetected;`
- Tạo một lớp `CameraEventArgs` kế thừa `EventArgs` chứa trường X, Y; và tạo `public event EventHandler<CameraEventArgs> OnObjectDetected;`
- Khai báo biến toàn cục (global) để lưu tọa độ và gọi một event rỗng.

**Đáp án đúng:** Tạo một lớp `CameraEventArgs` kế thừa `EventArgs` chứa trường X, Y; và tạo `public event EventHandler<CameraEventArgs> OnObjectDetected;`

---

## Câu 27

Lớp `EventArgs` trong System có chứa dữ liệu gì mặc định?

- Thời gian xảy ra sự kiện.
- Thông tin về lớp Publisher.
- Không chứa dữ liệu gì, nó được dùng làm lớp cơ sở để tạo các lớp dữ liệu sự kiện tùy chỉnh.
- Chứa mảng object lưu tham số.

**Đáp án đúng:** Không chứa dữ liệu gì, nó được dùng làm lớp cơ sở để tạo các lớp dữ liệu sự kiện tùy chỉnh.

---

## Câu 28

Trong C#, một lớp có thể kế thừa tối đa bao nhiêu Abstract class?

- 1
- Phụ thuộc vào bộ nhớ
- Không giới hạn
- 2

**Đáp án đúng:** 1

---

## Câu 29

Cho biết kết quả của chương trình sau:

```csharp
interface ITest { void Print(); }
class TestClass : ITest
{
    void ITest.Print() { Console.WriteLine("Hello"); }
}
class Program
{
    static void Main() {
        TestClass obj = new TestClass();
        obj.Print();
    }
}
```

- Lỗi biên dịch vì phương thức `Print()` trong `TestClass` không có `public`.
- Lỗi biên dịch vì `obj.Print()` không thể gọi trực tiếp (do dùng Explicit Implementation).
- Chương trình chạy nhưng không in ra gì.
- In ra "Hello"

**Đáp án đúng:** Lỗi biên dịch vì `obj.Print()` không thể gọi trực tiếp (do dùng Explicit Implementation).

---

## Câu 30

Đoạn code sau bị lỗi biên dịch ở dòng nào? Giải thích.

```csharp
class StudentProject {
    public event Action ProjectCompleted; // Dòng 2
    public void Finish() { ProjectCompleted?.Invoke(); } // Dòng 3
}
class Program {
    static void Main() {
        StudentProject p = new StudentProject();
        p.ProjectCompleted = () => Console.WriteLine("Done"); // Dòng 8
        p.Finish();
    }
}
```

- Lỗi dòng 8, lớp bên ngoài không được dùng toán tử `=` (gán đè) cho event, phải dùng `+=`.
- Lỗi dòng 2, không được dùng `Action` cho event.
- Lỗi dòng 3, sai cú pháp Invoke.
- Chương trình chạy bình thường không lỗi.

**Đáp án đúng:** Lỗi dòng 8, lớp bên ngoài không được dùng toán tử `=` (gán đè) cho event, phải dùng `+=`.

---

## Câu 31

Đâu là cú pháp Lambda Expression tương đương với hàm sau?

```csharp
int Square(int x) { return x * x; }
```

- `x -> x * x;`
- `(x) == x * x;`
- `x => { x * x }`
- `x => x * x;`

**Đáp án đúng:** `x => x * x;`

---

## Câu 32

Cho đoạn code sau, kết quả in ra màn hình là gì?

```csharp
try {
    int x = 10, y = 0;
    int z = x / y;
    Console.Write("A ");
}
catch (DivideByZeroException) {
    Console.Write("B ");
}
finally {
    Console.Write("C ");
}
```

- A C
- B C
- A B C
- Lỗi biên dịch

**Đáp án đúng:** B C

---

## Câu 33

Điểm khác biệt lớn nhất giữa Interface và Abstract Class trong C# là:

- Interface không thể chứa các trường dữ liệu (fields), còn Abstract class thì có.
- Abstract class hỗ trợ đa kế thừa, interface thì không.
- Abstract class bắt buộc mọi phương thức đều phải là abstract.
- Interface có constructor, abstract class thì không.

**Đáp án đúng:** Interface không thể chứa các trường dữ liệu (fields), còn Abstract class thì có.

---

## Câu 34

Nếu một exception không được catch trong hàm hiện tại, điều gì sẽ xảy ra?

- Chương trình bỏ qua và chạy dòng code tiếp theo.
- Trình biên dịch tự động sửa lỗi.
- Exception sẽ được lan truyền (propagate) lên hàm gọi nó (caller) cho đến khi được xử lý hoặc làm crash chương trình.
- C# sẽ tự động gọi khối finally của hàm Main.

**Đáp án đúng:** Exception sẽ được lan truyền (propagate) lên hàm gọi nó (caller) cho đến khi được xử lý hoặc làm crash chương trình.

---

## Câu 35

Theo chuẩn thiết kế của .NET, một Event Handler Delegate thường có cấu trúc nhận vào mấy tham số?

- Phụ thuộc vào số lượng biến của lớp.
- 1 tham số (chỉ truyền data).
- Không có tham số.
- 2 tham số: `object sender` và `EventArgs e`.

**Đáp án đúng:** 2 tham số: `object sender` và `EventArgs e`.

---

## Câu 36

Khái niệm "Multicast Delegate" trong C# nghĩa là gì?

- Delegate có thể nhận tham số có kiểu dữ liệu khác nhau.
- Delegate hỗ trợ đa luồng (multithreading) tự động.
- Delegate có thể lưu trữ và gọi đồng thời nhiều phương thức cùng lúc.
- Delegate có thể truyền qua môi trường mạng (multicast).

**Đáp án đúng:** Delegate có thể lưu trữ và gọi đồng thời nhiều phương thức cùng lúc.

---

## Câu 37

Lệnh `throw;` (không có biến exception đi kèm) bên trong khối `catch` có tác dụng gì?

- Xóa hoàn toàn ngoại lệ hiện tại.
- Ném lại ngoại lệ nhưng làm mới thông tin StackTrace.
- Ném lại ngoại lệ hiện tại và giữ nguyên thông tin StackTrace ban đầu.
- Gây ra lỗi biên dịch.

**Đáp án đúng:** Ném lại ngoại lệ hiện tại và giữ nguyên thông tin StackTrace ban đầu.

---

## Câu 38

Lớp phát ra sự kiện (nơi khai báo và kích hoạt event) được gọi là ai?

- Observer
- Consumer
- Publisher
- Subscriber

**Đáp án đúng:** Publisher

---

## Câu 39

Toán tử nào được sử dụng để thêm một phương thức vào một Multicast Delegate?

- `+=`
- `&`
- `+`
- `++`

**Đáp án đúng:** `+=`

---

## Câu 40

Nếu một Multicast Delegate gọi nhiều phương thức và các phương thức này có kiểu trả về khác `void`, kết quả trả về của Delegate sẽ là gì?

- Giá trị trả về của phương thức được gọi cuối cùng.
- Một mảng chứa tất cả các kết quả.
- Trình biên dịch sẽ báo lỗi, Multicast delegate bắt buộc phải trả về `void`.
- Giá trị trả về của phương thức được gọi đầu tiên.

**Đáp án đúng:** Giá trị trả về của phương thức được gọi cuối cùng.
