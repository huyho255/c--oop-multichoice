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
