# Ôn thi giữa kỳ phần lý thuyết

## Câu 1
Chủ đề: Ôn thi giữa kỳ
Enum có thể được khai báo như thế nào?

- [ ] enum EmpType { "Manager", "Grunt", "Contractor", "VicePresident" }
- [ ] enum EmpType { 0, 1, 2, 3 }
- [ ] enum EmpType { true, false }
- [x] enum EmpType { Manager, Grunt, Contractor, VicePresident }

> Giải thích: Enum khai báo bằng các tên hằng hợp lệ, không đặt từng giá trị trong dấu nháy kép.

## Câu 2
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để khởi tạo một đối tượng từ class Car?

- [x] Car myCar = new Car()
- [ ] Car myCar = Car
- [ ] Car myCar = new Car
- [ ] Car myCar = Car()

> Giải thích: Tạo object cần từ khóa new và lời gọi constructor Car().

## Câu 3
Chủ đề: Ôn thi giữa kỳ
Phương thức nào có thể truy xuất tới cả static và non-static fields trong cùng class?

- [ ] Public methods
- [ ] Static methods
- [ ] Private methods
- [x] Non-static methods

> Giải thích: Non-static method chạy trên một object cụ thể nên truy cập được field instance và cũng thấy field static của class.

## Câu 4
Chủ đề: Ôn thi giữa kỳ
Cho biết kết quả của đoạn chương trình sau?

```csharp
class Program
{
    static void Main(string[] args)
    {
        int x = 5;
        int y = x;
        y = 10;
        Console.WriteLine(x);
    }
}
```

- [ ] Lỗi biên dịch
- [ ] 10
- [ ] 0
- [x] 5

> Giải thích: int là value type, y nhận bản sao của x nên đổi y không làm đổi x.

## Câu 5
Chủ đề: Ôn thi giữa kỳ
Một method trong C# thông thường được khai báo như thế nào?

- [ ] [return value] [access] [name] [input variable(s)]
- [x] [access] [return value] [name] [input variable(s)]
- [ ] [name] [access] [return value] [input variable(s)]
- [ ] [input variable(s)] [access] [return value] [name]

> Giải thích: Thứ tự thường gặp là quyền truy cập, kiểu trả về, tên method, rồi danh sách tham số.

## Câu 6
Chủ đề: Ôn thi giữa kỳ
Sự khác biệt chính giữa class và struct là gì?

- [ ] Class và struct đều là loại dữ liệu tham chiếu
- [ ] Class là loại dữ liệu giá trị, struct là loại dữ liệu tham chiếu
- [x] Class là loại dữ liệu tham chiếu, struct là loại dữ liệu giá trị
- [ ] Class và struct đều là loại dữ liệu giá trị

> Giải thích: Trong C#, class là reference type còn struct là value type.

## Câu 7
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để yêu cầu người dùng nhập tên trên cùng dòng thông báo?

- [x] Console.Write("Please enter your name: ")
- [ ] Console.Read("Please enter your name: ")
- [ ] Console.Input("Please enter your name: ")
- [ ] Console.WriteLine("Please enter your name: ")

> Giải thích: Console.Write in thông báo nhưng không xuống dòng, phù hợp khi muốn người dùng nhập trên cùng dòng.

## Câu 8
Chủ đề: Ôn thi giữa kỳ
Truyền giá trị (Value Parameter-Passing) là gì?

- [ ] Truyền tham chiếu của biến vào method được gọi
- [ ] Truyền tham chiếu của biến vào method được định nghĩa
- [ ] Truyền giá trị của biến vào method được định nghĩa
- [x] Truyền giá trị của biến vào method được gọi

> Giải thích: Truyền giá trị đưa bản sao giá trị của biến cho method được gọi.

## Câu 9
Chủ đề: Ôn thi giữa kỳ
Chuyển đổi dữ liệu từ int sang short được gọi là gì?

- [ ] Implicit cast
- [ ] Type conversion
- [x] Explicit cast
- [ ] Data casting

> Giải thích: int sang short là chuyển từ kiểu lớn sang kiểu nhỏ nên cần ép kiểu tường minh.

## Câu 10
Chủ đề: Ôn thi giữa kỳ
Phương thức static cần được truy xuất từ cấp độ nào?

- [x] Class
- [ ] Namespace
- [ ] Object
- [ ] Method

> Giải thích: Static method thuộc về class, nên gọi thông qua tên class.

## Câu 11
Chủ đề: Ôn thi giữa kỳ
Kết quả của đoạn code sau là gì?

