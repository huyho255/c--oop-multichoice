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
# Kiểm tra trên lớp 2

## Câu 1
Chủ đề: Static
Điều nào sau đây là đúng về static fields trong một class?

- [x] Static fields có thể được khởi tạo trong static constructor hoặc tại thời điểm khai báo.
- [ ] Static fields chỉ có thể được khởi tạo trong static constructor.
- [ ] Static fields chỉ có thể được khởi tạo trong non-static constructor.
- [ ] Static fields không thể được khởi tạo tại thời điểm khai báo.

> Giải thích: Static fields có thể được khởi tạo lúc khai báo hoặc trong static constructor.

## Câu 2
Chủ đề: Static
Điều gì xảy ra nếu bạn thay đổi giá trị của một static field từ một object của class?

- [x] Giá trị của static field sẽ thay đổi cho tất cả các object của class.
- [ ] Giá trị của static field sẽ chỉ thay đổi cho object đó.
- [ ] Giá trị của static field sẽ thay đổi nhưng sẽ gây ra lỗi runtime.
- [ ] Giá trị của static field sẽ không thay đổi.

> Giải thích: Thành phần static được dùng chung cho toàn bộ class.

## Câu 3
Chủ đề: Static constructor
Điều nào sau đây là đúng về static constructors trong một class?

- [ ] Static constructors có thể được gọi nhiều lần trong suốt thời gian chạy của chương trình.
- [x] Static constructors không thể có tham số.
- [ ] Static constructors có thể có tham số.
- [ ] Static constructors có thể được gọi trực tiếp từ bên ngoài class.

> Giải thích: Static constructor không có tham số và không được gọi trực tiếp.

## Câu 4
Chủ đề: Properties
Điều nào sau đây là đúng về automatic properties trong C#?

- [x] Automatic properties tự động tạo ra các trường ẩn để lưu trữ giá trị.
- [ ] Automatic properties không thể được khởi tạo.
- [ ] Automatic properties không thể có phương thức set.
- [ ] Automatic properties không thể có phương thức get.

> Giải thích: Auto-property có backing field ẩn do compiler tạo.

## Câu 5
Chủ đề: Properties
Điều nào sau đây là đúng về properties trong C#?

- [ ] Properties chỉ có thể có phương thức get.
- [x] Properties có thể có cả phương thức get và set.
- [ ] Properties không thể có phương thức get hoặc set.
- [ ] Properties chỉ có thể có phương thức set.

> Giải thích: Property có thể chỉ có get, chỉ có set, hoặc có cả hai.

## Câu 6
Chủ đề: Static methods
Điều nào sau đây là đúng về static methods trong một class?

- [x] Static methods không thể được override trong các class con.
- [ ] Static methods có thể truy cập các thành phần non-static của class.
- [ ] Static methods không thể được truy cập từ bên ngoài class.
- [ ] Static methods có thể được truy xuất ở cấp độ lớp hoặc cấp độ object.

> Giải thích: Static method không tham gia cơ chế override như instance method.

## Câu 7
Chủ đề: Properties
Điều gì xảy ra nếu bạn khai báo một property với phương thức get nhưng không có phương thức set?

- [ ] Property sẽ không thể được khởi tạo.
- [ ] Property sẽ không thể đọc giá trị.
- [x] Property sẽ chỉ có thể đọc giá trị.
- [ ] Property sẽ không thể được truy cập từ bên ngoài class.

> Giải thích: Property chỉ có getter là read-only trong ngữ cảnh thông thường.

## Câu 8
Chủ đề: Static methods
Lỗi sai trong đoạn code trên sau gì?

```csharp
public class MathOperations
{
    public static int Multiply(int a, int b)
    {
        return a * b;
    }

    public int Divide(int a, int b)
    {
        return a / b;
    }
}

class Program
{
    static void Main(string[] args)
    {
        MathOperations operations = new MathOperations();
        int result1 = operations.Multiply(6, 2);
        int result2 = MathOperations.Divide(6, 2);
        Console.WriteLine(result1);
        Console.WriteLine(result2);
    }
}
```

- [x] Không thể gọi phương thức Multiply từ đối tượng operations
- [ ] Không thể gọi phương thức Divide từ lớp MathOperations
- [ ] Phương thức Multiply không trả về giá trị đúng
- [ ] Không có lỗi

