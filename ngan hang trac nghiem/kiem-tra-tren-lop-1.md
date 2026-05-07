# Kiểm tra trên lớp 1

## Câu 1
Chủ đề: Cú pháp cơ bản
Đoạn mã sau có lỗi gì?

```csharp
using System;
class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}
```

- [ ] Thiếu dấu chấm phẩy sau `Console.WriteLine`
- [x] Không có lỗi
- [ ] Thiếu dấu ngoặc nhọn đóng `}`
- [ ] Thiếu từ khóa `namespace`

> Giải thích: Đoạn mã này hợp lệ và có thể chạy bình thường.

## Câu 2
Chủ đề: Cú pháp điều kiện
Đoạn mã sau có lỗi gì?

```csharp
int x = 10;
if (x > 5)
{
    Console.WriteLine("x is greater than 5");
}
else
{
    Console.WriteLine("x is less than or equal to 5");
}
```

- [ ] Thiếu từ khóa `class` trước `if`
- [ ] Thiếu từ khóa `static` trước `int x`
- [x] Không có lỗi
- [ ] Khai báo kiểu dữ liệu biến `x` bị sai

> Giải thích: Cấu trúc `if/else` và khai báo biến ở đây là đúng.

## Câu 3
Chủ đề: Namespace
Namespace trong C# được sử dụng để làm gì?

- [ ] Định nghĩa một class
- [ ] Định nghĩa một phương thức
- [ ] Định nghĩa một biến
- [x] Tổ chức các class và các kiểu dữ liệu khác

> Giải thích: Namespace giúp nhóm và tổ chức các kiểu dữ liệu, tránh trùng tên.

## Câu 4
Chủ đề: Field
Field trong C# là gì?

- [ ] Là hàm con trong lớp
- [x] Một biến được khai báo bên ngoài các phương thức nhưng bên trong một class
- [ ] Một kiểu dữ liệu
- [ ] Một không gian tên

> Giải thích: Field là biến thành viên của lớp.

## Câu 5
Chủ đề: Constructor
Đoạn mã sau có hợp lệ không?

```csharp
using System;
class MyClass
{
    public MyClass()
    {
        WriteLine("Constructor called");
    }
}
```

- [x] Không hợp lệ, phương thức `WriteLine` cần phải truy xuất từ lớp `Console`
- [ ] Không hợp lệ, thiếu từ khóa `static`
- [ ] Không hợp lệ, thiếu từ khóa `void`
- [ ] Hợp lệ

> Giải thích: Cần viết `Console.WriteLine("Constructor called");`.

## Câu 6
Chủ đề: Enum
Chọn phát biểu đúng?

```csharp
enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat }
```

- [ ] Enum `Days` với các giá trị từ `"Sun"` đến `"Sat"`
- [x] Enum `Days` với các giá trị từ `0` đến `6`
- [ ] Enum `Days` với các giá trị từ `1` đến `7`
- [ ] Enum `Days` với các giá trị từ `"Sunday"` đến `"Saturday"`

> Giải thích: Mặc định các phần tử enum có giá trị số nguyên bắt đầu từ `0`.

## Câu 7
Chủ đề: Constructor
Constructor trong C# có đặc điểm gì?

- [ ] Không thể bị ghi đè
- [x] Có cùng tên với class
- [ ] Không có tham số
- [ ] Có thể có bất kỳ tên nào

> Giải thích: Constructor phải có cùng tên với lớp.

## Câu 8
Chủ đề: Class
Class trong C# là gì?

- [ ] Một kiểu dữ liệu cơ bản
- [ ] Một biến
- [ ] Một phương thức
- [x] Một kiểu dữ liệu tham chiếu

> Giải thích: `class` là kiểu dữ liệu tham chiếu trong C#.

## Câu 9
Chủ đề: Biến và gán giá trị
Cho biết giá trị in ra của đoạn chương trình sau.

```csharp
int x = 10;
int y = x;
y = 20;
Console.WriteLine(x);
```

- [ ] 0
- [ ] 20
- [x] 10
- [ ] Không xác định giá trị

> Giải thích: `y` nhận bản sao giá trị của `x` là `10`. Sau đó đổi `y = 20` không làm thay đổi `x`, nên khi in `x` kết quả vẫn là `10`.

## Câu 10
Chủ đề: Constructor
Phương thức nào trong C# được gọi tự động khi một đối tượng được tạo ra?

- [ ] Instance method
- [x] Constructor
- [ ] Destructor
- [ ] Static method

> Giải thích: Constructor được gọi khi tạo object bằng `new`.

## Câu 11
Chủ đề: Method overloading
Phương thức nào KHÔNG được phép khai báo cùng tên trong cùng một lớp với phương thức sau?

```csharp
int Add(int a, int b)
```

- [ ] `void Add()`
- [x] `float Add(int a, int b)`
- [ ] `float Add(float a, float b)`
- [ ] `int Add(int a, int b, int c)`