```csharp
class Program
{
    static void Main(string[] args)
    {
        int[] arr = { 1, 2, 3, 4, 5 };
        Console.WriteLine(arr[2]);
    }
}
```

- [ ] 2
- [ ] 4
- [x] 3
- [ ] 1

> Giải thích: Mảng bắt đầu từ chỉ số 0, nên arr[2] là phần tử thứ ba có giá trị 3.

## Câu 12
Chủ đề: Ôn thi giữa kỳ
Từ khóa nào cho phép sử dụng Console thay vì System.Console?

- [ ] include
- [ ] import
- [x] using
- [ ] namespace

> Giải thích: using System; cho phép dùng Console mà không cần viết System.Console.

## Câu 13
Chủ đề: Ôn thi giữa kỳ
Loại dữ liệu nào có giá trị mặc định là false?

- [ ] int
- [x] bool
- [ ] float
- [ ] string

> Giải thích: bool có giá trị mặc định là false.

## Câu 14
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để truy xuất trường static từ cấp độ class?

- [x] SavingsAccount.currInterestRate;
- [ ] SavingsAccount s1 = new SavingsAccount(); s1.currInterestRate;
- [ ] SavingsAccount s1 = new SavingsAccount(); s1.currInterestRate = 0.05;
- [ ] SavingsAccount s1 = new SavingsAccount(); this.currInterestRate;

> Giải thích: Static field nên được truy cập qua tên class.

## Câu 15
Chủ đề: Ôn thi giữa kỳ
Kết quả của đoạn code sau là gì?

```csharp
class Program
{
    static void Main(string[] args)
    {
        string str1 = "Hello";
        string str2 = str1;
        str2 = "World";
        Console.WriteLine(str1);
    }
}
```

- [ ] World Hello
- [ ] World
- [ ] Hello World
- [x] Hello

> Giải thích: Gán str2 sang chuỗi mới không làm thay đổi biến str1.

## Câu 16
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để khai báo một property là read-only?

- [ ] public string Name { get; set; }
- [x] public string Name { get; }
- [ ] private string Name { read-only; }
- [ ] public string Name { set; }

> Giải thích: Property chỉ có get là read-only từ bên ngoài.

## Câu 17
Chủ đề: Ôn thi giữa kỳ
Ký tự nào được sử dụng để hiển thị dấu ngoặc kép trong chuỗi?

- [x] \"
- [ ] '
- [ ] \
- [ ] \a

> Giải thích: Trong chuỗi C#, dấu ngoặc kép được escape bằng \\".

## Câu 18
Chủ đề: Ôn thi giữa kỳ
Đoạn chương trình sau sẽ in ra câu gì?

```csharp
class A
{
    public A()
    {
        Console.WriteLine("Constructor A");
    }
}

class B : A
{
    public B()
    {
        Console.WriteLine("Constructor B");
    }
}

class Program
{
    static void Main(string[] args)
    {
        B obj = new B();
    }
}
```

- [ ] Constructor A
- [ ] Constructor B, Constructor A
- [x] Constructor A, Constructor B
- [ ] Constructor B

> Giải thích: Khi tạo object class con, constructor class cha chạy trước rồi mới đến constructor class con.

## Câu 19
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để truy xuất phương thức static ở cấp độ class?

- [ ] Car car = new Car(); car.Drive();
- [ ] car.Drive();
- [x] Car.Drive();
- [ ] Car car = new Car(); this.Drive();

> Giải thích: Static method được gọi bằng tên class, ví dụ Car.Drive().

## Câu 20
Chủ đề: Ôn thi giữa kỳ
Property nào được gọi là read-only property?

- [ ] Property có cả lệnh get và set
- [x] Property chỉ có lệnh get
- [ ] Property không có lệnh get và set
- [ ] Property chỉ có lệnh set

> Giải thích: Read-only property chỉ cho đọc giá trị thông qua get.

## Câu 21
Chủ đề: Ôn thi giữa kỳ
Nguyên lý nào trong OOP giúp giấu chi tiết thực hiện của đối tượng?

- [ ] Đa dạng (Polymorphism)
- [x] Đóng gói (Encapsulation)
- [ ] Abstraction
- [ ] Thừa hưởng (Inheritance)

> Giải thích: Đóng gói che giấu dữ liệu và chi tiết cài đặt bên trong đối tượng, chỉ mở các điểm truy cập cần thiết.

## Câu 22
Chủ đề: Ôn thi giữa kỳ
Loại dữ liệu tham chiếu thường được tạo trong bộ nhớ nào?

- [ ] Stack
- [ ] Cache
- [x] Heap
- [ ] Register