> Giải thích: Theo đáp án trong PDF, lỗi được chọn là gọi `Multiply` từ object `operations`.

## Câu 9
Chủ đề: Static constructor
Static constructor được gọi bao nhiêu lần trong đoạn code sau?

```csharp
public class Logger
{
    public static string LogFilePath;

    static Logger()
    {
        LogFilePath = "log.txt";
        Console.WriteLine("Static constructor called.");
    }

    public Logger()
    {
        Console.WriteLine("Instance constructor called.");
    }
}

class Program
{
    static void Main(string[] args)
    {
        Logger logger1 = new Logger();
        Logger logger2 = new Logger();
    }
}
```

- [ ] 3 lần
- [ ] 0 lần
- [x] 1 lần
- [ ] 2 lần

> Giải thích: Static constructor chỉ chạy một lần cho mỗi class trong một AppDomain.

## Câu 10
Chủ đề: Static và instance methods
Tìm lỗi sai trong đoạn code sau?

```csharp
public class Converter
{
    public static double ToDouble(string value)
    {
        return double.Parse(value);
    }

    public string ToString(double value)
    {
        return value.ToString();
    }
}

class Program
{
    static void Main(string[] args)
    {
        Converter converter = new Conveter();
        double result = Converter.ToDouble("123.45");
        string strResult = converter.ToString(result);
        Console.WriteLine(strResult);
    }
}
```

- [x] Không có lỗi
- [ ] Phương thức ToDouble không trả về giá trị đúng
- [ ] Không thể gọi phương thức ToDouble từ lớp Converter
- [ ] Không thể gọi phương thức ToString từ đối tượng converter

> Giải thích: Mình giữ nguyên theo đáp án hiển thị trong PDF.

## Câu 11
Chủ đề: Static field
Đoạn code sau sẽ in ra kết quả gì?

```csharp
public class Employee
{
    public static int EmployeeCount;
    public string Name;

    public Employee(string name)
    {
        Name = name;
        EmployeeCount++;
    }
}

class Program
{
    static void Main(string[] args)
    {
        Employee emp1 = new Employee("Alice");
        Employee emp2 = new Employee("Bob");
        Console.WriteLine(Employee.EmployeeCount);
    }
}
```

- [ ] 1
- [ ] 0
- [x] 2
- [ ] 3

> Giải thích: Mỗi lần tạo `Employee`, biến static `EmployeeCount` tăng lên 1.

## Câu 12
Chủ đề: Properties
Điều nào sau đây là đúng về việc sử dụng properties để kiểm soát truy cập tới các trường trong class?

- [ ] Properties không thể kiểm soát truy cập tới bất kỳ trường nào.
- [ ] Properties không thể kiểm soát truy cập tới các trường private.
- [x] Properties có thể kiểm soát truy cập tới các trường private.
- [ ] Properties chỉ có thể kiểm soát truy cập tới các trường public.

> Giải thích: Property thường được dùng để đóng gói và kiểm soát field private.

## Câu 13
Chủ đề: Static
Điều nào sau đây là đúng về các thành phần static trong một class?

- [ ] Mỗi object của class sẽ có một bản sao riêng của các thành phần static.
- [ ] Các thành phần static không thể được truy cập từ bên trong class.
- [x] Các thành phần static được chia sẻ giữa tất cả các object của class.
- [ ] Các thành phần static chỉ có thể được truy cập từ bên ngoài class.

> Giải thích: Thành phần static thuộc về class và được dùng chung.

## Câu 14
Chủ đề: Properties
Chọn phát biểu đúng?

- [ ] Properties tự động sẽ chỉ được phép đọc giá trị
- [ ] Properties là phương thức dùng để truy cập các thành phần tĩnh.
- [x] Properties có thể gán giá trị cho biến private.
- [ ] Properties là field được khai báo ở phạm vi truy cập public

> Giải thích: Property có thể làm lớp vỏ để đọc/ghi field private.

## Câu 15
Chủ đề: Properties
Điều nào sau đây là đúng về việc sử dụng properties với các từ khóa truy cập như public, private, protected?