> Giải thích: Không thể overload chỉ bằng cách đổi kiểu trả về nếu danh sách tham số vẫn giữ nguyên.

## Câu 12
Chủ đề: Field
Đoạn mã sau khai báo field nào?

```csharp
class MyClass
{
    public int x;
    private string y;
}
```

- [ ] `x` là field tĩnh, `y` là field tĩnh
- [ ] `x` là field riêng tư, `y` là field công khai
- [ ] `x` và `y` đều là field công khai
- [x] `x` là field công khai, `y` là field riêng tư

> Giải thích: `public int x;` là field công khai, còn `private string y;` là field riêng tư.

## Câu 13
Chủ đề: Kiểu dữ liệu
Đâu là kiểu dữ liệu tham chiếu?

- [ ] `int`
- [x] `class`
- [ ] `float`
- [ ] `bool`

> Giải thích: `class` là kiểu tham chiếu, còn `int`, `float`, `bool` là kiểu giá trị.

## Câu 14
Chủ đề: Kiểu dữ liệu
Đoạn mã sau khai báo kiểu dữ liệu nào? `double x = 10.5;`

- [ ] Kiểu dữ liệu tham chiếu
- [x] Kiểu dữ liệu số thực
- [ ] Kiểu dữ liệu chuỗi
- [ ] Kiểu dữ liệu số nguyên

> Giải thích: `double` là kiểu số thực dấu phẩy động.

## Câu 15
Chủ đề: Class và object
Cho biết lỗi sai trong chương trình sau.

```csharp
using System;
namespace CSharp
{
    class Program
    {
        static void Main()
        {
            Person p1;
            p1.Name = "John";
            p1.Age = 30;
        }
    }

    class Person
    {
        public string Name;
        public int Age;
    }
}
```

- [ ] Lớp `Person` chưa tạo phương thức nào
- [ ] Chương trình không có lỗi
- [x] Đối tượng `p1` chưa được khởi tạo bằng từ khóa `new`
- [ ] Lớp `Person` chưa được khai báo constructor

> Giải thích: Cần tạo object trước, ví dụ `Person p1 = new Person();`.

## Câu 16
Chủ đề: Using và Console
Đoạn mã sau có lỗi gì?

```csharp
class MyClass
{
    public void Display()
    {
        Console.WriteLine("Hello");
    }
}
```

- [x] Thiếu `using System;`
- [ ] Thiếu từ khóa `class` trước `MyClass`
- [ ] Thiếu từ khóa `static` trước phương thức `Display`
- [ ] Thiếu dấu chấm phẩy sau `Console.WriteLine`

> Giải thích: Nếu không dùng tên đầy đủ `System.Console`, cần có `using System;`.

## Câu 17
Chủ đề: Cấu trúc chương trình
Phần nào của chương trình C# chứa điểm bắt đầu của chương trình?

- [ ] Namespace
- [ ] Phương thức
- [ ] Class
- [x] Hàm Main

> Giải thích: Chương trình C# console bắt đầu chạy từ `Main`.

## Câu 18
Chủ đề: Method overloading
Đoạn mã sau có hợp lệ không?

```csharp
class MyClass
{
    public void Display(int x)
    {
        Console.WriteLine(x);
    }

    public void Display(string y)
    {
        Console.WriteLine(y);
    }
}
```

- [ ] Không hợp lệ, phương thức `Display` phải có từ khóa `static`
- [x] Hợp lệ
- [ ] Không hợp lệ, kiểu dữ liệu của tham số phải giống nhau
- [ ] Không hợp lệ, phương thức `Display` bị trùng lặp

> Giải thích: Đây là overload hợp lệ vì hai phương thức cùng tên nhưng khác kiểu tham số.

## Câu 19
Chủ đề: Reference type
Cho biết đoạn chương trình sau in ra kết quả bao nhiêu?

```csharp
using System;
namespace CSharp
{
    class Program
    {
        static void Main()
        {
            MyClass obj1 = new MyClass();
            obj1.Value = 50;
            MyClass obj2 = obj1;
            obj2.Value = 100;
            Console.WriteLine(obj1.Value);
        }
    }

    class MyClass
    {
        public int Value;
    }
}
```

- [ ] Không xác định được
- [x] 100
- [ ] 0
- [ ] 50

> Giải thích: `obj1` và `obj2` cùng tham chiếu đến một object nên thay đổi qua `obj2` cũng ảnh hưởng `obj1`.

## Câu 20
Chủ đề: Constructor
Đoạn mã sau có lỗi gì?

```csharp
class MyClass
{
    int x;

    public MyClass(int y)
    {
        x = y;
    }
}
```

- [ ] Thiếu từ khóa `void` trước `MyClass`
- [ ] Thiếu từ khóa `static` trước `class`
- [x] Không có lỗi
- [ ] Thiếu từ khóa `public` trước `int x`

> Giải thích: Đây là một constructor hợp lệ có tham số.