> Giải thích: Object của reference type thường được cấp phát trên heap, biến tham chiếu giữ địa chỉ đến object đó.

## Câu 23
Chủ đề: Ôn thi giữa kỳ
Lệnh nào thường dùng để kiểm tra điều kiện với nhiều trường hợp khác nhau?

- [ ] if/else
- [ ] while
- [ ] for
- [x] switch

> Giải thích: switch phù hợp khi cần so sánh một biểu thức với nhiều trường hợp cụ thể.

## Câu 24
Chủ đề: Ôn thi giữa kỳ
Loại dữ liệu nào có khoảng giá trị từ 0 đến 255?

- [ ] int
- [ ] sbyte
- [x] byte
- [ ] short

> Giải thích: byte là kiểu số nguyên không dấu 8-bit, có giá trị từ 0 đến 255.

## Câu 25
Chủ đề: Ôn thi giữa kỳ
Class con thừa hưởng hầu hết các phần tử của base class ngoại trừ phần tử nào?

- [ ] Properties
- [ ] Methods
- [ ] Fields
- [x] Constructor

> Giải thích: Constructor của class cha không được kế thừa bởi class con.

## Câu 26
Chủ đề: Ôn thi giữa kỳ
Từ khóa nào KHÔNG dùng để kiểm soát khả năng truy cập tới các phần tử trong class?

- [ ] public
- [x] protect
- [ ] private
- [ ] internal

> Giải thích: Từ khóa đúng là protected, không phải protect.

## Câu 27
Chủ đề: Ôn thi giữa kỳ
Phương thức nào chỉ có thể truy xuất tới các thành phần static trong cùng class?

- [ ] Private methods
- [ ] Public methods
- [ ] Non-static methods
- [x] Static methods

> Giải thích: Static method không có object hiện tại nên chỉ truy cập trực tiếp được các thành phần static.

## Câu 28
Chủ đề: Ôn thi giữa kỳ
Static constructor được chạy khi nào?

- [ ] Mỗi khi khai báo object của class
- [ ] Khi khai báo phương thức của class
- [x] Được chạy 1 lần duy nhất đối với nhiều đối tượng được tạo
- [ ] Khi truy xuất các thành phần non-static

> Giải thích: Static constructor chạy một lần để khởi tạo dữ liệu static của class.

## Câu 29
Chủ đề: Ôn thi giữa kỳ
Một namespace có thể chứa bao nhiêu class?

- [ ] Không có class nào
- [ ] Hai
- [x] Nhiều
- [ ] Một

> Giải thích: Namespace dùng để tổ chức nhiều class và kiểu dữ liệu liên quan.

## Câu 30
Chủ đề: Ôn thi giữa kỳ
Từ khóa nào dùng để khai báo một method có thể được gọi mà không cần tạo đối tượng?

- [ ] private
- [ ] async
- [ ] public
- [x] static

> Giải thích: Method static thuộc về class, nên có thể gọi qua tên class mà không tạo object.

## Câu 31
Chủ đề: Ôn thi giữa kỳ
Loại dữ liệu nào được quản lý bởi Garbage Collection?

- [ ] Chuỗi
- [ ] Giá trị
- [x] Tham chiếu
- [ ] Cơ bản

> Giải thích: Garbage Collection quản lý vùng nhớ của object reference type trên heap.

## Câu 32
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để truyền tham chiếu của biến vào method được gọi?

- [x] ref
- [ ] pass
- [ ] in
- [ ] out

> Giải thích: ref truyền biến theo tham chiếu để method có thể thao tác trên biến gốc.

## Câu 33
Chủ đề: Ôn thi giữa kỳ
Ký tự nào được sử dụng để tạo tab trong chuỗi?

- [ ] \a
- [x] \t
- [ ] \n
- [ ] \r

> Giải thích: \t là escape sequence tạo tab trong chuỗi.

## Câu 34
Chủ đề: Ôn thi giữa kỳ
Hàm khởi tạo là gì?

- [x] Hàm có cùng tên với class và không có khai báo giá trị trả về
- [ ] Hàm có tên khác với class và có khai báo giá trị trả về
- [ ] Hàm có tên khác với class và không có khai báo giá trị trả về
- [ ] Hàm có cùng tên với class và có khai báo giá trị trả về

> Giải thích: Constructor trùng tên class và không khai báo kiểu trả về.

## Câu 35
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để truyền tham chiếu của biến vào method được gọi và có thể được dùng làm ngõ ra?

- [x] out
- [ ] in
- [ ] ref
- [ ] pass

> Giải thích: out truyền tham chiếu để method gán giá trị đầu ra cho biến được truyền vào.