- [ ] Properties không thể sử dụng các từ khóa truy cập.
- [x] Properties có thể sử dụng các từ khóa truy cập để kiểm soát quyền truy cập.
- [ ] Properties chỉ có thể sử dụng từ khóa private.
- [ ] Properties chỉ có thể sử dụng từ khóa public.

> Giải thích: Cả property và accessor đều có thể dùng access modifier phù hợp.

## Câu 16
Chủ đề: Static field
Điều gì xảy ra nếu bạn khai báo một static field trong một class và không khởi tạo nó?

- [ ] Static field sẽ có giá trị mặc định là null.
- [x] Static field sẽ có giá trị mặc định tùy thuộc vào kiểu dữ liệu của nó.
- [ ] Static field sẽ có giá trị mặc định là 0.
- [ ] Static field sẽ không có giá trị và sẽ gây ra lỗi compile-time.

> Giải thích: Biến static nhận default value theo kiểu dữ liệu, giống field thường.

## Câu 17
Chủ đề: Properties
Điều nào sau đây là đúng về việc sử dụng properties để kiểm tra và xác thực giá trị trước khi gán cho các trường?

- [ ] Properties không thể kiểm tra và xác thực giá trị.
- [ ] Properties chỉ có thể kiểm tra giá trị trước khi ghi.
- [ ] Properties chỉ có thể kiểm tra giá trị trước khi đọc.
- [x] Properties có thể kiểm tra và xác thực giá trị trước khi gán cho các trường.

> Giải thích: Setter có thể chứa logic validation.

## Câu 18
Chủ đề: Properties
Điều gì xảy ra nếu bạn khai báo một property với cả phương thức get và set nhưng không khai báo bất kỳ logic nào trong các phương thức này?

- [ ] Property sẽ chỉ có thể đọc giá trị.
- [ ] Property sẽ không thể được truy cập từ bên ngoài class.
- [ ] Property sẽ không thể đọc hoặc ghi giá trị.
- [x] Property sẽ có thể đọc và ghi giá trị mà không có bất kỳ kiểm tra nào.

> Giải thích: Khi không có logic bổ sung, property hoạt động như truy cập đọc/ghi thông thường.

## Câu 19
Chủ đề: Static property
Lỗi sai trong đoạn code trên sau gì?

```csharp
public class Configuration
{
    public static string AppName { get; set; }

    static Configuration()
    {
        AppName = "MyApp";
    }
}

class Program
{
    static void Main(string[] args)
    {
        Configuration config = new Configuration();
        Console.WriteLine(config.AppName);
    }
}
```

- [x] Không thể truy cập vào thuộc tính AppName từ đối tượng config
- [ ] Static constructor không được gọi đúng
- [ ] Giá trị của AppName không được gán đúng
- [ ] Không có lỗi

> Giải thích: Theo đáp án trong PDF, lỗi là truy cập static property thông qua object.

## Câu 20
Chủ đề: Static và non-static
Điều gì xảy ra nếu cố gắng truy cập một trường non-static từ một phương thức static?

- [ ] Trường non-static không thể được truy cập và sẽ gây ra lỗi compile-time.
- [x] Trường non-static sẽ được truy cập nhưng sẽ gây ra lỗi runtime.
- [ ] Trường non-static sẽ được truy cập thành công.
- [ ] Trường non-static sẽ được truy cập nhưng giá trị của nó sẽ là null.

> Giải thích: Mình giữ đúng đáp án được đánh dấu trong PDF.

## Câu 21
Chủ đề: Static methods
Cấp độ truy cập phương thức tĩnh là?

- [ ] Cả lớp và đối tượng
- [ ] Đối tượng
- [x] Lớp
- [ ] Không thể truy cập phương thức tĩnh ở cấp độ lớp và cấp độ đối tượng

> Giải thích: Theo đáp án của đề, phương thức tĩnh được truy cập ở cấp lớp.

## Câu 22
Chủ đề: Static constructor
Khi nào một static constructor được gọi?

- [ ] Khi một phương thức non-static của class được gọi.
- [ ] Khi một phương thức static của class được gọi lần thứ hai.
- [x] Khi một thành phần static của class được truy cập lần đầu tiên.
- [ ] Khi một object của class được tạo.

> Giải thích: Static constructor chạy trước lần sử dụng static member đầu tiên.

## Câu 23
Chủ đề: Static method
Đoạn code trên sẽ in ra kết quả gì?

```csharp
public class Counter
{
    public static int Count;

    public static void Increment()
    {
        Count++;
    }
}

class Program
{
    static void Main(string[] args)
    {
        Counter.Increment();
        Counter.Increment();
        Console.WriteLine(Counter.Count);
    }
}
```

- [ ] 1
- [ ] 0
- [ ] 3
- [x] 2

> Giải thích: `Increment()` được gọi hai lần nên `Count` bằng 2.

## Câu 24
Chủ đề: Static method
Điều gì xảy ra khi khai báo một phương thức static trong một class?

- [ ] Phương thức chỉ có thể truy cập các thành phần non-static trong class.
- [ ] Phương thức có thể truy cập tất cả các thành phần trong class.
- [x] Phương thức chỉ có thể truy cập các thành phần static khác trong class.
- [ ] Phương thức không thể truy cập bất kỳ thành phần nào trong class.

> Giải thích: Theo kiến thức cơ bản, static method không truy cập trực tiếp instance member nếu không có object.

## Câu 25
Chủ đề: Static method
Lỗi sai trong đoạn code sau là gì?

```csharp
public class Calculator
{
    public static int Add(int a, int b)
    {
        return a + b;
    }
}

class Program
{
    static void Main(string[] args)
    {
        Calculator calc = new Calculator();
        int result = calc.Add(5, 3);
        Console.WriteLine(result);
    }
}
```

- [ ] Không thể gọi phương thức Add từ Main
- [ ] Không có lỗi
- [x] Không thể tạo đối tượng Calculator để gọi phương thức Add
- [ ] Phương thức Add không trả về giá trị đúng

> Giải thích: Theo đáp án trong PDF, lỗi được quy về việc tạo object để gọi static method.

## Câu 26
Chủ đề: Static constructor
Static constructor được gọi khi nào trong đoạn code trên?

```csharp
public class Database
{
    public static string ConnectionString;

    static Database()
    {
        ConnectionString = "Server=myServer;Database=myDB;";
    }

    public static void Connect()
    {
        Console.WriteLine("Connecting to " + ConnectionString);
    }
}

class Program
{
    static void Main(string[] args)
    {
        Database.Connect();
    }
}
```

- [ ] Khi chương trình bắt đầu chạy
- [ ] Khi thuộc tính ConnectionString được truy cập
- [x] Khi phương thức Connect được gọi
- [ ] Khi đối tượng Database được tạo

> Giải thích: Theo đáp án trong đề, lần truy cập qua `Database.Connect()` làm static constructor chạy.

## Câu 27
Chủ đề: Properties
Điều gì xảy ra nếu không khai báo phương thức set cho một property?

- [ ] Property sẽ không thể đọc giá trị.
- [ ] Property sẽ không thể được truy cập từ bên ngoài class.
- [x] Property sẽ không thể ghi giá trị.
- [ ] Property sẽ không thể được khởi tạo.

> Giải thích: Không có setter thì property không thể gán giá trị theo cách thông thường.

## Câu 28
Chủ đề: Properties
Lỗi sai trong đoạn code sau là gì?

```csharp
public class Person
{
    private string name;

    public string Name
    {
        get { return name; }
        set { name = value; }
    }
}

class Program
{
    static void Main(string[] args)
    {
        Person person = new Person();
        person.Name = "John";
        Console.WriteLine(person.name);
    }
}
```

- [x] Không thể truy cập trực tiếp vào trường name từ Main
- [ ] Phương thức get không trả về giá trị đúng
- [ ] Không có lỗi
- [ ] Giá trị của name không được gán đúng

> Giải thích: `name` là field private nên không thể truy cập trực tiếp từ `Main`.

## Câu 29
Chủ đề: Static property
Đoạn code trên sẽ in ra kết quả gì?

```csharp
public class Settings
{
    public static string Theme { get; set; }

    public static void ApplyTheme()
    {
        Console.WriteLine("Applying theme: " + Theme);
    }
}

class Program
{
    static void Main(string[] args)
    {
        Settings.Theme = "Dark";
        Settings.ApplyTheme();
    }
}
```