## Câu 36
Chủ đề: Ôn thi giữa kỳ
Lệnh nào dùng để lặp ít nhất một lần trước khi kiểm tra điều kiện?

- [x] do/while
- [ ] foreach/in
- [ ] for
- [ ] while

> Giải thích: do/while chạy thân vòng lặp trước, sau đó mới kiểm tra điều kiện.

## Câu 37
Chủ đề: Ôn thi giữa kỳ
Lệnh nào dùng để quăng một exception khi xảy ra hiện tượng tràn dữ liệu?

- [ ] unchecked
- [x] checked
- [ ] validate
- [ ] try/catch

> Giải thích: checked phát hiện tràn dữ liệu số và ném exception khi overflow xảy ra.

## Câu 38
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để chuyển đổi dữ liệu từ dạng float sang double?

- [x] double doubleNumb = floatNumb;
- [ ] float doubleNumb = (double)floatNumb;
- [ ] floatNumb = (float)doubleNumb;
- [ ] float floatNumb = doubleNumb;

> Giải thích: float có thể chuyển ngầm định sang double vì double có miền biểu diễn rộng hơn.

## Câu 39
Chủ đề: Ôn thi giữa kỳ
Kiểu trả về nào dùng cho method không trả về giá trị?

- [x] void
- [ ] float
- [ ] int
- [ ] string

> Giải thích: void biểu thị method không trả về dữ liệu.

## Câu 40
Chủ đề: Ôn thi giữa kỳ
Từ khóa nào dùng để cấm việc thừa hưởng ở các class khác?

- [ ] protected
- [ ] private
- [x] sealed
- [ ] public

> Giải thích: sealed class không thể được kế thừa bởi class khác.

## Câu 41
Chủ đề: Ôn thi giữa kỳ
Ký tự nào được sử dụng để hiển thị dấu gạch chéo ngược trong chuỗi?

- [ ] '
- [ ] \a
- [x] \\
- [ ] "

> Giải thích: Trong chuỗi C#, dấu gạch chéo ngược được escape bằng \\.

## Câu 42
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để bắt và xử lý exception khi xảy ra hiện tượng tràn dữ liệu?

- [ ] unchecked
- [ ] validate
- [ ] checked
- [x] try/catch

> Giải thích: try/catch dùng để bắt và xử lý exception phát sinh khi chương trình chạy.

## Câu 43
Chủ đề: Ôn thi giữa kỳ
Từ khóa nào dùng để khai báo một class là static?

- [ ] public
- [ ] private
- [ ] internal
- [x] static

> Giải thích: Từ khóa static đặt trước class để khai báo static class.

## Câu 44
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để khởi tạo một đối tượng Car với tên "Mary"?

- [x] Car mary = new Car("Mary")
- [ ] Car mary = Car
- [ ] Car mary = Car("Mary")
- [ ] Car mary = new Car

> Giải thích: Tạo object bằng new và truyền tham số vào constructor phù hợp.

## Câu 45
Chủ đề: Ôn thi giữa kỳ
Hàm khởi tạo tùy chỉnh (custom constructor) là gì?

- [ ] Hàm khởi tạo không có tham số
- [x] Hàm khởi tạo được khai báo bởi người lập trình
- [ ] Hàm khởi tạo được tạo tự động bởi .NET
- [ ] Hàm khởi tạo có tham số

> Giải thích: Custom constructor là constructor do lập trình viên tự khai báo trong class.

## Câu 46
Chủ đề: Ôn thi giữa kỳ
Loại dữ liệu nào được tạo khi method bắt đầu được thực thi và được xóa khỏi stack khi method kết thúc?

- [x] Giá trị
- [ ] Chuỗi
- [ ] Tham chiếu
- [ ] Cơ bản

> Giải thích: Value type và biến cục bộ thường nằm trên stack trong phạm vi thực thi của method.

## Câu 47
Chủ đề: Ôn thi giữa kỳ
Thành phần/từ khóa nào bảo đảm việc đọc/ghi tới trường được kiểm soát?

- [ ] Method
- [ ] public
- [ ] private
- [x] Property

> Giải thích: Property dùng get/set để kiểm soát việc đọc và ghi dữ liệu của field.

## Câu 48
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để so sánh hai giá trị khác nhau?

- [ ] <
- [x] !=
- [ ] ==
- [ ] >

> Giải thích: Toán tử != kiểm tra hai giá trị có khác nhau hay không.

## Câu 49
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để lặp qua một mảng dùng chỉ số trong C#?

- [ ] while on
- [x] for
- [ ] foreach/in
- [ ] do/while on