- [ ] Applying theme:
- [ ] Không có kết quả
- [x] Applying theme: Dark
- [ ] Applying theme: Light

> Giải thích: `Theme` được gán là `"Dark"` trước khi gọi `ApplyTheme()`.

## Câu 30
Chủ đề: Properties
Chọn phát biểu đúng nhất về properties.

- [ ] Properties là một phương thức đặc biệt.
- [ ] Properties là một biến đặc biệt.
- [x] Properties được định nghĩa logic giống phương thức nhưng khi truy xuất và gán giá trị giống field.
- [ ] Chúng ta có thể sử dụng Properties thay cho phương thức.

> Giải thích: Property cho cú pháp truy cập giống field nhưng có thể chứa logic như method.
# Trắc nghiệm C# - Class Members

## Câu 1
Chủ đề: Constructor
Constructor trong C# có đặc điểm nào đúng?

- [ ] Constructor có kiểu trả về là `void`.
- [x] Constructor có cùng tên với lớp và không có kiểu trả về.
- [ ] Constructor chỉ được khai báo là `static`.
- [ ] Constructor chỉ có tối đa một tham số.

> Giải thích: Constructor dùng để khởi tạo đối tượng và không khai báo kiểu trả về.

## Câu 2
Chủ đề: Constructor
Trong constructor chaining, cú pháp `: this(...)` dùng để làm gì?

- [ ] Gọi một phương thức `static`.
- [x] Gọi một constructor khác trong cùng lớp.
- [ ] Khởi tạo tất cả field về `null`.
- [ ] Ép kiểu đối tượng hiện tại.

> Giải thích: `this(...)` cho phép chuyển tiếp sang một constructor khác để tránh lặp code.

## Câu 3
Chủ đề: Properties
Property nào dưới đây là auto-property hợp lệ?

```csharp
public string Name { get; set; }
```

- [x] Đây là auto-property hợp lệ.
- [ ] Đây là field public.
- [ ] Đây là static constructor.
- [ ] Đây là method overloading.

> Giải thích: Auto-property chuẩn có dạng `{ get; set; }`.

## Câu 4
Chủ đề: Properties
Trong `set`, từ khóa `value` đại diện cho gì?

- [ ] Tên của property.
- [ ] Giá trị cũ của field private.
- [x] Giá trị mới đang được gán vào property.
- [ ] Một biến hệ thống tự sinh để đếm số lần gán.

> Giải thích: `value` là biến ngầm định chứa dữ liệu mới được truyền vào setter.

## Câu 5
Chủ đề: Static
Nếu một biến được khai báo là `static`, kết luận nào đúng?

- [ ] Mỗi object có một bản sao riêng của biến đó.
- [x] Tất cả object dùng chung một biến của lớp.
- [ ] Biến đó chỉ dùng được trong constructor.
- [ ] Biến đó không thể thay đổi sau khi gán.

> Giải thích: Thành phần static thuộc về lớp, không thuộc riêng từng object.

## Câu 6
Chủ đề: Static
Static constructor thường dùng để làm gì?

- [x] Khởi tạo dữ liệu static của lớp.
- [ ] Trả về object đầu tiên của lớp.
- [ ] Khởi tạo tham số cho mọi method instance.
- [ ] Thay thế hoàn toàn constructor thường.

> Giải thích: Static constructor chủ yếu dùng cho phần khởi tạo dùng chung của lớp.

## Câu 7
Chủ đề: Phương thức
Method overloading xảy ra khi nào?

- [ ] Khi các method cùng tên và cùng tham số.
- [ ] Khi các method khác tên nhưng cùng kiểu trả về.
- [x] Khi các method cùng tên nhưng khác danh sách tham số.
- [ ] Khi một method được gọi nhiều lần.

> Giải thích: Overloading dựa trên sự khác nhau về danh sách tham số.

## Câu 8
Chủ đề: Phương thức
Phát biểu nào đúng về method có kiểu trả về `void`?

- [ ] Method `void` bắt buộc phải là `static`.
- [ ] Method `void` không được nhận tham số.
- [x] Method `void` không trả về giá trị cho nơi gọi.
- [ ] Method `void` chỉ dùng trong class trừu tượng.

> Giải thích: `void` nghĩa là phương thức không trả về dữ liệu.