> Giải thích: Vòng lặp for thường dùng biến chỉ số để duyệt qua mảng.

## Câu 50
Chủ đề: Ôn thi giữa kỳ
Từ khóa static thường được sử dụng trong các class nào?

- [x] Console
- [ ] DateTime
- [ ] String
- [ ] Object

> Giải thích: Console có nhiều thành phần static như WriteLine, ReadLine.

## Câu 51
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để khai báo một struct trong C#?

- [ ] module Point { public int X; public int Y; }
- [ ] class Point { public int X; public int Y; }
- [ ] object Point { public int X; public int Y; }
- [x] struct Point { public int X; public int Y; }

> Giải thích: Từ khóa struct dùng để khai báo kiểu cấu trúc trong C#.

## Câu 52
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để so sánh hai giá trị lớn hơn hoặc bằng nhau?

- [x] >=
- [ ] >
- [ ] ==
- [ ] !=

> Giải thích: Toán tử >= kiểm tra vế trái lớn hơn hoặc bằng vế phải.

## Câu 53
Chủ đề: Ôn thi giữa kỳ
Loại dữ liệu nào có giá trị mặc định là 0?

- [ ] bool
- [ ] string
- [ ] object
- [x] int

> Giải thích: int là value type số nguyên và có giá trị mặc định là 0.

## Câu 54
Chủ đề: Ôn thi giữa kỳ
Hàm khởi tạo mặc định là gì?

- [x] Hàm khởi tạo được tạo tự động bởi .NET khi không có hàm khởi tạo nào được khai báo
- [ ] Hàm khởi tạo được khai báo bởi người lập trình
- [ ] Hàm khởi tạo không có tham số
- [ ] Hàm khởi tạo có tham số

> Giải thích: Nếu class không khai báo constructor nào, .NET tạo default constructor không tham số.

## Câu 55
Chủ đề: Ôn thi giữa kỳ
Điền vào chỗ trống để chương trình in ra màn hình câu "You're a student"

```csharp
public static void Main(string[] args)
{
    bool isStudent = false;
    if (____)
    {
        Console.WriteLine("You're a student");
    }
    else
    {
        Console.WriteLine("You are not a student");
    }
}
```

- [ ] isStudent
- [x] !isStudent
- [ ] !isStudent == false
- [ ] isStudent == true

> Giải thích: isStudent đang là false, nên !isStudent là true và nhánh if được chạy.

## Câu 56
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để tạo một đối tượng từ struct Point?

- [x] Point myPoint = new Point()
- [ ] Point myPoint = Point
- [ ] Point myPoint = new Point
- [ ] Point myPoint = Point()

> Giải thích: Struct cũng có thể được khởi tạo bằng new Point().

## Câu 57
Chủ đề: Ôn thi giữa kỳ
Một lớp có thể chứa bao nhiêu phương thức?

- [ ] *
- [x] Nhiều
- [ ] Một
- [ ] 0

> Giải thích: Một class có thể chứa nhiều method khác nhau.

## Câu 58
Chủ đề: Ôn thi giữa kỳ
Tất cả các object của một class sẽ dùng chung thành phần nào?

- [x] Static fields
- [ ] Instance fields
- [ ] Properties
- [ ] Methods

> Giải thích: Static field thuộc về class, nên mọi object dùng chung cùng một dữ liệu static.

## Câu 59
Chủ đề: Ôn thi giữa kỳ
Property nào được gọi là write-only property?

- [ ] Property không có lệnh get và set
- [ ] Property có cả lệnh get và set
- [ ] Property chỉ có lệnh get
- [x] Property chỉ có lệnh set

> Giải thích: Write-only property chỉ cho ghi giá trị thông qua set.

## Câu 60
Chủ đề: Ôn thi giữa kỳ
Các thành phần static được khởi tạo và tồn tại ở cấp độ nào?

- [x] Class
- [ ] Namespace
- [ ] Object
- [ ] Method

> Giải thích: Static member thuộc cấp class, không thuộc riêng object nào.

## Câu 61
Chủ đề: Ôn thi giữa kỳ
Ký tự nào được sử dụng để tạo dòng mới trong chuỗi?

- [x] \n
- [ ] \r
- [ ] \a
- [ ] \t

> Giải thích: \n là escape sequence dùng để xuống dòng trong chuỗi.

## Câu 62
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để lặp qua từng giá trị phần tử của một mảng?

- [ ] do/while
- [ ] for
- [x] foreach/in
- [ ] while

> Giải thích: foreach/in dùng để duyệt từng phần tử trong mảng hoặc collection.

## Câu 63
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để chỉ cho phép truy xuất phần tử từ class con?

- [x] protected
- [ ] public
- [ ] private
- [ ] internal

> Giải thích: protected cho phép class khai báo và class con truy cập, nhưng không mở trực tiếp cho bên ngoài.

## Câu 64
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để khai báo mảng 1D trong C#?

- [ ] int x = new int[];
- [x] int[] x = new int[5];
- [ ] int x = new int[5];
- [ ] int[] x = new int[];

> Giải thích: Mảng một chiều kiểu int được khai báo dạng int[] và cần kích thước khi dùng new int[5].

## Câu 65
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để bảo đảm tính toàn vẹn của dữ liệu trong class?

- [ ] protected
- [ ] internal
- [ ] public
- [x] private

> Giải thích: private giúp che giấu field để dữ liệu chỉ được sửa thông qua method/property kiểm soát.

## Câu 66
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để khai báo một automatic property trong class?

- [ ] public string empName;
- [ ] private string empName;
- [x] public string empName { get; set; }
- [ ] private string empName()

> Giải thích: Automatic property dùng cú pháp get; set; trong cặp ngoặc nhọn.

## Câu 67
Chủ đề: Ôn thi giữa kỳ
Loại dữ liệu nào có thể tính được thời gian sống dựa trên code?

- [ ] Chuỗi
- [ ] Cơ bản
- [x] Giá trị
- [ ] Tham chiếu

> Giải thích: Value type/biến cục bộ thường có lifetime rõ theo scope thực thi trong code.

## Câu 68
Chủ đề: Ôn thi giữa kỳ
Truyền tham chiếu (Reference Parameter-Passing) là gì?

- [ ] Truyền giá trị của biến vào method được gọi
- [ ] Truyền giá trị của biến vào method được định nghĩa
- [x] Truyền tham chiếu của biến vào method được gọi
- [ ] Truyền tham chiếu của biến vào method được định nghĩa

> Giải thích: Reference parameter-passing truyền tham chiếu đến biến cho method được gọi.

## Câu 69
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để kiểm tra điều kiện trong C#?

- [ ] switchs
- [x] if/else
- [ ] while
- [ ] for

> Giải thích: if/else dùng để kiểm tra điều kiện và chọn nhánh xử lý.

## Câu 70
Chủ đề: Ôn thi giữa kỳ
Loại dữ liệu nào có giá trị mặc định là null?

- [ ] object và bool
- [ ] bool
- [x] string và object
- [ ] int

> Giải thích: string và object là reference type nên giá trị mặc định là null.

## Câu 71
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để tránh hiện tượng tràn dữ liệu khi chuyển đổi từ dạng dữ liệu rộng sang hẹp hơn?

- [ ] try/catch
- [ ] unchecked
- [ ] validate
- [x] checked

> Giải thích: checked giúp phát hiện overflow trong phép chuyển đổi số có nguy cơ tràn.

## Câu 72
Chủ đề: Ôn thi giữa kỳ
Bất cứ thay đổi nào trên biến static sẽ ảnh hưởng tới các object như thế nào?

- [x] Ảnh hưởng tới tất cả các object
- [ ] Ảnh hưởng tới một phương thức
- [ ] Không ảnh hưởng
- [ ] Ảnh hưởng tới một object

> Giải thích: Static field dùng chung cấp class, nên thay đổi của nó được mọi object nhìn thấy.

## Câu 73
Chủ đề: Ôn thi giữa kỳ
Static constructor hoạt động bao nhiêu lần trong toàn bộ thời gian hoạt động của chương trình?

- [ ] Hai lần
- [ ] Nhiều lần
- [x] Một lần duy nhất
- [ ] Không có

> Giải thích: Static constructor chỉ chạy một lần cho mỗi class trong suốt vòng đời chương trình.

## Câu 74
Chủ đề: Ôn thi giữa kỳ
Hàm khởi tạo (constructor) được gọi khi nào?

- [x] Khi một object từ class được khởi tạo
- [ ] Khi một property từ class được sử dụng
- [ ] Khi một method từ class được gọi
- [ ] Khi một field từ class được truy cập

> Giải thích: Constructor chạy khi tạo object bằng new.

## Câu 75
Chủ đề: Ôn thi giữa kỳ
Enum là gì trong C#?

- [x] Một loại dữ liệu giá trị
- [ ] Một loại dữ liệu chuỗi
- [ ] Một loại dữ liệu tham chiếu
- [ ] Một loại dữ liệu số nguyên

> Giải thích: Enum là value type dùng để định nghĩa tập hằng được đặt tên.

## Câu 76
Chủ đề: Ôn thi giữa kỳ
Ký tự nào được sử dụng để tạo âm thanh cảnh báo trong chuỗi?

- [ ] \t
- [ ] \n
- [ ] \r
- [x] \a

> Giải thích: \a là escape sequence tạo ký tự cảnh báo.

## Câu 77
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để khai báo mảng chữ nhật trong C#?

- [ ] int[] myMatrix = new int[6, 6];
- [x] int[,] myMatrix = new int[6, 6];
- [ ] int[,] myMatrix = new int[];
- [ ] int[] myMatrix = new int[];

> Giải thích: Mảng chữ nhật hai chiều dùng cú pháp int[,] và khởi tạo bằng new int[6, 6].

## Câu 78
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để chuyển đổi dữ liệu từ dạng int sang short?

- [ ] short shortNumb = intNumb;
- [x] short shortNumb = (short)intNumb;
- [ ] int intNumb = shortNumb;
- [ ] short intNumb = (int)shortNumb;

> Giải thích: int sang short là chuyển từ kiểu rộng sang hẹp nên cần ép kiểu tường minh.

## Câu 79
Chủ đề: Ôn thi giữa kỳ
Một class có thể có bao nhiêu static constructor?

- [ ] Hai
- [ ] Nhiều
- [x] Một
- [ ] Không có

> Giải thích: Một class chỉ được khai báo một static constructor.

## Câu 80
Chủ đề: Ôn thi giữa kỳ
Từ khóa nào được sử dụng để khai báo một lớp trong C#?

- [x] class
- [ ] object
- [ ] module
- [ ] struct

> Giải thích: Từ khóa class dùng để khai báo một lớp trong C#.

## Câu 81
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để kiểm tra hiện tượng tràn dữ liệu trong khối lệnh?

- [ ] unchecked
- [ ] validate
- [x] checked
- [ ] try/catch

> Giải thích: checked dùng để kiểm tra overflow trong các phép toán hoặc ép kiểu số.

## Câu 82
Chủ đề: Ôn thi giữa kỳ
Khai báo dữ liệu static trong non-static constructor sẽ gây ra lỗi gì?

- [x] Lỗi logic của chương trình
- [ ] Lỗi runtime
- [ ] Lỗi cú pháp
- [ ] Lỗi biên dịch

> Giải thích: Dữ liệu static nên được khởi tạo ở cấp class, thường bằng static constructor; đặt trong constructor thường dễ làm sai logic vì constructor thường chạy theo từng object.

## Câu 83
Chủ đề: Ôn thi giữa kỳ
Loại dữ liệu giá trị thường được tạo trong bộ nhớ nào?

- [ ] Register
- [ ] Heap
- [ ] Cache
- [x] Stack

> Giải thích: Value type/biến cục bộ thường được lưu trên stack trong phạm vi thực thi.

## Câu 84
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để so sánh hai giá trị bằng nhau?

- [ ] !=
- [ ] <
- [ ] >
- [x] ==

> Giải thích: Toán tử == dùng để kiểm tra hai giá trị có bằng nhau hay không.

## Câu 85
Chủ đề: Ôn thi giữa kỳ
Loại dữ liệu nào có khoảng giá trị từ -128 đến 127?

- [ ] short
- [ ] byte
- [x] sbyte
- [ ] int

> Giải thích: sbyte là số nguyên có dấu 8-bit, có miền giá trị từ -128 đến 127.

## Câu 86
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để truy xuất phương thức non-static từ cấp độ object?

- [ ] SavingsAccount s1 = new SavingsAccount(); s1.AddBalance;
- [ ] SavingsAccount s1 = new SavingsAccount(); SavingsAccount.AddBalance(50);
- [ ] SavingsAccount.AddBalance(50);
- [x] SavingsAccount s1 = new SavingsAccount(); s1.AddBalance(50);

> Giải thích: Non-static method phải được gọi qua một object cụ thể.

## Câu 87
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để yêu cầu người dùng nhập tuổi ở hàng dưới chuỗi thông báo?

- [ ] Console.Write("Please enter your age: ")
- [ ] Console.Input("Please enter your age: ")
- [x] Console.WriteLine("Please enter your age: ")
- [ ] Console.Read("Please enter your age: ")

> Giải thích: Console.WriteLine in thông báo rồi xuống dòng.

## Câu 88
Chủ đề: Ôn thi giữa kỳ
Từ khóa nào dùng để khai báo một class thừa hưởng từ class khác?

- [ ] extends
- [x] :
- [ ] inherits
- [ ] base

> Giải thích: C# dùng dấu hai chấm để khai báo kế thừa, ví dụ class B : A.

## Câu 89
Chủ đề: Ôn thi giữa kỳ
Lệnh nào có thể dùng để chuyển đổi dữ liệu từ dạng short sang int?

- [ ] intNumb = (int)shortNumb
- [x] int intNumb = shortNumb
- [ ] short shortNumb = intNumb
- [ ] shortNumb = (short)intNumb

> Giải thích: short sang int là chuyển từ kiểu nhỏ sang kiểu lớn nên có thể chuyển ngầm định.

## Câu 90
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để khai báo một static constructor?

- [ ] SavingsAccount() { }
- [ ] public SavingsAccount() { }
- [x] static SavingsAccount() { }
- [ ] private SavingsAccount() { }

> Giải thích: Static constructor có từ khóa static, không có access modifier và không có kiểu trả về.

## Câu 91
Chủ đề: Ôn thi giữa kỳ
Kết quả của đoạn code sau là gì?

```csharp
class Program
{
    static void Main(string[] args)
    {
        int a = 10;
        int b = 20;
        int c = a + b;
        a = b;
        b = a;
        c = c + b;
        Console.WriteLine(c);
    }
}
```

- [x] 50
- [ ] 60
- [ ] 40
- [ ] 30

> Giải thích: c ban đầu là 30, sau đó b là 20, nên c + b = 50.

## Câu 92
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để in ra màn hình trong C#?

- [ ] print()
- [x] Console.WriteLine()
- [ ] echo()
- [ ] System.out.println()

> Giải thích: Console.WriteLine() dùng để in ra màn hình console trong C#.

## Câu 93
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để đọc dữ liệu từ người dùng trong C#?

- [ ] Console.Scan()
- [x] Console.ReadLine()
- [ ] Console.Read()
- [ ] Console.Input()

> Giải thích: Console.ReadLine() đọc một dòng dữ liệu từ console.

## Câu 94
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để khai báo một property trong class?

- [ ] public string Name;
- [x] public string Name { get; set; }
- [ ] private string Name()
- [ ] private string Name;

> Giải thích: Property dùng cú pháp có get/set trong cặp ngoặc nhọn.

## Câu 95
Chủ đề: Ôn thi giữa kỳ
Chuyển đổi dữ liệu từ short sang int được gọi là gì?

- [ ] Data casting
- [x] Implicit cast
- [ ] Explicit cast
- [ ] Type conversion

> Giải thích: short sang int là chuyển đổi ngầm định vì int có miền biểu diễn rộng hơn.

## Câu 96
Chủ đề: Ôn thi giữa kỳ
Lệnh nào đúng để khai báo một trường static trong class?

- [ ] public int currBalance;
- [x] public static double currInterestRate = 0.04;
- [ ] private double currBalance;
- [ ] static private double currInterestRate = 0.04;

> Giải thích: Field static thường khai báo với từ khóa static và truy cập ở cấp class.

## Câu 97
Chủ đề: Ôn thi giữa kỳ
Cho biết kết quả in ra của đoạn chương trình sau?

```csharp
public static void Main(string[] args)
{
    int[] numbers = { 1, 2, 3, 4, 5 };
    int sum = 0;
    foreach (int number in numbers)
    {
        if (number % 2 == 0)
            sum += number;
    }
    Console.WriteLine(sum);
}
```

- [ ] 9
- [ ] 15
- [ ] 0
- [x] 6

> Giải thích: Các số chẵn trong mảng là 2 và 4, tổng bằng 6.

## Câu 98
Chủ đề: Ôn thi giữa kỳ
Enum thường được sử dụng để làm gì?

- [ ] Lưu trữ các giá trị chuỗi
- [ ] Lưu trữ các giá trị số
- [x] Làm rõ nghĩa của các giá trị trong code
- [ ] Lưu trữ các giá trị boolean

> Giải thích: Enum đặt tên cho các giá trị cố định để code dễ hiểu hơn.

## Câu 99
Chủ đề: Ôn thi giữa kỳ
Enum có thể chứa các giá trị nào?

- [ ] Các giá trị số thực
- [ ] Các giá trị boolean
- [ ] Các giá trị chuỗi
- [x] Các giá trị số nguyên

> Giải thích: Enum trong C# có underlying type là kiểu số nguyên.

## Câu 100
Chủ đề: Ôn thi giữa kỳ
Phương thức nào là điểm vào chính của chương trình C#?

- [ ] Begin()
- [ ] Entry()
- [ ] Start()
- [x] Main()

> Giải thích: Main() là entry point của chương trình C# console.
